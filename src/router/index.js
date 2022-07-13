import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import IntroduceView from '../views/IntroduceView.vue';
import DatabindingList from '../views/DataBindingList.vue';
import Rendering from '../views/RenderingVue.vue';
import eventclick from '../views/EventClick.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') // Lazy Load 적용
  },
  {
    path: '/intro',
    name: 'intro',
    component: IntroduceView
  },
  {
    path: '/databindinglist',
    name: 'databindinglist',
    component: DatabindingList
  },
  {
    path: '/rendering',
    name: 'rendering',
    component: Rendering
  },
  {
    path: '/eventclick',
    name: 'eventclick',
    component: eventclick
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
