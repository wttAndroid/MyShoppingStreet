<template>
    <div class="goodcbar">
      <div class="gooditem" v-for="(item,index) in borList" :key="index" @click="clickGoods(index)">
        <span  :class="{active:currentIndex===index}">{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeGoosbar",
       props:{
           borList:{
              type:Array,
              default:[]
            }
       },
        data(){
            return {
              currentIndex:0
            }
        },
        methods:{
          clickGoods(index) {
            this.currentIndex=index;
            this.$emit('clickGoodsItem',index);
          }
      }
    }
</script>

<style scoped>
.goodcbar {
  display: flex;
  padding: 16px 0;
  text-align: center;
  font-size: 13px;
}
  .gooditem {
    flex: 1;
  }
span {
  padding: 3px;
}
  .active {
    color: #ff8198;
    border-bottom: 3px solid #ff8198;
  }
</style>
