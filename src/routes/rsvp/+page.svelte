<script lang="ts">
  import { _ } from "svelte-i18n";
  import Anmeldeformular from "$lib/components/Anmeldeformular.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex flex-col ">
  <!-- <h1 class="lg:text-9xl text-4xl sm:text-5xl uppercase font-titel font-bold text-center">{$_("pages.registration.title")}</h1> -->
  <h1 class="text-4xl sm:text-5xl lg:text-9xl text-center">{$_("pages.registration.title")}</h1>
  <Anmeldeformular {data} />
</div>
