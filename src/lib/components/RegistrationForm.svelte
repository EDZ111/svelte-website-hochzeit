<script lang="ts">
  import { _ } from "svelte-i18n";
  import { browser } from "$app/environment";
  import { Deta } from "deta";
  import DynamicGuestForm from "./DynamicGuestForm.svelte";

  export let data;

  const deta = Deta(data.base_pw);
  const db = deta.Base("guests");

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

  function guestWillPartecipate() {
    return guest.partecipationSelectionValue === "full" || guest.partecipationSelectionValue === "partial";
  }

  function customMessage() {
    return guest.partecipationSelectionValue === "none" ? "schade dass du nicht kommen kannst" : "yey!";
  }

  async function handleSubmit() {
    guest.created = formatTimestamp(Date.now());
    if (confirm(customMessage())) {
      await db.put(guest);
    }
  }

  function formatTimestamp(timestamp: number): string {
    var isoString = "";
    const date = new Date(timestamp);
    isoString = date.toISOString().substring(0, isoString.length - 5);
    const offset = date.getTimezoneOffset();
    const offsetHours = Math.abs(Math.floor(offset / 60));
    const offsetMinutes = Math.abs(offset % 60);
    const timezoneFormatted = (offset > 0 ? "-" : "+") + String(offsetHours).padStart(2, "0") + ":" + String(offsetMinutes).padStart(2, "0");
    return isoString + timezoneFormatted;
  }

  function resetPlusOne() {
    if (!guest.plusOneSelectionValue) guest.plusOne = "";
  }

  function resetChildren() {
    if (!guest.childSelectionValue) guest.children = 0;
  }

  function resetAllergies() {
    if (!guest.allergiesSelectionValue) guest.allergies = "";
  }

  function handleDateSelect() {
    if (guest.partecipationSelectionValue !== "partial") {
      guest.partecipationFrom = "";
      guest.partecipationUntil = "";
    }
  }
</script>

<div class="justify-center items-center flex mb-10">
  <div class="card bg-primary bg-opacity-10 glass mx-2 max-w-5xl my-10 shadow-md">
    <div class="card-body">
      <form action="/" on:submit|preventDefault={handleSubmit} class="prose">
        <!-- Guest Personal Info Section -->
        <div class="flex flex-col gap-4 mb-10">
          <h4>{$_("pages.registration.guestContactInfos.title")}</h4>
          <div class="flex flex-col gap-2">
            <label for="guestName" class="label">
              <span class="label-text">{$_("pages.registration.guestContactInfos.telNr")}</span>
            </label>
            <input required id="guestName" type="tel" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.name} />

            <label for="guestEmail" class="label">
              <span class="label-text">{$_("pages.registration.guestContactInfos.email")}</span>
            </label>
            <input required id="guestEmail" type="email" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.email} />
          </div>
        </div>

        <!-- Guests infos section -->
        <div class="flex flex-col max-w-3xl gap-2 prose">
          <h4>Deine/Eure Daten</h4>
          <div class=" w-full">

            <DynamicGuestForm />
          </div>
        </div>

        <!-- Guest Availability Section -->
        <div class="flex flex-col max-w-3xl gap-4 mb-10">
          <h4>{$_("pages.registration.availability.title")}</h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <!-- Availability Options -->
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

          <!-- Conditional Inputs for Partial Availability -->
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
        <div class="flex flex-col gap-4">
          Unterkunft
          <label class="label cursor-pointer flex justify-start gap-2">
            <span class="label-text">Wir übernachten beim cerreto</span>
            <input type="radio" class="radio">
          </label>
          <label class="label cursor-pointer flex justify-start gap-2">
            <span class="label-text">Wir suchen uns eigenständig eine Unterkunft</span>
            <input type="radio" class="radio">
          </label>
          <label class="label cursor-pointer flex justify-start gap-2">
            <span class="label-text">Wir brauchen keine Unterkunft</span>
            <input type="radio" class="radio">
          </label>
          <label class="label cursor-pointer flex justify-start gap-2">
            <span class="label-text">Wir brauchen ein Kinderbett </span>
            <input type="checkbox" class="checkbox">
          </label>
        </div>
        <div class="flex flex-col gap-4">
          mitteilung
          <textarea></textarea>
        </div>
        {/if}
        {#if false}
          <!-- Additional Options Section (Plus One, Children, Allergies) -->
          {#if guest.partecipationSelectionValue != "none" && guest.partecipationSelectionValue != ""}
            <div class="flex flex-col gap-4">
              <!-- Plus One Section -->
              <div class="flex flex-col">
                <div class="form-control">
                  <label class="label cursor-pointer flex justify-start gap-2">
                    <span class="label-text w-28">{$_("pages.registration.plusOne.title")}</span>
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-md" bind:checked={guest.plusOneSelectionValue} on:change={resetPlusOne} />
                  </label>
                </div>
                {#if guest.plusOneSelectionValue}
                  <input type="text" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={guest.plusOne} />
                {/if}
              </div>
              <!-- Children Section -->
              <div class="flex flex-col">
                <div class="form-control">
                  <label class="label cursor-pointer flex justify-start gap-2">
                    <span class="label-text w-28">{$_("pages.registration.children.title")}</span>
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-md" bind:checked={guest.childSelectionValue} on:change={resetChildren} />
                  </label>
                </div>
                {#if guest.childSelectionValue}
                  <input type="number" placeholder={$_("general.inputPlaceholder")} class="input input-bordered max-w-xs" bind:value={guest.children} />
                {/if}
              </div>
              <!-- Allergies Section -->
              <div class="flex flex-col">
                <div class="form-control">
                  <label class="label cursor-pointer flex justify-start gap-2">
                    <span class="label-text w-28">{$_("pages.registration.allergies.title")}</span>
                    <input type="checkbox" class="checkbox checkbox-primary checkbox-md" bind:checked={guest.allergiesSelectionValue} on:change={resetAllergies} />
                  </label>
                </div>
                {#if guest.allergiesSelectionValue}
                  <textarea class="textarea textarea-bordered w-full max-w-lg" placeholder={$_("general.inputPlaceholder")} bind:value={guest.allergies}></textarea>
                {/if}
              </div>
            </div>
          {/if}
        {/if}

        <!-- Submit Button -->
        {#if guest.partecipationSelectionValue != ""}
          <div class="flex justify-center my-10">
            <button class="btn btn-accent text-white btn-lg w-52" type="submit">{$_("general.submit")}</button>
          </div>
        {/if}
      </form>
    </div>
  </div>
</div>

<style>
  /* Custom styles if needed */
</style>
