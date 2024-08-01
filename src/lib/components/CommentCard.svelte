<script lang="ts">
    export let comment: string;
    export let name: string = '';
  </script>
  
  <div class="card bg-base-100 shadow-lg w-full h-full border-2 border-base-200">
    <div class="card-body">
      <blockquote class="text-xl italic mb-2 text-center sacramento">"{comment}"</blockquote>
      {#if name}
        <div class="card-actions justify-center">
          <p class="font-bold text-accent uppercase   text-center text-lg">- {name}</p>
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    .card {
      min-height: 100px;
    }
  </style>