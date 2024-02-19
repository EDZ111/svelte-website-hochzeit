<script lang="ts">
    export let text:string
</script>


<div class="hero bg-base-200 rounded-xl">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="bg-base-200">
      <img class="mix-blend-multiply" src="pulp-fiction-john-travolta.gif" alt="" />
    </div>
    <div>
      <h1 class="text-4xl font-bold">Coming soon</h1>
      <p class="py-6">{text}</p>
    </div>
  </div>
</div>
