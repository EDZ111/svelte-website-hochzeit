<script>
    import "../app.postcss";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    import {
        _,
        getLocaleFromNavigator,
        isLoading,
        register,
        init,
        locale
    } from "svelte-i18n";
    register("it", () => import("../languages/it.json"))
    register("de", () => import("../languages/de.json"))
    init(
      {
        fallbackLocale: "de",
        initialLocale: getLocaleFromNavigator()
      });
</script>

{#if $isLoading}
    <p>loading...</p>
{:else}
    <Navbar/>
    <div class="relative">
        <img src="olive.png" class="bg-center fixed opacity-50" alt=""/>
        <main class="relative ml-2 mr-2  mt-[3rem]  mb-[10rem] max-h-screen">


            <slot/>

        </main>

    </div>
    <Footer/>
{/if}
