import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'
import MvView from '../views/MvView.vue'
import YoutubeView from '../views/YoutubeView.vue'
import UnsplashView from '../views/UnsplashView.vue'
import MovieView from '../views/MovieView.vue'

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
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
      path: '/youtube',
      name: 'youtube',
      component: YoutubeView
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
    }
  ]
})

export default router
