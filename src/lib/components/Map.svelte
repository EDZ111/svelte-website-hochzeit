<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { Map, NavigationControl, Marker } from "maplibre-gl";
  import "maplibre-gl/dist/maplibre-gl.css";

  let map: Map;
  let mapContainer: any;

  const apiKey = "mdnYukYV9sCT5qznbRYK";

  onMount(() => {
    const initialState = {
      lat: 43.33788203137951,
      lng: 10.830032596152783,
      zoom: 14,
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
    new Marker({ color: "#FF0000" })
      .setLngLat([initialState.lng, initialState.lat])
      .addTo(map);
  });

  onDestroy(() => {
    map?.remove();
  });
</script>

<div class="map-wrap  ">
  <div class="map rounded-lg" bind:this={mapContainer} />
</div>

<style>
  .map-wrap {
    position: relative;
    width: 100%;
    height: calc(40vh); /* calculate height of the screen minus the heading */
  }

  .map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
