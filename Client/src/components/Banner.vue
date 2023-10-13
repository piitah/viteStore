<script setup>
const i  = 0
</script>

<template>
    <div class="containe main-container">
      <div class="banner-wrap">
        <div class="banner-content text-[#fff]  w-9/12 h-full flex flex-row justify-between items-center">
          <div class="banner-content-l">
            <!-- <div class="text-[#fff] font-small text-sm">Shop vibrant kitwear to beat the winter blues</div> -->
            <h2 class="banner-sub-text2 text-5xl font-bold text-[#00beebf0] py-2">
              NEW COLLECTION 2023
            </h2>
            <h2 class="banner-sub-text2 text-2xl font-bold text-[#c7a74fd4]">
              Super Value deal on all product
            </h2>
            <div class="pb-12">Save more with coupons & get up to 70% off!</div>
            <button class="bg-[#41a1bb] hover:bg-[#41a1bb] text-white font-bold py-3 px-16 rounded-xl">
              Shop with us
            </button>
          </div>
          <div class="banner-content-r flex items-end justify-end ">
            <img class="w-3/4 h-3/4 m" src="../assets/images/empty-cart.svg" alt="Sunset in the mountains">
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>
.main-container {
  position : relative;
}
.banner-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 68px);
  background-image: linear-gradient(
      to right bottom,
      rgba(17, 35, 65, 0.8),
      rgba(0, 0, 0, 0.5)
    ),url("@/assets/images/banner/b20.jpg");
  background-position: 60% 30%;
  background-size: cover;
  z-index:200
}
.banner-content-l{
  width: 100% !important;
}
.banner-sub-text2-- {
  color: #fff;
  font-size: 2.2rem
}
</style>
