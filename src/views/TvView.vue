<template>
  <section id="tv" class="container page">
    <div class="tv-inner">
      <div class="cont-title">
        <p>TV Program</p>
        <h2>TV 프로그램</h2>
      </div>
      <TvSlider :tv-programs="tvData" />

      <div class="tv-btn sch-area column">
        <TvTag @search="tvTags" />
        <SearchComp @search="searchTv" :class="'right'" />
      </div>

      <TvCont :tv-programs="tvData" />
    </div>
  </section>
</template>

<script setup>
import TvSlider from '@/components/tv/TvSlider.vue';
import TvTag from '@/components/tv/TvTag.vue';
import SearchComp from '@/components/layout/SearchComp.vue';
import TvCont from '@/components/tv/TvCont.vue';
import { ref, onMounted } from 'vue';

const tvData = ref([]);
const Access_Key = ref('efda67ba4c84b7ab2902a9f3d4ac971e');

onMounted(() => {
  getTvList();
});

const getTvList = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${Access_Key.value}&language=ko-KR`);
    const result = await response.json();
    tvData.value = result.results;
  } catch (error) {
    console.log('error', error);
  }
};

const tvTags = async (tag) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/tv/${tag}?api_key=${Access_Key.value}&language=ko-KR`);
    const result = await response.json();
    tvData.value = result.results;
  } catch (error) {
    console.log('error', error);
  }
};

const searchTv = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${Access_Key.value}&language=ko-KR&query=${query}`
    );
    const result = await response.json();
    tvData.value = result.results;
  } catch (error) {
    console.log('error', error);
  }
};
</script>

<style lang="scss"></style>
