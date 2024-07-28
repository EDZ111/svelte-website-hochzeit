<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    export let events: Array<{id: number, time: string, theme: string, location?: string}>;
  </script>
  
  <div class="space-y-4">
    {#each events as event (event.id)}
      <div 
        class="flex items-start p-4 bg-base-200 rounded-md shadow"
        in:fly="{{ x: 50, duration: 300, delay: event.id * 100 }}"
        out:fade
      >
        <div class="flex-shrink-0 w-24 text-right mr-4">
          <span class="text-sm font-semibold text-primary">{event.time}</span>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-1">{event.theme}</h4>
          {#if event.location}
            <p class="text-sm text-base-content-secondary">{event.location}</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>