<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
import Footer from "$lib/components/Footer.svelte";
</script>


<Navbar />
<div class="relative">
  <img src="olive.png" class="bg-center fixed opacity-50" alt="" />
  <main class="relative  mt-[3rem]  mb-[10rem] max-h-screen">
    <slot />
  </main>
  
  </div>
  <Footer/>

