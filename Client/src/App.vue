<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
  <div class=" bg-slate-200">
    <Header></Header>
    <RouterView />
    <Footer/>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height:100%;
}
</style>
