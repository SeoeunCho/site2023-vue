<script setup>
import { tvTagData } from '@/constants/index';
</script>

<template>
  <div class="btn-box left">
    <h2 class="txt-hidden">TV 프로그램 태그</h2>
    <button
      v-for="(tag, index) in tvTagData"
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
      activeTag: '인기 TV 프로그램' // 액티브 태그를 저장할 속성 추가
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
@import '../../assets/scss/setting/mixin';

.tv-btn {
  div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
