
<script lang="ts">
  import Timeline2 from "$lib/components/Timeline2.svelte";
  import { _ } from "svelte-i18n";
  import ComingSoon from "$lib/components/ComingSoon.svelte";
import type {Day} from "$lib/models/day";
  import Timeline from "$lib/components/Timeline.svelte";

  import Timeline3 from "$lib/components/Timeline3.svelte";
  let days: Day[] = [
    {
      id: 1,
      date: "05.10.2024",
      events: [
        // { id: 1, time: "17 Uhr", theme: "Anreise" },
        { id: 2, time: "18-21", theme: "Get Together", location:"TBA" },
      ],
      dayOfWeek: "Samstag/Sabato",
      // dresscode: {
      //   title: "Schickes Picknick",
      //   itemsForHer: [
      //     { key: "Kleidung", value: "" },
      //     { key: "Schuhe", value: "" },
      //   ],
      //   itemsForHim: [
      //     { key: "Kleidung", value: "" },
      //     { key: "Accessoires", value: "" },
      //   ],
      // },
    },
    {
      id: 2,
      date: "06.10.2024",
      events: [
        { id: 1, time: "14:30", theme: "Freie Trauung/Cerimonia", location:"TBA" /* Im Theater gegenüber des Restaurants */ },
        { id: 2, time: "15:30", theme: "Empfang/Ricevimento", location: "TBA"/* "Terrasse vor dem Restaurant" */ },
        { id: 3, time: "18", theme: "Abendessen/Cena", location: "TBA"/* "Restaurant"  */},
        { id: 4, time: "21 ", theme: "Party", location: "TBA"/* "Partyhouse" */ },
      ],
      dayOfWeek: "Sonntag/Domenica",
      // dresscode: {
      //   title:"Lässige Eleganz",
      //   itemsForHer: [
      //     { key: "Kleidung", value: "Lange, fließende Kleider oder elegante, weite Hosen." },
      //     { key: "Schuhe", value: "Da die Trauung auf einer Wiese stattfindet: Keilabsätze, Schuhe mit dickeren Absätzen oder flache Schuhe für Komfort und Stil." },
      //   ],
      //   itemsForHim: [
      //     { key: "Kleidung", value: "Chinos mit einem Hemd für einen lässigen Look, wer möchte gerne auch einen Anzug" },
      //     { key: "Accessoires", value: "Krawatten oder Fliegen sind kein Muss! Wie wäre es stattdessen mit Hosenträgern als stilvolle Alternative?" },
      //   ],
      // },
    },
    { id: 3, date: "07.10.2024", events: [{id:1,theme:"TBA",time:""}/* {id:1,time:"10 Uhr",theme:"Kater-Yoga", location:"TBA",},{id:2,time:"10 Uhr",theme:"Freizeit", location:"TBA",} */], dayOfWeek: "Montag/Lunedi" },
    { id: 4, date: "08.10.2024", events: [{id:1,theme:"TBA",time:""}], dayOfWeek: "Dienstag/Martedi" },
  ];
</script>
<div class="flex flex-col justify-around items-center min-h-2-3-screen">
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="text-5xl md:text-9xl sm:text-8xl text-base-300">{$_("pages.program.title").split("|")[0]}</h1>
      <div class="text-5xl md:text-9xl sm:text-8xl sacramento italic lowercase text-base-300">{$_("pages.program.title").split("|")[1]}</div>
      <h1 class="text-5xl md:text-9xl sm:text-8xl  col-span-2 text-center text-base-300">{$_("pages.program.title").split("|")[2]}</h1>
    </div>
  </div>
  <Timeline3/>
  
  {#if false}
  <ComingSoon text=""/>
  {:else}
  <div class="flex flex-col gap-5 md:justify-center md:items-center max-w-4xl p-5">
    {#each days as day}
      <section class="">
        <div class="mb-10 md:text-center">
          <div class="text-2xl uppercase text-accent">{day.date}</div>
          <h4 class="text-base-300">{day.dayOfWeek}</h4>
        </div>
        <Timeline2 events={day.events} />
        {#if day.dresscode}
          <div class="max-w-4xl mx-auto p-5 bg-neutral bg-opacity-70 border border-accent border-solid shadow-lg rounded-lg my-5">
            <div class="text-xl font-semibold text-center mb-4">Dresscode: {day.dresscode.title}</div>
            <p class="text-center my-3">Unsere Empfehlung...</p>
            <div class="md:flex md:justify-between md:items-start">
              <!-- Für Frauen -->
              <div class="md:w-1/2">
                <div class="text-lg font-semibold flex items-center mb-2">
                  <i class="fas fa-venus mr-2"></i>Für Frauen
                </div>
                <ul class="list-disc ml-5 mb-4 md:mb-0">
                  {#each day.dresscode.itemsForHer as item}
                    <li><strong class="text-accent">{item.key}:</strong> {item.value}</li>
                  {/each}
                </ul>
              </div>

              <!-- Divider -->
              <div class="divider md:block md:w-px md:h-auto md:bg-gray-300 mx-5"></div>

              <!-- Für Männer -->
              <div class="md:w-1/2">
                <div class="text-lg font-semibold flex items-center mb-2">
                  <i class="fas fa-mars mr-2"></i>Für Männer
                </div>
                <ul class="list-disc ml-5">
                  {#each day.dresscode.itemsForHim as item}
                    <li><strong class="text-accent">{item.key}:</strong> {item.value}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/if}
      </section>

      <div class="divider w-20 self-center" />
    {/each}
  </div>
  {/if}
</div>

<style>
  .min-h-2-3-screen {
    min-height: 87.67vh;
  }
</style>
