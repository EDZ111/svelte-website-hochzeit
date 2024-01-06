<script>
  import { MapLocationOutline, MapPinAltSolid, TruckSolid } from "flowbite-svelte-icons";
  import { _ } from "svelte-i18n";
  $: cards = [
    {
      title: $_("pages.location.cards.florence.title"),
      img: "florence.jpg",
      description: $_("pages.location.cards.florence.description"),
      extra: $_("pages.location.cards.florence.extra"),
      tripTime: $_("pages.location.cards.florence.tripTime"),
      gMapslLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=firenze",
    },
    {
      title: $_("pages.location.cards.volterra.title"),
      img: "https://www.visittuscany.com/shared/visittuscany/immagini/blogs/idea/volterra-skyline.jpg",
      extra: $_("pages.location.cards.volterra.extra"),
      description: $_("pages.location.cards.volterra.description"),
      tripTime: $_("pages.location.cards.volterra.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=volterra",
    },
    {
      title: $_("pages.location.cards.sanGimignano.title"),
      img: "https://cdn.pixabay.com/photo/2018/08/13/14/00/italy-3602996_1280.jpg",
      description: $_("pages.location.cards.sanGimignano.description"),
      extra: $_("pages.location.cards.sanGimignano.extra"),
      tripTime: $_("pages.location.cards.sanGimignano.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=san-gimignano",
    },
    {
      title: $_("pages.location.cards.siena.title"),
      img: "https://www.solosophie.com/wp-content/uploads/2023/06/things-to-do-in-siena_2267345795.jpeg",
      description: $_("pages.location.cards.siena.description"),
      extra: $_("pages.location.cards.siena.extra"),
      tripTime: $_("pages.location.cards.siena.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=siena",
    },
    {
      title: $_("pages.location.cards.saturnia.title"),
      img: "https://www.placesofjuma.com/wp-content/uploads/2020/10/Saturnia-15-1-scaled-761x507.jpg",
      description: $_("pages.location.cards.saturnia.description"),
      extra: $_("pages.location.cards.saturnia.extra"),
      tripTime: $_("pages.location.cards.saturnia.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=thermalquellen saturnia,grosseto",
    },
    {
      title: $_("pages.location.cards.maremma.title"),
      img: "https://cdn.pixabay.com/photo/2019/06/11/08/24/cala-violina-4266471_1280.jpg",
      description: $_("pages.location.cards.maremma.description"),
      extra: $_("pages.location.cards.maremma.extra"),
      tripTime: $_("pages.location.cards.maremma.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=parco+Naturale+della+Maremma",
    },
    {
      title: $_("pages.location.cards.cecina.title"),
      img: "https://static.holidu.com/cms/5295/l/16742.jpg",
      description: $_("pages.location.cards.cecina.description"),
      extra: $_("pages.location.cards.cecina.extra"),
      tripTime: $_("pages.location.cards.cecina.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=marina+di+cecina",
    },
    {
      title: $_("pages.location.cards.bolgheri.title"),
      img: "https://borgopignano.cdn.imgeng.in/assets/uploads/surroundings/stock-provvisorie/istock-1320721350.jpg?imgeng=/w_1800",
      description: $_("pages.location.cards.bolgheri.description"),
      extra: $_("pages.location.cards.bolgheri.extra"),
      tripTime: $_("pages.location.cards.bolgheri.tripTime"),
      gMapsLink: "https://www.google.com/maps/dir/?api=1&origin=il+cerreto+pomarane&destination=bolgheri+livorno",
    },
  ];
</script>

<div class="overflow-x-auto bg-neutral border-1 border-base-100 rounded-xl shadow-xl shadow-base-200 mt-5">
  <div class="flex flex-nowrap gap-2 px-2 pt-2 pb-5 ">
    {#each cards as card}
      <div class="card min-w-[300px] sm:min-w-[350px] mr-3 bg-base-100 shadow-xl">
        <figure><img src={card.img} class="object-fill h-40 sm:h-48 w-full" alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title text-lg sm:text-xl">
            {card.title}
          </h2>
          <p class="text-xs sm:text-sm">{card.description}</p>
          <p class="text-xs sm:text-sm"><span class="font-bold text-sm sm:text-lg text-accent">{card.extra?.split("|")[0]}</span> {card.extra?.split("|")[1]}</p>
          <div class="card-actions justify-center">
            <a href={card.gMapsLink} target="_blank" class="btn btn-ghost btn-outline hover:btn-primary self-center btn-sm mt-5">
              <div class="flex items-center rounded-lg gap-x-2">
                <TruckSolid />
                <div>{card.tripTime}</div>
              </div></a
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
