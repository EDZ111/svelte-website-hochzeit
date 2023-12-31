<script lang="ts">
  import { _ } from "svelte-i18n";
  import { browser } from "$app/environment";

  let guest = {
    created: "",
    name: "",
    email: "",
    children: 0,
    plusOne: "",
    partecipationFrom: "",
    partecipationUntil: "",
    partecipationSelectionValue: "",
    plusOneSelectionValue: false,
    childSelectionValue: false,
    allergiesSelectionValue: false,
    allergies: "",
  };
  //$: console.log({ guest });
  function guestWillPartecipate() {
    return guest.partecipationSelectionValue === "full" || guest.partecipationSelectionValue === "partial";
  }
  export let data;
  const logFunc = () => {
    console.log(data!.base_pw);
  };
  import { Deta } from "deta";

  const deta = Deta(data.base_pw);
  const db = deta.Base("guests");

  function customMessage() {
    if (guest.partecipationSelectionValue == "none") {
      return "schade dass du nicht kommen kannst";
    }
    return "yey!";
  }
  async function handleSubmit() {
    guest.created = formatTimestamp(Date.now());
    console.log(guest);
    if (confirm(customMessage())) {
      await db.put(guest);
    }
  }
  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Using toISOString to get the date and time
    let isoString = date.toISOString();

    // Removing milliseconds and the 'Z' part from the ISO string
    isoString = isoString.substring(0, isoString.length - 5);

    // Getting timezone offset in hours and minutes
    const offset = date.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offset / 60));
    const offsetMinutes = Math.abs(offset % 60);

    // Formatting the timezone offset
    const timezoneFormatted = (offset > 0 ? "-" : "+") + String(offsetHours).padStart(2, "0") + ":" + String(offsetMinutes).padStart(2, "0");

    return isoString + timezoneFormatted;
  }
  function resetPlusOne() {
    if (!guest.plusOneSelectionValue) {
      guest.plusOne = "";
    }
  }
  function resetChildren() {
    if (!guest.childSelectionValue) {
      guest.children = 0;
    }
  }
  function resetAllergies() {
    if (!guest.allergiesSelectionValue) {
      guest.allergies = "";
    }
  }
  function handleDateSelect() {
    if (guest.partecipationSelectionValue != "partial") {
      guest.partecipationFrom = "";
      guest.partecipationUntil = "";
    }
  }
</script>
<div class="justify-center items-center flex">


<div class="card bg-neutral mx-2 max-w-5xl my-10 shadow-md">
  <div class="card-body">

  <form action="/" on:submit={handleSubmit}>
    <div class="flex flex-col justify-between gap-4">
      <!-- guest personal infos -->
      <div class="flex flex-col ">
        <h4 class="">{$_("pages.registration.guestPersonalInfos.title")}</h4>
        <div class="label">
          <h5 class="label-text">{$_("pages.registration.guestPersonalInfos.name")}</h5>
        </div>
        <input required id="guestName" type="text" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.name} />
        <div class="label">
          <h5 class="label-text">{$_("pages.registration.guestPersonalInfos.email")}</h5>
        </div>
        <input required id="guestEmail" type="email" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.email} />
      </div>
      <!-- guest availability -->
      <div class="flex flex-col max-w-3xl">
        <h4>{$_("pages.registration.availability.title")}</h4>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start gap-2">
              <input type="radio" name="radio-availability" class="radio" value="full" bind:group={guest.partecipationSelectionValue} on:change={handleDateSelect} />
              <span class="label-text">{$_("pages.registration.availability.full")}</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start gap-2">
              <input type="radio" name="radio-availability" class="radio" value="none" bind:group={guest.partecipationSelectionValue} on:change={handleDateSelect} />
              <span class="label-text">{$_("pages.registration.availability.none")}</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start gap-2">
              <input type="radio" name="radio-availability" class="radio" value="partial" bind:group={guest.partecipationSelectionValue} on:change={handleDateSelect} />
              <span class="label-text">{$_("pages.registration.availability.partial")}</span>
            </label>
          </div>
        </div>
        {#if guest.partecipationSelectionValue === "partial"}
          <div class="flex flex-col sm:flex-row gap-x-5">
            <div class="label cursor-pointer flex justify-start gap-4">
              <span class="label-text">{$_("pages.registration.availability.from")}</span>
              <input type="date" class="input input-bordered w-full" bind:value={guest.partecipationFrom} min="2024-10-05" max="2024-10-08" />
            </div>
            <div class="label cursor-pointer flex justify-start gap-4 my-5">
              <span class="label-text">{$_("pages.registration.availability.until")}</span>
              <input type="date" class="input input-bordered w-full" bind:value={guest.partecipationUntil} min="2024-10-05" max="2024-10-08" />
            </div>
          </div>
        {/if}
      </div>
      {#if guest.partecipationSelectionValue != "none" && guest.partecipationSelectionValue != ""}
        <!--if guest is fully or partially available-->
        <div class="flex flex-col">
          <!--plus one-->
          <div class="flex flex-col ">
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <span class="label-text w-28">{$_("pages.registration.plusOne.title")}</span>
                <input type="checkbox" class="checkbox  checkbox-primary checkbox-md" bind:checked={guest.plusOneSelectionValue} on:change={resetPlusOne} />
              </label>
            </div>
            <div hidden={!guest.plusOneSelectionValue}>
              <div class="label"><h5 class="label-text">{$_("pages.registration.plusOne.question")}</h5></div>
              <input type="text" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.plusOne} />
            </div>
          </div>
          <!--children-->
          <div class="flex flex-col ">
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <span class="label-text w-28 ">{$_("pages.registration.children.title")}</span>
                <input type="checkbox" class="checkbox  checkbox-primary checkbox-md" bind:checked={guest.childSelectionValue} on:change={resetChildren} />
              </label>
            </div>
            <div hidden={!guest.childSelectionValue}>
              <div class="label"><h5 class="label-text">{$_("pages.registration.children.question")}</h5></div>
              <input type="number" placeholder={$_("general.inputPlaceholder")} class="input input-bordered max-w-xs" bind:value={guest.children} />
            </div>
          </div>
          <!--allergies-->
          <div class="flex flex-col ">
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <span class="label-text w-28">{$_("pages.registration.allergies.title")}</span>
                <input type="checkbox" class="checkbox  checkbox-primary checkbox-md" bind:checked={guest.allergiesSelectionValue} on:change={resetAllergies} />
              </label>
            </div>
            <div hidden={!guest.allergiesSelectionValue}>
              <div class="label"><span class="label-text">{$_("pages.registration.allergies.question")}</span></div>
              <textarea class="textarea textarea-bordered w-full max-w-lg" placeholder={$_("general.inputPlaceholder")} bind:value={guest.allergies} />
            </div>
          </div>
        </div>
      {/if}
      {#if guest.partecipationSelectionValue != ""}
        <div class="flex justify-center">
          <button class="btn btn-primary btn-lg w-52" type="submit">Senden</button>
        </div>
      {/if}
    </div>
  </form>
</div>
</div>
</div>
<style>
</style>
