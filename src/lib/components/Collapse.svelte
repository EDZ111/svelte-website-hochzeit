<script lang="ts">
  import { P } from "flowbite-svelte";

  export let question: String | undefined;
  export let answer: String | undefined;
  export let paymentInfos: any;
</script>



<div tabIndex="0" class="collapse collapse-arrow border border-base-300 glass  my-5 shadow-md">
  <div class="collapse-title text-xl font-medium">{question}</div>
  <div class="collapse-content bg-white p-5 prose">
    <p>{answer}</p>
    {#if paymentInfos}
      {#each paymentInfos as pi}
        <div class="divider">{pi.type}</div>
        <table class="table">
          <tr>
            <td class="font-bold"> {pi.account}</td>
            <td> {pi.accountValue}</td>
          </tr>

          <tr>
            <td class="font-bold"> {pi.owner}</td>
            <td>
              <p>{pi.ownerValue.name}</p>
              <p>{pi.ownerValue.address}</p>
              <p>{pi.ownerValue.location}</p>
            </td>
          </tr>
          <tr>
            <td class="font-bold">{pi.institution}</td>
            <td>
              <p>{pi.institutionValue.name}</p>
              <p>{pi.institutionValue.address}</p>
              <p>{pi.institutionValue.location}</p>
            </td>
          </tr>
          <tr>
            <td class="font-bold">{pi.clearing}</td>
            <td>{pi.clearingValue}</td></tr
          >
          <tr>
            <td class="font-bold">{pi.swift}</td>
            <td>{pi.swiftValue}</td>
          </tr>
        </table>
      {/each}
    {/if}
  </div>
</div>
