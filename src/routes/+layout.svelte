<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  
</script>


<Navbar/>

  <div class="relative" >
    <img src="olive-branch.svg" class="bg-center absolute opacity-5" alt="">
    <div class="relative">
      <slot />
    </div>
  </div>
  
