<script lang="ts">
   import { page } from '$app/stores';
   
  const images = [
    { id: "item1", alt: "Cerreto1", src: "https://www.bioagriturismoilcerreto.it/assets/img/biolago/ILCERRETO-BIOLAGO-12.jpg", title: "Cerreto 1" },
    { id: "item2", alt: "Cerreto2", src: "https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-02.jpg", title: "Cerreto 2" },
    { id: "item3", alt: "Cerreto3", src: "https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-03.jpg", title: "Cerreto 3" },
    { id: "item4", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-01.jpg", title: "Cerreto 4" },
   
  ];
  $:currentImage="item1";
</script>

<div class="flex justify-center flex-col ">

  <div class="carousel w-full shadow-lg rounded-2xl max-w-sm  self-center border">
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
