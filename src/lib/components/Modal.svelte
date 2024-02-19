<script lang="ts">
	 import { createEventDispatcher } from 'svelte';
	export let showModal:boolean; // boolean
	const dispatch = createEventDispatcher();
	let dialog:HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
   
	function handleCloseModal(){
        dialog.close()
        showModal=false;
		console.log("closed")
		dispatch('closeModal');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => handleCloseModal()}
class ="rounded-md shadow-lg border-2 border-base-300 border-opacity-50  "
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="p-4 " on:click|stopPropagation>
		<slot name="header" />
        
		<!-- <hr /> -->
		<slot />
		<!-- <hr /> -->
		<!-- svelte-ignore a11y-autofocus -->
		<!-- <button class="btn btn-ghost" autofocus on:click={() => handleCloseModal()}>close modal</button> -->
	</div>
</dialog>

