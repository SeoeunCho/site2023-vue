<script setup>
import { IntroText } from '@/constants/index';
</script>

<template>
  <section id="intro" class="section">
    <h3 class="blind">음악 장르에 대한 소개</h3>
    <div class="intro__inner container">
      <div class="intro__title">
        <span>Music Genre by Artists</span>
        <h3 v-html="IntroText.title"></h3>
        <p v-html="IntroText.desc"></p>
      </div>
      <div class="intro__desc">
        <div v-for="(text, index) in IntroText.genres" :key="index">
          <h4 :class="'icon-bg' + (index + 1)">{{ text.title }}</h4>
          <p>
            {{ text.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../assets/scss/setting/mixin';

#intro {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: var(--subBg100);

  .intro__inner {
    display: flex;
    justify-content: space-between;
  }
  .intro__title {
    width: 33%;

    span {
      background-color: #ff3344;
      font-size: 14px;
      padding: 4px 30px 2px;
      color: #fff;
      border-radius: 40px;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: inline-block;
    }
    h3 {
      font-size: 50px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 30px;
    }
    p {
      font-size: 18px;
      line-height: 1.5;
      font-weight: 500;
    }
  }
  .intro__desc {
    width: 66%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    > div {
      width: 48%;
      margin-bottom: 40px;

      h4 {
        font-size: 24px;
        margin-bottom: 15px;
      }
      &:nth-child(3) {
        margin-bottom: 0;
      }
      &:nth-child(4) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
