import Vue from 'vue'
import VueRouter from 'vue-router'
import server1 from '../views/Home.vue'
import server2 from '../views/server2.vue'
import server3 from '../views/server3.vue'
import server4 from '../views/server4.vue'
// import SideBar from '../components/SideBar'
import MovieDetail from '../views/MovieDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'server1',
    component: server1
  },
  {
    path: '/server2',
    name: 'server2',
    component: server2
  },
  {
    path: '/server3',
    name: 'server3',
    component: server3
  },
  {
    path: '/server4',
    name: 'server4',
    component: server4
  },
  {
    path: '/movie/:id',
    name: 'Movie Detail',
    component: MovieDetail
  }
]

const router = new VueRouter({
  routes
})

export default router
