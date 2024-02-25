
<script lang="ts">
    import {_}from 'svelte-i18n'
    export let currentLocale:String|null|undefined;
    export let handleLangSwitchDe:()=>void;
    export let handleLangSwitchIt:()=>void;
    export let checkPassword:()=>void;
    export let elementIsDisabled:boolean;
    export let backoffDelay:number;
    export let userProvidedPassword:string;
    //$:console.log(userProvidedPassword)
</script>



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
        {#if elementIsDisabled}
          <p>{$_("login.wrongPwTimeout").split("|")[0]} {backoffDelay} {$_("login.wrongPwTimeout").split("|")[1]}</p>
        {/if}
        <div class="card-actions justify-center">
          <input id="loginPw" class="input input-bordered w-full" type="password" bind:value={userProvidedPassword} style="text-transform:uppercase" disabled={elementIsDisabled} />
          <button class="btn btn-primary" on:click={checkPassword} disabled={elementIsDisabled}>Login</button>
        </div>
      </div>
    </div>
  </div>