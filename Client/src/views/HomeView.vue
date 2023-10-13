<template>
  <main>
    <div class="relative">
      <Banner class="fix top-0 left-0 right-0"></Banner>
      <section class="main-content bg-slate-200">
        <div class="containe">
          <div class="py-12 w-9/12 h-4/6 flex flex-col m-auto">
            <div class="sm:flex md-flex-row justify-between w-full  mb-10">
              <ServiceOption v-for="(service,index) in serviceOption" :key="index" :serviceOption="service"></ServiceOption>
            </div>
            <div class="">
              <div class="top-deals">
                <div class="top-deals-header-wrap rounded-t-md">
                  <div class="text-[#fff] font-bold text-lg px-10 py-4">
                    Today's Deals
                  </div>
                </div>
                <div class="deals-container sm:grid  sm:grid-cols-2 md:grid-cols-3  gap-3 w-full py-8">
                  <DealCard v-for='item in items' :key='item.id' :items="item"></DealCard>
                </div>
              </div>
            </div>

            <div class="md:grid md:grid-cols-3 gap-8">
              <div class="card h-80 deals-img1 col-span-2  bg-[#fff] rounded-sm flex flex-row justify-start pl-10 hover:shadow-lg items-center mb-4">
                <!-- &nbsp -->
                <div>
                  <h1 class=" text-2xl md:text-4xl mb-4 text-white ">
                    Sales up to 75% off
                  </h1>
                  <div class="">
                    <button class="bg-[#6b26b7] hover:bg-[#7936c4] font-medium rounded-3xl shadow-sm py-3 px-6 text-white">
                      Shop sale item <i class=" ml-2 pi pi-arrow-right" style="font-size: 0.8rem"></i>
                    </button>
                  </div>
                </div>
                <!-- <div class="h-96 w-96"></div> -->
              </div>
              <div class="card h-80 deals-img2 max-h-full bg-[#fff] rounded-sm flex flex-row justify-start pl-10 hover:shadow-lg items-center">
                <!-- &nbsp -->
                <div class="">
                  <h1 class="text-2xl mb-3 font-semibold text-white ">
                    Trendy Accessories
                  </h1>
                  <div class="">
                    <button class="bg-[#6b26b7] hover:bg-[#7936c4] font-medium rounded-3xl shadow-sm py-3 px-5 text-white">
                      Shop Category  <i class=" ml-2 pi pi-arrow-right" style="font-size: 0.8rem"></i>
                    </button>
                  </div>
                </div>
                <!-- <div class="h-96 w-96"></div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue"
import 'primeicons/primeicons.css';
import Banner from "@/components/Banner.vue"
import DealCard from "@/components/DealCard.vue"
import ServiceOption from "../components/ServiceOption.vue";

import img1 from "../assets/images/banner/b4.webp"
import img2 from "../assets/images/banner/b17.webp"
import img3 from "../assets/images/banner/b7.webp"
import img4 from "../assets/images/banner/b17.webp"
import img5 from "../assets/images/banner/b4.webp"
import img6 from "../assets/images/banner/b10.webp"

const serviceOption = ref([
  {
    service : "Brand Store",
    icon : "pi pi-cart-plus",
    color: "#00beebf0"
  },
  {
    service : "Free delivery",
    icon : "pi pi-truck",
    color: "#212647f0"
  },
  {
    service : "Offline Store",
    icon : "pi pi-credit-card",
    color: "green"
  },
  {
    service : "Home Delivery",
    icon : "pi pi-briefcase",
    color: "#c7a74fd4"
  },
  {
    service : "24/7 Support",
    icon : "pi pi-inbox",
    color: "#00beebf0"
  }
])
const items = ref([
  {
    img: img1,
    id: 1,
    title: "Society Polo T- Shirt",
    price: "5,000",
    original_price: "10,000",
    discount: "50%"
  },
  {
    img: img2,
    id: 2,
    title: "Society Polo T- Shirt",
    price: "6,000",
    original_price: "10,000",
    discount: "50%"
  },
  {
    img: img3,
    id: 3,
    title: "Society Polo T- Shirt",
    price: "8,000",
    original_price: "10,000",
    discount: "50%"
  },
  {
    img: img4,
    id: 4,
    title: "Society Polo T- Shirt",
    price: "4,000",
    original_price: "10,000",
    discount: "50%"
  }, {
    img: img5,
    id: 5,
    title: "Society Polo T- Shirt",
    price: "5,000",
    original_price: "10,000",
    discount: "50%"
  }, {
    img: img6,
    id: 6,
    title: "Society Polo T- Shirt",
    price: "5,000",
    original_price: "10,000",
    discount: "50%"
  }
])

</script>


<style scoped>
.top-deals-header-wrap {
  background-image: linear-gradient(to right bottom,
      rgba(17, 35, 65, 0.8),
      rgba(0, 0, 0, 0.5)), url("@/assets/images/banner/b2.webp");
  background-position: 60% 30%;
  background-size: cover;
}
.deals-img1 {
  background-image: linear-gradient(to right bottom,
      rgba(10, 10, 05, 0.3),
      rgba(0, 0, 0, 0.2)), url("@/assets/images/banner/b22.webp");
  background-position: 60% 30%;
  background-size: cover;
}
.deals-img2 {
  background-image: linear-gradient(to right bottom,
      rgba(10, 10, 25, 0.4),
      rgba(0, 0, 0, 0.2)), url("@/assets/images/banner/b21.webp");
  background-position: 60% 30%;
  background-size: cover;
}
.card{
  /* height : 20rem; */
}
</style>
