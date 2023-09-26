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
        <div class="slide-content">
          <img :src="image.urls.regular" :alt="image.alt_description" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, A11y, Autoplay]
    };
  }
};
</script>

<style scoped lang="scss">
.unsplash-slider {
  .swiper {
    padding: 0;
  }
  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
}
.slide-content {
  padding: 40px 0 80px;
  img {
    display: block;
    width: 600px;
    height: 600px;
  }
}
.swiper {
  overflow: visible;
}
</style>
