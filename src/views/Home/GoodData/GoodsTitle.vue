<template>
    <div class="goodstitile">
        <div class="good-titile">{{goodstitile.titile}}</div>
        <div><span class="good-price">￥{{goodstitile.price}}</span>
          <span class="good-priceoue">{{goodstitile.oldPrice}}</span>
          <span class="dazhe" v-if="goodstitile.discountDesc" v-text="goodstitile.discountDesc"></span>
        </div>
        <div class="titiledispay goodstitile-info">
          <span v-for="item of goodstitile.columns">{{item}}</span>
        </div>
        <div class="titiledispay goodstitile-fuwu">
       <span v-for="item of goodstitile.services"><i class="iconfont icon-zhengque"></i>{{item.name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsTitle",
       props:{
         goodstitile:{
           type:Object,
            default:{}
         }
       }
    }
</script>

<style scoped>
  .goodstitile div {
    padding: 8px 5px;
    font-size: 13px;
  }
.titiledispay {
  display: flex;
  justify-content: space-between;
}
  .titiledispay  span{
    /*flex: 1;*/
  }
  .good-titile {
    font-size: 14px;
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .good-price {
    color: #ff8198;
    font-size: 18px;
    margin-right: 5px;
  }
  .good-priceoue {
    text-decoration: line-through;
    color: #b7b7b7;
    position: relative;
  }
  .goodstitile-info {
    color:  #b7b7b7;
  }
  .goodstitile-fuwu {
   padding: 20px 5px !important;
    /*border-top: 1px solid #cccccc;*/
    box-shadow: 0px 0 2px 1px #cccccc;
  }

  .dazhe{
    /*content: "7折";*/
    position: relative;
    left: 6px;
    top: -9px;
    display: inline-block;
    text-align: center;
    color: white;
    padding: 3px;
    font-size: 10px;
    background-color: var(--color-tint);
    border-radius: 7px;
  }

</style>
