<script setup>
import { sliderSectionData } from '@/constants/index';
</script>

<template>
  <section id="slider">
    <div class="slider-inner">
      <swiper
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
        <swiper-slide v-for="(slider, i) in sliderSectionData" :key="i">
          <div class="slider-cont">
            <div class="slider-box">
              <div class="slider-text">
                <p class="sub-title">{{ slider.subTitle }}</p>
                <h3 v-html="slider.title" :style="titleColor"></h3>
                <p class="desc" v-html="slider.desc"></p>
                <a :class="`more${i + 1} mr10`" :href="slider.link">{{ slider.linkText }} 바로가기</a>
              </div>
              <div class="slider-img" aria-label="hidden">
                <img :src="slider.image2" />
                <img :src="slider.image1" />
                <img :src="slider.image3" />
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
    controlDiv.className = 'controller';

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
      return this.swiperIdx !== 1 ? 'color: white;' : 'color: #494693;';
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log('onSwiper', swiper);
    },
    onSlideChange(swiper) {
      if (this.isPaused) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      this.swiperIdx = swiper.realIndex;
    },
    handleActive() {
      this.isActive = !this.isActive;
      this.isPaused = !this.isPaused;

      console.log('2===', this.isPaused);
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/setting/mixin';

#slider {
  background-color: #080808;

  .slider-inner {
    position: relative;

    .slider-cont {
      max-width: 1320px;
      margin: 0 auto;
      padding: 0px 185px;

      .slider-box {
        position: relative;
        margin: 215px 0px 134px;

        .slider-text {
          .sub-title {
            color: var(--white);
            font-size: 22px;
            margin-bottom: 10px;
          }

          h3 {
            display: flex;
            font-size: 50px;
            font-weight: 900;
            text-transform: uppercase;
            line-height: 1;
            margin-bottom: 45px;
            margin-right: 10px;
          }

          .desc {
            height: 110px;
            font-size: 18px;
            line-height: 1.5;
            color: var(--white);
          }

          a {
            display: inline-block;
            padding: 10px 30px;
            cursor: pointer;
            font-size: 16px;
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
              background-color: #494693;
              border: 2px solid #494693;
            }
            &.more3 {
              background-color: #ff9f17;
              border: 2px solid #ff9f17;
            }
          }
        }

        .slider-img {
          position: absolute;
          right: 0px;
          top: -90px;
          width: 450px;
          height: 480px;
          background-image: url(../../assets/img/icon/iconbg.png);
          background-size: cover;
          background-position: 0px 20px;

          img {
            &:nth-child(1) {
              position: absolute;
              width: 230px;
              right: -45px;
              top: 180px;
            }
            &:nth-child(2) {
              position: absolute;
              width: 200px;
              bottom: 50px;
              left: 30px;
            }
            &:nth-child(3) {
              position: absolute;
              width: 250px;
              top: 0px;
              left: 80px;
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
            @include border(50%);
          }
          span:nth-child(1) {
            background-color: var(--button_blue);
            left: 55%;
            top: 120px;
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
            left: 80%;
            top: 110%;
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    .controller {
      position: absolute;
      width: 190px;
      height: 40px;
      bottom: 25px;
      left: 50%;
      // bottom: 120px;
      // left: calc(50% - 640px);
      z-index: 200;
      transform: translateX(-50%);

      @media (max-width: 1420px) {
        // bottom: 100px;
        // left: calc(50% - 495px);
      }

      &::after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        clear: both;
      }

      .swiper-button-prev,
      .swiper-button-next,
      .swiper-start-btn,
      .swiper-pause-btn {
        background-color: rgb(255 255 255 / 20%);
        width: 40px;
        height: 40px;
        border-radius: 20px;
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
            background-image: url(@/assets/img/icon/arrow_left_w.png);
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
            background-image: url(@/assets/img/icon/arrow_right_w.png);
          }
        }
      }

      .right {
        .swiper-start-btn,
        .swiper-pause-btn {
          background-image: url(@/assets/img/icon/btn_start.png);
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
          background-image: url(@/assets/img/icon/btn_pause.png);
          background-size: 10px auto;
        }
      }
    }
  }
}
</style>
