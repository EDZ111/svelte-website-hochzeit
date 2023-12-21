<script lang="ts">
  import { onMount, onDestroy } from "svelte";
import { _ } from "svelte-i18n";
  const targetDate: Date = new Date(2024, 9, 5, 8, 0, 0); // 5th Oct 2024, 8:00 AM
  let months: number = 0;
  let days: number = 0;
  let hours: number = 0;
  let minutes: number = 0;
  let seconds: number = 0;

  function updateCountdown(): void {
    const now: Date = new Date();
    let distance: number = targetDate.getTime() - now.getTime();

    if (distance < 0) {
      clearInterval(interval);
      months = 0;
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
      return;
    }

    // Calculate months
    months = 0;
    let tempDate = new Date(now);
    while (new Date(tempDate.setMonth(tempDate.getMonth() + 1)) < targetDate) {
      months++;
    }

    // Calculate days, hours, minutes, and seconds for remaining time
    tempDate = new Date(now);
    tempDate.setMonth(tempDate.getMonth() + months);
    distance = targetDate.getTime() - tempDate.getTime();

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    updateCountdown();
    interval = setInterval(updateCountdown, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div class="flex flex-col p-2  bg-neutral rounded-box  text-md shadow-md">
    <span class="countdown text-xl md:text-5xl">
      <span class="sacramento" style="--value:{months};"></span>
    </span>
    {$_("countdown.months")}
  </div>
  <div class="flex flex-col p-2 bg-neutral  rounded-box text-neutral-content text-md shadow-md">
    <span class="countdown  text-xl md:text-5xl">
      <span class="sacramento" style="--value:{days};"></span>
    </span>
    {$_("countdown.days")}
  </div>
  <div class="flex flex-col p-2 bg-neutral  rounded-box text-neutral-content text-md shadow-md">
    <span class="countdown  text-xl md:text-5xl">
      <span class="sacramento" style="--value:{hours};"></span>
    </span>
    {$_("countdown.hours")}
  </div>
  <div class="flex flex-col p-2 bg-neutral  rounded-box text-neutral-content text-md shadow-md">
    <span class="countdown  text-xl md:text-5xl text-center">
      <span class="sacramento" style="--value:{minutes};"></span>
    </span>
    {$_("countdown.minutes")}
  </div>
  <div class="flex flex-col p-2 bg-neutral  rounded-box text-neutral-content text-md shadow-md">
    <span class="countdown  text-xl md:text-5xl">
      <span class="sacramento" style="--value:{seconds};"></span>
    </span>
    {$_("countdown.seconds")}
  </div>
</div>
