<template>
    <div class="homekeywords">
      <h4>本周流行</h4>
      <div class="keywordList">
      <home-module-item v-for="(item,index) in keywordsList" :key="index" class="homeitem">
        <a href="http://act.meilishuo.com/neigouful001?acm=3.mce.2_10_1b610.13730.0.ccy5br4OlfK0W.pos_2-m_260486-sd_119">
          <img src="https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png" >
          <div>{{item.words}}</div>
        </a>
      </home-module-item>
      </div>
    </div>
</template>

<script>
    import HomeModuleItem from "components/content/Home/HomeModuleItem";

    export default {
        name: "HomeKeywords",
        components:{
          HomeModuleItem
        },
      props:{
          keywordsList:{
            type:Array,
            default:[]
          }
      }
    }
</script>

<style scoped>
.homekeywords {
  text-align: center;
  padding-bottom: 20px;
  border-bottom: solid 8px #eee;
}
  .keywordList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
  .homeitem {
    padding: 5px;
  }
</style>
