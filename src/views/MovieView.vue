<template>
  <section id="movie" class="container page">
    <div class="movie-inner">
      <div class="cont-title">
        <p>Movie</p>
        <h2>영화</h2>
      </div>
      <MovieSlider :movies="movieData" />

      <div class="movie-btn sch-area column">
        <MovieTag @search="movieTags"/>
        <SearchComp @search="searchMovie"/>
      </div>

      <MovieCont :movies="movieData" />
    </div>
  </section>
</template>

<script setup>
import MovieSlider from '@/components/movie/MovieSlider.vue';
import MovieTag from '@/components/movie/MovieTag.vue';
import SearchComp from '@/components/layout/SearchComp.vue';
import MovieCont from '@/components/movie/MovieCont.vue';
import { ref, onMounted } from 'vue';

const movieData = ref([]);
const Access_Key = ref('efda67ba4c84b7ab2902a9f3d4ac971e');

onMounted(() => {
  getMovieList();
});

const getMovieList = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${Access_Key.value}&language=ko-KR`
    );
    const result = await response.json();
    console.log(result.results)
    movieData.value = result.results;
  } catch (error) {
    console.log('error', error);
  }
};

const movieTags = async (tag) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${tag}?api_key=${Access_Key.value}&language=ko-KR`
    );
    const result = await response.json();
    movieData.value = result.results;
  } catch (error) {
    console.log('error', error);
  }
};

const searchMovie = async (query) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${Access_Key.value}&language=ko-KR&query=${query}`
    );
    const result = await response.json();
    movieData.value = result.results;
  } catch (error) {
    console.log('error', error);
  }
};
</script>

<style lang="scss">
.swiper-button-next,
.swiper-button-prev {
  color: var(--main-color);
}
</style>
