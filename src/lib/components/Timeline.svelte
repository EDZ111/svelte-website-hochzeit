<script>
  const timeline = [
    {
      id: 1,
      dayOfWeek: "Samstag",
      date: "05.10.2024",
      title: "Get together",
      events: [
        { time: "bis 18:00 Uhr", content: "Ankunft" },
        { time: "20:00 Uhr", content: "Get together" },
        { time: "23:00 Uhr", content: "Gute Nacht" },
      ],
    },
    {
      id: 2,
      dayOfWeek: "Sonntag",
      date: "06.10.2024",
      title: "Get together",
      events: [
        { time: "08:00 Uhr", content: "Frühstücken" },
        { time: "12:00 Uhr", content: "Freie Trauung" },
        { time: "14:00 Uhr", content: "Hochzeitsessen" },
        { time: "18:00 Uhr", content: "PARTY PARTY PARTY" },
      ],
    },
    {
      id: 3,
      dayOfWeek: "Montag",
      date: "07.10.2024",
      title: "Get together",
      events: [
        { time: "08:00 Uhr", content: "Frühstücken" },
        { time: "10:00 Uhr", content: "Kater-Yoga/Kater-Bier" },
        { time: "13:00 Uhr", content: "Chillaxen am Pool" },
      ],
    },
    {
      id: 4,
      dayOfWeek: "Dienstag",
      date: "08.10.2024",
      title: "Get together",
      events: [
        { time: "08:00 Uhr", content: "Frühstücken" },
        { time: "10:00", content: "Abschied" },
      ],
    },
  ];
</script>

<ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  {#each timeline as event}
    <li>
      {#if event.id != 1}
        <hr />
      {/if}
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-error"><path fill-rule="inherit" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
      </div>
      {#if event.id % 2 != 0}
        <div class="timeline-start md:text-end mb-10">
          <time class="font-mono italic">{event.dayOfWeek} | {event.date}</time>
          <div class="card timeline-box card-compact bg-base-100 shadow-xl w-80 md:w-90 lg:w-96">
            <div class="card-body text-start">
              <h2 class="card-title">{event.title}</h2>

              <ul class="">
                {#each event.events as e}
                  <li>
                    <div class="">{e.time} | {"\t" + e.content}</div>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {:else}
        <div class="timeline-end md:text-start mb-10">
          <time class="font-mono italic">{event.dayOfWeek} | {event.date}</time>
          <div class="card timeline-box card-compact bg-base-100 shadow-xl">
            <div class="card-body prose prose-sm">
              <h2 class="card-title">{event.title}</h2>

              <ul>
                {#each event.events as e}
                  <div class="">{e.time} | {"\t" + e.content}</div>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/if}

      {#if event.id != timeline.length}
        <hr />
      {/if}
    </li>
  {/each}
</ul>
<!-- 
      <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
              <div class="timeline-middle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                    <time class="font-mono italic">1984</time>
                    <div class="text-lg font-black">First Macintosh computer</div>
                    The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple Macintosh personal computer. It played a pivotal role in establishing desktop publishing as a general office function. The motherboard, a 9 in (23 cm) CRT monitor, and a floppy drive were housed in a beige case with integrated carrying handle; it came with a keyboard and single-button mouse.
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10">
                    <time class="font-mono italic">1998</time>
                    <div class="text-lg font-black">iMac</div>
                    iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc. It has been the primary part of Apple's consumer desktop offerings since its debut in August 1998, and has evolved through seven distinct forms
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                    <time class="font-mono italic">2001</time>
                    <div class="text-lg font-black">iPod</div>
                    The iPod is a discontinued series of portable media players and multi-purpose mobile devices designed and marketed by Apple Inc. The first version was released on October 23, 2001, about 8+1⁄2 months after the Macintosh version of iTunes was released. Apple sold an estimated 450 million iPod products as of 2022. Apple discontinued the iPod product line on May 10, 2022. At over 20 years, the iPod brand is the oldest to be discontinued by Apple
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end mb-10">
                    <time class="font-mono italic">2007</time>
                    <div class="text-lg font-black">iPhone</div>
                    iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold. As of 2022, the iPhone accounts for 15.6% of global smartphone market share
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start md:text-end mb-10">
                    <time class="font-mono italic">2015</time>
                    <div class="card timeline-box card-compact bg-base-100 shadow-xl">
                        <div class="card-body items-center">
                            <h2 class="card-title">Strumpfhose</h2>
                            
                            The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
                        </div>
                    </div>
                </div>
                <hr />
            </li>
            <li>
                <hr />
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-end md:text-end mb-10">
                    <time class="font-mono italic">2015</time>
                    <div class="text-lg font-black">Apple Watch</div>
                    The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates fitness tracking, health-oriented capabilities, and wireless telecommunication, and integrates with iOS and other Apple products and services
                </div>
            </li>
        </ul>
         -->
