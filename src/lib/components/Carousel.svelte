<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let images: Array<any>;

  onMount(() => {
    currentImage = images[currentIndex];
  });
  $: currentImage = {
    id:"",
    src:"",
    alt:""
  };
  $: currentIndex = 0;
  
  function scrollLeft() {
    const maxIndex = images.length;
    
    if (currentIndex === 0) {
      currentIndex = maxIndex - 1;
    } else {
      currentIndex --;
    }
    currentImage=images[currentIndex];
  }
  function scrollRight() {
    const maxIndex = images.length;
    
    if (currentIndex === maxIndex-1) {
      currentIndex = 0;
    } else {
      currentIndex ++;
    }
    currentImage=images[currentIndex];}
</script>

<div class="flex justify-center flex-col img-wrap">
  <div class="carousel w-full shadow-lg rounded-2xl self-center border">
    
      <div id={currentImage.id} class="carousel-item img">
        <img src={currentImage.src} alt={currentImage.alt} class="object-cover rounded-md" />
      </div>
    
  </div>
  <div class="flex justify-between items-stretch">
    <button class="btn bg-white borders-primary left-0 z-10 m-2 rounded-full shadow-lg fas fa-chevron-left" on:click={scrollLeft}></button>
    <!-- Right navigation arrow -->
    <button class="btn bg-white borders-primary right-0 z-10 m-2 rounded-full shadow-lg fas fa-chevron-right" on:click={scrollRight}></button>
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
