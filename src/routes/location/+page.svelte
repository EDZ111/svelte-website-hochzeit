<script lang="ts">
  import CardsGallery from "$lib/components/Cards-Gallery.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
  import Map from "$lib/components/Map.svelte";
  import { MapPinAltSolid } from "flowbite-svelte-icons";
  import { _ } from "svelte-i18n";
  import type { PageData } from "./$types";
  export let data: PageData;
  import { page } from "$app/stores";
  const images= [
    { id: "item1", alt: "Cerreto1", src: "https://www.bioagriturismoilcerreto.it/assets/img/biolago/ILCERRETO-BIOLAGO-12.jpg", title: "Cerreto 1" },
    { id: "item2", alt: "Cerreto2", src: "https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-02.jpg", title: "Cerreto 2" },
    { id: "item3", alt: "Cerreto3", src: "https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-03.jpg", title: "Cerreto 3" },
    { id: "item4", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-01.jpg", title: "Cerreto 4" },
   
  ];
</script>

<div class="relative z-0 md:mx-20">
  <!-- <h1 class="text-center sm:text-7xl text-4xl">
    {$_("pages.location.title")}
  </h1> -->
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="md:text-9xl sm:text-8xl text-6xl text-base-300">{$_("pages.location.title").split('|')[0]}</h1>
      <div class="md:text-9xl sm:text-8xl text-6xl sacramento italic lowercase text-base-300">{$_("pages.location.title").split('|')[1]}</div>

      <h1 class="md:text-9xl sm:text-8xl text-6xl col-span-2 text-center text-base-300">{$_("pages.location.title").split('|')[2]}</h1>
    </div>
  </div>
  <div class="flex flex-col m-5 gap-4">
    <div class="divider w-20 self-center" />

    <section>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.location.description.title")}</h5>
        <h4 class="text-base-300">{$_("pages.location.description.subtitle")}</h4>
      </div>
      <div class="prose prose-lg ">
        <p>{$_("pages.location.description.content1")}</p>
        <p>{$_("pages.location.description.content2").split('|')[0]} <a class="link link-accent underline-offset-2 underline decoration-2 decoration-wavy" href="/acomodation">{$_("pages.location.description.content2").split('|')[1]}</a>.</p>
      </div>
      <div class="w-full mt-10">
        <Carousel images={images}/>
      </div>
      <p class="prose prose-md mt-10 italic">{$_("pages.location.description.content3")}</p>
    </section>
    <div class="divider w-20 self-center" />
    <div>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.location.arrival.title")}</h5>
        <h4 class="text-base-300">{$_("pages.location.arrival.subtitle")}</h4>
      </div>
      <div class="prose prose-lg">
        <p>{$_("pages.location.arrival.content")}</p>
      </div>
      <div class="w-full mt-10">
        <Map apiKey={data.api_key} />
      </div>
    </div>
    <div class="divider w-20 self-center" />

    <section class="mt-5 mb-5">
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.location.tourism.title")}</h5>
        <h4 class="text-base-300">{$_("pages.location.tourism.subtitle")}</h4>
      </div>
      <div class="prose prose-lg">
        <p>{$_("pages.location.tourism.content1")}</p>
      </div>
      <div class="flex flex-col">
        <CardsGallery />
      </div>
      <div class="prose prose-lg mt-10">
        <p>{$_("pages.location.tourism.content2").split('|')[0]}<a target="_blank" class="link link-accent underline-offset-2 underline decoration-2 decoration-wavy" href="https://www.withlocals.com/regions/tuscany">Withlocals</a> {$_("pages.location.tourism.content2").split('|')[1]}</p>
        <p>{$_("pages.location.tourism.content3").split('|')[0]} <a target="_blank" class="link link-accent underline-offset-2 underline decoration-2 decoration-wavy" href="https://www.visittuscany.com">{$_("pages.location.tourism.content3").split('|')[1]}</a>  {$_("pages.location.tourism.content3").split('|')[2]}</p>
      </div>
    </section>

    <div class="h-20"></div>
  </div>
</div>
