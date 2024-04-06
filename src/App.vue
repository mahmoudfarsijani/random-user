<template>
  <div class="w-full h-screen bg-slate-300">
    <div
      class=" text-center py-[20px] capitalize font-ss text-6xl cursor-pointer"
    >
      <swiper
     
        :slides-per-view="1"
        :space-between="50"
        navigation
        :loop="true"
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Hello world!</swiper-slide>
        <swiper-slide>No world!</swiper-slide>
        <swiper-slide>fuck world:)</swiper-slide>
      </swiper>
    </div>
    <div class="main flex flex-col justify-center items-center h-[679px]">
      
      <div >
        <CardUser :user="users"/>
      </div>

      <Button
        tag="button"
        :is-icon-only="false"
        icon="user"
        @click="fetching()"
        class="mt-[30px]"
      >
        random user
      </Button>
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import axios from "axios";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Button from "@/components/Button.vue";
import Ul from "@/components/Ul.vue";
import CardUser from "@/components/CardUser.vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { computed, ref } from "vue";
import { object } from "vue-types";

const userData = ref(null);
const users = ref({});
const url = "https://randomuser.me/api/";

const dataFetching =  () => {
  fetch(url).
    then(response => response.json()).
    then(data => data.results[0]).
    then(item => {let itemData = item;
      users.value = itemData
    })
};

const fetching = () => {
  dataFetching()
}
console.log(users.value);

//      swiper   -------------------
const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log("slide change");
};
 
</script>
