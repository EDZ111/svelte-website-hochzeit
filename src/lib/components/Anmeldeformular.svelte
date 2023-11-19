<script lang="ts">
    import {Section} from "flowbite-svelte-blocks";
    import {Label, Input, Radio, Button, Textarea} from "flowbite-svelte";
    import {_} from "svelte-i18n";

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
        allergies: ""
    }
    const logFunc = () => {
        console.log(guest.partecipationSelectionValue)
    }
    import {Client} from '@notionhq/client';
    import axios from "axios";

    const notion = new Client({auth: "process.env.NOTION_API_KEY"});//
    async function handleSubmit() {
        try {
            const response = await notion.databases.create({
                parent: {
                    "type": "database_id",
                    "database_id": "24a55cab06324fbb92c663962e442521"
                },
                properties: {
                    "Name": {
                        "type": "title",
                        "title": [{"type": "text", "text": {"content": "Tomatoes"}}]
                    },
                },
            });
            console.log(response);
        } catch (error) {
            console.error('Error creating database:', error);
        }
    }

    //
    //    async function handleSubmit() {
    //        try {
    //            const response = await axios.post('https://api.notion.com/v1/databases', {
    //                        parent: {
    //                            "type":"database_id",
    //                            "database_id": "24a55cab06324fbb92c663962e442521"
    //                        },
    //                        properties: {
    //                            "Name": {
    //                             "type": "title",
    //                                "title": [{ "type": "text", "text": { "content": "Tomatoes" } }]
    //                            },
    //                        },
    //                    },
    //                    {
    //                        headers: {
    //                            // Add your headers here, e.g., authorization headers
    //                            'Authorization':
    //                                'secret_SsBo3mG4ogxenXeHIOr29jp49kvISNKaIKZjTahFKM9',
    //                            'Notion-Version':
    //                                '2022-06-28' // or the version you are using
    //                        }
    //                    }
    //                )
    //            ;
    //            console.log(response.data);
    //        } catch
    //            (error) {
    //            console.error('Error creating database:', error);
    //        }
    //    }
</script>

<Section name="crudcreateform" sectionClass="mt-10 mb-20">
    <form action="/" on:submit={handleSubmit}>

        <div class="grid gap-4 sm:gap-6">
            <div class="w-full">
                <div
                    class="mb-2 font-semibold text-gray-900 font-text-normal text-lg capitalize">{$_('register.angaben.titel')}</div>
                <Label for="guest_name"
                       class="block mb-2 font-text-normal text-lg capitalize">{$_('register.angaben.name')}</Label>
                <Input id="guest_name" class="block mb-2" type="text" bind:value={guest.name} required/>
                <Label for="guest_email"
                       class="block mb-2 font-text-normal text-lg capitalize">{$_('register.angaben.email')}</Label>
                <Input id="guest_email" type="email" class="block mb-2" bind:value={guest.email} required/>
            </div>
            <div class="grid gap-2 w-full">
                <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg capitalize">{$_('register.verfügbarkeit.titel')}
                    t</p>
                <Radio name="partecipation" value="full" bind:group={guest.partecipationSelectionValue}>
                    <div class="font-text-normal text-lg"> {$_('register.verfügbarkeit.voll')}</div>
                </Radio>
                <Radio name="partecipation" value="no" bind:group={guest.partecipationSelectionValue}>
                    <div class="font-text-normal text-lg">{$_('register.verfügbarkeit.nicht')}</div>
                </Radio>
                <Radio name="partecipation" value="partial" bind:group={guest.partecipationSelectionValue}>
                    <div class="font-text-normal text-lg">{$_('register.verfügbarkeit.teilweise')}</div>
                </Radio>
                {#if (guest.partecipationSelectionValue === "partial")}
                    <div>
                        <Label for="start_date"
                               defaultClass="font-text-normal text-lg">{$_('register.verfügbarkeit.von')}</Label>
                        <Input id="start_date" type="date" bind:value="{guest.partecipationFrom}" min="2024-10-05"
                               max="2024-10-08"/>
                        <Label for="end_date"
                               defaultClass="font-text-normal text-lg">{$_('register.verfügbarkeit.bis')}</Label>
                        <Input id="end_date" type="date" bind:value="{guest.partecipationUntil}" min="2024-10-05"
                               max="2024-10-08"/>

                    </div>
                {/if}

            </div>
            {#if (guest.partecipationSelectionValue != "no" && guest.partecipationSelectionValue != "")}
                <div class="grid gap-2 sm:gap-4">
                    <div class="grid gap-2 w-full">
                        <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">{$_('register.plusone.titel')}</p>
                        <div class="flex gap-3 mb-2">
                            <Radio name="plus_one" value="yes" bind:group={guest.plusOneSelectionValue}>
                                <div class="font-text-normal text-lg">{$_('yesno.yes')}</div>
                            </Radio>
                            <Radio name="plus_one" value="no" bind:group={guest.plusOneSelectionValue}>
                                <div class="font-text-normal text-lg">{$_('yesno.no')}</div>
                            </Radio>
                        </div>
                        {#if (guest.plusOneSelectionValue === "yes")}
                            <div>
                                <Label for="in_plus_one_name"
                                       defaultClass="font-text-normal text-lg">{$_('register.plusone.frage')}</Label>
                                <Input id="in_plus_one_name" defaultClass="font-text-normal text-lg w-full"
                                       bind:value="{guest.plusOne}"
                                       type="text"/>
                            </div>
                        {/if}
                    </div>
                    <div class="grid gap-2 w-full">
                        <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">{$_('register.kinder.titel')}</p>
                        <div class="flex gap-3 mb-2">
                            <Radio name="children" value="yes" bind:group={guest.childSelectionValue}>
                                <div class="font-text-normal text-lg">{$_('yesno.yes')}</div>
                            </Radio>
                            <Radio name="children" value="no" bind:group={guest.childSelectionValue}>
                                <div class="font-text-normal text-lg">{$_('yesno.no')}</div>
                            </Radio>
                        </div>
                        {#if (guest.childSelectionValue === "yes")}
                            <Label for="children_number"
                                   class="block mb-2 font-text-normal text-lg">{$_('register.kinder.frage')}</Label>
                            <Input id="children_number" type="number" defaultClass="font-text-normal text-lg"
                                   bind:value={guest.children}
                            />
                        {/if}
                    </div>
                    <div class="grid gap-2 w-full">
                        <p class="mb-2 font-semibold text-gray-900 font-text-normal text-lg">{$_('register.allergien.titel')}</p>
                        <div class="flex gap-3 mb-2">
                            <Radio name="allergies" value="yes" bind:group={guest.allergiesSelectionValue}>
                                <div class="font-text-normal text-lg">{$_('yesno.yes')}</div>
                            </Radio>
                            <Radio name="allergies" value="no" bind:group={guest.allergiesSelectionValue}>
                                <div class="font-text-normal text-lg">{$_('yesno.no')}</div>
                            </Radio>
                        </div>
                        {#if (guest.allergiesSelectionValue === "yes")}
                            <Label for="allergies_comment"
                                   class="block mb-2 font-text-normal text-lg">{$_('register.allergien.frage')}</Label>
                            <Input id="allergies_comment" class="font-text-normal text-lg" type="text"
                                   bind:value="{guest.allergies}"/>
                        {/if}
                    </div>
                </div>
            {/if}
            {#if (guest.partecipationSelectionValue != "")}
                <Button type="submit" shadow={false}
                        outline={false}
                        color="primary"
                        size="xl"
                        class="uppercase border-2 bg-white text-black font-text-normal">{$_('register.button')}
                </Button>
            {/if}
        </div>


    </form>
</Section>

<style>
</style>