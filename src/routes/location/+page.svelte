<script>
    import Gallery from "$lib/components/Gallery.svelte";
    import Map from "$lib/components/Map.svelte";
    import {MapPinAltSolid} from 'flowbite-svelte-icons';


    const cards = [
        {
            title: "Florenz",
            img: "https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/11/HERO-The-Basilica-di-Santa-Maria-del-Fiore-Basilica-of-Saint-Mary-of-the-Flower-Alamy-DG5AW4.jpg?resize=1220,480",
            description_short: "Florenz, das Juwel der Toskana, ist bekannt für seine reiche Kunstgeschichte, beeindruckende Architektur und kulturelle Bedeutung. Heimat von Meisterwerken der Renaissance und UNESCO-Weltkulturerbe.",
            description_long: "Florenz, oft als Geburtsort der Renaissance bezeichnet, ist eine Stadt, die in Kunst und Geschichte getränkt ist. Hier finden Sie einige der berühmtesten Kunstwerke der Welt, darunter Michelangelos \"David\" und Botticellis \"Geburt der Venus\". Florenz ist auch für seine beeindruckende Architektur bekannt, mit Wahrzeichen wie dem Dom Santa Maria del Fiore und der Ponte Vecchio. Die Stadt spielte eine zentrale Rolle in der mittelalterlichen europäischen Handels- und Finanzgeschichte und ist heute ein Magnet für Kunstliebhaber und Kulturinteressierte."
        },
        {
            title: "Cecina",
            img: "https://www.italien.de/images/Cecina_Toskana_Italien-1200x700.jpg",
            description_short: "Cecina, eine charmante Küstenstadt in der Toskana, bietet malerische Strände und eine entspannte Atmosphäre. Ein idealer Ort für Strandliebhaber und Naturliebhaber.",
            description_long: "Die Küstenstadt Cecina, gelegen in der malerischen Toskana, ist bekannt für ihre herrlichen Strände und ihren unberührten Naturpark. Cecina lädt zum Entspannen und Genießen der italienischen Küstenkultur ein. Die Stadt bietet eine Mischung aus historischen Sehenswürdigkeiten und modernen Annehmlichkeiten, umgeben von der atemberaubenden Landschaft der Toskana. Cecina ist ein perfektes Ziel für diejenigen, die einen ruhigen Strandurlaub mit der Möglichkeit zur Erkundung der reichen Kultur und Geschichte Italiens verbinden möchten."
        },
        {
            title: "Pisa",
            img: "https://services.meteored.com/img/article/se-endereza-la-torre-de-pisa-recupera-4-centimetros-1672763123032_1280.jpg",
            description_short: "Pisa, weltberühmt für ihren Schiefen Turm, ist eine lebendige Universitätsstadt in der Toskana mit reicher Geschichte, beeindruckender Kunst und Architektur aus dem Mittelalter.",
            description_long: "Pisa, eine der bekanntesten Städte Italiens, ist vor allem für ihren ikonischen Schiefen Turm bekannt, der jährlich Tausende von Besuchern anzieht. Doch die Stadt bietet weit mehr als dieses Wahrzeichen. Als ehemalige Seerepublik verfügt Pisa über eine reiche historische und kulturelle Erbschaft, die in ihren zahlreichen mittelalterlichen Gebäuden, Kirchen und Plätzen sichtbar ist. Die Piazza dei Miracoli, mit dem Schiefen Turm, dem Dom und dem Baptisterium, ist ein UNESCO-Weltkulturerbe und ein Muss für jeden Besucher. Als lebendige Universitätsstadt hat Pisa auch eine junge und dynamische Atmosphäre, mit vielen Cafés, Bars und kulturellen Veranstaltungen, die das ganze Jahr über stattfinden. Die Stadt ist ein perfekter Ausgangspunkt, um die Schönheit der Toskana zu erkunden und ein tiefes Eintauchen in die italienische Geschichte und Kultur zu erleben."
        },
        {
            title: "Livorno",
            img: "https://bostonh.it/wp-content/uploads/2019/09/livorno_hotel_boston.jpg",
            description_short: "Livorno, eine lebhafte Hafenstadt an der toskanischen Küste, ist bekannt für seine historischen Festungen, frischen Meeresfrüchte und die charakteristischen Kanäle, die an Venedig erinnern.",
            description_long: "Livorno, ein wichtiger Hafen an der Westküste Italiens, ist eine Stadt voller Geschichte und Kultur. Mit seinen charakteristischen Kanälen, die durch die Stadt fließen, bietet Livorno ein einzigartiges Stadtbild, das oft mit Venedig verglichen wird. Besucher können die historischen Festungen und Türme erkunden, die die Stadt umgeben, oder die lokalen Märkte besuchen, um frische Meeresfrüchte und typisch toskanische Produkte zu probieren. Livorno ist auch ein idealer Ausgangspunkt, um die umliegenden Weinregionen und malerischen toskanischen Landschaften zu erkunden."
        },
        {
            title: "Volterra",
            img: "https://www.visittuscany.com/shared/visittuscany/immagini/blogs/idea/volterra-skyline.jpg",
            description_short: "Volterra, eine historische Hügelstadt in der Toskana, ist berühmt für ihre etruskischen Ruinen, mittelalterliche Architektur und das Handwerk der Alabasterverarbeitung.",
            description_long: "In den Hügeln der Toskana gelegen, ist Volterra eine Stadt, die ihre Geschichte bewahrt hat. Die Stadt ist bekannt für ihre gut erhaltenen etruskischen Ruinen, die beeindruckende mittelalterliche Architektur und ihre lange Tradition in der Alabasterverarbeitung. Besucher können durch die engen Gassen schlendern, die historischen Mauern und Tore erkunden und die reiche Kultur und Geschichte der Stadt erleben. Volterra bietet ein einzigartiges Erlebnis, das Besucher in eine andere Zeit versetzt und ihnen einen tiefen Einblick in die Vergangenheit Italiens ermöglicht."
        },
        {
            title: "Siena",
            img: "https://www.solosophie.com/wp-content/uploads/2023/06/things-to-do-in-siena_2267345795.jpeg",
            description_short: "Siena, eine der malerischsten Städte der Toskana, ist berühmt für ihren historischen Stadtkern, das spektakuläre Pferderennen \"Il Palio\" und ihre beeindruckende gotische Architektur.",
            description_long: "Siena, eine mittelalterliche Stadt in der Toskana, ist weltweit bekannt für ihren gut erhaltenen historischen Stadtkern, der zum UNESCO-Weltkulturerbe gehört. Die Stadt ist berühmt für das \"Il Palio\", ein historisches Pferderennen, das zweimal jährlich auf der Piazza del Campo stattfindet. Sienas gotische Architektur, insbesondere der beeindruckende Dom, zieht Besucher aus aller Welt an. Die Stadt bietet eine faszinierende Mischung aus Kunst, Kultur und Geschichte, eingebettet in die wunderschöne Landschaft der Toskana."
        },
    ]
</script>

<div class="relative z-0  md:ml-60 md:mr-60">


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
        <section class="mt-5 mb-5">
            <div class="h-full">
                <div class="font-text-normal text-2xl capitalize font-semibold text-slate-500">Ziel erreichen</div>
                <p>Wir empfehlen bis Florenz zu fliegen und ab dort ein Auto mieten und fahren. Laut navi sollte es ugf.
                    1
                    1/2 std fahrt sein</p>
            </div>
        </section>
        <section class="mt-5 mb-5">
            <div class="flex flex-col">
                <div class="font-text-normal text-2xl capitalize font-semibold text-slate-500">In der nähe</div>

                <div class="overflow-x-auto ">
                    <div class="flex flex-row min-w-max ">

                        {#each cards as card}
                            <div
                                class="p-1 m-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg shadow-slate-400 dark:bg-gray-800 dark:border-gray-700">
                                <img class="rounded-t-lg object-fill h-48 w-auto" src="{card.img}" alt=""/>
                                <div class="p-5">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
                                    <ul class="flex flex-row items-center justify-start gap-3">
                                        <li>
                                            <a href="https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=firenze">
                                    <span class="flex flex-row gap-1 border-2 rounded-lg p-1.5 ">
                                    <MapPinAltSolid/>
                                    <h5>30 min</h5>
                                    </span>
                                            </a>
                                        </li>
                                        <li><a href="/">Maps</a></li>
                                    </ul>
                                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{card.description_short}</p>
                                </div>
                            </div>

                        {/each}

                    </div>
                </div>
            </div>

        </section>

        <div class="h-20">

        </div>


    </div>

</div>