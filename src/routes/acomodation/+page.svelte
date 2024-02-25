<script lang="ts">
  import Carousel from "$lib/components/Carousel.svelte";
  import { _ } from "svelte-i18n";
  const images = [
   
    { id: "item1", alt: "Cerreto2", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-11.jpg", title: "Cerreto 2" },
    { id: "item2", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-08.jpg", title: "Cerreto 7" },
    { id: "item3", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-09.jpg", title: "Cerreto 8" },
    { id: "item4", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-12.jpg", title: "Cerreto 11" },
    { id: "item5", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-13.jpg", title: "Cerreto 12" },
    { id: "item6", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-15.jpg", title: "Cerreto 14" },
    { id: "item7", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-16.jpg", title: "Cerreto 15" },
    { id: "item8", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-18.jpg", title: "Cerreto 17" },
    { id: "item9", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/camere/ILCERRETO-CAMERE-19.jpg", title: "Cerreto 18" },
    { id: "item9", alt: "Cerreto4", src: "https://www.bioagriturismoilcerreto.it/assets/img/appartamenti/ILCERRETO-APPARTAMENTI-06.jpg", title: "Cerreto 18" },
    

  ];
  $: table = {
    rows: [
      {
        isHeader: true,
        cols: [{ val: $_("pages.acomodation.rooms.roomTypes.types")}, { val: $_("pages.acomodation.rooms.roomTypes.available") }],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "1" },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "2" },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "3" },
          {
            rows: [{ val: "3 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.special4") }, { val: "2 " + $_("pages.acomodation.rooms.roomTypes.bathPlural") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "4" },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.special3") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "2 " + $_("pages.acomodation.rooms.roomTypes.bathPlural") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "5" },
          {
            rows: [{ val: "1 " + $_("pages.acomodation.rooms.roomTypes.special7") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.single") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.special1") },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 "+$_("pages.acomodation.rooms.roomTypes.special6")  }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.singleRoom") }, { val: "2 Zustellbetten" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.doubleRoom") + "1" },
          {
            val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleWithBath"),
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.doubleRoom") + "2" },
          {
            val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleWithBath"),
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.doubleRoom") + "3" },
          {
            val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleWithBath"),
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.doubleRoom") + "4" },
          {
            val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleWithBath"),
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.doubleRoom") + "5" },
          {
            val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleWithBath"),
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.suite") + "1" },
          {
            rows: [{ val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleBed") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.suite") + "2" },
          {
            rows: [{ val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleBed") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.suite") + "3" },
          {
            rows: [{ val: "1 " + $_("pages.acomodation.rooms.roomTypes.doubleBed") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.special2") },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.special5") }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "2 " + $_("pages.acomodation.rooms.roomTypes.bathPlural") }],
          },
        ],
      },
    ],
  };
</script>

<div class="relative z-0 md:mx-20">
  <!-- <h1 class="text-center sm:text-7xl text-4xl">
      {$_("pages.location.title")}
    </h1> -->
  <div class="flex justify-center my-10">
    <h1 class="md:text-7xl lg:text-9xl text-4xl text-base-300">{$_("pages.acomodation.title").split("|")[0]}</h1>
  </div>
  <div class="flex flex-col mx-5 gap-4 my-[10%]">
    <section>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.acomodation.description.title")}</h5>
        <h4 class="text-base-300">{$_("pages.acomodation.description.subtitle")}</h4>
      </div>
      <div class="prose prose-lg mb-5">
        <p>{$_("pages.acomodation.description.content")}</p>
      </div>
      <Carousel {images} />
    </section>
    <div class="divider w-20 self-center" />
    <section>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.acomodation.prices.title")}</h5>
        <h4 class="text-base-300">{$_("pages.acomodation.prices.subtitle")}</h4>
      </div>
      <div class="prose prose-lg">
        <p>{$_("pages.acomodation.prices.content").split("|")[0]}</p>
        <p><span class=" font-extrabold uppercase"> {$_("pages.acomodation.prices.content").split("|")[1]}</span> {$_("pages.acomodation.prices.content").split("|")[2]}</p>
      </div>
    </section>
    <div class="divider w-20 self-center" />
    <section>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.acomodation.rooms.title")}</h5>
        <h4 class="text-base-300">{$_("pages.acomodation.rooms.subtitle")}</h4>
      </div>
      <div class="prose prose-lg my-10">
        <p>{$_("pages.acomodation.rooms.content")}</p>
      </div>

      <div class="overflow-x-auto shadow-lg rounded-md">
        <table class="table table-xl bg-base-100 md:text-lg">
          <thead class="bg-base-300 text-white">
            <tr>
              {#each table.rows[0].cols as col}
                <th class="text-center md:text-lg">{col.val}</th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each table.rows as row}
              {#if !row.isHeader}
                <tr>
                  {#each row.cols as col}
                    <td class="border text-center">
                      {#if col.val}
                        {col.val} <!-- Directly display the value if it exists -->
                      {:else if col.rows}
                        <table class="w-full">
                          <!-- Render nested rows in a table if col.rows exists -->
                          {#each col.rows as r}
                            <tr><td>{r.val}</td></tr>
                          {/each}
                        </table>
                      {/if}
                    </td>
                  {/each}
                </tr>
              {/if}
            {/each}
          </tbody>
        </table>
      </div>
    </section>
    <p class="prose prose-lg mt-10">{$_("pages.acomodation.extra")}</p>
  </div>
</div>
