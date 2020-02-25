<template>
  <div class="home">
<!--   导航标题-->
    <navbar class="navbar">
      <div slot="center">购物车</div>
    </navbar>
    <b-scroll class="content" ref="scroll" @scrollEvent="scrollEvent" @pullInfo="pullInfo">
      <!--    轮播图-->
      <swipers :bannerList="bannerList"></swipers>
      <!--    试点抢卷-->
      <home-module :recommendList="recommendList"></home-module>
      <!--    本周流行-->
      <home-keywords :keywordsList="keywordsList"></home-keywords>
<!--      商品列表-->
      <home-goods :goodsitemList="goodsItemList" @imgloadEvent="imgloadEvent" ref="goods"></home-goods>

    </b-scroll>

    <scro-button v-if="isScroTop" @click.native="scroTop"></scro-button>
  </div>
</template>

<script>
// 组件
import navbar from "components/common/navbar/navbar";
import BScroll from "components/common/scroll/BScroll";
import Swipers from "components/common/swiper/Swiper";
import HomeModule from "./Home/HomeModule";
import HomeKeywords from "./Home/HomeKeywords";
import HomeGoods from "./Home/HomeGoods";

import ScroButton from "components/common/Button/ScroButton";

// 请求数据
import {getRequestHome,getRequestHomeTypeGoods} from 'network/home.js'


export default {
  name: 'Home',
  components: {
    // HelloWorld,
    navbar,
    Swipers,
    HomeModule,
    HomeKeywords,
    BScroll,
    HomeGoods,
    ScroButton
  },
  data() {
    return {
      bannerList: [],
      recommendList: [],
      keywordsList: [],
      goodsItemList:{
        'sell': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'pop': {
          page: 0,
          list: []
        }
      },
      currenY:0,
      isScroTop:false
    }
  },
  created() {
    getRequestHome().then(data=>{
      this.bannerList=data.data.data.banner.list;
      this.recommendList=data.data.data.recommend.list;
      this.keywordsList=data.data.data.keywords.list;
      // console.log(data.data)
    });
    //获取各类商品列表
    this.getTypeGoods(1,'sell');
    this.getTypeGoods(1,'new');
    this.getTypeGoods(1,'pop');
  },
  methods:{
    //获取网络数据
    getTypeGoods(page,type='sell'){
      getRequestHomeTypeGoods({page:page,type:type}).then(data=>{
        this.goodsItemList[type].page=data.data.data.page;
        this.goodsItemList[type].list.push(...data.data.data.list);
      });

    },

    //图片加载完成接听事件
    imgloadEvent(){
      console.log('加载完成')
      this.$refs.scroll.updaterHeight();
    },

    //滚动的接听事件
    scrollEvent(posion) {
      this.isScroTop=-posion.y>1000;
    },

    //滚动到顶部
    scroTop() {
      this.$refs.scroll.tpScro();
    },

    //加载更多数据
    pullInfo() {
      let request=this.$refs.goods.goodsRequest;//获取当前类型
      let page=this.goodsItemList[request].page;//获取当前页码
      this.goodsItemList[request].page=++page;//更改当前页码 且 页码+1请求
      this.getTypeGoods(page,request);
      this.$refs.scroll.pullFnish();
    }
  },
    activated() {
       this.$refs.scroll.refresh();
       this.$refs.scroll.tpScro(this.currenY,0);

    },
    deactivated() {
      this.currenY= this.$refs.scroll.getScroY();
    }
}
</script>

<style scoped>
.content {
  height: calc(100vh - 44px - 45px);
  overflow: hidden;
}
  .navbar {
    background-color: #ff8198;
  }
</style>
