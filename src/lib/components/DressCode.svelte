<script lang="ts">
    export let dresscode: {
      title: string;
      itemsForHer: Array<{ key: string; value: string }>;
      itemsForHim: Array<{ key: string; value: string }>;
    };
  </script>
  
  <div class="max-w-4xl mx-auto p-4 md:p-5 bg-neutral bg-opacity-70 border border-accent border-solid shadow-lg rounded-lg my-5">
    <div class="text-lg md:text-xl font-semibold text-center mb-4">Dresscode: {dresscode.title}</div>
    <p class="text-center my-3">Unsere Empfehlung...</p>
    <div class="md:flex md:justify-between md:items-start">
      <!-- Für Frauen -->
      <div class="md:w-1/2 mb-4 md:mb-0">
        <div class="text-base md:text-lg font-semibold flex items-center mb-2">
          <i class="fas fa-venus mr-2"></i>Für Frauen
        </div>
        <ul class="list-disc ml-5">
          {#each dresscode.itemsForHer as item}
            <li><strong class="text-accent">{item.key}:</strong> {item.value}</li>
          {/each}
        </ul>
      </div>
  
      <!-- Divider -->
      <div class="hidden md:block md:w-px md:h-auto md:bg-gray-300 mx-5"></div>
  
      <!-- Für Männer -->
      <div class="md:w-1/2">
        <div class="text-base md:text-lg font-semibold flex items-center mb-2">
          <i class="fas fa-mars mr-2"></i>Für Männer
        </div>
        <ul class="list-disc ml-5">
          {#each dresscode.itemsForHim as item}
            <li><strong class="text-accent">{item.key}:</strong> {item.value}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>