<!-- <script lang="ts">
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

<input type="button" value="add" class="btn btn-sm btn-primary" on:click={addGuestToView} /> -->
<script lang="ts">
  import type { Guest } from "$lib/models/guest";
  import GuestInfo from "./GuestInfo.svelte";
  import AddGuestModal from "./AddGuestModal.svelte";
  import { createEventDispatcher } from "svelte";

  export let guests: Guest[] = [];
  const dispatch = createEventDispatcher();

  function updateGuests(updatedGuests: any) {
    // Update guests logic here
    dispatch("update", { guests: updatedGuests });
  }
  $: showAddGuestModal = false;

  function addGuestToView() {
    showAddGuestModal = true; // Open the modal instead of directly adding a guest
  }
  let editingGuestId: number | null = null;

  function editGuest(id: number) {
    editingGuestId = id;
    showAddGuestModal = true; // Assuming you're reusing the AddGuestModal for editing
  }

  function saveGuest(updatedGuest: Guest) {
    if (editingGuestId === null) {
      // Adding a new guest
      const numberOfAdults = guests.filter((guest) => guest.isChild === false).length;
      if (numberOfAdults === 2 && !updatedGuest.isChild) {
        alert("max 2 Erwachsene erlaubt!");
      } else {
        guests = [...guests, updatedGuest];
      }
    } else {
      // Updating an existing guest
      guests = guests.map((guest) => (guest.id === editingGuestId ? updatedGuest : guest));
      editingGuestId = null;
    }
    showAddGuestModal = false;
  }
  function closeModal() {
    showAddGuestModal = false;
    editingGuestId;
  }

  function removeGuest(id: number) {
    guests = guests.filter((guest) => guest.id !== id);
  }
</script>

<AddGuestModal showModal={showAddGuestModal} {saveGuest} onClose={closeModal} editingGuest={editingGuestId !== null ? guests.find((guest) => guest.id === editingGuestId) ?? null : null} />

<div id="guests" class="flex max-md:flex-col gap-5 p-5 overflow-auto h-full">
  {#each guests as guest}
    <GuestInfo {guest} {removeGuest} on:edit={(e) => editGuest(e.detail.id)} />
  {/each}
</div>
<div class="flex items-center gap-5 justify-start">
  <label class="label cursor-pointer form-control flex justify-start gap-2" for="">
    <span class="label-text">Person hinzufügen</span>
  </label>
  <div tabindex="0" role="button" class="btn btn-sm bg-base-300 max-w-xs rounded-lg text-xl" on:click={addGuestToView} on:keydown={() => {}}>
    <i class="fa-solid fa-plus text-white"></i>
  </div>
</div>
