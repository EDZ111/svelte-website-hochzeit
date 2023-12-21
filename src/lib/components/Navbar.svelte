<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";

  import { _, locale } from "svelte-i18n";

  import { page } from "$app/stores";
  import { getLocaleFromNavigator } from "svelte-i18n";
  import { onMount } from "svelte";

  $: activeUrl = $page.url.pathname;
  $: currentLocale = $locale;
  $: console.log("current", currentLocale);
  $: localeFromNavigator = getLocaleFromNavigator();
  $: console.log("navigator", localeFromNavigator);
  onMount(() => {
    if (currentLocale === "it") locale.set("it-IT");
    else if (currentLocale === "de") locale.set("de-DE");
  });

  const handleLocaleChange = (e) => {
    e.preventDefault();
    locale.set(e.target.value);
  };
</script>

<div class="navbar glass fixed top-0 shadow-md z-20">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">{$_("navigation.home")}</a></li>
        <li><a href="/location">{$_("navigation.location")}</a></li>
        <li><a href="/program">{$_("navigation.program")}</a></li>
        <li><a href="/acomodation">{$_("navigation.acomodation")}</a></li>
        <li><a href="/q&a">{$_("navigation.questionAndAnswer")}</a></li>
        <li><a href="/rsvp">{$_("navigation.registration")}</a></li>
      </ul>
    </div>
    <a href="/" class="btn btn-ghost text-xl"> <h4>E&E</h4> </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a href="/">{$_("navigation.home")}</a></li>
      <li><a href="/location">{$_("navigation.location")}</a></li>
      <li><a href="/program">{$_("navigation.program")}</a></li>
      <li><a href="/acomodation">{$_("navigation.acomodation")}</a></li>
      <li><a href="/q&a">{$_("navigation.questionAndAnswer")}</a></li>
      <li><a href="/rsvp">{$_("navigation.registration")}</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <select name="" id="langSelector" class="select select-bordered" bind:value={currentLocale} on:change={handleLocaleChange}>
      <option selected value="it-IT">it</option>
      <option value="de-DE">de</option>
    </select>
  </div>
</div>
