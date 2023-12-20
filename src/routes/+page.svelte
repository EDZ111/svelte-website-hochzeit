<script>
  import { Button } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import Countdown from "$lib/components/Countdown.svelte";
</script>

<div class="max-h-screen min-h-2-3-screen flex flex-col items-center justify-between mt-10 mx-2 gap-y-10">
  <div  class="flex items-center justify-center h-ful">
    <div class="grid grid-rows-2  gap-y-5 grid-flow-row auto-cols-max">
      <div class="lg:text-9xl text-6xl uppercase font-titel font-bold ">Elena</div>
      <div class="lg:text-9xl text-6xl font-datum italic ">
        {$_("pages.home.titleAnd")}
      </div>

      <div class="lg:text-9xl text-6xl uppercase font-titel font-bold col-span-2 text-center">Edoardo</div>
    </div>
  </div>
  <Countdown/>
  <div class="flex flex-col">
    <div class="text-slate-700 text-lg lg:text-2xl mt-5 font-text-normal text-center">
      {$_("pages.home.subtitle")}
    </div>

    <div class="uppercase text-slate-500 text-md lg:text-2xl mt-6 font-titel text-center">
      {$_("pages.home.dateAndLocation")}
    </div>
    
</div>
<a href="/rsvp" class=" btn btn-outline btn-primary"> {$_("pages.home.registerButton")}</a>
</div>

<style>
  .min-h-2-3-screen {
    min-height: 66.67vh;
  }
</style>
