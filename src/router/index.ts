import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Projects from '../components/Projects.vue'
import Credits from '../components/Credits.vue'

import NotFound from '../error/NotFound.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
	{ path: '/', component: Home, alias: '/home', meta: { title: 'Welcome!' } },
	{ path: '/about', component: About, meta: { title: 'About Me' } },
	{ path: '/projects', component: Projects, meta: { title: 'Projects' } },
	{ path: '/credits', component: Credits, meta: { title: 'Credits' } },
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { title: 'Page not Found' } }
    ],
})

export default router
