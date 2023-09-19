<script setup>
import HeaderCont from '@/components/layout/HeaderCont.vue'
import FooterCont from '@/components/layout/FooterCont.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderCont />
  <RouterView />
  <FooterCont />
</template>
