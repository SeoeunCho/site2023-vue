<template>
  <div class="movie__cont container">
    <ul>
      <li v-for="(movie, index) in movies" :key="index">
        <a :href="`https://www.themoviedb.org/movie/${movie.id}?language=ko`" target="_blank">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title" />
        </a>
        <em>
          <span class="title">{{ movie.title }}</span>
          <span class="star">{{ movie.vote_average.toFixed(1) }}</span>
        </em>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    movies: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/setting/mixin';
.movie__cont {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 24%;
      margin-bottom: 2%;
      position: relative;
      .title {
        display: inline-block;
        padding: 5px 0;
        font-size: 20px;
        font-weight: bold;
        &:hover {
          text-decoration: underline;
          text-underline-position: under;
        }
      }
      .star {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 30px;
        height: 30px;
        background-color: #fff;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        font-size: 12px;
      }
    }
  }
}
</style>
