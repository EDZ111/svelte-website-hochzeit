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

  let guests: Guest[] = [];
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

  
    <div id="guests" class="flex max-md:flex-col gap-5 p-5 overflow-auto h-full mb-10">
      {#each guests as guest}
        <GuestInfo {guest} {removeGuest} on:edit={(e) => editGuest(e.detail.id)} />
      {/each}
    </div>
    <label class="label cursor-pointer flex justify-start gap-2" >
<span class="label-text ">Person hinzufügen</span>
      <input type="button" value="+" class="btn btn-sm btn-primary max-w-xs rounded-lg text-xl" on:click={addGuestToView} />
    </label>
    
  
  
