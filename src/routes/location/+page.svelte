<script>
    import Gallery from "$lib/components/Gallery.svelte";
    import Map from "$lib/components/Map.svelte";
    import {Card} from "flowbite-svelte";

</script>
<div class="relative z-0">


    <div class="lg:text-9xl text-4xl sm:text-5xl uppercase font-titel font-bold text-center">
        Location
    </div>
    <div class="flex flex-col m-5 gap-4">
        <div class="w-full">
            <Gallery/>
        </div>
        <div>
            <div class="font-text-normal text-2xl capitalize font-semibold text-slate-500">il cerreto</div>
            <p class="text-lg font-text-normal  text-justify">
                Il Bioagriturismo Il Cerreto si trova sulle colline toscane e si presenta
                come una terrazza naturale con vista sulla città di Volterra. È una meta
                ideale per chi cerca un turismo consapevole ed ecosostenibile.
            </p>
            <p class="text-lg font-text-normal text-justify">
                Il piccolo borgo del Cerreto è stato ristrutturato secondo i criteri della
                bioedilizia. La piscina è in realtà un biolago, uno specchio di acqua
                azzurra e limpida che viene drenata da sassi, zeoliti e ninfee; e si trova
                nei pressi di un piacevole boschetto circondato da prati e aiuole.
            </p>
        </div>

        <Map/>

        <div class="h-full">
            <div class="font-text-normal text-2xl capitalize font-semibold text-slate-500">Ziel erreichen</div>
            <p>Wir empfehlen bis Florenz zu fliegen und ab dort ein Auto mieten und fahren. Laut navi sollte es ugf. 1
                1/2 std fahrt sein</p>
        </div>
        <div class="flex flex-col">
            <div class="font-text-normal text-2xl capitalize font-semibold text-slate-500">In der nähe</div>

            <div class="overflow-x-auto ">
            <div class="flex flex-row min-w-max">


                <Card
                    img="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-The-Basilica-di-Santa-Maria-del-Fiore-Basilica-of-Saint-Mary-of-the-Flower-Alamy-DG5AW4.jpg?resize=1220,480"
                    class="mr-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Florenz</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest
                        enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </Card>
                <Card
                    img="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-The-Basilica-di-Santa-Maria-del-Fiore-Basilica-of-Saint-Mary-of-the-Flower-Alamy-DG5AW4.jpg?resize=1220,480"
                    class="mr-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Siena</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest
                        enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </Card>
                <Card
                    img="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-The-Basilica-di-Santa-Maria-del-Fiore-Basilica-of-Saint-Mary-of-the-Flower-Alamy-DG5AW4.jpg?resize=1220,480"
                    class="mr-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Volterra</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest
                        enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </Card>
                <Card
                    img="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-The-Basilica-di-Santa-Maria-del-Fiore-Basilica-of-Saint-Mary-of-the-Flower-Alamy-DG5AW4.jpg?resize=1220,480"
                    class="mr-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Livorno</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest
                        enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </Card>
                <Card
                    img="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-The-Basilica-di-Santa-Maria-del-Fiore-Basilica-of-Saint-Mary-of-the-Flower-Alamy-DG5AW4.jpg?resize=1220,480"
                    class="mr-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Livorno</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">Here are the biggest
                        enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                </Card>
                 </div>
            </div>


            <div class="h-20">

            </div>
        </div>


    </div>

</div>