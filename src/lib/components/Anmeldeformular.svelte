<script >
    import { Section } from "flowbite-svelte-blocks";
    import { Label, Input, Radio, Button, Textarea } from "flowbite-svelte";
    
    
    let partecipationSelectionValue = "";
    let plusOneSelectionValue="no";
    let childSelectionValue="no"
    let allergiesSelectionValue="no"
    
  const logFunc=()=>{ console.log(partecipationSelectionValue)}
    
  
    const handleSubmit = () => {
      alert("Form submitted.");
    };
  </script>
  
  <Section name="crudcreateform">
    <form action="POST" on:submit={handleSubmit}>
      <h1 class="mb-4 text-xl font-bold text-gray-900 dark:text-white text-center"> An/Abmeldung</h1>
      <div class="grid gap-4 sm:gap-6">
          <div class="w-full">
              <p class="mb-2 font-semibold text-gray-900 dark:text-white">Deine Angaben</p>
              <Label for="guest_name" class="block mb-2">Vor- und Nachname</Label>
              <Input id="guest_name" class="block mb-2" type="text" required />
              <Label for="guest_email" class="block mb-2">E-Mail-Adresse</Label>
              <Input id="guest_email" type="email" class="block mb-2" required />
          </div>
          <div class="grid gap-2 w-full">
              <p class="mb-2 font-semibold text-gray-900 dark:text-white">Deine Verfügbarkeit</p>
              <Radio name="partecipation"  value="full" bind:group={partecipationSelectionValue} >Bin/sind die ganze Hochzeit dabei</Radio>
              <Radio name="partecipation"  value="no" bind:group={partecipationSelectionValue}>Bin/sind nicht dabei</Radio>
              <Radio name="partecipation"  value="partial" bind:group={partecipationSelectionValue}>Bin/sind nur teilweise dabei</Radio>
              {#if (partecipationSelectionValue==="partial")}
              <div>
                  <Label for="start_date">Von</Label>
                  <Input id="start_date" type="date" placeholder="05.10.2024" />
                  <Label for="end_date">Bis</Label>
                  <Input id="end_date" type="date" />
  
              </div>
              {/if}
  
          </div>
          {#if (partecipationSelectionValue!="no"&&partecipationSelectionValue!="")}
          <div class="grid gap-2 sm:gap-4">
              <div class="grid gap-2 w-full">
                  <p class="mb-2 font-semibold text-gray-900 dark:text-white">Nimmst du jemanden mit?</p>
                  <div class="flex gap-3 mb-2">
                      <Radio name="plus_one" value="yes" bind:group={plusOneSelectionValue}>Ja</Radio>
                      <Radio name="plus_one" value="no" bind:group={plusOneSelectionValue}>Nein</Radio>
                  </div>
                  {#if (plusOneSelectionValue==="yes")}
                  <div>
                      <Label for="in_plus_one_name">Wer?</Label>
                      <Input id="in_plus_one_name" type="text" />
                  </div>
                  {/if}
              </div>
              <div class="grid gap-2 w-full">
                  <p class="mb-2 font-semibold text-gray-900 dark:text-white">Kinder?</p>
                  <div class="flex gap-3 mb-2">
                      <Radio name="children" value="yes" bind:group={childSelectionValue}>Ja</Radio>
                      <Radio name="children" value="no" bind:group={childSelectionValue} checked>Nein</Radio>
                  </div>
                  {#if (childSelectionValue==="yes")}
                  <Label for="children_number" class="block mb-2">Wie viele?</Label>
                  <Input id="children_number" type="number" value="1" />
                  {/if}
              </div>
              <div class="grid gap-2 w-full">
                  <p class="mb-2 font-semibold text-gray-900 dark:text-white">Allergien?</p>
                  <div class="flex gap-3 mb-2">
                      <Radio name="allergies" value="yes" bind:group={allergiesSelectionValue}>Ja</Radio>
                      <Radio name="allergies" value="no" bind:group={allergiesSelectionValue}>Nein</Radio>
                  </div>
                  {#if (allergiesSelectionValue==="yes")}
                  <Label for="allergies_comment" class="block mb-2">Welche?</Label>
                  <Textarea id="allergies_comment" type="text" />
                  {/if}
              </div>
          </div>
          {/if}
          {#if (partecipationSelectionValue!="")}
          <Button type="submit" class="w-32">Abschicken</Button>
          {/if}
      </div>
  
      
    </form>
  </Section>
  
  <style>
  </style>