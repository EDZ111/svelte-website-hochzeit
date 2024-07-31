<script lang="ts">
  import { onMount } from "svelte";
  import GuestbookFAB from "./GuestbookFAB.svelte";
  import Polaroid from "./Polaroid.svelte";
  import CommentCard from "./CommentCard.svelte";

  let fileInput: HTMLInputElement;
  let entries: Array<{ type: 'image' | 'comment', content: string, comment?: string, name?: string, id?: string }> = [];
  let newComment: string = '';
  let newName: string = '';
  let isCommentModalOpen: boolean = false;
  let currentImageIndex: number | null = null;
  let isLoading: boolean = false;

  onMount(async () => {
    isLoading=true;
    await fetchEntries();
    isLoading=false;
  });

  async function fetchEntries() {
    const response = await fetch('/api/guestbook');
    const data = await response.json();
    entries = data;
  }
  const MAX_FILE_SIZE = 5 * 1024 * 1024; //
  const onFileSelected = async (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        if (file.size > MAX_FILE_SIZE) {
      alert('File is too large. Please select an image smaller than 5 MB.');
      return;
    }
      isLoading = true;
      const image = target.files[0];
      const formData = new FormData();
      formData.append('image', image);

      try {
        const response = await fetch('/api/guestbook/image/upload', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const { imageUrl, id } = await response.json();
          currentImageIndex = entries.length;
          isCommentModalOpen = true;
          entries = [...entries, { type: 'image', content: imageUrl, id }];
        } else {
          alert('Failed to upload image. Please try again.');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        alert('An error occurred while uploading the image. Please try again.');
      } finally {
        isLoading = false;
      }
    }
  };


  const addComment = async () => {
    
    if (currentImageIndex !== null && (newComment.trim() !== '' || newName.trim() !== '')) {
      const entry = entries[currentImageIndex];
      const response = await fetch('/api/guestbook/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imageId: entry.id,
          comment: newComment,
          name: newName
        })
      });

      if (response.ok) {
        entries[currentImageIndex].comment = newComment;
        entries[currentImageIndex].name = newName;
        isCommentModalOpen = false;
        newComment = '';
        newName = '';
        currentImageIndex = null;
      } else {
        alert('Failed to add comment. Please try again.');
      }
    }
  };

  const addTextComment = async () => {
    if (newComment.trim() !== '' || newName.trim() !== '') {
      const response = await fetch('/api/guestbook/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment: newComment,
          name: newName
        })
      });

      if (response.ok) {
        const { id } = await response.json();
        entries = [...entries, { type: 'comment', content: newComment, name: newName, id }];
        newComment = '';
        newName = '';
        isCommentModalOpen = false;
      } else {
        alert('Failed to add comment. Please try again.');
      }
    }
  };

  const openCommentModal = (type: 'image' | 'comment') => {
    if (type === 'image') {
      currentImageIndex = entries.length - 1;
    } else {
      currentImageIndex = null;
    }
    isCommentModalOpen = true;
  };
</script>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">Our Wedding Guestbook</h1>
  {#if isLoading}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg shadow-xl">
      <div class="flex justify-center">
        <span class="loading loading-ring loading-lg text-accent"></span>
      </div>
      <p class="mt-4 text-center">Loading ...</p>
    </div>
  </div>
{/if}
  <div class="bento-grid">
    {#each entries as entry, index}
      {#if entry.type === "image"}
        <div class="bento-item polaroid-item">
          <Polaroid src={entry.content} alt="Guestbook entry" effect="vignette">
            {#if entry.comment}
              <p class="text-xl italic text-center sacramento">{entry.comment}</p>
            {/if}
            {#if entry.name}
              <p class="font-bold text-accent uppercase text-center text-lg">- {entry.name}</p>
            {/if}
          </Polaroid>
        </div>
      {:else}
        <div class="bento-item comment-item">
          <CommentCard comment={entry.content} name={entry.name} />
        </div>
      {/if}
    {/each}
  </div>

  <GuestbookFAB bind:fileInput on:imageUpload={() => fileInput.click()} on:commentUpload={() => openCommentModal("comment")} />

  <input type="file" accept="image/*" bind:this={fileInput} on:change={onFileSelected} class="hidden" />

  {#if isCommentModalOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-4 rounded-lg w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">
          {currentImageIndex !== null ? "Add a Comment to Your Image" : "Add a Text Comment"}
        </h2>
        <textarea bind:value={newComment} class="w-full h-32 p-2 border rounded mb-4" placeholder="Enter your comment here..."></textarea>
        <input bind:value={newName} class="w-full p-2 border rounded mb-4" placeholder="Your Name (optional)" />
        <div class="flex justify-end">
          <button on:click={() => (isCommentModalOpen = false)} class="bg-gray-300 text-black px-4 py-2 rounded mr-2"> Cancel </button>
          <button on:click={currentImageIndex !== null ? addComment : addTextComment} class="bg-blue-500 text-white px-4 py-2 rounded"> Save Comment </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .bento-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 0.5rem;
  }

  .bento-item {
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .polaroid-item {
    grid-row: span 2;
    grid-column: span 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .comment-item {
    display: flex;
    grid-column: span 2;
    padding: 5%;
  }

  @media (max-width: 1024px) {
    .bento-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 640px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .polaroid-item,
    .comment-item {
      grid-column: span 2;
    }
  }
</style>
