<template>
  <div id="app">

    <toobar></toobar>

    <keep-alive exclude="GoodsData">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  import Toobar from "views/Toobar/Toobar";
  export default {
    name: "App",
    components:{
      Toobar
    }
  }
</script>

<style>
@import "assets/css/base.css";
</style>
