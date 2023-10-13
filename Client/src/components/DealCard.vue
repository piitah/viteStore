<script setup>
import { ref } from "vue"
const props = defineProps({
  items: {
    type : Object
  }
})
</script>

<template>
  <div>
    <div class="card mb-4 shado bg-[#fff] rounded-sm flex flex-row justify-center hover:shadow-lg items-center py-2">
    <div class="deals-img w-1/2 mr-3">
        <img :src="items.img" :alt="items.title" class="w-fit h-fit">
    </div>
    <div class="deals-details">
        <div class="text-xs md:text-sm font-medium">
        {{items.title}}
        </div>
        <div class="mt-2 md:mt-4 "><span>₦</span>{{items.price}} <del class="text-[red] text-xs"><span>₦</span>{{items.original_price}}</del></div>
        <div class="text-[green] text-xs">
        You saved <span></span>{{items.discount}}
        </div>
    </div>
    </div>
</div>
</template>

<style scoped>
</style>
