<template>
<div class="goodsData">
  <navbar class="navbar">
<!--    返回-->
    <div slot="left"><img src="~/assets/botton/left.png" @click="toReturn"></div>

    <div slot="center" class="navbar">
      <span v-for="(item,index) in navbarList" :class="{currenMok:currenMokIndex==index}" @click="clickScro(index)">{{item}}</span>
    </div>
  </navbar>

  <b-scroll class="scroll" ref="scroll" @scrollEvent="scrollEvent" >
<!--    轮播图-->
    <swiper :bannerList="swiperList" :isSwiper="false" class="goodsSwiper"></swiper>
<!--    商品标题信息-->
    <goods-title :goodstitile="goodstitile"></goods-title>

<!--    商铺信息-->
<goods-store :GoodsStoreObje="GoodsStoreObje"></goods-store>

      <!--图片列表-->
<goods-img-list :goodImgList="goodImgList"></goods-img-list>

<!--    参数-->
<goods-param :itemParams="itemParams" :itemParamsone="itemParamsone" ref="scrolCans"></goods-param>

<!--    评价-->
<goods-rate :rate="rate" ref="scrolPingj"></goods-rate>

<!--  <home-goods :istoobar="false" :goodsitemList="goodsitemList"></home-goods>-->
<!--推荐-->
<goods-recommend :goodsitemList="goodsitemList" ref="scrolTuij" @imgloadEvents="imgloadEvents"></goods-recommend>
  </b-scroll>
<home-botton-bar :itemInfo="itemInfo"></home-botton-bar>


</div>
</template>

<script>
  import Navbar from "components/common/navbar/navbar";
  import BScroll from 'components/common/scroll/BScroll'
  import Swiper from "components/common/swiper/Swiper";
  import GoodsTitle from "./GoodsTitle";
  import GoodsStore from "./goodsStore";
  import GoodsImgList from "./GoodsImgList";
  import GoodsParam from "./GoodsParam";
  import GoodsRate from "./GoodsRate";
 import GoodsRecommend from "./GoodsRecommend";
  import HomeBottonBar from "components/content/Home/HomeBottonBar";

  import {getRequestHomeGoods} from 'network/home'
  import {GoodsDetail,GoodsStoreObje,GoodsRateObje} from 'network/detail'

    export default {
        name: "GoodsData",
        components: {
          GoodsImgList,
            Navbar,
            BScroll,
            Swiper,
            GoodsTitle,
            GoodsStore,
            GoodsParam,
            GoodsRate,
          GoodsRecommend,
          HomeBottonBar
          },
        data(){
          return {
            navbarList:['商品','参数','评论','推荐'],
            id:'',
            swiperList:[],
            goodstitile:{},
            GoodsStoreObje:{},
            goodImgList:[],
            itemParams:[],
            itemParamsone:[],
            rate:{},
            goodsitemList:[],
            itemInfo:{},
            scroList:[],
            currenMokIndex:0
          }
      },
      created() {
        this.id=this.$route.params.id;//获取当前id
      },
      mounted() {

        this.$refs.scroll.refresh();
        this.id=this.$route.params.id;//获取当前id

        getRequestHomeGoods('detail',{iid:this.id}).then((data)=>{//获取商品所有信息
          // this.result=data.data.result;
          this.itemInfo=data.data.result.itemInfo;

          this.swiperList=data.data.result.itemInfo.topImages;


          this.goodstitile=new GoodsDetail(data.data.result);

          this.GoodsStoreObje=new GoodsStoreObje(data.data.result);

          this.goodImgList=data.data.result.detailInfo.detailImage[0].list;

          this.itemParams=data.data.result.itemParams.rule.tables?data.data.result.itemParams.rule.tables[0]:[];
          this.itemParamsone=data.data.result.itemParams.info?data.data.result.itemParams.info.set:[];

          this.rate=data.data.result.rate.cRate>0?new GoodsRateObje(data.data.result.rate.list[0]):{};
        });

        getRequestHomeGoods('recommend').then(data=>{
          this.goodsitemList=data.data?data.data.data.list:[];
        })

        // console.log(this.$bus)
        // this.$bus.$on('imgloadEvents',()=>{
        //   this.$refs.scroll.refresh();
        //   this.scrollCountEvent();
        // });

      },
      methods:{
         scrollCountEvent(){
           this.scroList=[0,this.$refs.scrolCans.$el.offsetTop,
            this.$refs.scrolPingj.$el.offsetTop,
            this.$refs.scrolTuij.$el.offsetTop,Number.MAX_SAFE_INTEGER];
            console.log('记录高度'+this.scroList);
        },
        toReturn() {
          this.$router.go(-1);
        },

        imgloadEvents() {

          this.$refs.scroll.updaterHeight();
          this.$refs.scroll.refresh();
          this.scrollCountEvent();
        },
        scrollEvent(posion) {
          for (let i=0;i<=this.scroList.length;i++){
            if(-posion.y>=this.scroList[i]&&-posion.y<this.scroList[i+1]) {
              this.currenMokIndex=i;
            }
          }
        },
        clickScro(index) {
          this.currenMokIndex=index;
          this.$refs.scroll.tpScro(-this.scroList[index]+45);
        }
      }
    }
</script>

<style scoped>
.navbar {
  display: flex;
  background-color: white;
  color: black;
  position: relative;
  z-index: 9;
}
span {
  flex: 1;
}
img {
  width: 15px;
  margin-top: 14px;
}
  .scroll {
    height: calc(100vh - 45px - 44px);
  }
  .goodsSwiper {
    height: 340px;
  }
  .currenMok {
    color: orangered;
  }
</style>
