<template>
  <div class="unsplash-slider">
    <swiper
      :loop="true"
      :modules="modules"
      :slides-per-view="3"
      :speed="3000"
      :space-between="10"
      :autoplay="{
        delay: 0,
        disableOnInteraction: false
      }"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <a :href="`https://unsplash.com/photos/${image.id}`" target="_blank">
          <img
            :src="image.urls.regular ? image.urls.regular : '/assets/img/icon/skeleton_tmdb.svg'"
            :alt="image.alt_description"
          />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {
      modules: [Autoplay]
    };
  }
};
</script>

<style scoped lang="scss">
.unsplash-slider {
  .swiper {
    overflow: visible;
    padding: 0;
  }
  a {
    display: inline-block;
    padding: 40px 0 80px;

    img {
      object-fit: cover;
      width: 600px;
      height: 550px;

      @media (max-width: 1200px) {
        height: 450px;
      }

      @media (max-width: 1024px) {
        height: 350px;
      }

      @media (max-width: 640px) {
        height: 200px;
      }
    }
  }
}
</style>
