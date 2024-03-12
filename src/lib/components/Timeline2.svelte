<script lang="ts">
import type { Event } from "$lib/models/event";

  export let events: Array<Event> = [];
</script>

<ul class="timeline  timeline-snap-icon timeline-vertical max-md:timeline-compact">
  {#each events as event}
    <li>
      {#if event.id != 1}
        <hr />
      {/if}
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="inherit" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      {#if event.id%2!=0}
        <div class="timeline-start  md:text-end  mb-5 prose prose-lg">
          <time class="text-2xl ">{event.time}</time>
          <div class="text-2xl font-semibold text-base-300">{event.theme}</div>
          {#if event.location}
          <p><span class="text-accent text-xl">Wo/Dove:</span> <span>{event.location}</span></p>
          {/if}
        <!--   <p><span class="text-accent text-xl">{event.dresscode?"Dresscode:":""}</span> <span>{event.dresscode}</span></p> -->
        </div>
        {:else}
        <div class="timeline-end  md:text-start  mb-5 prose prose-lg">
            <time class="text-2xl ">{event.time}</time>
            <div class="text-2xl font-semibold text-base-300">{event.theme}</div>
            {#if event.location}
            <p><span class="text-accent text-xl">Wo/Dove:</span> <span>{event.location}</span></p>
            {/if}
           <!--  <p><span class="text-accent text-xl">{event.dresscode?"Dresscode:":""}</span> <span>{event.dresscode}</span></p> -->
          </div>
    {/if}
     

      <hr />
    </li>
  {/each}
</ul>
