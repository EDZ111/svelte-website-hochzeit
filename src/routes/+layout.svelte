<script lang="ts">
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { _, getLocaleFromNavigator, isLoading, register, init, locale, time } from "svelte-i18n";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import Sha256Hasher from "$lib/services/Sha256Hasher";
  import AuthenticationService from "$lib/services/AuthenticationService";
  import LoginForm from "$lib/components/LoginForm.svelte";

  register("it", () => import("../languages/it.json"));
  register("de", () => import("../languages/de.json"));
  init({
    fallbackLocale: "de",
    initialLocale: getLocaleFromNavigator(),
  });

  let userIsLoggedIn: boolean = false;
  $: userProvidedPassword = "";

  $: currentLocale = $locale;
  $: backoffDelay = 0;
  $: elementIsDisabled = false;

  onMount(() => {
    localStorage.setItem("userLoggedIn", "false");

    const lastLogIn: string | null = localStorage.getItem("logInTime");
    if (lastLogIn) {
      const now: number = Date.now();
      const logInDate: number = new Date(lastLogIn).getTime(); // Use getTime() to get the full timestamp
      const timeDiff: number = now - logInDate;
      const oneDayInMillisec: number = 24 * 60 * 60 * 1000;
      if (timeDiff < oneDayInMillisec) {
        userIsLoggedIn = false;
        localStorage.setItem("userLoggedIn", "false");
      } else {
        userIsLoggedIn = true;
        localStorage.setItem("userLoggedIn", "true");
      }
    }

    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn && userLoggedIn === "true") {
      userIsLoggedIn = true;
    } else {
      const isDisclaimerAccepted = localStorage.getItem("disclaimerAcknowledged");
      if (isDisclaimerAccepted && isDisclaimerAccepted === "true") {
        localStorage.setItem("disclaimerAcknowledged", "false");
      }
    }
  });

  export let data: PageData;

  let hasher = new Sha256Hasher();
  let authService = new AuthenticationService(hasher, data.login_pw);

  async function checkPassword() {
    authService.authenticationAttempts++;
    let passwordIsValid = await authService.verifyPassword(userProvidedPassword.toUpperCase());
    authService.userIsLoggedIn = passwordIsValid;
    userIsLoggedIn = authService.userIsLoggedIn;

    if (!authService.userIsLoggedIn) {
      alert($_("login.wrongPwMessage"));
      elementIsDisabled = true;
      backoffDelay = await authService.calculateExponentialBackoffDelay();
      userProvidedPassword = "";
      localStorage.setItem("userLoggedIn", "false");

      const interval = setInterval(() => {
        if (backoffDelay > 0) {
          backoffDelay--;
        } else {
          clearInterval(interval);
          elementIsDisabled = false;
        }
      }, 1000);
      return;
    }

    localStorage.setItem("userLoggedIn", "true");
    const now = Date.now();
    localStorage.setItem("logInTime", now.toString());
    // Reset the countdown when the user logs in
    backoffDelay = 0;
    authService.authenticationAttempts = 0;
  }

  function handleLangSwitchIt() {
    locale.set("it-IT");
  }
  function handleLangSwitchDe() {
    locale.set("de-DE");
  }
</script>

{#if $isLoading}
  <div class="flex justify-center">
    <span class="loading loading-ring loading-lg text-accent"></span>
  </div>
{:else if userIsLoggedIn}
  <Navbar />
  <div class="relative my-[6%] max-md:my-[20%]">
    <img src="olive.png" class="fixed left-1/2 transform -translate-x-1/2 opacity-50" alt="" />
    <div class="flex justify-center items-center h-full ml-2 mr-2">
      <main class="relative max-w-[98%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[60%]">
        <slot />
      </main>
    </div>
  </div>
  <Footer />
{:else}
  <LoginForm {handleLangSwitchDe} {handleLangSwitchIt} bind:currentLocale={currentLocale} {checkPassword} bind:elementIsDisabled={elementIsDisabled} bind:userProvidedPassword= {userProvidedPassword} bind:backoffDelay={backoffDelay} />
 
{/if}
