<template>
    <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>
  .navbar {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 44px;
    display: flex;
    /*background-color: #ff8198;*/
    text-align: center;
    line-height: 44px;
  }
  .center {
    flex: 1;
    color: white;
    font-size: 14px;
  }
  .left,
  .right{
    width: 50px;
  }
</style>
