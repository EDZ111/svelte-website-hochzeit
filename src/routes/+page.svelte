<script>
    import { Button } from "flowbite-svelte";
</script> 

    <div class="flex max-h-screen  flex-col items-stretch justify-between mt-10">
      <div class="flex flex-col">
        <div class="h-full flex flex-col items-center justify-center">
          <div class=" lg:text-9xl text-5xl uppercase  subpixel-antialiased font-titel font-bold">
            wir heiraten!
          </div>
          <div class="uppercase text-slate-500 text-xl lg:text-2xl mt-20 font-bold font-datum">
            06.10.2024-08.10-2024
          </div>
          <div class="uppercase text-slate-500 text-xl lg:text-2xl mt-1 font-titel">
            pomarance (Toskana)
          </div>
        </div>
        <div class="flex mt-20 items-start justify-center ">
         <Button href="/anmeldung" shadow={true} outline={false} color="primary" class="uppercase border-2 bg-white text-black" size="xl">Zur Anmeldung</Button>
        </div>
        
      </div>
     
    </div>
  