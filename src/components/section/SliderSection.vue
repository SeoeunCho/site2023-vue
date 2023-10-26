<script setup>
import { sliderSectionData } from '@/constants/index';
</script>

<template>
  <section id="main-visual">
    <div class="inner">
      <swiper
        class="main-swiper"
        ref="swiper"
        :slides-per-view="1"
        navigation
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true,
          type: 'fraction'
        }"
        :speed="1000"
        :modules="modules"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide class="banners" v-for="(slider, i) in sliderSectionData" :key="i">
          <div class="banner-img">
            <img class="pc" :src="slider.pcImg" :alt="slider.imgText" />
            <img class="mobile" :src="slider.mobileImg" :alt="slider.imgText" />
          </div>
          <div class="banner-text">
            <p class="sub-title">{{ slider.subTitle }}</p>
            <h3 v-html="slider.title" :style="titleColor"></h3>
            <p :class="`desc more${i + 1}`" v-html="slider.desc"></p>
            <router-link :class="`more${i + 1}`" :to="slider.link">{{ slider.linkText }} 바로가기</router-link>
          </div>
        </swiper-slide>
        <div class="right" @click="handleActive">
          <div class="swiper-start-btn txt-hidden" :class="{ on: isActive }">재생</div>
          <div class="swiper-pause-btn txt-hidden" :class="{ on: !isActive }">정지</div>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  data() {
    return {
      swiper: null,
      swiperIdx: 0,
      isActive: false,
      isPaused: false,
      modules: [Autoplay, Navigation, Pagination]
    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created() {},
  mounted() {
    /**
     * 스와이퍼 페이지네이션 부모태그 생성 후, 이 곳으로 요소들 이동
     * .controller 클래스에 담기, left/right div로 분리!
     *
     * 1. swiper 안에 모든 div 태그 찾아 마지막 요소 빼고 배열에 담기
     * 2. 요소를 담을 .controller div 태그 생성
     * 3. 기존 .right div 태그를 찾아 .controller에 삽입 후, 기존 태그 제거
     * 4. .left div 태그 생성해서 .controller 첫번째 자식(right) 앞에 삽입
     * 5. left에 남은 div 담기
     **/
    let children = document.querySelectorAll('.swiper > div');
    let childArray = [...children].slice(1, 4);
    let lastChild = childArray.pop();
    childArray.splice(1, 0, lastChild);

    let controlDiv = document.createElement('div');
    controlDiv.className = 'controller clear';

    let right = document.querySelector('.right');

    controlDiv.appendChild(right);

    let left = document.createElement('div');
    left.className = 'left';
    controlDiv.insertBefore(left, controlDiv.firstChild);

    let leftDiv = controlDiv.querySelector('.left');
    childArray.forEach((el) => {
      leftDiv.appendChild(el);
    });

    document.querySelector('.swiper').appendChild(controlDiv);
  },
  computed: {
    titleColor() {
      return this.swiperIdx !== 1 ? 'color: white;' : 'color: #5e53ff;';
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      console.log('onSwiper', swiper);
    },
    onSlideChange(swiper) {
      this.swiperIdx = swiper.realIndex;
    },
    handleActive() {
      this.isActive = !this.isActive;
      this.isPaused = !this.isPaused;
      this.isPaused ? this.swiper.autoplay.stop() : this.swiper.autoplay.start();
    }
  }
};
</script>

<style lang="scss">
@import '/public/assets/scss/setting/mixin';

.controller {
  position: absolute;
  width: 190px;
  height: 40px;
  bottom: 25px;
  left: 50%;
  z-index: 200;
  transform: translateX(-50%);

  .swiper-button-prev,
  .swiper-button-next,
  .swiper-start-btn,
  .swiper-pause-btn {
    background-color: rgb(255 255 255 / 20%);
    width: 40px;
    height: 40px;
    @include border(20px);
    float: left;
    margin-top: 0;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
  }

  .left {
    .swiper-button-prev,
    .swiper-button-next {
      left: 0;

      &::after {
        display: block;
        content: '';
        background-image: url(/assets/img/icon/arrow_left_w.png);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: center;
        width: 10px;
        height: 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &.style-lighten {
        background-color: rgb(0 0 0 / 30%);
      }
    }

    .swiper-pagination {
      line-height: 38px;
      float: left;
      width: auto;
      position: static;
      min-width: 60px;
      color: #888;

      .swiper-pagination-current {
        font-weight: bold;
        color: var(--white);

        &.style-lighten {
          color: #222;
        }
      }

      &.style-lighten {
        color: #666;
      }
    }

    .swiper-button-next {
      &::after {
        background-image: url(/assets/img/icon/arrow_right_w.png);
      }
    }
  }

  .right {
    .swiper-start-btn,
    .swiper-pause-btn {
      background-image: url(/assets/img/icon/btn_start.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: 12px auto;
      margin-left: 10px;
      display: none;

      &.on {
        display: block;
      }
    }
    .swiper-pause-btn {
      background-image: url(/assets/img/icon/btn_pause.png);
      background-size: 10px auto;
    }
  }
}

/* =======================================================
    반응형
========================================================*/
@media (max-width: 1024px) {
  .controller {
    bottom: 20px;
    height: 34px;
    width: 172px;

    .swiper-button-prev,
    .swiper-button-next,
    .swiper-start-btn,
    .swiper-pause-btn {
      width: 34px !important;
      height: 34px !important;
    }

    .right {
      .swiper-start-btn {
        background-size: 10px auto;
      }
      .swiper-pause-btn {
        background-size: 8px auto;
      }
    }
  }
}
</style>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';

#main-visual {
  transition: all 0.3s;
  .inner {
    max-width: 100%;
    overflow: hidden;
    padding: 0;
    height: 835px;
    background: var(--black);

    .main-swiper {
      width: 100%;
      height: 100%;
      position: relative;

      .banners {
        .banner-img {
          position: absolute;
          width: auto;
          height: 100%;
          overflow: hidden;

          .pc {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .mobile {
            display: none;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .banner-text {
          position: absolute;
          top: 285px;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 20px;

          .sub-title {
            color: var(--white);
            font-size: 30px;
            margin-bottom: 15px;
          }

          h3 {
            display: flex;
            font-size: 50px;
            font-weight: 900;
            text-transform: uppercase;
            line-height: 1;
            margin-bottom: 55px;
            margin-right: 10px;

            p {
              font-size: 50px;
            }
          }

          .desc {
            height: 130px;
            font-size: 24px;
            line-height: 1.4;
            color: var(--white);
          }

          a {
            display: inline-block;
            padding: 10px 30px;
            cursor: pointer;
            font-size: 20px;
            color: #fff;
            @include border(50px);

            &:hover {
              font-weight: bold;
            }

            &.more1 {
              background-color: var(--main-color);
              border: 2px solid var(--main-color);
            }
            &.more2 {
              background-color: #5e53ff;
              border: 2px solid #5e53ff;
            }
            &.more3 {
              background-color: #ff9f17;
              border: 2px solid #ff9f17;
            }
          }
        }
      }
    }
  }
}

/* =======================================================
    반응형
========================================================*/
@media (max-width: 1420px) {
  #main-visual {
    .inner {
      height: 640px;

      .main-swiper {
        .banners {
          .banner-text {
            top: 220px;
            max-width: 978px;

            .sub-title {
              font-size: 20px;
            }

            h3 {
              font-size: 45px;
              margin-bottom: 45px;
            }

            .desc {
              height: 100px;
              font-size: 18px;
            }

            a {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  #main-visual {
    .inner {
      height: auto;
      .main-swiper {
        .banners {
          .banner-img {
            position: relative;

            .pc {
              display: none !important;
            }

            .mobile {
              display: block !important;
            }
          }
          .banner-text {
            // top: 265px;
            top: 25.9vw;

            .sub-title {
              // font-size: 50px;
              font-size: 5vw;
              margin-bottom: 2.5vw;
            }

            h3 {
              display: grid;
              font-size: 8.5vw;
              margin-bottom: 2vw;
            }

            .desc {
              width: 23em;
              height: 24vw;
              line-height: 1.4;
              font-size: 4vw;
              word-break: keep-all;

              &.more2 {
                height: 13vw;
              }
              &.more3 {
                height: 19vw;
              }
            }

            a {
              font-size: 2.4vw;
              padding: 1vw 3vw;
            }
          }
        }
      }
    }
  }
}
</style>
