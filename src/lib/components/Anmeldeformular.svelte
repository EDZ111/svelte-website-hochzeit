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
  
  <Section name="crudcreateform" sectionClass="mt-10 mb-20">
    <form action="POST" on:submit={handleSubmit}>
      
      <div class="grid gap-4 sm:gap-6">
          <div class="w-full">
              <div class="mb-2 font-semibold text-gray-900 font-text-normal  text-lg">Deine Angaben</div>
              <Label for="guest_name" class="block mb-2 font-text-normal text-lg">Vor- und Nachname</Label>
              <Input id="guest_name" class="block mb-2" type="text" required />
              <Label for="guest_email" class="block mb-2 font-text-normal text-lg">E-Mail-Adresse</Label>
              <Input id="guest_email" type="email" class="block mb-2" required />
          </div>
          <div class="grid gap-2 w-full">
              <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">Deine Verfügbarkeit</p>
              <Radio name="partecipation" value="full" bind:group={partecipationSelectionValue} ><div class="font-text-normal text-lg"> Bin/sind die ganze Hochzeit dabei</div></Radio>
              <Radio name="partecipation"  value="no" bind:group={partecipationSelectionValue}><div class="font-text-normal text-lg">Bin/sind nicht dabei</div></Radio>
              <Radio name="partecipation"  value="partial" bind:group={partecipationSelectionValue}><div class="font-text-normal text-lg">Bin/sind nur teilweise dabei</div></Radio>
              {#if (partecipationSelectionValue==="partial")}
              <div>
                  <Label for="start_date" defaultClass="font-text-normal text-lg">Von</Label>
                  <Input id="start_date" type="date" placeholder="05.10.2024" />
                  <Label for="end_date" defaultClass="font-text-normal text-lg">Bis</Label>
                  <Input id="end_date" type="date" />
  
              </div>
              {/if}
  
          </div>
          {#if (partecipationSelectionValue!="no"&&partecipationSelectionValue!="")}
          <div class="grid gap-2 sm:gap-4">
              <div class="grid gap-2 w-full">
                  <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">Nimmst du jemanden mit?</p>
                  <div class="flex gap-3 mb-2">
                      <Radio name="plus_one" value="yes" bind:group={plusOneSelectionValue}><div class="font-text-normal text-lg">Ja</div></Radio>
                      <Radio name="plus_one" value="no" bind:group={plusOneSelectionValue}><div class="font-text-normal text-lg">Nein</div></Radio>
                  </div>
                  {#if (plusOneSelectionValue==="yes")}
                  <div>
                      <Label for="in_plus_one_name" defaultClass="font-text-normal text-lg">Wer?</Label>
                      <Input id="in_plus_one_name" defaultClass="font-text-normal text-lg w-full" type="text" />
                  </div>
                  {/if}
              </div>
              <div class="grid gap-2 w-full">
                  <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">Kinder?</p>
                  <div class="flex gap-3 mb-2">
                      <Radio name="children" value="yes" bind:group={childSelectionValue}><div class="font-text-normal text-lg">Ja</div></Radio>
                      <Radio name="children" value="no" bind:group={childSelectionValue} ><div class="font-text-normal text-lg">Nein</div></Radio>
                  </div>
                  {#if (childSelectionValue==="yes")}
                  <Label for="children_number" class="block mb-2 font-text-normal text-lg">Wie viele?</Label>
                  <Input id="children_number" type="number" defaultClass="font-text-normal text-lg" value="1" />
                  {/if}
              </div>
              <div class="grid gap-2 w-full">
                  <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">Allergien oder Sonderwünsche?</p>
                  <div class="flex gap-3 mb-2">
                      <Radio name="allergies" value="yes" bind:group={allergiesSelectionValue}><div class="font-text-normal text-lg">Ja</div></Radio>
                      <Radio name="allergies" value="no" bind:group={allergiesSelectionValue}><div class="font-text-normal text-lg">Nein</div></Radio>
                  </div>
                  {#if (allergiesSelectionValue==="yes")}
                  <Label for="allergies_comment" class="block mb-2 font-text-normal text-lg">Welche?</Label>
                  <Input id="allergies_comment" class="font-text-normal text-lg" type="text" />
                  {/if}
              </div>
          </div>
          {/if}
          {#if (partecipationSelectionValue!="")}
          <Button type="submit" shadow={false}
          outline={false}
          color="primary"
          size="xl"
          class="uppercase border-2 bg-white text-black font-text-normal">Abschicken</Button>
          {/if}
      </div>
  
      
    </form>
  </Section>
  
  <style>
  </style>