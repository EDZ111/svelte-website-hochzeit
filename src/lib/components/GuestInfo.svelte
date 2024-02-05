<script lang="ts">
  import type { Guest } from "$lib/models/guest";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let guest: Guest;
  export let removeGuest: (id: number) => void;

  function handleRemove() {
    removeGuest(guest.id);
  }
  function openModal(id: number) {
    const modalElement = document.getElementById(`my_modal_${id}`);
    if (modalElement instanceof HTMLDialogElement) {
      modalElement.showModal();
    } else {
      console.error("Modal element not found or is not a dialog");
    }
  }
  function handleEdit() {
    dispatch("edit", { id: guest.id });
  }
</script>

<div class="card gap-5 items-center justify-between bg-white  shadow-lg rounded-md  ">
  <div class="card-title m-2">{guest.name} {#if guest.isChild}
    <div class="badge badge-info text-white mx-2">{ "Kind"}</div>
    {:else}
    <div class="badge badge-secondary mx-2">{"Erwachsen"}</div>
    {/if}</div>
    
    
  
  <div class="card-actions">
    <div tabindex="0" class="btn btn-ghost text-lg" on:click={handleEdit} on:keydown={() => {}} role="button">
      <i class="fa-solid fa-pencil text-accent"></i>
    </div>
    <div tabindex="0" class="btn btn-ghost text-lg" on:click={handleRemove} on:keydown={() => {}} role="button">
      <i class="fa-solid fa-trash-can text-error"></i>
    </div>
  </div>
</div>
