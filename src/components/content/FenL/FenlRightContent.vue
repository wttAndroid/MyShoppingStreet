<template>
    <div class="fenleiContent">
      <fenl-module-item v-for="(item,index) in goodsList" :cols="3" v-if="goodsList.length">
        <a :href="item.link">
          <img v-lazy="item.image" @load="imgloadEvent">
          <div>{{item.title}}</div>
        </a>
      </fenl-module-item>
    </div>
</template>

<script>
  import FenlModuleItem from "./FenlModuleItem";
    export default {
        name: "FenlRightContent",
        props:{
          goodsList:{
            type:Array,
            default:[]
          }
        },
        data(){
            return {
              count:0
            }
        },
        components:{
          FenlModuleItem
        },
        methods: {
          imgloadEvent(){
              if(++this.count===this.goodsList.length){
                this.count=0;
                this.$emit('imgloadEvent')
              }
          }
        }
    }
</script>

<style scoped>
.fenleiContent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}


</style>
