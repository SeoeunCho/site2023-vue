<script setup>
import { movieSectionData } from '@/constants/index';
</script>

<template>
  <section id="movie" class="section center">
    <div class="movie-inner container">
      <h3>최신영화와 TV프로그램까지</h3>
      <p>
        전 세계의 모든 <strong>영화 & TV 프로그램</strong>을 검색하고<br />작품들의 상세정보까지 한 눈에 확인해보세요!
      </p>
      <router-link to="/movie" class="button-blue"> 자세히 보기 </router-link>

      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :speed="1000"
        :loop="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(slider, i) in movieSectionData" :key="i">
          <div class="movie-item">
            <a :href="slider.src">
              <img :src="slider.img" alt="이미지" />
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Autoplay, Navigation]
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/setting/mixin';

#movie {
  background-color: var(--subBg500);

  .movie-inner {
    .movie-item {
      width: 100%;
      height: 446px;

      img {
        width: 100%;
        height: 100%;
        @include border(20px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
    }
  }
}
</style>
