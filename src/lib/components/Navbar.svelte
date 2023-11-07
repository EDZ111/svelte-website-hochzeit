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
    
</script>

<nav>
    <div class="relative px-8">
        <script>
            import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
          </script>
          
          <Navbar rounded color="none" class="mb-8">
            <NavBrand href="/">
              <img src="olive-branch.svg" class="mr-3 h-6 sm:h-9" alt="logo" />
              <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E&E</span>
            </NavBrand>
            <NavHamburger />
            <NavUl>
                <NavLi href="/" active={true}>Home</NavLi>
                <NavLi href="/anmeldung">Anmeldung</NavLi>
                <NavLi href="/">Programm</NavLi>
                <NavLi href="/">Location</NavLi>
                <NavLi href="/">Fragen</NavLi>
                
            </NavUl>
        </Navbar>
    </div>
</nav>