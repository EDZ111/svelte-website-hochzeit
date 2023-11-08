
<script>
    import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
    import { Button,Heading,P } from 'flowbite-svelte';
    import { ArrowRightSolid, VideoSolid } from 'flowbite-svelte-icons';

    let i=true;

  </script>
  
  <Section name="heroDefault">
   <!--  <News>
       
      <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
      <span class="text-sm font-medium">Flowbite is out! See what's new</span>
    </News> -->
    <HeroHeader>
      
      <Heading tag="h1" class="mb-4" customSize="text-6xl font-extrabold  md:text-7xl lg:text-8xl">Wir Heiraten!</Heading>
      <P class="my-4 text-slate-600 text-center">05.10.2024-08.10.2024 | POMARANCE (TOSKANA)</P>
      
    </HeroHeader>
  
    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a href="/anmeldung">
        <Button size="lg" color="primary">
          Zur Anmeldung <ArrowRightSolid size="md" class="ml-2 -mr-1" />
        </Button>
      </a>
      <a href="/">
        <Button size="lg" color="light">
          Programm & Dresscode
        </Button>
      </a>
      <a href="/">
        <Button size="lg" color="light">
          Location & Umgebung
        </Button>
      </a>
      <a href="/">
        <Button size="lg" color="light">
          Fragen & Antworten
        </Button>
      </a>
    </div>
    
  </Section>