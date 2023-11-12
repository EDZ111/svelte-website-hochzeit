<script>
  import "../app.postcss";
  import Navbar from "$lib/components/Navbar.svelte";
import Footer from "$lib/components/Footer.svelte";
</script>


<Navbar />
<div class="relative">
  <img src="olive-branch.svg" class="bg-center fixed opacity-5" alt="" />
  <main class="relative  mt-[5rem] md:mt-[8rem] mb-[10rem] h-screen">
    <slot />
  </main>
  
  </div>
  <Footer/>

