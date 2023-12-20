<script lang="ts">
  import { Section } from "flowbite-svelte-blocks";
  import { Label, Input, Radio, Button, Textarea } from "flowbite-svelte";
  import { _ } from "svelte-i18n";

  let guest = {
    name: "",
    email: "",
    children: 0,
    plusOne: "",
    partecipationFrom: "",
    partecipationUntil: "",
    partecipationSelectionValue: "",
    plusOneSelectionValue: "no",
    childSelectionValue: "no",
    allergiesSelectionValue: "no",
    allergies: "",
  };

  export let data;
  const logFunc = () => {
    console.log(data!.base_pw);
  };
  import { Deta } from "deta";


  const deta = Deta(data.base_pw);
  const db = deta.Base("guest_hochzeit");

  async function handleSubmit() {
    await db.put(guest);
  }
</script>

<div class="mx-2 sm:mx-20 my-10 rounded-md p-4">
  <form action="/">
    <div class="flex flex-col justify-evenly gap-4">
      <!-- guest personal infos -->
      <div class="flex flex-col">
        <div>{$_("pages.registration.guestPersonalInfos.title")}</div>
        <div class="label">
          <span class="label-text">{$_("pages.registration.guestPersonalInfos.name")}</span>
        </div>
        <input id="guestName" type="text" placeholder={$_("pages.registration.guestPersonalInfos.namePlaceholder")} class="input input-bordered w-full max-w-lg" />
        <div class="label">
          <span class="label-text">{$_("pages.registration.guestPersonalInfos.email")}</span>
        </div>
        <input id="guestEmail" type="email" placeholder={$_("pages.registration.guestPersonalInfos.emailPlaceholder")} class="input input-bordered w-full max-w-lg" />
      </div>
      <!-- guest availability -->
      <div class="flex flex-col">
        <div>{$_("pages.registration.availability.title")}</div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start gap-2">
              <input type="radio" name="radio-availability" class="radio"  />
              <span class="label-text">{$_("pages.registration.availability.full")}</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start gap-2">
              <input type="radio" name="radio-availability" class="radio" />
              <span class="label-text">{$_("pages.registration.availability.none")}</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer flex justify-start gap-2">
              <input type="radio" name="radio-availability" class="radio" />
              <span class="label-text">{$_("pages.registration.availability.partial")}</span>
            </label>
          </div>
        </div>
        <div class="grid grid-cols- sm:grid-cols-2  ">
          <div class="label cursor-pointer flex justify-start gap-4 ">
            <span class="label-text mr-2">{$_("pages.registration.availability.from")}</span>
            <input type="date" class="input input-bordered w-full" />
          </div>
          <div class="label cursor-pointer flex justify-start gap-4 ">
            <span class="label-text mr-2 bg-yellow-50 ">{$_("pages.registration.availability.until")}</span>
            <input type="date" class="input input-bordered w-full " />
          </div>
        </div>
      </div>
      <!--if guest is fully or partially available-->
      <div class="flex flex-col">
        <!--plus one-->
        <div>
            
        </div>
        <!--children-->
        <div></div>
        <!--allergies-->
      </div>
    </div>
  </form>
</div>

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
</Section>

<style>
</style>
