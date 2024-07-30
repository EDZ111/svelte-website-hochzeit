<script lang="ts">
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { _, getLocaleFromNavigator, isLoading, register, init, locale } from "svelte-i18n";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";
  import Sha256Hasher from "$lib/services/Sha256Hasher";
  import AuthenticationService from "$lib/services/AuthenticationService";
  import LoginForm from "$lib/components/LoginForm.svelte";
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
 
  inject({ mode: dev ? 'development' : 'production' });
  
  register("it", () => import("../languages/it.json"));
  register("de", () => import("../languages/de.json"));
  init({
    fallbackLocale: "de",
    initialLocale: getLocaleFromNavigator(),
  });

  export let data: PageData;

  let userIsLoggedIn: boolean = false;
  let userProvidedPassword = "";
  let backoffDelay = 0;
  let elementIsDisabled = false;

  $: currentLocale = $locale;

  const hasher = new Sha256Hasher();
  const authService = new AuthenticationService(hasher, data.login_pw);

  onMount(() => {
    const lastLogIn = localStorage.getItem("logInTime");
    const now = Date.now();
    const oneDayInMillisec = 24 * 60 * 60 * 1000;

    if (lastLogIn && (now - new Date(lastLogIn).getTime()) < oneDayInMillisec) {
      userIsLoggedIn = true;
      localStorage.setItem("userLoggedIn", "true");
    } else {
      userIsLoggedIn = false;
      localStorage.setItem("userLoggedIn", "false");
      localStorage.setItem("disclaimerAcknowledged", "false");
    }
  });

  async function checkPassword() {
    authService.authenticationAttempts++;
    const passwordIsValid = await authService.verifyPassword(userProvidedPassword.toUpperCase());
    userIsLoggedIn = passwordIsValid;

    if (!userIsLoggedIn) {
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
    localStorage.setItem("logInTime", Date.now().toString());
    backoffDelay = 0;
    authService.authenticationAttempts = 0;
  }

  function handleLangSwitch(lang: string) {
    locale.set(lang === 'it' ? "it-IT" : "de-DE");
  }
</script>

{#if $isLoading}
  <div class="flex justify-center">
    <span class="loading loading-ring loading-lg text-accent"></span>
  </div>
{:else if userIsLoggedIn}
  <Navbar />
  <div class="relative my-[6%] max-md:my-[20%]">
    <img src="olive.png" class="fixed left-1/2 transform -translate-x-1/2 opacity-50" alt="Olive background" />
    <div class="flex justify-center items-center h-full mx-2">
      <main class="relative w-full max-w-[98%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[60%]">
        <slot />
      </main>
    </div>
  </div>
  <Footer />
{:else}
  <LoginForm 
    handleLangSwitchDe={() => handleLangSwitch('de')} 
    handleLangSwitchIt={() => handleLangSwitch('it')} 
    {currentLocale}
    {checkPassword}
    {elementIsDisabled}
    bind:userProvidedPassword
    {backoffDelay}
  />
{/if}