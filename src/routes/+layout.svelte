<script lang="ts">
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { _, getLocaleFromNavigator, isLoading, register, init, locale } from "svelte-i18n";
  import type { PageData } from "./$types";
  import { onMount } from "svelte";

  register("it", () => import("../languages/it.json"));
  register("de", () => import("../languages/de.json"));
  init({
    fallbackLocale: "de",
    initialLocale: getLocaleFromNavigator(),
  });
 
  onMount(() => {
   const isDisclaimerAccepted = localStorage.getItem("disclaimerAcknowledged");
    if (isDisclaimerAccepted&&isDisclaimerAccepted==="true"){
      localStorage.setItem("disclaimerAcknowledged", "false");}
  });

  $: currentLocale = $locale;
  


  let userIsLoggedIn = false;
  let password = "";
  $: countdown = 0;
  $: lock = false;
  $: attempts = 0;

  export let data: PageData;

  async function checkPassword() {
    attempts++;
    if (countdown > 0) {
      return;
    } else {
      lock = false;
    }

    const check = await sha256(password.toUpperCase());
    const pwHashed = await sha256(data.login_pw);

    if (check === pwHashed) {
      userIsLoggedIn = true;
      // Reset the countdown when the user logs in
      countdown = 0;
      attempts = 0;
    } else {
      alert($_("login.wrongPwMessage"));
      lock = true;
      password = "";
      // Start the countdown (e.g., 30 seconds)
      countdown = calculateDelayTime();
      const countdownInterval = setInterval(() => {
        if (countdown > 0) {
          countdown--;
        } else {
          clearInterval(countdownInterval);
          lock = false;
        }
      }, 1000);
    }
  }
  function calculateDelayTime() {
    const baseDelay = 1000;
    let effectiveDelay = baseDelay * (attempts + 1); // in milliseconds
    return (effectiveDelay * Math.pow(2, attempts - 1)) / 1000;
  }

  async function sha256(message: string) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
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
  <div class="relative my-[6%] max-md:my-[20%] ">
    <img src="olive.png" class="fixed left-1/2 transform -translate-x-1/2 opacity-50" alt="" />
    <div class="flex justify-center items-center h-full ml-2 mr-2">
      <main class="relative max-w-[98%] md:max-w-[90%] lg:max-w-[85%] xl:max-w-[75%] 2xl:max-w-[60%]">
        <slot />
      </main>
    </div>
  </div>
  <Footer />
{:else}


  <div class="flex justify-center min-w-screen min-h-screen bg-neutral">
    <div class="card bg-base-100 shadow-xl place-self-center w-96 m-4 prose prose-xl">
      <div class="w-full flex justify-end mt-2">
        {#if currentLocale === "it-IT" || currentLocale === "it"}
          <button id="btnDe" class="btn btn-xs btn-accent w-16 shadow-xs mr-2" on:click={handleLangSwitchDe}>de</button>
          <button id="btnIt" class="btn btn-xs btn-disabled w-16 shadow-xs mr-2" on:click={handleLangSwitchIt}>it</button>
        {:else}
          <button id="btnDe" class="btn btn-xs btn-disabled w-16 shadow-xs mr-2" on:click={handleLangSwitchDe}>de</button>
          <button id="btnIt" class="btn btn-xs btn-accent w-16 shadow-xs mr-2" on:click={handleLangSwitchIt}>it</button>
        {/if}
      </div>
      <div class="card-body prose">
        <h2 class="card-title">{$_("login.title")}</h2>
        <p>{$_("login.subtitle")}</p>
        {#if lock}
          <p>{$_("login.wrongPwTimeout").split('|')[0]} {countdown} {$_("login.wrongPwTimeout").split('|')[1]}</p>
        {/if}
        <div class="card-actions justify-center">
          <input id="loginPw" class="input input-bordered w-full" type="password" bind:value={password} style="text-transform:uppercase" disabled={lock} />
          <button class="btn btn-primary" on:click={checkPassword} disabled={lock}>Login</button>
        </div>
      </div>
    </div>
  </div>
{/if}

