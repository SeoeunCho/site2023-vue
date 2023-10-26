<template>
  <div class="playlist-cont">
    <ul>
      <li v-for="(playlist, index) in playlists" :key="index">
        <a
          :href="'https://www.youtube.com/watch?v=' + playlist.id.videoId"
          target="_blank"
          rel="noopener noreferrer"
          :title="playlist.snippet.title"
        >
          <img :src="playlist.snippet.thumbnails.medium.url" alt="playlist" />
          <span>{{ playlist.snippet.title }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    playlists: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';

.playlist-cont {
  ul {
    @include flex-between;

    li {
      width: 24%;
      margin-bottom: 28px;

      img {
        @include border(10px);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }

      span {
        display: block;
        margin: 10px 0;
        font-size: 17px;
        font-weight: 600;
        @include line-ellipsis;
      }
    }
  }
}
</style>
