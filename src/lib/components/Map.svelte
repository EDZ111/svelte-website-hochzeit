<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Map, NavigationControl, Marker, Popup } from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";

  let map: Map;
  let mapContainer: any;
  export let apiKey: string;
  

  onMount(() => {
    const initialState = {
      lat: 43.33788203137951,
      lng: 10.830032596152783,
      zoom: 8,
    };

    map = new Map({
      container: mapContainer,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    /* const florence = new Marker({color:"#000000"})
            .setLngLat([11.255814, 43.769562])
            .addTo(map); */
    map.addControl(new NavigationControl(), "top-right");
    var popupFlorence = new Popup().setText("Flughafen Florenz FLR").addTo(map);
    var popupPisa = new Popup({ closeOnClick: false }).setText("Flughafen Pisa PSA").addTo(map);
    var popupCerreto = new Popup({ closeOnClick: false }).setText("Bioagriturismo Il Cerreto - 56045 Pomarance (Pisa)");

    new Marker({ color: "#FF0000" }).setLngLat([initialState.lng, initialState.lat]).setPopup(popupCerreto).addTo(map).togglePopup();

    new Marker({ color: "#000000" }).setLngLat([11.203889, 43.809722222222]).setPopup(popupFlorence).addTo(map).togglePopup();
    new Marker({ color: "#000000" }).setLngLat([10.39275, 43.683917]).setPopup(popupPisa).addTo(map).togglePopup();
  });

  onDestroy(() => {
    map?.remove();
  });
</script>

<div class="map-wrap shadow-lg card">
  <div class="map card" bind:this={mapContainer} />
</div>

<style>
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(60vh); /* calculate height of the screen minus the heading */
  }

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
