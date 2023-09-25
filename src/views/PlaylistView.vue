<template>
  <section id="playlist" class="container page">
    <div class="playlist-inner">
      <div class="cont-title">
        <p>Playlist</p>
        <h2>플레이리스트</h2>
      </div>

      <div class="playlist-btn sch-area center">
        <PlaylistTag @search="SearchPlaylist" />
        <PlaylistSearch @search="SearchPlaylist" />
      </div>

      <PlaylistCont :playlists="playlists" />
    </div>
  </section>
</template>

<script setup>
import PlaylistSearch from '@/components/playlist/PlaylistSearch.vue';
import PlaylistTag from '@/components/playlist/PlaylistTag.vue';
import PlaylistCont from '@/components/playlist/PlaylistCont.vue';
import { ref } from 'vue';

const playlists = ref([]);

const TopPlaylists = () => {
  fetch(
    'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=playlist&type=video&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA'
  )
    .then((response) => response.json())
    .then((result) => {
      playlists.value = result.items.map((item) => ({
        ...item,
        snippet: {
          ...item.snippet,
          title: removeSpecialCharacters(item.snippet.title)
        }
      }));
    })
    .catch((error) => console.log(error));
};
TopPlaylists();

const SearchPlaylist = async (query) => {
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA`
  )
    .then((response) => response.json())
    .then((result) => {
      playlists.value = result.items.map((item) => ({
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
</script>

<style scoped lang="scss"></style>
