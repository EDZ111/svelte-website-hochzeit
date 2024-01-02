<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";

  import { _, locale } from "svelte-i18n";

  import { page } from "$app/stores";
  import { getLocaleFromNavigator } from "svelte-i18n";
  import { onMount } from "svelte";

  $: activeUrl = $page.url.pathname;
  
  $: currentLocale = $locale;
  $: localeFromNavigator = getLocaleFromNavigator();
  
  onMount(() => {
    if (currentLocale === "it") locale.set("it-IT");
    else if (currentLocale === "de") locale.set("de-DE");
  });

  const handleLocaleChange = (e) => {
    e.preventDefault();
    locale.set(e.target.value);
  };
  let navs=[
    {url:"/",content:$_("navigation.home")},
    {url:"/location",content:$_("navigation.location")},
    {url:"/program",content:$_("navigation.program")},
    {url:"/acomodation",content:$_("navigation.acomodation")},
    {url:"/q&a",content:$_("navigation.questionAndAnswer")},
    {url:"/rsvp",content:$_("navigation.registration")}
    
  ]
</script>

<div class="navbar glass fixed top-0 shadow-md z-20 bg-primary text-base-300">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-300">
        {#each navs as nav}
        {#if nav.url===activeUrl}
        <li ><a href={nav.url} class="active">{nav.content}</a></li>
        {:else}
        <li><a href={nav.url}>{nav.content}</a></li>
        {/if}
          {/each}
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-xl"> <h5>E&E</h5> </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each navs as nav}
      {#if nav.url===activeUrl}
      <li class=" bg-accent text-base-200 rounded-lg"><a href={nav.url} >{nav.content}</a></li>
      {:else}
      <li><a href={nav.url}>{nav.content}</a></li>
      {/if}
        {/each}
    </ul>
  </div>
  <div class="navbar-end">
    <select name="" id="langSelector" class="select select-bordered form-control text-accent uppercase font-bold" bind:value={currentLocale} on:change={handleLocaleChange} >
      <option selected value="it-IT">it</option>
      <option value="de-DE">de</option>
    </select>
  </div>
</div>
