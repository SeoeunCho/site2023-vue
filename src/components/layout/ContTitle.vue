<template>
  <div class="cont-title">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/setting/mixin';

.cont-title {
  h2 {
    text-align: center;
    font-size: 5vw;
    text-transform: uppercase;
    font-weight: bold;
  }
}
</style>
