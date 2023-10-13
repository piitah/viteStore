<template>
        <div class="relative">
                <nav class="nav bg-[#fff] shadow-md">
                        <div class=" flex flex-row justify-between items-center py-4 mx-32">
                                <router-link to="/">
                                        <h2 class="nav-title font-bold text-2xl text-black-800 flex flex-row ">

                                                <svg class="fill-current h-8 w-8 mr-2" width="54" height="54"
                                                        viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
                                                </svg>
                                                Gra<i class="text-[#41a1bb]">ce</i> Store
                                        </h2>
                                </router-link>
                                <div class="nav-links flex flex-row text-Neutral-50 items-center">
                                        <div class="link ml-2 px-3 py-1 rounded-sm text-sm font-bold">
                                                <i class="pi pi-search icon"></i>
                                        </div>
                                        <router-link to="/cart" class="link ml-2 px-3 py-1 rounded-sm text-xl font-extrabold">
                                                <i class="pi pi-shopping-cart icon"></i>
                                        </router-link>
                                        <router-link to="/login" class="link ml-2 px-3 py-1 text-sm font-bold">
                                                <i class="pi pi-user icon"></i>
                                        </router-link>
                                </div>
                        </div>
                </nav>
        </div>
</template>

<script setup>
import Toolbar from "primevue/toolbar"
import Button from "primevue/button"
</script>

<style scoped>
.nav-title {
        color: #000000
}

.nav-links {
        color: #000000
}

.link {
        cursor: pointer;
}

.icon {
        font-weight: bold;
        font-size: 1.1rem;
}

.icon:hover {
        color: red;
}
</style>