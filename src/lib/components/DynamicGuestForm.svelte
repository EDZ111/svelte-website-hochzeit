<script lang="ts">
  import { createNewGuest, type Guest } from "$lib/models/guest";
  import GuestInfo from "./GuestInfo.svelte";

  export let guests: Guest[] = [];

  function addGuestToView() {
    const newGuest = createNewGuest();
    guests = [...guests, newGuest];

    console.log(guests);
  }
  function removeGuest(id: number) {
    guests = guests.filter(guest => guest.id !== id);
  }
</script>

<div id="guests" class="flex flex-col gap-3 my-5">
  {#each guests as guest}
    <GuestInfo {guest} {removeGuest} />
  {/each}
</div>

<input type="button" value="add" class="btn btn-sm btn-primary" on:click={addGuestToView} />
