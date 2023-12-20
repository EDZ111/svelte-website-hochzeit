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
      if (browser) {
        // to prevent error window is not defined, because it's SSR
        window.location.href = "/";
      }
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

<div class="mx-2 md:mx-36 my-10 rounded-md p-4">
  <form on:submit={handleSubmit}>
    <div class="flex flex-col justify-evenly gap-4">
      <!-- guest personal infos -->
      <div class="flex flex-col">
        <div>{$_("pages.registration.guestPersonalInfos.title")}</div>
        <div class="label">
          <span class="label-text">{$_("pages.registration.guestPersonalInfos.name")}</span>
        </div>
        <input required id="guestName" type="text" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.name} />
        <div class="label">
          <span class="label-text">{$_("pages.registration.guestPersonalInfos.email")}</span>
        </div>
        <input required id="guestEmail" type="email" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.email} />
      </div>
      <!-- guest availability -->
      <div class="flex flex-col">
        <div>{$_("pages.registration.availability.title")}</div>

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
          <div class="grid grid-cols- sm:grid-cols-2 gap-x-2">
            <div class="label cursor-pointer flex justify-start gap-4">
              <span class="label-text w-20">{$_("pages.registration.availability.from")}</span>
              <input type="date" class="input input-bordered w-full" bind:value={guest.partecipationFrom} min="2024-10-05" max="2024-10-08" />
            </div>
            <div class="label cursor-pointer flex justify-start gap-4">
              <span class="label-text w-20">{$_("pages.registration.availability.until")}</span>
              <input type="date" class="input input-bordered w-full" bind:value={guest.partecipationUntil} min="2024-10-05" max="2024-10-08" />
            </div>
          </div>
        {/if}
      </div>
      {#if guest.partecipationSelectionValue != "none" && guest.partecipationSelectionValue != ""}
        <!--if guest is fully or partially available-->
        <div class="flex flex-col">
          <!--plus one-->
          <div class="flex flex-col">
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <span class="label-text w-20">{$_("pages.registration.plusOne.title")}</span>
                <input type="checkbox" class="toggle" bind:checked={guest.plusOneSelectionValue} on:change={resetPlusOne} />
              </label>
            </div>
            <div hidden={!guest.plusOneSelectionValue}>
              <div class="label"><span class="label-text">{$_("pages.registration.plusOne.question")}</span></div>
              <input type="text" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.plusOne} />
            </div>
          </div>
          <!--children-->
          <div class="flex flex-col">
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <span class="label-text w-20">{$_("pages.registration.children.title")}</span>
                <input type="checkbox" class="toggle" bind:checked={guest.childSelectionValue} on:change={resetChildren} />
              </label>
            </div>
            <div hidden={!guest.childSelectionValue}>
              <div class="label"><span class="label-text">{$_("pages.registration.children.question")}</span></div>
              <input type="number" placeholder={$_("general.inputPlaceholder")} class="input input-bordered max-w-xs" bind:value={guest.children} />
            </div>
          </div>
          <!--allergies-->
          <div class="flex flex-col">
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <span class="label-text w-20">{$_("pages.registration.allergies.title")}</span>
                <input type="checkbox" class="toggle" bind:checked={guest.allergiesSelectionValue} on:change={resetAllergies} />
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
        <button class="btn btn-primary" type="submit">Senden</button>
      {/if}
    </div>
  </form>
</div>

<!-- 
<Section name="crudcreateform" sectionClass="mt-10 mb-20">
  <form action="/" on:submit={handleSubmit}>
    <div class="grid gap-4 sm:gap-6">
      <div class="w-full">
        <div class="mb-2 font-extrabold text-gray-900 font-text-normal text-lg">{$_("register.angaben.titel")}</div>
        <Label for="guest_name" class="block mb-2 font-text-normal text-lg ">{$_("register.angaben.name")}</Label>
        <Input id="guest_name" class="block mb-2" type="text" bind:value={guest.name} required />
        <Label for="guest_email" class="block mb-2 font-text-normal text-lg ">{$_("register.angaben.email")}</Label>
        <Input id="guest_email" type="email" class="block mb-2" bind:value={guest.email} required />
      </div>
      <div class="grid gap-2 w-full">
        <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg capitalize">{$_("register.verfügbarkeit.titel")}</p>
        <Radio name="partecipation" value="full" bind:group={guest.partecipationSelectionValue}>
          <div class="font-text-normal text-lg">{$_("register.verfügbarkeit.voll")}</div>
        </Radio>
        <Radio name="partecipation" value="no" bind:group={guest.partecipationSelectionValue}>
          <div class="font-text-normal text-lg">{$_("register.verfügbarkeit.nicht")}</div>
        </Radio>
        <Radio name="partecipation" value="partial" bind:group={guest.partecipationSelectionValue}>
          <div class="font-text-normal text-lg">{$_("register.verfügbarkeit.teilweise")}</div>
        </Radio>
        {#if guest.partecipationSelectionValue === "partial"}
          <div>
            <Label for="start_date" defaultClass="font-text-normal text-lg">{$_("register.verfügbarkeit.von")}</Label>
            <Input id="start_date" type="date" bind:value={guest.partecipationFrom} min="2024-10-05" max="2024-10-08" />
            <Label for="end_date" defaultClass="font-text-normal text-lg">{$_("register.verfügbarkeit.bis")}</Label>
            <Input id="end_date" type="date" bind:value={guest.partecipationUntil} min="2024-10-05" max="2024-10-08" />
          </div>
        {/if}
      </div>
      {#if guest.partecipationSelectionValue != "no" && guest.partecipationSelectionValue != ""}
        <div class="grid gap-2 sm:gap-4">
          <div class="grid gap-2 w-full">
            <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">{$_("register.plusone.titel")}</p>
            <div class="flex gap-3 mb-2">
              <Radio name="plus_one" value="yes" bind:group={guest.plusOneSelectionValue}>
                <div class="font-text-normal text-lg">{$_("yesNo.yes")}</div>
              </Radio>
              <Radio name="plus_one" value="no" bind:group={guest.plusOneSelectionValue}>
                <div class="font-text-normal text-lg">{$_("yesNo.no")}</div>
              </Radio>
            </div>
            {#if guest.plusOneSelectionValue === "yes"}
              <div>
                <Label for="in_plus_one_name" defaultClass="font-text-normal text-lg">{$_("register.plusone.frage")}</Label>
                <Input id="in_plus_one_name" defaultClass="font-text-normal text-lg w-full" bind:value={guest.plusOne} type="text" />
              </div>
            {/if}
          </div>
          <div class="grid gap-2 w-full">
            <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">{$_("register.kinder.titel")}</p>
            <div class="flex gap-3 mb-2">
              <Radio name="children" value="yes" bind:group={guest.childSelectionValue}>
                <div class="font-text-normal text-lg">{$_("yesNo.yes")}</div>
              </Radio>
              <Radio name="children" value="no" bind:group={guest.childSelectionValue}>
                <div class="font-text-normal text-lg">{$_("yesNo.no")}</div>
              </Radio>
            </div>
            {#if guest.childSelectionValue === "yes"}
              <Label for="children_number" class="block mb-2 font-text-normal text-lg">{$_("register.kinder.frage")}</Label>
              <Input id="children_number" type="number" defaultClass="font-text-normal text-lg" bind:value={guest.children} />
            {/if}
          </div>
          <div class="grid gap-2 w-full">
            <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">{$_("register.allergien.titel")}</p>
            <div class="flex gap-3 mb-2">
              <Radio name="allergies" value="yes" bind:group={guest.allergiesSelectionValue}>
                <div class="font-text-normal text-lg">{$_("yesNo.yes")}</div>
              </Radio>
              <Radio name="allergies" value="no" bind:group={guest.allergiesSelectionValue}>
                <div class="font-text-normal text-lg">{$_("yesNo.no")}</div>
              </Radio>
            </div>
            {#if guest.allergiesSelectionValue === "yes"}
              <Label for="allergies_comment" class="block mb-2 font-text-normal text-lg">{$_("register.allergien.frage")}</Label>
              <Input id="allergies_comment" class="font-text-normal text-lg" type="text" bind:value={guest.allergies} />
            {/if}
          </div>
        </div>
      {/if}
      {#if guest.partecipationSelectionValue != ""}
        <Button type="submit" shadow={false} outline={true} color="primary" size="md" class="uppercase border-2 bg-white text-black font-text-normal shadow-lg">{$_("register.button")}</Button>
      {/if}
    </div>
  </form>
</Section> -->

<style>
</style>
