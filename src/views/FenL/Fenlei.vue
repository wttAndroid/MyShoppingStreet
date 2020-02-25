<template>
  <div class="fenlei">
    <navbar class="navbar">
      <div slot="center">分类</div>
    </navbar>

    <div class="fenlTabbar">

      <fenl-lft-tabbar :tabbarList="tabbarList" @clickFenlTbar="clickFenlTbar" ref="lefttabbr"></fenl-lft-tabbar>

        <b-scroll class="scrolcontent" ref="scroll">
          <fenl-right-content :goodsList="goodsList" @imgloadEvent="imgloadEvent"></fenl-right-content>

         <home-goosbar :borList="borList" @clickGoodsItem="clickGoodsItem"></home-goosbar>

        <div class="goods" v-if="subcategory.length>0">
          <home-goods-item v-for="(item,index) in subcategory">
                      <img slot="goodsitem-img" v-lazy="item.img" @load="gooditemLoad">
                      <div  class="goodsitem-titile" slot="goodsitem-text">{{item.title}}</div>
                      <span slot="goodsitem-price">{{item.price}}</span>
                      <span slot="goodsitem-collect"><i class="iconfont icon-shoucang "> </i>{{item.cfav}}</span>
          </home-goods-item>
        </div>

        </b-scroll>
    </div>
  </div>
</template>

<script>
    import navbar from "components/common/navbar/navbar";
    import BScroll from 'components/common/scroll/BScroll'
    import FenlLftTabbar from "components/content/FenL/FenlLftTabbar";
    import FenlRightContent from "components/content/FenL/FenlRightContent";
    import HomeGoosbar from "../Home/HomeGoosbar";
    import HomeGoodsItem from "components/content/Home/HomeGoodsItem";

    import {getCategoryList,getCategoryListItemiList,getCategoryItemiListGoods} from "network/category";

    export default {
        name: "Fenlei",
        components:{
          navbar,
          BScroll,
          FenlLftTabbar,
          FenlRightContent,
          HomeGoosbar,
          HomeGoodsItem,
        },
        data(){
          return {
              tabbarList:[],
              cuerrenIndex:'',
              goodsList:[],
              miniWallkey:'',
              subcategory:[],
              borList:['综合','新品','销量'],
              type:'pop',
              requestList:['pop','new','sell'],
              number:0
          }
        },
        created() {
          this.getrequestData()
        },
        methods: {
          getrequestData(){
            getCategoryList().then(data=>{
              this.tabbarList=data.data.data.category.list;
              this.cuerrenIndex=this.tabbarList[0].maitKey;
              this.miniWallkey=this.tabbarList[0].miniWallkey;
              this.$refs.lefttabbr.$data.currentKey=this.cuerrenIndex;
              this.getContent()
            });
          },
          getContent(){
            this.$refs.scroll.tpScro();

            getCategoryListItemiList(this.cuerrenIndex).then(data=>{
              this.goodsList=data.data.data.list;
            });

            getCategoryItemiListGoods(this.miniWallkey,this.type).then(data=>{
              this.subcategory=data.data;
            });
            this.imgloadEvent()
          },
          clickFenlTbar(itemkey,miniWallkey){
            this.cuerrenIndex=itemkey;
            this.miniWallkey=miniWallkey;
            this.getContent()
          },
          imgloadEvent(){
            console.log('计算高度')
            this.$refs.scroll.updaterHeight();
          },
          clickGoodsItem(index){
            this.type=this.requestList[index];

            getCategoryItemiListGoods(this.miniWallkey,this.type).then(data=>{
              this.subcategory=data.data;
            });
          },
          gooditemLoad() {
            // if(++this.number===this.subcategory.length) {
            //   this.number=0;
            //   this.imgloadEvent()
            // }
            this.imgloadEvent()
          },

        }
    }
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
}
.fenlTabbar {
  display: flex;
}
.scrolcontent {
  flex: 1;
  height: calc(100vh - 45px - 44px);
  overflow: hidden;
}

.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
}


.goods img {
  width: 100%;
  border-radius: 5px;
}

.goodsitem-titile {
  width: 100%;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  font-size: 14px;
  padding: 3px;
  color: var(--color-text);
}

</style>
