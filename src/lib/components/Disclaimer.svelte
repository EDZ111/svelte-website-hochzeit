<script>
  import { onMount } from "svelte";
  import { _ } from "svelte-i18n";
  let isDisclaimerShown = false;

  onMount(() => {
    // Check if the disclaimer has been acknowledged
    //localStorage.setItem("disclaimerAcknowledged", "false");
    isDisclaimerShown = localStorage.getItem("disclaimerAcknowledged") === "true";
  });

  function acknowledgeDisclaimer() {
    // Mark the disclaimer as acknowledged in localStorage
    localStorage.setItem("disclaimerAcknowledged", "true");
    isDisclaimerShown = true;
  }
</script>

{#if !isDisclaimerShown}
  <div class="card card-bordered border-error bg-white">
    <!-- Disclaimer content goes here -->
    <div class="card-body">
      <div class="card-title">{$_("general.modalDarkModeTitle")}</div>
      <p class="prose">{$_("general.modalDarkMode").split('|')[0]}</p>
      <p class="prose">{$_("general.modalDarkMode").split('|')[1]}</p>
      <div class="card-actions justify-center mt-10">
        <button class="btn w-full" on:click={acknowledgeDisclaimer}>OK</button>
      </div>
    </div>
  </div>
{/if}
