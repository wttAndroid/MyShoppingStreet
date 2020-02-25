<template>
    <div class="goodsitem">
      <div class="goodsitem-img"><slot name="goodsitem-img"></slot></div>
      <div class="goodsitem-text"><slot name="goodsitem-text"></slot></div>
      <div>
        <div class="goodsitem-price"><slot name="goodsitem-price"></slot></div>
        <div class="goodsitem-collect"><span class="icon"></span><slot name="goodsitem-collect"></slot></div></div>
    </div>
</template>

<script>
    export default {
        name: "HomeGoodsItem"
    }
</script>

<style scoped>
.goodsitem {
  flex: 1;
  width: 40%;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
}
  .goodsitem-price,
  .goodsitem-collect{
      display: inline-block;
      font-size: 13px;
      margin: 0 3px;
  }
.goodsitem-price {
  color: #ff5777;
  font-size: 13px;
}
</style>
