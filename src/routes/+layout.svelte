<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
import Footer from "$lib/components/Footer.svelte";
</script>


<Navbar />
<div class="relative">
  <img src="olive.png" class="bg-center fixed opacity-90" alt="" />
  <main class="relative  mt-[5rem] md:mt-[8rem] mb-[10rem] max-h-screen">
    <slot />
  </main>
  
  </div>
  <Footer/>

