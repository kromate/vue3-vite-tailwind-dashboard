<template>
  <div class="h-full ">
    <Card>
      <div class="flex w-full items-center justify-between mb-6">
        <span class="card_title_1">TOP PRODUCTS</span>
        <i class="las la-expand" />
      </div>

      <div class="flex flex-col w-full gap-3">
        <div
          class="flex w-full items-center justify-between py-2.5 px-2 text-[12.25px] h-[60px]"
          v-for="n in 5"
          :key="n"
        >
          <div class="bg-[#ffffffbf] w-2/12 relative max-w-[80px] h-[60px] mr-3">
            <span
              class="bg-primary h-5 w-5 center absolute top-0 left-0 text-black text-[10px]"
            >{{n}}</span>
          </div>

          <div class="w-5/12 flex flex-col items-start justify-between gap-1">
            <span
              class="text-[9.18px] text-center font-medium min-w-[70px] bg-[#ffffff40] py-0.5 leading-3 px-1.5"
            >SKU90400</span>
            <span class="font-medium text-white text-[11px] md:text-xs">Huawei Smart Watch</span>
            <span class="font-light">$399.00</span>
          </div>

          <div class="w-5/12 flex flex-col items-start justify-between gap-1">
            <div class="flex items-center">
              <span class="w-[70px] leading-3">QTY:</span>
              <span class="leading-3 font-medium">129</span>
            </div>
            <div class="flex items-center">
              <span class="w-[70px] leading-3">REVENUE:</span>
              <span class="leading-3 font-medium">$51,471</span>
            </div>
            <div class="flex items-center">
              <span class="w-[70px] leading-3">PROFIT:</span>
              <span class="leading-3 font-medium">$15,471</span>
            </div>
          </div>
          <i class="las la-search -rotate-90 text-base hidden md:block" />
        </div>
      </div>
    </Card>
  </div>

  <div class="h-full">
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
            {{ item.details }}
          </span>
          <span class="w-3/12">{{ item.date }}</span>
          <div
            :class="[
              item.bg ? 'bg-primary text-black' : 'bg-[#ffffff40] text-white',

              ' text-[9.18px] font-medium min-w-[70px] center',
            ]"
          >{{ item.type }}</div>
          <i class="las la-search -rotate-90 hidden md:block" />
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
