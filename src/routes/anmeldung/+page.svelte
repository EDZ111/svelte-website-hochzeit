<script>
    import{_}from "svelte-i18n";
    import Anmeldeformular from "$lib/components/Anmeldeformular.svelte";
</script>
<div class="flex flex-col">
    <div class="lg:text-9xl text-4xl sm:text-5xl uppercase  font-titel font-bold text-center"> {$_('register.titel')}</div>
    <Anmeldeformular/>

</div>