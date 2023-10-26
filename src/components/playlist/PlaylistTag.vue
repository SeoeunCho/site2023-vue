<script setup>
import { playlistTagData } from '@/constants/index';
</script>

<template>
  <div class="tag-box">
    <div class="btn-box" v-for="(tag, i) in playlistTagData" :key="i">
      <button
        :class="{
          activeBk: tag.name === '전체' && activeTag === '전체',
          active: tag.name !== '전체' && tag.name === activeTag
        }"
        @click="btnClick(tag.name)"
      >
        {{ tag.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['onSearch'],
  data() {
    return {
      activeTag: '전체' // 선택된 태그를 저장할 데이터
    };
  },
  created() {},
  methods: {
    btnClick(tag) {
      this.activeTag = tag; // 선택된 태그를 activeTag에 설정
      if (this.activeTag === '전체') tag = 'playlist 플레이리스트 모음';
      this.onSearch(tag);
    }
  }
};
</script>

<style scoped lang="scss">
.playlist-btn {
  div {
    > div {
      display: inline-block;
      margin-bottom: 10px;
      margin-right: 10px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
}
</style>
