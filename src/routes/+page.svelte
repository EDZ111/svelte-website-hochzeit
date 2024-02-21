<script>
  import Disclaimer from "$lib/components/Disclaimer.svelte";
import { Button } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  
</script>
<Disclaimer/>
<div class=" flex flex-col md:justify-around items-center gap-y-2 min-h-2-3-screen">
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="md:text-9xl text-6xl text-base-300">Elena</h1>
      <div class="md:text-9xl text-6xl sacramento italic lowercase text-base-300">
        {$_("pages.home.titleAnd")}
      </div>

      <h1 class="md:text-9xl text-6xl col-span-2 text-center text-base-300">Edoardo</h1>
    </div>
  </div>

  <div class="flex flex-col">
    <div class="text-lg md:text-2xl text-center">
      {$_("pages.home.subtitle")}
    </div>
    <div class="divider w-20 self-center " />
    <div class="uppercase text-base-300 text-md md:text-2xl  text-center">
      {$_("pages.home.dateAndLocation")}
    </div>
    <a href="/rsvp" class=" btn btn-accent text-neutral max-w-lg shadow-md mt-20 self-center w-60 font-light md:text-xl"> {$_("pages.home.registerButton")}</a>
  </div>
</div>

<style>
  .min-h-2-3-screen {
    min-height: 87.67vh;
  }
</style>
