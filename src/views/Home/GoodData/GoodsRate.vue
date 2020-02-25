<template>
    <div class="goodsrate">
      <div class="listtitle">用户评价 <a>更多</a></div>
      <div class="storeDataimg"><img :src="rate.userimg">{{rate.uname}}</div>
      <div class="ratecontent">{{rate.content}}</div>
        <div class="rateextraInfo">{{rate.extraInfo?rate.extraInfo.toString():''}}</div>
      <div class="rateimglist"><img v-for="item of rate.images" v-lazy="item"></div>
    </div>
</template>

<script>
    export default {
        name: "GoodsRate",
        props:{
          rate:{
            type:Object,
            default:{}
          }
        }
    }
</script>

<style scoped>
  .goodsrate {
    box-shadow: 0px -1px 2px 0px #cccccc;
    padding: 0 5px 15px;
  }
  .listtitle {
    padding: 15px 5px;
    border-bottom: 0.5px solid #cccccc;
  }
  .listtitle  a{
    float: right;
  }
  .storeDataimg{
    padding: 8px 0px;
    font-size: 14px;
    font-family: 微软雅黑;
  }
  .storeDataimg img {
    width: 30px;
    vertical-align: middle;
    margin: 0 5px;
  }
  .rateimglist img {
    width: 120px;
    height: 120px;
    margin: 5px;
  }
  .rateextraInfo {
    font-size: 10px;
    padding: 5px;
    color: #b2b2b2;
  }
  .ratecontent {
    font-size: 13px;
    padding: 0 5px;
  }
</style>
