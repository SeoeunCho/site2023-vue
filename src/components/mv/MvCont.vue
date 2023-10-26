<template>
  <div class="mv-cont">
    <ul>
      <li v-for="(mv, index) in mvList" :key="index">
        <a
          :href="'https://www.youtube.com/watch?v=' + mv.id.videoId"
          target="_blank"
          rel="noopener noreferrer"
          :title="mv.snippet.title"
        >
          <img
            :src="
              mv.snippet.thumbnails.medium.url ? mv.snippet.thumbnails.medium.url : '/assets/img/icon/skeleton_tmdb.svg'
            "
            alt="mv"
          />
          <span v-html="mv.snippet.title"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    mvList: {
      type: Array,
      required: true
    }
  },
  methods: {}
};
</script>

<style scoped lang="scss">
@import '/public/assets/scss/setting/mixin';
.mv-cont {
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
