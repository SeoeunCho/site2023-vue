<script setup>
import SliderSection from '@/components/section/SliderSection.vue';
import ArtistSection from '@/components/section/ArtistSection.vue';
import MvSection from '@/components/section/MvSection.vue';
import PlaylistSection from '@/components/section/PlaylistSection.vue';
import UnsplashSection from '@/components/section/UnsplashSection.vue';
import MovieSection from '@/components/section/MovieSection.vue';
</script>

<template>
  <main id="main" role="main">
    <SliderSection />
    <ArtistSection />
    <MvSection />
    <PlaylistSection />
    <UnsplashSection />
    <MovieSection />
  </main>
</template>

<style lang="scss">
h3 {
  .youtube {
    color: var(--main-color);
  }
  .unsplash {
    color: #5bfafe;
  }
  .movie {
    color: #ff9f17;
  }
}
</style>
