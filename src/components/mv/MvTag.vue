<script setup>
import { mvTagData } from '@/constants/index';
</script>

<template>
  <div class="btn-box" v-for="(row, i) in dividedTags" :key="i">
    <h2 class="txt-hidden">뮤비태그</h2>
    <template v-for="(tag, i) in row" :key="i">
      <button :class="{ active: tag.name === activeTag }" @click="btnClick(tag.name)">
        {{ tag.name }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTag: '' // 선택된 태그를 저장할 데이터
    };
  },
  computed: {
    dividedTags() {
      const chunkSize = 7; // 한 줄에 표시할 버튼 수
      const dividedList = [];
      let currentRow = [];

      for (let i = 0; i < mvTagData.length; i++) {
        currentRow.push(mvTagData[i]);

        if (currentRow.length === chunkSize) {
          dividedList.push(currentRow);
          currentRow = [];
        }
      }

      if (currentRow.length > 0) {
        dividedList.push(currentRow);
      }
      return dividedList;
    }
  },
  methods: {
    btnClick(tag) {
      this.activeTag = tag; // 선택된 태그를 activeTag에 설정
      this.$emit('search', tag);
    }
  }
};
</script>

<style scoped lang="scss">
.mv-btn {
  div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
