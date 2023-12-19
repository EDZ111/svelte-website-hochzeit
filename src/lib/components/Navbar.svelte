<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "flowbite-svelte";

  import { _, locale } from "svelte-i18n";

  import { page } from "$app/stores";

  $: activeUrl = $page.url.pathname;

  import { getLocaleFromNavigator } from "svelte-i18n";

  let selectedLang = getLocaleFromNavigator();
  if (selectedLang !== "de" && selectedLang !== "it") {
    selectedLang = "it"; // default language
  };

  console.log(selectedLang);

  const handleLocaleChange = (e) => {
    e.preventDefault();
    locale.set(e.target.value);
  };
</script>

<Navbar rounded={true} shadow={true} color="default" class="mb-8 sticky top-0 z-50" tag="nav">
  <NavBrand href="/">
    <img src="olive-branch.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold font-titel">E&E</span>
  </NavBrand>
  <select id="langSelector" class="rounded-lg border-primary-300 shadow-md border-0 hover:border-2 hover:border-primary-600 hover:cursor-pointer" on:change={handleLocaleChange} bind:value={selectedLang}>
    <option value="it">it</option>
    <option value="de">de</option>
  </select>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/" active={true}>{$_("navigation.home")}</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/location">{$_("navigation.location")}</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/program">{$_("navigation.program")}</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/acomodation">{$_("navigation.acomodation")}</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/q&a">{$_("navigation.questionAndAnswer")}</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/registration">{$_("navigation.registration")}</NavLi>
  </NavUl>
</Navbar>
