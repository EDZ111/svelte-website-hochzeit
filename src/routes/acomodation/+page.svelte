<script lang="ts">
  import { _ } from "svelte-i18n";
  const table = {
    rows: [
      {
        isHeader: true,
        cols: [{ val: "Zimmertyp" }, { val: "Verfügbare Zimmer" }],
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
            rows: [{ val: "3 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 Zustellbett" }, { val: "2 " + $_("pages.acomodation.rooms.roomTypes.bathPlural") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "4" },
          {
            rows: [{ val: "2 Dreibettzimmer" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "2 " + $_("pages.acomodation.rooms.roomTypes.bathPlural") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.apartment") + "5" },
          {
            rows: [{ val: "1 Zimmer mit Doppelbett und Schlafsofa (doppel)" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.single") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.special1") },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 französisches Bett (1 Erwachsener oder 2 Kinder) " }, { val: "1 Einzelzimmer" }, { val: "2 Zustellbetten" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
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
          { val: $_("pages.acomodation.rooms.roomTypes.double") + "5" },
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
            rows: [{ val: "1 Doppelbett" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.suite") + "2" },
          {
            rows: [{ val: "1 Doppelbett" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.suite") + "3" },
          {
            rows: [{ val: "1 Doppelbett" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.bathSingular") }],
          },
        ],
      },
      {
        isHeader: false,
        cols: [
          { val: $_("pages.acomodation.rooms.roomTypes.special2") },
          {
            rows: [{ val: "2 " + $_("pages.acomodation.rooms.roomTypes.doubleRoom") }, { val: "1 Schlafzimmer mit Etagenbett" }, { val: "1 " + $_("pages.acomodation.rooms.roomTypes.sleepCouch") + " (" + $_("pages.acomodation.rooms.roomTypes.double") + ")" }, { val: "2 " + $_("pages.acomodation.rooms.roomTypes.bathPlural") }],
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
  <div class="flex justify-center">
    <h1 class="md:text-7xl lg:text-8xl text-4xl text-base-300">{$_("pages.acomodation.title").split("|")[0]}</h1>
  </div>

  <div class="flex flex-col m-5 gap-4">
    <section>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.acomodation.description.title")}</h5>
        <h4 class="text-base-300">{$_("pages.acomodation.description.subtitle")}</h4>
      </div>
      <div class="prose prose-lg">
        <p>{$_("pages.acomodation.description.content")}</p>
      </div>
    </section>
    <div class="divider w-20 self-center" />
    <section>
      <div class="mb-10">
        <h5 class="uppercase text-accent">{$_("pages.acomodation.prices.title")}</h5>
        <h4 class="text-base-300">{$_("pages.acomodation.prices.subtitle")}</h4>
      </div>
      <div class="prose prose-lg">
        <p>{$_("pages.acomodation.prices.content")}</p>
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
  </div>
</div>

<img src="https://cst-media4.viomassl.com/3108/580987/1920x1080s" alt="" />
