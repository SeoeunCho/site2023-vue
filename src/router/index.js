import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ArtistView from '../views/ArtistView.vue';
import MvView from '../views/MvView.vue';
import PlaylistView from '../views/PlaylistView.vue';
import UnsplashView from '../views/UnsplashView.vue';
import MovieView from '../views/MovieView.vue';
import TvView from '../views/TvView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/artist',
      name: 'artist',
      component: ArtistView
    },
    {
      path: '/mv',
      name: 'mv',
      component: MvView
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistView
    },
    {
      path: '/unsplash',
      name: 'unsplash',
      component: UnsplashView
    },
    {
      path: '/movie',
      name: 'movie',
      component: MovieView
    },
    {
      path: '/tv',
      name: 'tv',
      component: TvView
    }
  ]
});

export default router;
