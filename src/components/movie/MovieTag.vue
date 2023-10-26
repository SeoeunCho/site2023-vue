<script setup>
import { movieTagData } from '@/constants/index';
</script>

<template>
  <div class="btn-box">
    <button
      v-for="(tag, index) in movieTagData"
      :key="index"
      :class="{ active: tag.name === activeTag }"
      @click="btnClick(tag.name, tag.eng)"
    >
      {{ tag.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: ['onSearch'],
  data() {
    return {
      activeTag: '인기 영화' // 액티브 태그를 저장할 속성 추가
    };
  },
  methods: {
    btnClick(tag, eng) {
      this.activeTag = tag; // 클릭한 태그를 액티브 태그로 설정
      this.onSearch(eng);
    }
  }
};
</script>

<style lang="scss">
@import '/public/assets/scss/setting/mixin';

.movie-btn {
  div {
    &:last-child {
      margin-bottom: 0px;
    }

    @media (max-width: 500px) {
      button {
        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
