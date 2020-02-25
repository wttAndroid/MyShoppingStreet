<template>
  <div class="goods">
    <home-goods-item v-for="(item,index) in goodsitemList" :key="index" @click.native="clickItemInfo(item.shop_id)">
      <img slot="goodsitem-img" v-lazy="item.image" @load="gooditemLoad">
      <div  class="goodsitem-titile" slot="goodsitem-text">{{item.title}}</div>
      <span slot="goodsitem-price">{{item.price}}</span>
      <span slot="goodsitem-collect"><i class="iconfont icon-shoucang"></i>{{item.cfav}}</span>
    </home-goods-item>
  </div>
</template>

<script>
  import HomeGoodsItem from "components/content/Home/HomeGoodsItem";
    export default {
        name: "GoodsRecommend",
        components:{
          HomeGoodsItem
        },
        props:{
          goodsitemList:{
            type:Array,
            default:[]
        }
      },
      data(){
        return {
          number:0
        }
      },
      methods:{
        gooditemLoad() {
          // if(++this.number===this.goodsitemList.length) {
          //   this.number=0;
          //   // this.$bus.$emit('imgloadEvents')
          //   this.$emit('imgloadEvents')
          // }
          this.$emit('imgloadEvents')
        },
        clickItemInfo(id) {
          console.log(id);
          // this.$router.replace('/home/'+id);
          this.$router.push('/home/'+id);
        }
      }
    }
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
  }
  img {
    width: 100%;
    border-radius: 5px;
  }
  .goodsitem-titile {
    width: 100%;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    white-space: nowrap !important;
    font-size: 14px;
    padding: 3px;
    color: var(--color-text);
  }

</style>
