<template>
  <div class="search">
    <h2 class="txt-hidden">검색하기</h2>
    <div class="search-box">
      <input ref="inputRef" @keypress="onKeyPress" type="search" placeholder="검색어를 입력해주세요." />
      <button type="submit" @click="onClick"></button>
    </div>
  </div>
</template>

<script>
export default {
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
  },
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
  }
};
</script>

<style scoped lang="scss"></style>
