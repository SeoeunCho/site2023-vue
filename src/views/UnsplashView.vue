<template>
  <section id="unsplash" class="container page">
    <div class="unsplash-inner">
      <div class="cont-title">
        <p>Unsplash Image</p>
        <h2>언스플래쉬 이미지</h2>
      </div>
      <UnsplashSlider :images="imgData" />

      <div class="unsplash-btn sch-area column">
        <UnsplashTag @search="searchImg" />
        <SearchComp @search="searchImg" />
      </div>

      <UnsplashCont :images="filteredImgData" />
    </div>
  </section>
</template>

<script setup>
import UnsplashSlider from '@/components/unsplash/UnsplashSlider.vue';
import UnsplashTag from '@/components/unsplash/UnsplashTag.vue';
import SearchComp from '@/components/layout/SearchComp.vue';
import UnsplashCont from '@/components/unsplash/UnsplashCont.vue';
import { ref, onMounted } from 'vue';

const imgData = ref([]);
const filteredImgData = ref([]);
const Access_Key = ref('7g-0ifB6k8Px9Y-6VjgUiAFuxIJ2Ab-Vw4k2sfKHH4I');

onMounted(() => {
  getImgList();
});

const getImgList = async () => {
  await fetch(`https://api.unsplash.com/photos?client_id=${Access_Key.value}&per_page=30&lang=ko`)
    .then((response) => response.json())
    .then((result) => {
      imgData.value = result;
      filteredImgData.value = result;
    })
    .catch((error) => console.log(error));
};

const searchImg = async (query) => {
  await fetch(`https://api.unsplash.com/search/photos?client_id=${Access_Key.value}&per_page=30&query=${query}&lang=ko`)
    .then((response) => response.json())
    .then((result) => {
      imgData.value = result.results;
      filteredImgData.value = result.results;
    })
    .catch((error) => {
      console.error('error', error);
    });
};
</script>

<style scoped lang="scss"></style>
