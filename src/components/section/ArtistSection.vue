<script setup>
import { artistSectionData } from '@/constants/index';
</script>

<template>
  <section id="artist" class="section center">
    <h3 class="txt-hidden">장르별 아티스트 섹션</h3>
    <div class="artist-inner container">
      <h3 v-html="artistSectionData.title"></h3>
      <p v-html="artistSectionData.desc"></p>
      <router-link to="/artist" class="button-pink">자세히 보기</router-link>
      <div class="artist-desc">
        <div v-for="(genre, i) in artistSectionData.genres" :key="i">
          <h4 :class="'icon-bg' + (i + 1)">{{ genre.title }}</h4>
          <p>{{ genre.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '../../assets/scss/setting/mixin';

#artist {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: var(--subBg100);

  .artist-desc {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: calc(50% - 20px);
      margin-right: 40px;
      margin-bottom: 40px;
      padding: 30px 25px;
      border-radius: 20px;
      background-color: #fff;
      box-sizing: border-box;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

      &:nth-child(2n) {
        margin-right: 0;
      }

      h4 {
        font-size: 24px;
        font-weight: bold;
        color: #222;
        word-break: keep-all;
        margin-bottom: 20px;
      }
      &:nth-child(3) {
        margin-bottom: 0;
      }
      &:nth-child(4) {
        margin-bottom: 0;
      }

      p {
        color: var(--black100);
      }
    }
  }
}
</style>
