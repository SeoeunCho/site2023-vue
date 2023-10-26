<script setup>
import { movieSectionData } from '@/constants/index';
</script>

<template>
  <section id="movie" class="section center">
    <div class="movie-inner container">
      <h3 v-html="movieSectionData.title"></h3>
      <p v-html="movieSectionData.desc"></p>

      <div class="slider">
        <swiper
          :slidesPerView="3"
          :centeredSlides="true"
          :spaceBetween="20"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: false
          }"
          :pagination="{
            clickable: true
          }"
          :speed="1000"
          :loop="true"
          :modules="modules"
          :breakpoints="{
            '1024': {
              slidesPerView: 5
            }
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(slider, i) in movieSectionData.data" :key="i">
            <div class="movie-item">
              <a :href="slider.link">
                <img :src="slider.img" alt="영화" />
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <router-link to="/movie" class="more-btn">전체보기</router-link>
    </div>
  </section>
</template>

<script>
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      modules: [Autoplay, Pagination]
    };
  },
  components: {
    Swiper,
    SwiperSlide
  }
};
</script>

<style lang="scss">
.slider {
  .swiper-slide {
    transition: all 0.3s;
    transform: scale(1);
    opacity: 0.5;

    &.swiper-slide-active {
      transform: scale(1.3);
      z-index: 2;
      opacity: 1;
    }
  }
}
</style>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';

#movie {
  background-color: var(--subBg500);

  .movie-inner {
    .swiper {
      padding: 59px 0 100px;
      margin-bottom: 10px;

      .movie-item {
        width: 100%;
        height: 345.82px;

        img {
          width: 100%;
          height: 100%;
          @include border(20px);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
/* =======================================================
    반응형
========================================================*/
@media (max-width: 1320px) {
  #movie {
    .movie-inner {
      .movie-item {
        height: 25.5vw !important;
      }
    }
  }
}

@media (max-width: 1024px) {
  #movie {
    .movie-inner {
      .swiper {
        padding: 68px 0 120px;

        .movie-item {
          height: 45.5vw !important;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  #movie {
    .movie-inner {
      .swiper {
        padding: 50px 0 120px !important;
      }
    }
  }
}
</style>
