<template>
    <div class="goodsstore">
      <div class="storeDataimg">
        <img v-lazy="GoodsStoreObje.shopLogo">{{GoodsStoreObje.name}}
      </div>
      <div class="storeData">
             <div class="storeDataitem">{{GoodsStoreObje.cSells}}<br>总销量</div>
             <div class="storeDataitem">{{GoodsStoreObje.cGoods}}<br>全部宝贝</div>
             <div class="storeDataitemone">
               <div v-for="(item,index) in GoodsStoreObje.score">{{item.name}}
                 <span :class="item.isBetter?'red':'green'">{{item.score}}<i>{{item.isBetter?'高':'低'}}</i></span></div>
             </div>
      </div>
      <div class="center"><a :href="GoodsStoreObje.allGoodsUrl">进店逛逛</a></div>
    </div>
</template>

<script>
    export default {
        name: "goodsStore",
        props:{
          GoodsStoreObje:{
                type:Object,
                default:{}
              }
        }
    }
</script>

<style scoped>
  .goodsstore {
    box-shadow: 0px 1px 1px 0px #cccccc;
  }
.storeData {
  display: flex;
  /*height: 45px;*/
  font-size: 12px;
}
.storeDataimg{
  padding: 15px 5px;
  font-size: 14px;
  font-family: 微软雅黑;
}
.storeDataimg img {
  width: 30px;
  vertical-align: middle;
  margin: 0 5px;
}
  .storeDataitem {
    flex: 1;
    text-align: center;
    line-height: 30px;
  }
  .storeDataitemone {
    padding: 0 20px;
    border-left: 1px solid #cccccc;
  }
  .storeDataitemone div {
    margin: 5px 0;
  }
  .storeDataitemone span{
    font-size: 12px;
  }
  .storeDataitemone i {
    color: white !important;
    margin: 0 5px;
  }
  .red {
    color:  red;
  }
  .green {
    color:  #00e200;
  }
  .red i{
    background-color: red;
  }
  .green i{
    background-color:  #00e200;
  }

  .center {
    text-align: center;
    padding: 20px 0;
  }
  .center a {
    padding: 5px 35px;
    background-color: rgba(182, 184, 185, 0.19);
    border-radius: 10px;
  }
</style>
