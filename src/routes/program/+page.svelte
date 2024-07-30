<script lang="ts">
  import { onMount } from "svelte";
  import Timeline2 from "$lib/components/Timeline2.svelte";
  import { _ } from "svelte-i18n";
  import type { Day } from "$lib/models/day";
  import DressCode from "$lib/components/DressCode.svelte";
  import Timeline3 from "$lib/components/Timeline3.svelte";

  $: days = [
    {
      id: 1,
      date: "05.10.2024",
      summary: $_("pages.program.program.day1.summary"),
      events: [
        { id: 1, time: $_("pages.program.program.day1.events.ev1.time"), 
        theme:$_("pages.program.program.day1.events.ev1.theme") ,
        extras:$_("pages.program.program.day1.events.ev1.extras") 

      },
        {
          id: 2,
          time: $_("pages.program.program.day1.events.ev2.time"),
          theme: $_("pages.program.program.day1.events.ev2.theme"),
          location: $_("pages.program.program.day1.events.ev2.location"),
          dresscode: {
            title: $_("pages.program.program.day1.events.ev2.dresscode.title"),
          },
        },
      ],
      dayOfWeek: $_("pages.program.program.day1.dayOfTheWeek"),
    },
    {
      id: 2,
      date: "06.10.2024",
      summary:  $_("pages.program.program.day2.summary"),
      events: [
        {
          id: 1,
          theme:  $_("pages.program.program.day2.events.ev1.theme"),
          location: $_("pages.program.program.day2.events.ev1.location"),
          time: $_("pages.program.program.day2.events.ev1.time")
          
        },
        {
          id: 2,
          theme:  $_("pages.program.program.day2.events.ev2.theme"),
          location: $_("pages.program.program.day2.events.ev2.location"),
          time: $_("pages.program.program.day2.events.ev2.time"),
          extras: $_("pages.program.program.day2.events.ev2.extras"),
        },
        {
          id: 3,
          time: $_("pages.program.program.day2.events.ev3.time"),
          theme: $_("pages.program.program.day2.events.ev3.theme"),
          dresscode: {
            title: $_("pages.program.program.day2.events.ev3.dresscode.title"),
            itemsForHer: [
              { key: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHer.item1.key"), value:  $_("pages.program.program.day2.events.ev3.dresscode.itemsForHer.item1.value") },
              { key: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHer.item2.key"), value: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHer.item2.value") },
            ],
            itemsForHim: [
              { key: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHim.item1.key"), value: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHim.item1.value")},
              { key: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHim.item2.key"), value: $_("pages.program.program.day2.events.ev3.dresscode.itemsForHim.item2.value") },
            ],
          },
          location: $_("pages.program.program.day2.events.ev3.location") /* Im Theater gegenüber des Restaurants */,
        },
        { id: 4, time: $_("pages.program.program.day2.events.ev4.time"), theme: $_("pages.program.program.day2.events.ev4.theme"), location: $_("pages.program.program.day2.events.ev4.location") },
        { id: 5, time: $_("pages.program.program.day2.events.ev5.time"), theme: $_("pages.program.program.day2.events.ev5.theme"), location: $_("pages.program.program.day2.events.ev5.location") },
        { id: 6, time: $_("pages.program.program.day2.events.ev6.time"), theme: $_("pages.program.program.day2.events.ev6.theme"), location: $_("pages.program.program.day2.events.ev6.location")},
        {
          id: 7,
          time: $_("pages.program.program.day2.events.ev7.time"), 
          theme: $_("pages.program.program.day2.events.ev7.theme"), 
          location: $_("pages.program.program.day2.events.ev7.location"),
          extras: $_("pages.program.program.day2.events.ev7.extras"),
        },
      ],
      dayOfWeek:  $_("pages.program.program.day2.dayOfTheWeek"),
    },
    {
      id: 3,
      date: "07.10.2024",
      summary: $_("pages.program.program.day3.summary"),
      events: [
        { id: 1, theme: $_("pages.program.program.day3.events.ev1.theme"), time:  $_("pages.program.program.day3.events.ev1.time") },
        { id: 2, theme: $_("pages.program.program.day3.events.ev2.theme"), time:  $_("pages.program.program.day3.events.ev2.time") },
      ],
      dayOfWeek: $_("pages.program.program.day3.dayOfTheWeek"),
    },
    {
      id: 4,
      date: "08.10.2024",
      summary: $_("pages.program.program.day4.summary"),
      events: [
        { id: 1, theme: $_("pages.program.program.day4.events.ev1.theme"), time:  $_("pages.program.program.day4.events.ev1.time") },
        { id: 2, theme: $_("pages.program.program.day4.events.ev2.theme"), time:  $_("pages.program.program.day4.events.ev2.time") },
      ],
      dayOfWeek: $_("pages.program.program.day4.dayOfTheWeek"),
    },
  ];

  let visibleDays = 1;
  let container: HTMLElement;

  function showMoreDays() {
    visibleDays = Math.min(visibleDays + 1, days.length);
  }

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleDays < days.length) {
          showMoreDays();
        }
      },
      { threshold: 0.5 }
    );

    if (container) {
      observer.observe(container);
    }

    return () => observer.disconnect();
  });
</script>

<div class="flex flex-col justify-around items-center min-h-2-3-screen">
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="text-5xl md:text-9xl sm:text-8xl text-base-300">{$_("pages.program.title").split("|")[0]}</h1>
      <div class="text-5xl md:text-9xl sm:text-8xl sacramento italic lowercase text-base-300">{$_("pages.program.title").split("|")[1]}</div>
      <h1 class="text-5xl md:text-9xl sm:text-8xl col-span-2 text-center text-base-300">{$_("pages.program.title").split("|")[2]}</h1>
    </div>
  </div>

  <div class="flex flex-col gap-5 md:justify-center md:items-center max-w-4xl p-5">
    {#each days.slice(0, visibleDays) as day, index}
      <section style="animation-delay: {index * 0.2}s;">
        <!-- Your existing day content -->
        <div class="mb-10 md:text-center">
          <div class="text-2xl uppercase text-accent">{day.date}</div>
          <h4 class="text-base-300">{day.dayOfWeek}</h4>
          <p class=" text-xl">{day.summary}</p>
        </div>
        <Timeline3 events={day.events} />
      </section>

      <div class="divider w-20 self-center" />
    {/each}

    <div bind:this={container} class="h-10" />
  </div>
</div>

<style>
  .min-h-2-3-screen {
    min-height: 100vh;
  }

  section {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.5s ease-out forwards;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
