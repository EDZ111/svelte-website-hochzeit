<script lang="ts">
    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger,

    } from "flowbite-svelte";

    import {
        _,
        locale
    } from "svelte-i18n";

    import {page} from "$app/stores";

    $: activeUrl = $page.url.pathname;
    import {getLocaleFromNavigator} from "svelte-i18n";
    import {onMount} from "svelte";

    let selectedLang: string;
    const handleLocaleChange = e => {
        e.preventDefault();
        locale.set(e.target.value);

    };
    onMount(
        () => {

            selectedLang = getLocaleFromNavigator()!;
            let langSelect: HTMLElement = document.getElementById("langSelector");
            console.log(langSelect.value);
            if (langSelect!.value != "de" && langSelect!.value != "it") {
                if (selectedLang.value == "de" || selectedLang == "it") {
                    langSelect.value = selectedLang;
                } else {
                    langSelect.value = "it";
                }
            }
        }
    );

</script>

<Navbar rounded={true} shadow={true} color="default" class="mb-8 sticky top-0 z-50" tag="nav">

    <NavBrand href="/">
        <img src="olive-branch.svg" class="mr-3 h-6 sm:h-9" alt="logo"/>
        <span
            class="self-center whitespace-nowrap text-xl font-semibold font-titel "
        >E&E</span
        >
    </NavBrand>
    <select id="langSelector"
            class="rounded-lg border-primary-300 shadow-md border-0 hover:border-2 hover:border-primary-600  hover:cursor-pointer"
            on:change={handleLocaleChange} bind:value={selectedLang}>

        <option value="it">it</option>
        <option value="de">de</option>
    </select>
    <NavHamburger/>
    <NavUl {activeUrl}>
        <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic"
               nonActiveClass="font-text-normal  text-lg" href="/" active={true}>{$_('nav.home')}
        </NavLi>
        <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic"
               nonActiveClass="font-text-normal  text-lg" href="/anmeldung">{$_('nav.register')}
        </NavLi>
        <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic"
               nonActiveClass="font-text-normal  text-lg" href="/programm">{$_('nav.program')}
        </NavLi>
        <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic"
               nonActiveClass="font-text-normal  text-lg" href="/location">{$_('nav.location')}
        </NavLi>
        <NavLi activeClass="font-text-normal text-primary-500 font-extrabold text-lg italic"
               nonActiveClass="font-text-normal  text-lg" href="/fragen">{$_('nav.q&a')}
        </NavLi>
    </NavUl>


</Navbar>
