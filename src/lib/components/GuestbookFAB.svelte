<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';
    import { Plus, X, Image, MessageSquare } from 'lucide-svelte';
  
    const dispatch = createEventDispatcher();
  
    export let fileInput: HTMLInputElement;
  
    let isExpanded = false;
  
    function toggleExpand() {
      isExpanded = !isExpanded;
    }
  
    function triggerImageUpload() {
      dispatch('imageUpload');
      isExpanded = false;
    }
  
    function triggerCommentUpload() {
      dispatch('commentUpload');
      isExpanded = false;
    }
  </script>
  
  <div class="fixed bottom-16 right-6 flex flex-col-reverse items-end">
    {#if isExpanded}
      <div 
        class="mb-4 bg-white rounded-lg shadow-lg overflow-hidden"
        transition:fly="{{ y: 20, duration: 300 }}"
      >
        <button
          on:click={triggerImageUpload}
          class="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
        >
          <Image class="mr-2" size={20} />
          Upload Image
        </button>
        <button
          on:click={triggerCommentUpload}
          class="flex items-center px-4 py-2 hover:bg-gray-100 w-full"
        >
          <MessageSquare class="mr-2" size={20} />
          Add Comment
        </button>
      </div>
    {/if}
    
    <button
      on:click={toggleExpand}
      class="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
    >
      {#if isExpanded}
        <X size={24} />
      {:else}
        <Plus size={24} />
      {/if}
    </button>
  </div>