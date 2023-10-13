<template>
    <main>
        <div
            class="w-30 md:w-52 mb-3 h-12  bg-white shadow-lg rounded flex items-center font-medium text-xs md:text-sm text-[#6b6366]">
            <div class=" flex mx-auto items-center justify-center flex-1">
                <i class="mr-2" :class="serviceOption.icon" :style="{ color: serviceOption.color }"></i>
                {{ serviceOption.service }}
            </div>
        </div>
    </main>
</template>

<script setup>
const props = defineProps({
    serviceOption: {
        type: Object
    }
})
</script>
<style scoped></style>