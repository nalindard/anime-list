import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue'),
      // Gonna display results in the same page
    },
    {
      path: '/top/:list',
      name: 'top',
      component: () => import('../views/TopListView.vue'),
      beforeEnter(to) {
        // console.log('Accessing route --> ', to.params.list)
        // eslint-disable-next-line no-constant-condition
        if (to.params.list !== 'anime' && to.params.list !== 'manga') {
          return { name: '404' }
        }
      },
    },
    // {
    //   path: '/news/:id',
    //   name: 'news',
    //   component: () => import('../views/NewsView.vue'),
    // },
    {
      path: '/browse/anime',
      name: 'anime',
      component: () => import('../views/BrowseAnimeView.vue'),
    },
    {
      path: '/browse/manga',
      name: 'manga',
      component: () => import('../views/BrowseMangaView.vue'),
    },
    {
      path: '/view/details/:id',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
      beforeEnter(to) {
        // console.log(to.query.type)
        if (to.query.type !== 'anime' && to.query.type !== 'manga') {
          return { name: '404' }
        }
      },
    },
    {
      path: '/gallery/:id',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
    },
  ],
})

export default router
