<script>
    import Gallery from "$lib/components/Gallery.svelte";
    import Map from "$lib/components/Map.svelte";
</script>
<div class="relative z-0">


    <div class="lg:text-9xl text-4xl sm:text-5xl uppercase font-titel font-bold text-center">
        Location
    </div>
    <div class="flex justify-center">
        <Gallery/>
    </div>
    <div>
        <div class="flex flex-col items-center justify-center">
            <div class="uppercase text-slate-500 text-lg sm:text-xl lg:text-2xl mt-5 font-titel self-start ml-[5rem]"> il
                cerreto
            </div>
            <p class="text-lg font-text-normal max-w-4xl text-justify m-2">
                Il Bioagriturismo Il Cerreto si trova sulle colline toscane e si presenta
                come una terrazza naturale con vista sulla città di Volterra. È una meta
                ideale per chi cerca un turismo consapevole ed ecosostenibile.
            </p>
            <p class="text-lg font-text-normal max-w-4xl text-justify m-2">
                Il piccolo borgo del Cerreto è stato ristrutturato secondo i criteri della
                bioedilizia. La piscina è in realtà un biolago, uno specchio di acqua
                azzurra e limpida che viene drenata da sassi, zeoliti e ninfee; e si trova
                nei pressi di un piacevole boschetto circondato da prati e aiuole.
            </p>

            <Map/>

        </div>
    </div>

</div>

