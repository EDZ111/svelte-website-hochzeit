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
  onMount(() => {});
  $: currentLocale = $locale;
  let userIsLoggedIn = false;
  let password = "";

  export let data: PageData;

  async function checkPassword() {
    const check = await sha256(password);
    const pwHashed = await sha256(data.login_pw);

    if (check === pwHashed) {
      userIsLoggedIn = true;
    } else {
      alert($_("login.wrongPwMessage"));
      password = "";
    }
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
  <div class="relative mt-24">
    <img src="olive.png" class="fixed left-1/2 transform -translate-x-1/2 opacity-50" alt="" />
    <main class="relative ml-2 mr-2 mt-[3rem] mb-[10rem] max-h-screen">
      <slot />
    </main>
  </div>
  <Footer />
{:else}
  <div class="flex justify-center min-w-screen min-h-screen bg-neutral">
    <div class="card bg-base-100 shadow-xl place-self-center w-96 m-4 prose prose-xl">
      <div class="w-full flex justify-end mt-2">
        {#if currentLocale === "it-IT"||currentLocale === "it"}
          <button id="btnDe" class="btn btn-xs btn-accent w-16 shadow-xs mr-2" on:click={handleLangSwitchDe}>de</button>
          <button id="btnIt" class="btn btn-xs btn-disabled w-16 shadow-xs mr-2" on:click={handleLangSwitchIt}>it</button>
        {:else }
          <button id="btnDe" class="btn btn-xs btn-disabled w-16 shadow-xs mr-2" on:click={handleLangSwitchDe}>de</button>
          <button id="btnIt" class="btn btn-xs btn-accent w-16 shadow-xs mr-2" on:click={handleLangSwitchIt}>it</button>
        {/if}
      </div>
      <div class="card-body">
        <h2 class="card-title">{$_("login.title")}</h2>
        <p>{$_("login.subtitle")}</p>
        <div class="card-actions justify-center">
          <input id="loginPw" class="input input-bordered w-full" type="password" bind:value={password} />
          <button class="btn btn-primary " on:click={checkPassword}>Login</button>
        </div>
      </div>
    </div>
  </div>
{/if}
