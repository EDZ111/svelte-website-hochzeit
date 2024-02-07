<script lang="ts">
  import { createNewGuest, type Guest } from "$lib/models/guest";

  export let showModal: boolean;
  export let saveGuest: (guest: Guest) => void;
  export let onClose: () => void;
  export let editingGuest: Guest | null;

  let guest = editingGuest ? { ...editingGuest } : createNewGuest();
  let modalId = "my_modal_" + guest ? guest.id : Math.floor(Math.random() * 10000); // Generate a unique ID for the modal
  let nameInput: HTMLInputElement;
  
  $: if (showModal) {
    nameInput?.focus();
  }
  $: if (editingGuest) {
    guest = editingGuest;
  } else {
    guest = createNewGuest();
  }

  function handleSave() {
    saveGuest(guest);
    guest = createNewGuest(); // reset the guest form
    showModal = false; // close the modal
  }

  function handleAbort() {
    guest = createNewGuest(); // reset the guest form
    showModal = false; // close the modal
    onClose();
  }
</script>

{#if showModal}
  <dialog open class="modal max-md:modal-middle ">
    <div class="modal-box " role="dialog">
      <div class="flex flex-col items-start gap-5 justify-between my-5">
        <label class="w-full">
          <span class="label-text">Name und Vorname</span>
          <input type="text" bind:value={guest.name} bind:this={nameInput} class="input input-bordered w-full max-w-lg" />
        </label>
        <div class="flex gap-5">
          <label class="label cursor-pointer flex justify-between gap-2">
            <span class="label-text">Erwachsen</span>
            <input type="radio" bind:group={guest.isChild} value={false} class="radio checked:bg-accent" />
          </label>
          <label class="label cursor-pointer flex justify-between gap-2">
            <span class="label-text">Kind</span>
            <input type="radio" bind:group={guest.isChild} value={true} class="radio checked:bg-accent" />
          </label>
        </div>
        {#if guest?.isChild}
        <label class="w-full">
          <span class="label-text">Alter</span>
          <input type="number" min="1"  bind:value={guest.age} class="input input-bordered w-20" />
        </label>
        {/if}
        <label class="w-full">
          <span class="label-text">Allergien/Unverträglichkeiten etc</span>
          <textarea bind:value={guest.extraInfo} class="textarea textarea-bordered textarea-lg w-full max-w-lg " />
        </label>
      </div>
      <div class="flex gap-5">
        <button class="btn btn-primary" on:click={handleSave}>Save</button>
        <button class="btn btn-secondary" on:click={handleAbort}>Abort</button>
      </div>
    </div>
  </dialog>
{/if}
