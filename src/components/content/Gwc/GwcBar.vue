<template>
    <div class="gwcbar">
      <div @click="checkAll"><check-box class="chebox" :ischeck="ischeckAll"></check-box>全选</div>
      <div>合计￥{{getprece}}</div>
      <div class="gwcBotm" @click="clickJis">￥去计算({{getCont}})</div>
    </div>
</template>

<script>
  import CheckBox from "../../common/Button/CheckBox";
    export default {
        name: "GwcBar",
        components:{
          CheckBox
        },
        data(){
          return {
             prece:0,
             isCheck:true
          }
        },
        computed:{
          getCont() {
            return this.shoppingList=this.$store.state.shoppingList.filter(item => item.check ).length
          },
          getprece(){
            return this.$store.state.shoppingList.filter(item => item.check ).reduce(function (preValue, n) {
              return preValue + n.price*n.cont;
            }, 0).toFixed(2);
          },
          ischeckAll(){
            if(this.$store.state.shoppingList.length<1) {
              return  false;
            }

            this.isCheck=!this.$store.state.shoppingList.find(item => !item.check);
            return this.isCheck;
          }
        },
      methods:{
        checkAll() {
          this.$store.state.shoppingList.map(item=> item.check=!this.isCheck);
        },
        clickJis() {
          if(this.$store.state.shoppingList.length<1) {
              this.$toast.show('结算商品为空')
          }
        }
      }
    }
</script>

<style scoped>
.gwcbar {
  position: fixed;
  bottom:45px;

  display: flex;
  width: 100%;
  height: 36px;
  line-height: 36px;
  justify-content: space-between;
  text-align: center;
  background-color: #cccccc;
  color: black;
}
  .gwcBotm {
    background-color: orangered;
    color: white;
    width: 100px;
  }

.chebox {
  display: inline-block;
  width:18px;
  height: 18px;
  margin: -3px 4px;
}
</style>
