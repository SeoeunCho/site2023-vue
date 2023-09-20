<script setup>
import HeaderCont from '@/components/layout/HeaderCont.vue'
import FooterCont from '@/components/layout/FooterCont.vue'
import ScrollTop from '@/components/layout/ScrollTop.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderCont />
  <RouterView />
  <FooterCont />
  <ScrollTop />
</template>
