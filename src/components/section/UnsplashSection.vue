<script setup>
import { unsplashSectionData } from '@/constants/index';
</script>

<template>
  <section id="unsplash" class="section center">
    <div class="unsplash-inner container">
      <h3 v-html="unsplashSectionData.title"></h3>
      <p v-html="unsplashSectionData.desc"></p>

      <div class="slider">
        <swiper
          :slidesPerView="1"
          :centeredSlides="true"
          :spaceBetween="0"
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
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
          class="mySwiper"
        >
          <swiper-slide v-for="(slider, i) in unsplashSectionData.data" :key="i">
            <div class="unsplash-item">
              <a :href="slider.link">
                <img :src="slider.img" alt="이미지" />
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <router-link to="/unsplash" class="more-btn">이미지 더보기</router-link>
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

  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #000 !important;
    }
  }
}
</style>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';

#unsplash {
  background-color: var(--subBg400);

  .unsplash-inner {
    .swiper {
      padding: 59px 0 100px;
      margin-bottom: 10px;

      .unsplash-item {
        width: 100%;
        height: auto;

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

@media (max-width: 1024px) {
  #unsplash {
    .unsplash-inner {
      .slider {
        .swiper {
          padding: 0 0 50px 0;

          .swiper-slide {
            opacity: 1;

            &.swiper-slide-active {
              transform: scale(1);
            }

            .unsplash-item {
              height: auto !important;
            }
          }
        }
      }
    }
  }
}
</style>
