<template>
  <div class="playlist-search">
    <h2 class="txt-hidden">검색하기</h2>
    <div class="search-box">
      <input ref="inputRef" @keypress="onKeyPress" type="search" placeholder="검색어를 입력하세요." />
      <button type="submit" @click="onClick"></button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.inputRef = this.$refs.inputRef;
    });
  },
  methods: {
    handleSearch() {
      const value = this.inputRef.value;
      this.onSearch(value);
    },
    onKeyPress(event) {
      if (event.key === 'Enter') {
        this.handleSearch();
      }
    },
    onClick() {
      this.handleSearch();
    }
  },
  data() {
    return {
      inputRef: null
    };
  },
  props: {
    onSearch: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/setting/mixin';

.playlist-search {
  margin-top: 30px;
  width: 100%;
  height: auto;

  .search-box {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 45px;

    input {
      width: 300px;
      height: 45px;
      padding: 0 50px 0 15px;
      background-color: #f7f7f7;
      border: none;
      font-size: 16px;
      color: #222;
      box-sizing: border-box;
      @include border(10px);
    }
    button {
      position: absolute;
      top: 0;
      right: 15px;
      width: 30px;
      height: 45px;
      background-image: url(../../assets/img/icon/btn_search.png);
      background-color: transparent;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 20px auto;
      cursor: pointer;
    }
  }
}
</style>
