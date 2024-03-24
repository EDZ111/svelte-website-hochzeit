<script lang="ts">
  import { _ } from "svelte-i18n";
  import { browser } from "$app/environment";
  import { Deta } from "deta";
  import DynamicGuestForm from "./DynamicGuestForm.svelte";
  import type { Guest } from "../models/guest";
  import type {  Registration } from "$lib/models/registration";
  import type { Availability } from "$lib/models/availability";
  import type { Contact } from "$lib/models/contact";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import type { DetaType } from "deta/dist/types/types/basic";
  
  export let data: any;

  const deta = Deta(data.base_pw);
  const db = deta.Base("guests");
  let guests: Guest[] = [];

  let availability: Availability = { type: "", from: new Date(), to: new Date() };
  let contact: Contact = { telNr: "", email: "" };
  let message: string = "";
  let acomodationNeeded: string = "";

  let registration: Registration 

  onMount(()=>{
   // registration.id=URL.createObjectURL(new Blob()).substr(-36);
   registration= {
    id: URL.createObjectURL(new Blob()).substr(-36),
    contact: { email: "", telNr: "" },
    guests: [],
    message: "",
    availability: { type: "", from: new Date(), to: new Date() },
    acomodationNeeded: "",
  };

  })
  function customMessage() {
    return registration.availability.type === "none" ? "schade dass du nicht kommen kannst" : "yey!";
  }
  async function handleSubmit() {
   
    if (guests.length===0){
      alert("Mind. 1 Person muss hinzugefügt werden")
      return;
    }
    registration.guests = guests;
    registration.message = message;
    registration.availability = availability;
    registration.acomodationNeeded = acomodationNeeded;
    registration.contact=contact;
    if (confirm(customMessage())) {
        
   
    
      // The Zapier Webhook URL (replace with your actual URL)
      const zapierWebhookUrl = data?.zapier_wh;

      // Prepare the request options
      const requestOptions = {
        method: "POST",
        //headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registration),
      };

      try {
        const response = await fetch(zapierWebhookUrl, requestOptions);
        const responseData = await response.json(); // Assuming Zapier responds with JSON

        // Check if the request was successful
        if (response.ok) {
          console.log("Registration data sent successfully", responseData);
          // Additional logic on successful sending (e.g., showing a success message)
        } else {
          console.error("Failed to send registration data", responseData);
          // Handle errors or unsuccessful sending here
        }
      } catch (error) {
        console.error("Error sending registration data to Zapier", error);
        // Handle network or unexpected errors here
      }
    }
    await goto('/');
  }
  let hasChild = false;
  $: withChild = guests.filter((y) => y.isChild);
  $: if (withChild.length > 0) {
    hasChild = true;
  } else {
    hasChild = false;
  }
  function handleUpdate(event: { detail: { guests: Guest[] } }) {
    guests = event.detail.guests; // Update guests based on the event
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

  
</script>

<div class="justify-center items-center flex mb-10">
  <div class="card bg-primary bg-opacity-10 glass mx-2 max-w-5xl my-10 shadow-md">
    <div class="card-body">
      <form action="/" on:submit|preventDefault={handleSubmit} class="prose">
        <!-- Guest Personal Info Section -->
        <div class="flex flex-col gap-4 mb-16">
          <h4>{$_("pages.registration.guestContactInfos.title")}</h4>
          <div class="prose">
            <p>{$_("pages.registration.guestContactInfos.subtitle")}</p>
          </div>
          <div class="flex flex-col gap-2">
            <label for="telNr" class="label">
              <span class="label-text">{$_("pages.registration.guestContactInfos.telNr")}</span>
            </label>
            <input required id="telNr" type="tel" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={contact.telNr} />

            <label for="email" class="label">
              <span class="label-text">{$_("pages.registration.guestContactInfos.email")}</span>
            </label>
            <input required id="email" type="email" placeholder={$_("general.inputPlaceholder")} class="input input-bordered w-full max-w-lg" bind:value={contact.email} />
          </div>
        </div>

        <!-- Guests infos section -->
        <div class="flex flex-col max-w-3xl gap-2 prose">
          <h4>{$_("pages.registration.addGuest.title")}</h4>
          <div class="prose">
            <p>{$_("pages.registration.addGuest.subtitle")}</p>
          </div>
          <div class=" w-full">
            <DynamicGuestForm bind:guests on:update={handleUpdate}  />
          </div>
        </div>

        <!-- Guest Availability Section -->
        <div class="flex flex-col max-w-3xl gap-4">
          <h4>{$_("pages.registration.availability.title")}</h4>
          <div class="prose"><p>{$_("pages.registration.availability.subtitle")}</p></div>
          <div class="flex flex-col gap-4">
            <!-- Availability Options -->
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <input type="radio" name="radio-availability" class="radio" value="full" bind:group={availability.type}  />
                <span class="label-text">{$_("pages.registration.availability.full")}</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <input type="radio" name="radio-availability" class="radio" value="none" bind:group={availability.type}  />
                <span class="label-text">{$_("pages.registration.availability.none")}</span>
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer flex justify-start gap-2">
                <input type="radio" name="radio-availability" class="radio" value="partial" bind:group={availability.type}  />
                <span class="label-text">{$_("pages.registration.availability.partial")}</span>
              </label>
            </div>
          </div>

          <!-- Conditional Inputs for Partial Availability -->
          {#if availability && availability.type === "partial"}
            <div class="flex flex-col sm:flex-row gap-x-5">
              <div class="label cursor-pointer flex justify-start gap-4">
                <span class="label-text">{$_("pages.registration.availability.from")}</span>
                <input type="date" class="input input-bordered w-full" bind:value={availability.from} min="2024-10-05" max="2024-10-08" />
              </div>
              <div class="label cursor-pointer flex justify-start gap-4 my-5">
                <span class="label-text">{$_("pages.registration.availability.until")}</span>
                <input type="date" class="input input-bordered w-full" bind:value={availability.to} min="2024-10-05" max="2024-10-08" />
              </div>
            </div>
          {/if}
        </div>
        <!--  {#if guest.partecipationSelectionValue != "none" && guest.partecipationSelectionValue != ""} -->
        <div class="flex flex-col gap-4">
          <h4>{$_("pages.registration.acomodation.title")}</h4>
          <div class="prose"><p> {$_("pages.registration.acomodation.subtitle").split('|')[0]} <a class="link link-accent underline-offset-2 underline decoration-2 decoration-wavy" href="/acomodation">{$_("pages.registration.acomodation.subtitle").split('|')[1]}</a></p></div>
          <label class="label cursor-pointer flex justify-start gap-2">
            <input type="radio" name="radio-acomodation" value="cerreto" class="radio" bind:group={acomodationNeeded} />
            <span class="label-text">{$_("pages.registration.acomodation.atCerreto")}</span>
          </label>
          <label class="label cursor-pointer flex justify-start gap-2">
            <input type="radio" name="radio-acomodation" value="self" class="radio" bind:group={acomodationNeeded} />
            <span class="label-text">{$_("pages.registration.acomodation.atSelf")}</span>
          </label>

          <div class="flex flex-col gap-4">
            <h4>{$_("pages.registration.communication.title")}</h4>
            <div class="prose"><p>{$_("pages.registration.communication.subtitle")}</p></div>
            <textarea class="textarea textarea-bordered textarea-lg w-full" bind:value={message}></textarea>
          </div>

          <!-- Submit Button -->
          {#if availability.type != ""}
            <div class="flex justify-center my-10">
              <button class="btn btn-accent text-white btn-lg w-52" type="submit">{$_("general.submit")}</button>
            </div>
          {/if}
        </div>
      </form>
    </div>
  </div>
</div>

<style>
  /* Custom styles if needed */
</style>
