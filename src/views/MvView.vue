<template>
  <section id="mv" class="container page">
    <div class="mv-inner">
      <div class="cont-title">
        <p>Music Video</p>
        <h2>뮤직비디오</h2>
      </div>

      <div class="mv-btn sch-area center">
        <MvTag @search="searchMvList" />
        <SearchComp @search="searchMvList" />
      </div>

      <MvCont :mv-list="filteredMvList" />
    </div>
  </section>
</template>

<script setup>
import MvTag from '@/components/mv/MvTag.vue';
import SearchComp from '@/components/layout/SearchComp.vue';
import MvCont from '@/components/mv/MvCont.vue';
import { decodeHTMLEntities } from '/public/assets/js/decodeText';
import { ref, onMounted, computed } from 'vue';

const mvData = ref([]);
const mvQuery = ref('mv m/v musicvideo officialvideo');
const Access_Key = ref('AIzaSyAjUxqgxAQqdMg0RAnLOlPYV4AM1DdroXM');

onMounted(() => {
  getMvList();
});

const getMvList = () => {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${mvQuery.value}&type=video&key=${Access_Key.value}`
  )
    .then((response) => response.json())
    .then((result) => {
      mvData.value = result.items.map((item) => ({
        ...item,
        snippet: {
          ...item.snippet,
          title: decodeHTMLEntities(item.snippet.title)
        }
      }));
    })
    .catch((error) => console.log('error', error));
};

const searchMvList = async (query) => {
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query + mvQuery.value}&type=video&key=${Access_Key.value}`
  )
    .then((response) => response.json())
    .then((result) => {
      mvData.value = result.items.map((item) => ({
        ...item,
        snippet: {
          ...item.snippet,
          title: decodeHTMLEntities(item.snippet.title)
        }
      }));
    })
    .catch((error) => console.log('error', error));
};

const filteredMvList = computed(() => {
  return mvData.value.filter((mv) => {
    const title = mv.snippet.title.toLowerCase();
    return (
      title.includes('mv') || title.includes('m/v') || title.includes('music video') || title.includes('official video')
    );
  });
});
</script>

<style scoped lang="scss"></style>
