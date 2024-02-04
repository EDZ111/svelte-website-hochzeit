<script lang="ts">
  import type { Guest } from "$lib/models/guest";
  export let guest: Guest;
  export let removeGuest: (id: number) => void;

  function handleRemove() {
    removeGuest(guest.id);
  }
  function openModal(id:number){
    const modalElement = document.getElementById(`my_modal_${id}`);
    if (modalElement instanceof HTMLDialogElement) {
      modalElement.showModal();
    } else {
      console.error('Modal element not found or is not a dialog');
    }
  }
</script>

<div class="flex items-end gap-5 justify-between ">
  <label class="w-full ">
    <span class="label-text">Name und Vorname</span>
    <input type="text" bind:value={guest.name} class="input input-bordered w-full max-w-lg" />
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
  <label class="w-full max-w-xs ">
    <span class="label-text">Alter</span>
    <input type="number" bind:value={guest.age} class="input input-bordered w-full max-w-lg" />
  </label>
  <button class="btn" on:click={() => openModal(guest.id)}>Sonderwünsche</button>
  
  <button class="btn btn-ghost text-lg" on:click={handleRemove}>
    <i class="fa-solid fa-trash-can  text-error"></i>
  </button>
</div>
<dialog id={`my_modal_${guest.id}`} class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-lg"><i class="fa-solid fa-circle-xmark text-error"></i></button>
    </form>
    <label  >
      <div class="flex flex-col">
        <p>Hier kannst du deine Sonderwünsche oder Allergien erfassen ...</p>
        <textarea bind:value={guest.extraInfo} class="textarea textarea-bordered textarea-lg w-full max-w-lg" />

      </div>

    </label>
  </div>
</dialog>
