import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from "./Toast"
import VueLazyload from "vue-lazyload";
import fastclick from 'fastclick'

/**
 * 轮播图的全局挂载
 */
import vueSwiper from 'vue-awesome-swiper'
Vue.use(vueSwiper);
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.prototype.$bus=new Vue()//线路总线

Vue.use(toast)

Vue.use(VueLazyload)


fastclick.attach(document.body)

new Vue({
  router,
  store,
  toast,
  render: h => h(App)
}).$mount('#app')
