<template>
    <div class="goodimglist">
        <div class="listtitle">宝贝详情</div>
        <div>
          <img v-for="item of goodImgList" v-lazy="item">
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsImgList",
        props:{
          goodImgList:{
            type:Array,
            default:[]
          }
        }
    }
</script>

<style scoped>
  .goodimglist {
    text-align: center;
  }
  .listtitle {
    padding: 10px 0;
  }
  .goodimglist img {
    width: 100%;
  }
</style>
