<script>
  import Collapse from "$lib/components/Collapse.svelte";
  import ComingSoon from "$lib/components/ComingSoon.svelte";
  import { _ } from "svelte-i18n";
  $: qAndAs = [
    { q: $_("pages.questionAndAnswer.questions.q1.q"), a: $_("pages.questionAndAnswer.questions.q1.a") },
    { q: $_("pages.questionAndAnswer.questions.q2.q"), a: $_("pages.questionAndAnswer.questions.q2.a") },
    { q: $_("pages.questionAndAnswer.questions.q3.q"), a: $_("pages.questionAndAnswer.questions.q3.a") },
    {
      q: $_("pages.questionAndAnswer.questions.q4.q"),
      a: $_("pages.questionAndAnswer.questions.q4.a"),
      paymentInfos: [{
        type: "EURO",
        account: $_("pages.questionAndAnswer.paymentInfos.account"),
        accountValue: "CH34 0070 0130 0090 6474 5",
        owner: $_("pages.questionAndAnswer.paymentInfos.owner"),
        ownerValue: { name: "Edoardo Maria Crescenti", address: "Eichgutstrasse 6", location: "8400 Winterthur" },
        institution: $_("pages.questionAndAnswer.paymentInfos.institution"),
        institutionValue: {
          name: "Zürcher Kantonalbank",
          address: $_("pages.questionAndAnswer.paymentInfos.address"),
          location: "8010 Zürich",
        },
        clearing:$_("pages.questionAndAnswer.paymentInfos.clearing"),
        clearingValue:"700",
        swift:$_("pages.questionAndAnswer.paymentInfos.swift"),
        swiftValue:"ZKBKCHZZ80A"
      },
      {
        type: "CHF",
        account: $_("pages.questionAndAnswer.paymentInfos.account"),
        accountValue: "CH85 0070 0114 8059 7805 6",
        owner: $_("pages.questionAndAnswer.paymentInfos.owner"),
        ownerValue: { name: "Crescenti E. oder Thiex E.", address: "Eichgutstrasse 6", location: "8400 Winterthur" },
        institution: $_("pages.questionAndAnswer.paymentInfos.institution"),
        institutionValue: {
          name: "Zürcher Kantonalbank",
          address: $_("pages.questionAndAnswer.paymentInfos.address"),
          location: "8010 Zürich",
        },
        clearing:$_("pages.questionAndAnswer.paymentInfos.clearing"),
        clearingValue:"700",
        swift:$_("pages.questionAndAnswer.paymentInfos.swift"),
        swiftValue:"ZKBKCHZZ80A"
      }]
    },
    { q: $_("pages.questionAndAnswer.questions.q5.q"), a: $_("pages.questionAndAnswer.questions.q5.a") },
    { q: $_("pages.questionAndAnswer.questions.q6.q"), a: $_("pages.questionAndAnswer.questions.q6.a") },
    { q: $_("pages.questionAndAnswer.questions.q7.q"), a: $_("pages.questionAndAnswer.questions.q7.a") },
    { q: $_("pages.questionAndAnswer.questions.q8.q"), a: $_("pages.questionAndAnswer.questions.q8.a") },
    { q: $_("pages.questionAndAnswer.questions.q9.q"), a: $_("pages.questionAndAnswer.questions.q9.a") },
  ];
</script>

<div class="flex flex-col justify-around min-h-2-3-screen">
  <div class="flex items-center justify-center my-10">
    <div class="grid grid-rows-2 gap-y-5 grid-flow-row auto-cols-max">
      <h1 class="text-5xl md:text-9xl sm:text-8xl text-base-300">{$_("pages.questionAndAnswer.title").split("|")[0]}</h1>
      <div class="text-5xl md:text-9xl sm:text-8xl sacramento italic lowercase text-base-300">{$_("pages.questionAndAnswer.title").split("|")[1]}</div>
      <h1 class="text-5xl md:text-9xl sm:text-8xl col-span-2 text-center text-base-300">{$_("pages.questionAndAnswer.title").split("|")[2]}</h1>
    </div>
  </div>
  <div class=" min-w-full">
    {#each qAndAs as qa}
      <Collapse question={qa?.q} answer={qa?.a} paymentInfos={qa.paymentInfos} />
    {/each}
  </div>
</div>
