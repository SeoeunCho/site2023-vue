<template>
  <div class="btn-box">
    <h2 class="txt-hidden">플레이리스트 태그</h2>
    <button
      v-for="(tag, i) in playlistTags"
      :key="i"
      :class="{ active: tag.name === activeTag }"
      @click="btnClick(tag.name)"
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
      playlistTags: [
        { name: 'K-POP' },
        { name: '팝송' },
        { name: '힙합' },
        { name: '알앤비' },
        { name: '플레이리스트' }
      ],
      activeTag: '' // 선택된 태그를 저장할 데이터
    };
  },
  methods: {
    btnClick(name) {
      this.activeTag = name; // 선택된 태그를 activeTag에 설정
      this.onSearch(name);
    }
  }
};
</script>

<style scoped lang="scss">
.playlist-btn {
  div {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>
