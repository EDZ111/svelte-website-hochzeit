<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  
</script>


<Navbar/>
<!-- <div class="bg-cover min-h-screen after:content-olivebranch after:opacity-50">
  <slot />
</div>
 -->
 <div class="fixed inset-0 flex items-center justify-center">
  <!-- Background image (SVG) covering the entire screen -->
  <div class="content-olivebranch bg-cover bg-center absolute inset-0 opacity-5"></div>

  <!-- Slot element with 75% height -->
  <div class="relative z-10 h-3/4">
    <slot></slot>
  </div>
</div>