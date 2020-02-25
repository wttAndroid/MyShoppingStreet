import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/Home.vue'
import Wo from "views/Wo/Wo";
import Gouwuche from "views/Gwc/Gouwuche";
import Fenlei from "views/FenL/Fenlei";
import GoodsData from "views/Home/GoodData/GoodsData";

Vue.use(VueRouter)

/**
 *
 * 在重新下载依赖包时，安装的vue-router还是之前出错的那个版本，
 * @type {{(location: RawLocation): Promise<Route>; (location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void}}
 */
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/fenlei',
    component: Fenlei
  },
  {
    path: '/gouwuche',
    component: Gouwuche
  },
  {
    path: '/wode',
    component: Wo
  },
  {
    path: '/home/:id',
    component: GoodsData,
    meta:{keepAlive: false}
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
