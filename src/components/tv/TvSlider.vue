<template>
  <div className="tv-slider">
    <swiper
      :slides-per-view="1"
      navigation
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="1000"
      :loop="true"
      :modules="modules"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(tv, index) in tvPrograms" :key="index">
        <a :href="`https://www.themoviedb.org/tv/${tv.id}?language=ko-KR`" target="_blank">
          <img :src="`https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}`" :alt="tv.name" />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
export default {
  props: {
    tvPrograms: {
      type: Array,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide
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
      modules: [Navigation, Autoplay]
    };
  }
};
</script>
<style scoped lang="scss">
.tv-slider {
  margin-bottom: 100px;

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img {
      object-fit: cover;
      // object-fit: cover;
      width: 1500px;
      height: 750px;
    }
  }
}
</style>
