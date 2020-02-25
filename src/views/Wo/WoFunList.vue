<template>
    <div class="funcListitem"  :class="{boder:isboder}">
        <div v-for="(item,index) in funclist">
          <span class="iconfont" :class="item.icon"></span>
          <div class="itemtext">{{item.text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WoFunList",
        props:{
          funclist:{
              type:Array,
              default:[]
          },
          isboder:{
              type: Boolean,
              default: true
          }
        }
    }
</script>

<style scoped>
.funcListitem {

}
.iconfont {
  position: absolute;
  margin: 15px 8px;
}
  .itemtext {
    margin-left: 40px;
    padding: 15px 10px;
    color: black;
    border-bottom: 1px solid #f4f4f4;
  }
  .boder {
    border-bottom: 10px solid #f4f4f4;
  }
</style>
