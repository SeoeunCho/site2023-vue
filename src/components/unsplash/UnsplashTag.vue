<script setup>
import { unsplashTagData } from '@/constants/index';
</script>

<template>
  <div class="btn-box">
    <button
      v-for="(tag, index) in unsplashTagData"
      :key="index"
      :class="{
        activeBk: tag.name === '전체' && activeTag === '전체',
        active: tag.name !== '전체' && tag.name === activeTag
      }"
      @click="btnClick(tag.name)"
    >
      {{ tag.name }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      activeTag: '전체' // 액티브 태그를 저장할 속성 추가
    };
  },
  methods: {
    btnClick(tag) {
      this.activeTag = tag; // 클릭한 태그를 액티브 태그로 설정
      if (this.activeTag === '전체') tag = 'all';
      this.onSearch(tag);
    }
  }
};
</script>

<style scoped lang="scss">
.unsplash-btn {
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
