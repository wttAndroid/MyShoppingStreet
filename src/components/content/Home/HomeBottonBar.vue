<template>
    <div class="bottonbar">
      <div class="bottitem"><span class="iconfont icon-10"></span>客服</div>
      <div class="bottitem"><span class="iconfont icon-dianpu"></span>店铺</div>
      <div class="bottitem"><span class="iconfont icon-shoucang "></span>收藏</div>
      <div class="bott gwc" @click="addGwc">加入购物车</div>
      <div class="bott gm">购买</div>
    </div>
</template>

<script>
  import {mapActions} from "vuex";

    export default {
        name: "HomeBottonBar",
          props:{
            itemInfo:{
              type:Object,
              default:{}
            }
          },
        methods:{
          ...mapActions(['addShop']),
          addGwc() {
            const goods={
                id:this.itemInfo.iid,
                title:this.itemInfo.title,
                desc:this.itemInfo.desc,
                price:this.itemInfo.lowNowPrice,
                images:this.itemInfo.topImages[0],
                imgUrl:this.itemInfo.imUrl
            }

            this.addShop(goods).then((data)=>{
                console.log(data);
                 this.$toast.show(data);
            });
          }
        }
    }
</script>

<style scoped>
  .bottonbar {
    display: flex;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 45px;
    background-color: white;
    text-align: center;
    line-height: 45px;
  }
  .bottitem {
    flex: 1;
  }
  .bottitem  span{
    display: block;
  }
  .bott {
    width: 100px;
  }
  .gwc {
    background-color: #ffe539;
  }
  .gm {
    background-color: #ff5777;
    color: white;
  }

</style>
