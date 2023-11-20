<script>
    import {Carousel} from 'flowbite-svelte';
    import {slide} from 'svelte/transition';
    import {bounceIn, bounceInOut, cubicIn, cubicInOut, elasticOut, quintOut} from 'svelte/easing';

    const slideAnimation = (/** @type {Element} */ x) => slide(x, {
        delay: 250,
        duration: 5000,
        easing: cubicInOut,
        axis: 'x'
    })
    const images = [
        {
            alt: 'Cerreto1',
            src: 'https://cst-media3.viomassl.com/3108/504766/1920x1080s',
            title: 'Cerreto 1'
        },
        {
            alt: 'Cerreto2',
            src: 'https://cst-media2.viomassl.com/3108/456897/1920x1080s',
            title: 'Cerreto 2'
        },
        {
            alt: 'Cerreto3',
            src: 'https://cst-media3.viomassl.com/3108/456906/1920x1080s',
            title: 'Cerreto 3'
        },
        {
            alt: 'Cerreto4',
            src: 'https://cst-media4.viomassl.com/3108/580987/1920x1080s',
            title: 'Cerreto 4'
        },
        {
            alt: 'Cerreto5',
            src: 'https://cst-media2.viomassl.com/3108/580989/1920x1080s',
            title: 'Cerreto 5'
        },
        {
            alt: 'Cerreto6',
            src: 'https://cst-media2.viomassl.com/3108/456905/1920x1080s',
            title: 'Cerreto 6'
        },
        {
            alt: 'Cerreto7',
            src: 'https://cst-media1.viomassl.com/3108/456952/1920x1080s',
            title: 'Cerreto 7'
        },
    ];
</script>

<div  style={"flex:1;"}>
    <Carousel {images} transition={slideAnimation} duration={5000}  let:Indicators let:Controls>
        <Controls/>
        <Indicators/>
    </Carousel>
</div>