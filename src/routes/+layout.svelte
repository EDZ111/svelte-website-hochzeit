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
    import {Label} from "flowbite-svelte";

    register("it", () => import("../languages/it.json"))
    register("de", () => import("../languages/de.json"))
    init(
        {
            fallbackLocale: "de",
            initialLocale: getLocaleFromNavigator()
        });
    import {env} from "node:process"

    let userIsLoggedIn = false;
    let password = "";

    async function checkPassword() {
        console.log(env.DETA_API_KEY)
        if (password === "banana") {
            userIsLoggedIn = true;

        }
    }
</script>

{#if $isLoading}
    <p>loading...</p>
{:else}
    {#if userIsLoggedIn}
        <Navbar/>
        <div class="relative">
            <img src="olive.png" class="fixed left-1/2 transform -translate-x-1/2 opacity-50" alt=""/>
            <main class="relative ml-2 mr-2  mt-[3rem]  mb-[10rem] max-h-screen">
                <slot/>
            </main>
        </div>
        <Footer/>
    {:else}
        <form on:submit={checkPassword}>
            <Label for="pw">Password</Label>
            <input id="pw" type="password" bind:value="{password}"/>
            <button type="submit">Login</button>
        </form>
    {/if}
{/if}
