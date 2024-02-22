<script lang="ts">
  import { _ ,locale} from "svelte-i18n";
  import Anmeldeformular from "$lib/components/Anmeldeformular.svelte";
  import RegistrationForm from "$lib/components/RegistrationForm.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: currentLocale = $locale;
  
</script>

<div class="flex flex-col ">
  {#if currentLocale?.includes("de")}
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="text-5xl md:text-9xl sm:text-8xl text-base-300 text-center col-span-2">{$_("pages.registration.title").split('|')[0]}</h1>
     <!--  <div class="md:text-9xl sm:text-8xl text-4xl sacramento italic lowercase text-base-300 ">{$_("pages.registration.title").split('|')[1]}</div> -->
      <h1 class="md:text-9xl sm:text-8xl text-5xl col-span-2 text-center text-base-300">{$_("pages.registration.title").split('|')[2]}</h1>
    </div>
    
  </div>
  {:else}
  <h1 class="text-5xl md:text-9xl sm:text-8xl text-base-300 text-center">{$_("pages.registration.title")}</h1>
  {/if}  
  
  
  <RegistrationForm {data}/>
</div>
