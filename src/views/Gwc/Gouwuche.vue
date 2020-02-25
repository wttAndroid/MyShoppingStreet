<template>
  <div class="gouwuche">
    <navbar class="navbar">
      <div slot="center">购物车({{goodsList.length}})</div>
    </navbar>
    <b-scroll class="content">
      <div v-for="item of goodsList" class="gwcItem" @click="checkGoods(item)">
<!--        <input type="checkbox" class="chebox">-->
        <check-box class="chebox" :ischeck="item.check"></check-box>
        <img :src="item.images">
        <div class="gwcIteminfo">
          <div class="titile">{{item.title}}</div>
          <div>{{item.desc}}</div>
          <div>
            <span class="price">￥{{item.price}}</span>
            <span class="cont">x{{item.cont}}</span>
          </div>
        </div>
      </div>
    </b-scroll>
    <gwc-bar></gwc-bar>
  </div>
</template>

<script>
  import navbar from "components/common/navbar/navbar";
  import BScroll from 'components/common/scroll/BScroll'
  import CheckBox from "components/common/Button/CheckBox";
  import GwcBar from "components/content/Gwc/GwcBar";

    export default {
        name: "Gouwuche",
        components:{
          navbar,
          BScroll,
          CheckBox,
          GwcBar
        },
        data(){
            return {
              goodsList:[]
            }
        },
        activated() {
            this.getStoreGoodsList();
        },
        methods:{
          getStoreGoodsList(){
            this.goodsList=this.$store.state.shoppingList;
          },
          checkGoods(item) {
            item.check=!item.check;
          }
      }
    }
</script>

<style scoped>
  .navbar {
    background-color: var(--color-tint);
  }
  .gwcItem {
    width: 100%;
    display: flex;
    padding: 5px;
    font-size: 12px;
    border-bottom: 1px solid #cccccc;
  }
  .chebox {
    width:calc(15%);
    margin: 8px;
  }
  .gwcItem img {
    /*width: 50px;*/
    width:calc(20%);
    height: 100px;
    border-radius: 10px;
  }
  .gwcIteminfo {
    padding: 0px 10px;
    width:calc(65%);
    line-height: 35px;
  }
  .gwcIteminfo div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .titile {
    font-size: 15px;
    color: black;
  }
  .price {
    color: orangered;
    float: left;
  }
  .cont {
    color: var(--color-text);
    float: right;
  }
  .content {
    height: calc(100vh - 45px - 36px - 44px);
    overflow: hidden;
  }
</style>
