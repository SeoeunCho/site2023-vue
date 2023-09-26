<template>
  <section id="playlist" class="container page">
    <div class="playlist-inner">
      <div class="cont-title">
        <p>Playlist</p>
        <h2>플레이리스트</h2>
      </div>

      <div class="playlist-btn sch-area center">
        <PlaylistTag @search="searchPlaylist" />
        <SearchComp @search="searchPlaylist" />
      </div>

      <PlaylistCont :playlists="filteredPlaylist" />
    </div>
  </section>
</template>

<script setup>
import PlaylistTag from '@/components/playlist/PlaylistTag.vue';
import SearchComp from '@/components/layout/SearchComp.vue';
import PlaylistCont from '@/components/playlist/PlaylistCont.vue';
import { ref, computed } from 'vue';

const playlistData = ref([]);
const Access_Key = ref('AIzaSyAjUxqgxAQqdMg0RAnLOlPYV4AM1DdroXM');

const getPlaylist = () => {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=playlist&type=video&key=${Access_Key.value}`
  )
    .then((response) => response.json())
    .then((result) => {
      playlistData.value = result.items.map((item) => ({
        ...item,
        snippet: {
          ...item.snippet,
          title: removeSpecialCharacters(item.snippet.title)
        }
      }));
    })
    .catch((error) => console.log(error));
};
getPlaylist();

const searchPlaylist = async (query) => {
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=${Access_Key.value}`
  )
    .then((response) => response.json())
    .then((result) => {
      playlistData.value = result.items.map((item) => ({
        ...item,
        snippet: {
          ...item.snippet,
          title: removeSpecialCharacters(item.snippet.title)
        }
      }));
    })
    .catch((error) => console.log('error', error));
};

const removeSpecialCharacters = (text) => {
  const regex = /[^\w\sㄱ-ㅎㅏ-ㅣ가-힣]/g;
  return text.replace(regex, '');
};

const filteredPlaylist = computed(() => {
  return playlistData.value.filter((mv) => {
    const title = mv.snippet.title.toLowerCase();
    return title.includes('playlist') || title.includes('플레이리스트') || title.includes('모음');
  });
});
</script>

<style scoped lang="scss"></style>
