<template>
  <div class="h-full cols-2">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">TOP PRODUCTS</span>
        <i class="las la-expand" />
      </div>
    </Card>
  </div>
  <div class="h-full cols-2">
    <Card>
      <div class="flex w-full items-center justify-between mb-3">
        <span class="card_title_1">ACTIVITY LOG</span>
        <i class="las la-expand" />
      </div>

      <div class="flex flex-col w-full">
        <div
          class="flex w-full items-center justify-between prod_table py-2.5 px-2 text-xs"
          v-for="item in activity"
        >
          <span class="w-6/12 flex items-center">
            <div
              :class="[
                item.bg ? 'bg-primary' : 'bg-[#ffffff80]',
                'rounded-full h-1.5 w-1.5 mr-3',
              ]"
            />
            {{ item.details }}</span
          >
          <span class="w-3/12">{{ item.date }}</span>
          <div
            :class="[
              item.bg ? 'bg-primary text-black' : 'bg-[#ffffff40] text-white',
              ,
              ' text-[9.18px] font-medium min-w-[70px] center',
            ]"
          >
            {{ item.type }}
          </div>
          <i class="las la-search -rotate-90 mr-1" />
        </div>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
const activity = [
  {
    details: "You have sold an item - $1,299",
    date: "just now",
    type: "PRODUCT",
    bg: true,
  },
  {
    details: "Firewall upgrade",
    date: "	1 min ago",
    type: "SERVER",
    bg: false,
  },
  {
    details: "Push notification v2.0 installation",
    date: "1 min ago",
    type: "ANDROID",
    bg: false,
  },
  {
    details: "New Subscription - 1yr Plan",
    date: "1 min ago",
    type: "SALES",
    bg: true,
  },
  {
    details: "2 Unread enquiry",
    date: "2 mins ago",
    type: "ENQUIRY",
    bg: false,
  },
  {
    details: "$30,402 received from Paypal",
    date: "2 mins ago",
    type: "PAYMENT",
    bg: true,
  },
  {
    details: "3 payment received",
    date: "5 mins ago",
    type: "PAYMENT",
    bg: true,
  },
  {
    details: "1 pull request from github",
    date: "5 mins ago",
    type: "GITHUB",
    bg: false,
  },
  {
    details: "3 pending invoice to generate",
    date: "5 mins ago",
    type: "INVOICE",
    bg: false,
  },
  {
    details: "2 new message from fb messenger",
    date: "7 mins ago",
    type: "INBOX",
    bg: false,
  },
];
</script>

<style scoped>
.prod_table:nth-child(2n + 1) {
  background: rgb(255, 255, 255, 0.1);
}
</style>
