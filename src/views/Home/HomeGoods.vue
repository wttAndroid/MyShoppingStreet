<template>
    <div class="homegoods">
      <home-goosbar :borList="borList" v-if="istoobar" @clickGoodsItem="clickGoodsItem"></home-goosbar>
      <div class="goods">
        <home-goods-item v-for="(item,index) in getgoodsItemList" :key="index" @click.native="clickItemInfo(item.iid)">
          <img slot="goodsitem-img" v-lazy="item.show.img"  @load="gooditemLoad">
          <div  class="goodsitem-titile" slot="goodsitem-text">{{item.title}}</div>
          <span slot="goodsitem-price">{{item.price}}</span>
          <span slot="goodsitem-collect"><i class="iconfont icon-shoucang "> </i>{{item.cfav}}</span>
        </home-goods-item>
      </div>
    </div>
</template>

<script>
    import HomeGoosbar from "./HomeGoosbar";
    import HomeGoodsItem from "components/content/Home/HomeGoodsItem";
    export default {
        name: "HomeGoods",
        props:{
          goodsitemList:{
            type:Object,
            default:{}
          },
          istoobar:{
            type: Boolean,
            default: true
          }
        },
        computed:{
          getgoodsItemList(){
            return this.goodsitemList[this.goodsRequest].list;
          }
        },
        components:{
          HomeGoosbar,
          HomeGoodsItem
        },
        data(){
            return {
              goodsRequest:'pop',
              number:0,
              borList:['流行','新款','精选']
            }
        },
      methods:{
        clickGoodsItem(index) {
          switch (index) {
            case 0:
                this.goodsRequest='pop'
              break;
            case 1:
              this.goodsRequest='new'
              break;
            case 2:
              this.goodsRequest='sell'
              break;
          }
        },
        clickItemInfo(id) {
          // this.$router.push('/home/'+id);
          this.$router.push('/home/'+id)
        },
        gooditemLoad() {

          // if(++this.number===this.getgoodsItemList.length) {
          if(++this.number===30) { //每请求一次加载30条数据更新一次高度
             this.number=0;
              this.$emit('imgloadEvent')
          }
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
