<template>
  <div className="tv-slider">
    <swiper
      :slides-per-view="1"
      navigation
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="1000"
      :loop="true"
      :modules="modules"
    >
      <swiper-slide v-for="(tv, index) in tvPrograms" :key="index">
        <a :href="`https://www.themoviedb.org/tv/${tv.id}?language=ko-KR`" target="_blank">
          <img
            :src="
              tv.backdrop_path
                ? `https://image.tmdb.org/t/p/w1280/${tv.backdrop_path}`
                : '/assets/img/icon/skeleton_tmdb.png'
            "
            :alt="tv.name"
          />
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
    return {
      modules: [Navigation, Autoplay]
    };
  }
};
</script>
<style scoped lang="scss">
.tv-slider {
  margin-bottom: 80px;

  a {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
}
</style>
