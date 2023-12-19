<script lang="ts">
    import "../app.postcss";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import {_, getLocaleFromNavigator, isLoading, register, init, locale} from "svelte-i18n";
    import type {PageData} from './$types';
    import {Section, Register} from "flowbite-svelte-blocks";
    import {Label, Input, Radio, Button, Textarea} from "flowbite-svelte";

    register("it", () => import("../languages/it.json"))
    register("de", () => import("../languages/de.json"))
    init(
        {
            fallbackLocale: "de",
            initialLocale: getLocaleFromNavigator()
        });


    let userIsLoggedIn = false;
    let password = "";
    export let data: PageData;

    async function checkPassword() {
        const check = await sha256(password);
        const pwHashed = await sha256(data.login_pw);
        console.log(check)
        if (check === pwHashed) {
            userIsLoggedIn = true;

        }
    }

    async function sha256(message: string) {
        // encode as UTF-8
        const msgBuffer = new TextEncoder().encode(message);

        // hash the message
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

        // convert ArrayBuffer to Array
        const hashArray = Array.from(new Uint8Array(hashBuffer));

        // convert bytes to hex string
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
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
        <div class="flex items-center justify-center min-h-screen bg-primary-900">
            <Section name="reset">
                <Register>
                    <form class="flex flex-col space-y-6 p-10" on:submit={checkPassword}>
                        <Label class="space-y-2">
                            <span class="font-untertitel capitalize text-lg">Password</span>
                            <Input type="password" name="password" bind:value="{password}" placeholder="•••••" required/>
                        </Label>
                           <Button type="submit" class="w-full1">Log In</Button>

                    </form>
                </Register>

            </Section>
        </div>
    {/if}
{/if}
