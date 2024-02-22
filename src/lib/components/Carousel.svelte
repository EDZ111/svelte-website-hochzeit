<script lang="ts">
   import { page } from '$app/stores';
   
 export let images:Array<any> ;
  $:currentImage="item1";
</script>

<div class="flex justify-center flex-col ">

  <div class="carousel w-full shadow-lg rounded-2xl max-w-xl  self-center border">
    {#each images as image}
    <div id={image.id} class="carousel-item w-full" >
      <img src={image.src} alt={image.alt} class="object-fill rounded-md "/>
    </div>
    {/each}
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    {#each images as image}
    {#if image.id===currentImage}
    <a href="#{image.id}" class="btn btn-xs btn-neutral text-neutral-content">{image.id.substring(4)}</a>
    {:else}
    <a href="#{image.id}" class="btn btn-xs btn-primary text-base-100" on:click={()=>currentImage=image.id}>{image.id.substring(4)}</a>
    {/if}
    {/each}
  </div>
</div>
