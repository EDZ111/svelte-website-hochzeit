<script lang="ts">
  import { page } from '$app/stores';
  
  export let images: Array<any>;
  $: currentImage = "item1";
</script>

<div class="flex justify-center flex-col img-wrap">
  <div class="carousel w-full shadow-lg rounded-2xl self-center border">
    {#each images as image}
    <div id={image.id} class="carousel-item img">
      <img src={image.src} alt={image.alt} class="object-cover rounded-md "/>
    </div>
    {/each}
  </div>

  <div class="flex justify-center w-full py-2 gap-2">
    {#each images as image}
      {#if image.id === currentImage}
        <a href="#{image.id}" class="btn btn-xs btn-neutral text-neutral-content">{image.id.substring(4)}</a>
      {:else}
        <a href="#{image.id}" class="btn btn-xs btn-primary text-base-100" on:click={() => currentImage=image.id}>{image.id.substring(4)}</a>
      {/if}
    {/each}
  </div>
</div>
<style>
  .img-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: calc(85vh); /* Adjust height as necessary */
  }
  .carousel {
    width: 100%;
    overflow: hidden; /* Ensure carousel doesn't overflow its container */
  }
  .carousel-item {
    width: 100%; /* Carousel item width */
    height: 100%; /* Adjust height as necessary, can be 100% of .img-wrap */
    display: flex; /* Use flex to center the image */
    justify-content: center;
    align-items: center;
  }
  .carousel-item img {
    width: 100%; /* Make image fill the width */
    height: 100%; /* Make image fill the height */
    object-fit: cover; /* Cover the space, crop as needed */
  }
</style>
