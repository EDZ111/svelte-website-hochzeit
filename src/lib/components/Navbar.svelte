<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    ImagePlaceholder,
    Skeleton,
    TextPlaceholder,
  } from "flowbite-svelte";
  import { page } from "$app/stores";
  $: activeUrl = $page.url.pathname;
</script>

<Navbar  rounded={true} shadow={true} color="default"  class="mb-8 sticky top-0 z-50" tag="nav">
  <NavBrand href="/">
    <img src="olive-branch.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold font-titel "
      >E&E</span
    >
  </NavBrand>
  <NavHamburger  />
  <NavUl {activeUrl}>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/" active={true}>Home</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/anmeldung">Anmeldung</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/programm">Programm</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/location">Location</NavLi>
    <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic" nonActiveClass="font-text-normal  text-lg" href="/fragen">Fragen</NavLi>
  </NavUl>
</Navbar>
