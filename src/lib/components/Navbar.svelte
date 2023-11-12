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

<Navbar  rounded={true} shadow={true} color="navbar"  class="mb-8 sticky top-0 z-50" tag="nav">
  <NavBrand href="/">
    <img src="olive-branch.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold "
      >E&E</span
    >
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl}>
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/anmeldung">Anmeldung</NavLi>
    <NavLi href="/programm">Programm</NavLi>
    <NavLi href="/location">Location</NavLi>
    <NavLi href="/fragen">Fragen</NavLi>
  </NavUl>
</Navbar>
