<template>
  <!-- <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :effect="'cube'"
    :cubeEffect="{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
    /></swiper-slide>
  </swiper> -->
  <!-- <span @click="setFullsreen">全屏</span> -->
  <div>
    <span>{{ currentTime.hours }}: {{ currentTime.min }}</span>
    <span>2022年04月26日</span>
  </div>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";

import "./style.css";
import { reactive, ref } from "vue";

// import required modules
// import { Autoplay, EffectCube } from "swiper";

// const modules = [Autoplay, EffectCube];
// function setFullsreen() {
//   if (document.documentElement.requestFullscreen) { // W3C API
// 		document.documentElement.requestFullscreen();
// 	} else if (document.documentElement.mozRequestFullScreen) { // Mozilla current API
// 		document.documentElement.mozRequestFullScreen();
// 	} else if (document.documentElement.webkitRequestFullScreen) { // Webkit current API
// 		document.documentElement.webkitRequestFullScreen();
// 	}
// }
const currentTime = reactive({
  hours: new Date().getHours(),
  min: new Date().getMinutes(),
});
setInterval(() => {
  currentTime.hours = new Date().getHours();
  currentTime.min = new Date().getMinutes();
}, 1000);
</script>
