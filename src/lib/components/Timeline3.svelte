<script lang="ts">
  import type { Event } from "$lib/models/event";
  import type { Day } from "$lib/models/day";
  import type { Dresscode } from "$lib/models/dresscode";
  import Dresscode2 from "./Dresscode2.svelte";
  import { _ } from "svelte-i18n";
  export let events: Array<Event> = [];
</script>

<ul class="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
  {#each events as event}
    <li>
      {#if event.id != 1}
        <hr />
      {/if}
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="inherit" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      <div class="timeline-{event.id % 2 === 0 ? 'end' : 'start'} md:text-{event.id % 2 === 0 ? 'start' : 'end'} mb-5 prose ">
        <time class="text-xl md:text-2xl">{event.time}</time>
        <div class="text-xl md:text-2xl font-semibold text-base-300">{event.theme}</div>
        {#if event.location}
          <p><span class="text-accent text-lg md:text-xl">{$_("pages.program.where")}: </span> <span class="text-lg">{event.location}</span></p>
        {/if}
        {#if event.dresscode} 
        <div class="timeline-box ">

          <Dresscode2 dresscode={event.dresscode} />
        </div>
      {/if}
      {#if event.extras}
      <p><span class="text-accent text-lg md:text-xl">{$_("pages.program.important")}: </span> <span class="text-lg">{event.extras}</span></p>
      {/if}
      </div>
    
      <hr />
    </li>
  {/each}
</ul>
