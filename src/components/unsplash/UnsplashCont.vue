<template>
  <div class="unsplash-cont">
    <ul>
      <li v-for="(image, index) in images" :key="index">
        <a :href="`https://unsplash.com/photos/${image.id}`" target="_blank">
          <img
            :src="image.urls.regular ? image.urls.regular : '/assets/img/icon/skeleton_tmdb.svg'"
            :alt="image.alt_description"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import '/public/assets/scss/setting/mixin';

.unsplash-cont {
  ul {
    column-count: 4;

    li {
      margin-bottom: 20px;
    }
  }
}
</style>
