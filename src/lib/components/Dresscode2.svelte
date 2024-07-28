<script lang="ts">
  import type { Dresscode } from "$lib/models/dresscode";
  import type { DresscodeItem } from "$lib/models/dresscodeitem";
  import { _ } from "svelte-i18n";
  export let dresscode: Dresscode;
</script>


  <div class="p-2">
    <div class="flex justify-start items-baseline gap-4 mb-4">
      <h5 class="text-sm font-semibold mb-2">Dresscode:</h5>
      <div class="sacramento text-3xl">{dresscode.title}</div>
    </div>
    {#if dresscode.itemsForHer || dresscode.itemsForHim}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        {#if dresscode.itemsForHer}
        <div>
          <h6 class="mb-1 flex items-center">{$_("pages.program.forHer")}</h6>
          <ul class="space-y-1 list-inside">
            {#each dresscode.itemsForHer ?? [] as item}
              <li class="list-none">
                <span class="font-medium text-accent">{item.key}:</span>
                {item.value}
              </li>
            {/each}
          </ul>
        </div>
        {/if}
        {#if dresscode.itemsForHim}
          <div>
            <h6 class=" mb-1 flex items-center">{$_("pages.program.forHim")}</h6>
            <ul class="space-y-1 list-inside">
              {#each dresscode.itemsForHim ?? [] as item}
                <li class="list-none ">
                  <span class="font-medium text-accent">{item.key}:</span>
                  {item.value}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/if}
  </div>

