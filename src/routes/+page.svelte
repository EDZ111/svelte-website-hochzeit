<script>
    import { Button } from "flowbite-svelte";
</script> 

    <div class="flex  flex-col items-stretch justify-between mt-10">
      <div class="flex flex-col">
        <div class="h-full flex flex-col items-center justify-center">
          <div class="hover:animate-bounce lg:text-9xl text-6xl capitalize subpixel-antialiased font-serif">
            wir heiraten!
          </div>
          <div class="uppercase text-slate-500 text-xl lg:text-2xl mt-20 font-mono">
            06.10.2024-08.10-2024
          </div>
          <div class="uppercase text-slate-500 text-xl lg:text-2xl mt-1 font-mono">
            pomarance (Toskana)
          </div>
        </div>
        <div class="flex mt-20 items-start justify-center ">
         <Button href="/anmeldung" shadow={true} outline={false} color="primary" class="uppercase border-2 bg-white text-black" size="xl">Zur Anmeldung</Button>
        </div>
        
      </div>
     
    </div>
  