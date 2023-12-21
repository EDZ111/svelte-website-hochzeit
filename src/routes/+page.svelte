<script>
  import { Button } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import Countdown from "$lib/components/Countdown.svelte";
</script>

<div class=" flex flex-col justify-evenly items-center gap-y-10 min-h-screen">
  <div  class="flex items-center justify-center h-ful">
    <div class="grid grid-rows-2  gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="lg:text-9xl text-6xl ">Elena</h1>
      <div class="lg:text-9xl text-6xl sacramento italic lowercase">
        {$_("pages.home.titleAnd")}
      </div>

      <h1 class="lg:text-9xl text-6xl  col-span-2 text-center">Edoardo</h1>
    </div>
  </div>
  <Countdown/>
  <div class="flex flex-col">
    <div class="text-slate-700 text-lg lg:text-2xl mt-5  text-center">
      {$_("pages.home.subtitle")}
    </div>

    <h1 class="uppercase text-slate-500 text-md lg:text-2xl mt-6 text-center">
      {$_("pages.home.dateAndLocation")}
    </h1>
    
</div>
<a href="/rsvp" class=" btn btn-secondary max-w-lg shadow-md"> {$_("pages.home.registerButton")}</a>
</div>

<style>
  .min-h-2-3-screen {
    min-height: 66.67vh;
  }
</style>
