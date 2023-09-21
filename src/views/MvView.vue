<template>
  <div>
    <ContTitle title="mv" />
    <MvSearch @search="SearchYoutube" />
    <MvTag @search="SearchYoutube" />
    <MvCont :youtubes="filteredYoutubes" />
  </div>
</template>

<script>
import ContTitle from '@/components/layout/ContTitle.vue';
import MvSearch from '@/components/mv/MvSearch.vue';
import MvTag from '@/components/mv/MvTag.vue';
import MvCont from '@/components/mv/MvCont.vue';
import { ref, computed } from 'vue';

export default {
  components: {
    ContTitle,
    MvSearch,
    MvTag,
    MvCont
  },

  setup() {
    const youtubes = ref([]);

    const TopYoutubes = () => {
      fetch(
        'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=mv&type=video&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA'
      )
        .then((response) => response.json())
        .then((result) => {
          youtubes.value = result.items;
        })
        .catch((error) => console.log(error));
    };
    TopYoutubes();

    const SearchYoutube = async (query) => {
      await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=28&q=${query}&type=video&key=AIzaSyCuRG9CovWM7isuZ0RmIH9xoIee0WBetiA`
      )
        .then((response) => response.json())
        .then((result) => {
          youtubes.value = result.items;
        })
        .catch((error) => console.log('error', error));
    };

    const filteredYoutubes = computed(() => {
      return youtubes.value.filter((youtube) => {
        const title = youtube.snippet.title.toLowerCase();
        return title.includes('mv') || title.includes('m/v') || title.includes('music video');
      });
    });

    return {
      youtubes,
      TopYoutubes,
      SearchYoutube,
      filteredYoutubes
    };
  }
};
</script>
