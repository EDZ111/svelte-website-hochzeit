<script lang="ts">
  class Event {
    id?: number;
    time?: string;
    location?: string;
    theme?: string;
    dresscode?: string;
    extras?: string;
    constructor(id: number, time: string, location: string, theme: string, dresscode: string, extras: string) {
      this.id = id;
      this.time = time;
      this.location = location;
      this.theme = theme;
      this.dresscode = dresscode;
      this.extras = extras;
    }
  }
  class Day {
    id?: number;
    date?: string;
    events?: Array<Event>;
    constructor(id: number, date: string, events: Array<Event>) {
      this.id = id;
      this.date = date;
      this.events = events;
    }
  }

  let timeline = [
    new Day(1, "05.10.2024", [
      new Event(1, "17-21 Uhr", "Auf der Wiese neben dem Restaurant", "Lockeres Treffen", "Was würdet ihr zu einem Picknick-Date oder einem Grillnachmittag mit Freunden tragen? Genau das wird auch hierfür passend sein. Denkt an eine leichte Jacke, denn im Oktober kann es abends schon mal kühl werden.", "")]), 
      new Day(2, "06.10.2024", [
        new Event(1, "08-10 Uhr", "Im Restaurant", "Frühstück", "Wie ihr wollt", ""), 
        new Event(2, "14 Uhr", "Im Theater gegenüber des Restaurants", "Freie Trauung", "Lässige Eleganz. Für Frauen stellen wir uns beispielsweise lange Kleider oder elegante, weite Hosen vor. Als Schuhe empfehlen wir euch dickere Absätze, Wedges oder sogar flache Schuhe. Für Männer sind Chinos mit Hemd passend, gerne darf es auch ein Anzug sein. Eine Krawatte oder Fliege ist kein Muss! Wie wäre es stattdessen mit Hosenträgern?", "")]), 
      
        new Day(3, "07.10.2024", [])];

</script>

<ul class="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact mt-15 mb-24">
  {#each timeline as day}
    <li>
      {#if day.id != 1}
        <hr />
      {/if}
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-primary"><path fill-rule="inherit" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      {#if day.id % 2 != 0}
        <div class="timeline-start text-end max-md:text-start">
          <time class="sacramento text-xl">{day.date}</time>
          <div class="prose prose-lg">
            <ul class="list-none">
              {#each day.events as event}
                <li>
                  <div class="max-w-sm">
                    <div>
                      <h5>{event.time}</h5>
                      <h5>{event.theme}</h5>
                    </div>
                    <p><span class="text-accent text-md">Wo:</span> <span>{event.location}</span></p>
                    <p><span class="text-accent text-md">Dresscode:</span> <span>{event.dresscode}</span></p>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {:else}
        <div class="timeline-end text-start">
          <time class="sacramento text-xl">{day.date}</time>

          <div class="prose prose-lg">
            <ul class="list-none">
              {#each day.events as event}
                <li>
                  <div class="max-w-sm">
                    <div>
                      <h5>{event.time}</h5>
                      <h5>{event.theme}</h5>
                    </div>
                    <p><span class="text-accent text-md">Wo:</span> <span>{event.location}</span></p>
                    <p><span class="text-accent text-md">Dresscode:</span> <span>{event.dresscode}</span></p>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}

      {#if day.id != timeline.length}
        <hr />
      {/if}
    </li>
  {/each}
</ul>


<style>
  ul {
    list-style: none;
    padding-left: 0;
  }
</style>
