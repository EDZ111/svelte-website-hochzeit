<script>
  import Timeline from "$lib/components/Timeline.svelte";
  import { _ } from "svelte-i18n";
</script>

<div class="flex flex-col justify-around items-center min-h-2-3-screen">
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="md:text-9xl sm:text-8xl text-6xl text-base-300">{$_("pages.program.title").split('|')[0]}</h1>
      <div class="md:text-9xl sm:text-8xl text-6xl sacramento italic lowercase text-base-300">{$_("pages.program.title").split('|')[1]}</div>

      <h1 class="md:text-9xl sm:text-8xl text-6xl col-span-2 text-center text-base-300">{$_("pages.program.title").split('|')[2]}</h1>
    </div>
  </div>
  <Timeline />
</div>
<style>
  .min-h-2-3-screen {
    min-height: 87.67vh;
  }
</style>