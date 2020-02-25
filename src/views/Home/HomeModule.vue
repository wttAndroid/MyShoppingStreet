<template>
    <div class="module-one">
      <home-module-item v-for="(item,index) in recommendList" :key="index">
        <a :href="item.link">
          <img :src="item.image" >
          <div>{{item.title}}</div>
        </a>
      </home-module-item>
    </div>
</template>

<script>
    import HomeModuleItem from "components/content/Home/HomeModuleItem";

    export default {
        name: "HomeModule",
      props:{
        recommendList:{
          type:Array,
          default:[]
        }
      },
      components:{
        HomeModuleItem
      }
    }
</script>

<style scoped>
  .module-one {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;

    padding: 15px 0px 25px 0;
    box-shadow: 0px 8px 0px #eee;
  }
  a {
    text-decoration: none;
    font-size: 13px;
    color: var(--color-text);
  }
  img {
    width: 65px;
    vertical-align: middle;
    margin-bottom: 5px;
  }
</style>
