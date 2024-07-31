<script lang="ts">
    export let url: string;
    export let alt: string = "Guestbook image";
  </script>
  
  <div class="bg-white p-4 shadow-lg rounded-lg">
    <img src={url} {alt} class="w-full h-auto object-cover rounded" />
  </div>
  
  <style>
    div {
      position: relative;
    }
    div::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      height: 20px;
      width: 40px;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.1);
      filter: blur(4px);
    }
  </style>