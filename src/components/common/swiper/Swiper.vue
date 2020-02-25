<template>
  <div class="wrapper">
    <swiper :options="swiperOption" class="swiper-container" ref="mySwiper" v-if="bannerList.length!=0">
        <swiper-slide class="swiper-item" v-for="(item,index) in bannerList" :key="index">
          <a :href="item.link"> <img class="swiper-img" :src="isSwiper?item.image:item" :title="item.title"></a>
        </swiper-slide>
      <div class="swiper-pagination"  v-for="(item,index) in bannerList" :key="index" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
   import { swiper, swiperSlide } from 'vue-awesome-swiper'
   require("swiper/dist/css/swiper.css");


    export default {
        name: "Swiper",
        components:{
          swiper,
          swiperSlide
        },
        props:{
          bannerList:{
            type:Array,
            default:[],
          },
          isSwiper:{
            type:Boolean,
            default: true
          }
        },
        mounted() {
            this.swiperOption={
              notNextTick: true,
              //循环
              loop: true,
              //设定初始化时slide的索引
              initialSlide: 0,
              slidesPerView:1,
              watchOverflow: true,
              //自动播放
              autoplay: {
                delay: 1500,
                stopOnLastSlide: false, // 触摸滑动后是否继续轮播
                disableOnInteraction: false
              },
              //滑动速度
              speed: 100,
              //滑动方向
              direction: "horizontal",
              //小手掌抓取滑动
              grabCursor: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets"
              }
            }
        },
      data() {
          return {
            isKeep:false,
            swiperOption:{}
          }
        },
      activated() {
          this.isKeep=true
      },
      deactivated() {
          this.isKeep=false
      }
    }

</script>

<style scoped>
  .swiper-container,
  .swiper-item,
  .swiper-img{
    width: 100%;
    height:100%;
  }


  .wrapper {
    width: 100%;
    height: 150px;
  }
</style>
