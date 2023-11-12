<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";

  const options = [
    {
      title: "Samstag",
      date: "05.10.2024",
      events: [
        { time: "bis 18:00 Uhr", content: "Ankunft" },
        { time: "20:00 Uhr", content: "Get together" },
        { time: "23:00 Uhr", content: "Gute Nacht" },
      ],
    },
    {
      title: "Sonntag",
      date: "06.10.2024",
      events: [
        { time: "08:00 Uhr", content: "Frühstücken" },
        { time: "12:00 Uhr", content: "Freie Trauung" },
        { time: "14:00 Uhr", content: "Hochzeitsessen" },
        { time: "18:00 Uhr", content: "PARTY PARTY PARTY" },
      ],
    },
    {
      title: "Montag",
      date: "07.10.2024",
      events: [{ time: "08:00 Uhr", content: "Frühstücken" },
      {time: "10:00 Uhr", content: "Kater-Yoga/Kater-Bier" },
      {time: "13:00 Uhr", content: "Chillaxen am Pool" },],
    },
    {
      title: "Dienstag",
      date: "08.10.2024",
      events: [{ time: "08:00 Uhr", content: "Frühstücken" },
      {time: "10:00", content: "Abschied" },],
    },
  ];
</script>


<Timeline
  position="alternate"
  style={"border: solid 0px #dbdbdb; padding: 50px 0; border-radius: 2%;"}
>

  {#each options as option}
    <TimelineItem>
      <TimelineOppositeContent slot="opposite-content">
        <p class="font-datum font-bold">{option.date}</p>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={"background-color: #86A78980;"} />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <h3 class="font-titel uppercase">{option.title}</h3>
        {#each option.events as event}
          <h4 class="font-text-normal">{event.time}</h4>
          <p class="font-text-normal italic">{event.content}</p>
        {/each}
      </TimelineContent>
    </TimelineItem>
  {/each}
</Timeline>

<style>
  h3 {
    letter-spacing: 1.5px;
    margin: 0;
    padding: 0;
  }

  p {
    letter-spacing: 1.5px;
    margin: 0;
    color: grey;
  }
</style>
