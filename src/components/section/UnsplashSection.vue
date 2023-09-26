<script setup>
import { unsplashSectionData } from '@/constants/index';
</script>

<template>
  <section id="unsplash" class="section center">
    <div class="unsplash-inner container">
      <h3>고화질 이미지 제공</h3>
      <p>
        Unsplash에 있는 고화질 <strong>이미지</strong>를 검색하고 <br />상업적 용도 외에 무료 사용 & 다운로드가
        가능합니다!
      </p>
      <router-link to="/unsplash" class="button-yellow"> 자세히 보기 </router-link>

      <swiper
        :slidesPerView="3"
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
        <swiper-slide v-for="(slider, i) in unsplashSectionData" :key="i">
          <div class="unsplash-item">
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

#unsplash {
  background-color: var(--subBg400);

  .unsplash-inner {
    .unsplash-item {
      width: 100%;
      height: 271px;

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
