<script setup>
import HeaderCont from '@/components/layout/HeaderCont.vue';
import FooterCont from '@/components/layout/FooterCont.vue';
import ScrollTop from '@/components/layout/ScrollTop.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <HeaderCont />
  <RouterView />
  <FooterCont />
  <ScrollTop />
</template>

<script>
export default {
  watch: {
    /** 라우터 변경 감지
     * 1. 헤더 CSS 변경
     * 2. Scroll to Top
     */
    $route(to, from) {
      this.$store.state.headerClass = to.path !== '/' ? true : false;
      if (to.path !== from.path) window.scrollTo({ top: 0 });
    }
  }
};
</script>

<style lang="scss"></style>
