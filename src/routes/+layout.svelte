<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
  
</script>


<Navbar/>
<!-- <div class="bg-cover min-h-screen after:content-olivebranch after:opacity-50">
  <slot />
</div>
 -->
 <div class="relative">
  <!-- Background image with custom opacity -->
  <div class="content-olivebranch bg-cover absolute inset-0 opacity-5"></div>

  <!-- Slot element with full opacity -->
  <div class="relative z-10">
    <slot/>
  </div>
</div>