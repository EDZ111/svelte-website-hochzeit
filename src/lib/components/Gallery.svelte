<script>
    import {Carousel, Thumbnails} from 'flowbite-svelte';
    import {slide} from 'svelte/transition';
    import {bounceIn, bounceInOut, cubicIn, cubicInOut, elasticOut, quintOut} from 'svelte/easing';

    const slideAnimation = (/** @type {Element} */ x) => slide(x, {
        delay: 250,
        duration: 0,
        easing: cubicInOut,
        axis: 'x'
    })
    const images = [
        {
            alt: 'Cerreto1',
            src: 'https://www.bioagriturismoilcerreto.it/assets/img/biolago/ILCERRETO-BIOLAGO-12.jpg',
            title: 'Cerreto 1'
        },
        {
            alt: 'Cerreto2',
            src: 'https://cst-media2.viomassl.com/3108/456897/1920x1080s',
            title: 'Cerreto 2'
        },
        {
            alt: 'Cerreto3',
            src: 'https://www.bioagriturismoilcerreto.it/assets/img/home/ILCERRETO-HOME-03.jpg',
            title: 'Cerreto 3'
        },
        
        {
            alt: 'Cerreto4',
            src: 'https://cst-media2.viomassl.com/3108/456905/1920x1080s',
            title: 'Cerreto 4'
        },
        
    ];
    let index = 0;
  let forward = true; // sync animation direction between Thumbnails and Carousel
</script>

<div  style={"flex:1;"}>
    <Carousel {images}  transition={null}  let:Indicators let:Controls bind:index>
        <Controls/>
        <Indicators/>
    </Carousel>
    

</div>