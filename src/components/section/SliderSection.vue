<script setup>
import { sliderText } from '@/constants/index';
</script>

<template>
  <section id="slider" :style="`background-color: ${swiperBg}`">
    <div class="slider__inner">
      <swiper
        :slides-per-view="1"
        :space-8between="50"
        :pagination="{ clickable: true, type: 'fraction' }"
        :autoplay="{ delay: 3000, disableOnInteraction: true }"
        :speed="1000"
        :modules="modules"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(slider, index) in sliderText" :key="index">
          <div class="slider__img">
            <div class="slider s1">
              <div class="text">
                <h3 v-if="index === 0" v-html="slider.title" :style="{ color: 'var(--white)' }"></h3>
                <h3 v-if="index !== 0" v-html="slider.title"></h3>
                <p v-html="slider.desc"></p>
                <a :class="`more${index + 1} mr10`" :href="slider.link">{{ slider.linkText }} 바로가기</a>
                <a v-if="swiperIdx === 0" class="more1 mr10" :href="slider.link1">MV 바로가기</a>
                <a v-if="swiperIdx === 0" class="more1" :href="slider.link2">유튜브 바로가기</a>
              </div>
              <div class="img" aria-label="hidden">
                <img :src="slider.image2" alt="마이크" />
                <img :src="slider.image1" alt="유튜브" />
                <img :src="slider.image3" alt="헤드셋" />
              </div>
              <div class="circle" aria-label="hidden">
                <span class="circle c1"></span>
                <span class="circle c2"></span>
                <span class="circle c3"></span>
                <span class="circle c4"></span>
                <span class="circle c5"></span>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
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
      sliderText: sliderText,
      swiperIdx: 0,
      modules: [Autoplay, Pagination]
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiperBg() {
      return this.swiperIdx === 0 ? '#ffb3b7' : this.swiperIdx === 1 ? '#ffeca8' : '#eccfaf';
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange(swiper) {
      this.swiperIdx = swiper.realIndex;
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/setting/mixin';

#slider {
  padding: 180px 0px 85px;

  .slider__inner {
    position: relative;

    .swiper-pagination-current {
      font-weight: bold;
    }

    .slider__img {
      max-width: 1320px;
      margin: 0 auto;
      padding: 0px 185px;

      .slider {
        margin-top: 20px;
        position: relative;

        .text {
          h3 {
            font-size: 90px;
            font-weight: 800;
            text-transform: uppercase;
            line-height: 1;
            margin-bottom: 30px;

            em {
              color: #ff3344;
            }
            .youtube {
              color: #4857ec;
            }
            .movie {
              color: #00c183;
            }
          }
        }
        p {
          font-size: 18px;
          line-height: 1.3;
          margin-bottom: 50px;
          color: var(--color2);
        }
        a {
          display: inline-block;
          padding: 10px 30px;
          cursor: pointer;
          font-size: 16px;
          border-radius: 50px;
          margin-bottom: 100px;
        }
        .more1 {
          background-color: #fff;
          border: 2px solid #ff3344;
          color: #ff3344;

          &:hover {
            background-color: #ff3344;
            color: #fff;
          }
        }
        .more2 {
          background-color: #fff;

          border: 2px solid #4857ec;
          color: #4857ec;

          &:hover {
            background-color: #4857ec;
            color: #fff;
          }
        }
        .more3 {
          background-color: #fff;
          border: 2px solid #00c183;
          color: #00c183;

          &:hover {
            background-color: #00c183;
            color: #fff;
          }
        }
        .img {
          position: absolute;
          right: 0px;
          top: -10px;
          width: 450px;
          height: 480px;
          background-image: url(../../assets/img/icon/iconbg.png);
          background-size: cover;

          img {
            &:nth-child(1) {
              position: absolute;
              width: 230px;
              right: -45px;
              top: 130px;
            }
            &:nth-child(2) {
              position: absolute;
              width: 200px;
              bottom: 50px;
              left: 30px;
            }
            &:nth-child(3) {
              position: absolute;
              width: 270px;
              top: -30px;
              left: 10px;
            }
            &.camera {
              position: absolute;
              width: 320px;
              top: 40px;
              left: -30px;
            }
          }
        }

        .circle {
          span {
            display: block;
            position: absolute;
            left: 50%;
            top: 50%;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
          span:nth-child(1) {
            background-color: var(--button_blue);
            left: 50%;
            width: 10px;
            height: 10px;
          }
          span:nth-child(2) {
            background-color: var(--button_red);
            top: 20%;
            left: -10%;
            width: 40px;
            height: 40px;
          }
          span:nth-child(3) {
            background-color: var(--button_green);
            left: 104%;
            top: 10%;
          }
          span:nth-child(4) {
            background-color: var(--button_red);
            left: 17%;
            top: -10%;
            width: 10px;
            height: 10px;
          }
          span:nth-child(5) {
            background-color: var(--button_blue);
            left: 90%;
            top: 80%;
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>
