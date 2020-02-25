<template>
      <b-scroll class="content">
<!--        <div class="">-->
           <li v-for="(item,index) in tabbarList"
               :class="{active:item.maitKey===currentKey}"
                @click="clickfenlTabbarItem(item.maitKey,item.miniWallkey)"
           >{{item.title}}</li>
<!--        </div>-->
      </b-scroll>
</template>

<script>
  import BScroll from 'components/common/scroll/BScroll'
    export default {
        name: "FenlLftTabbar",
      components: {BScroll},
      props:{
        tabbarList:{
          type:Array,
          default:[]
        }
      },
      data(){
          return {
            currentKey:''
        }
      },
      methods:{
        clickfenlTabbarItem(maitKey,miniWallkey){
          this.currentKey=maitKey;
          this.$emit('clickFenlTbar',maitKey,miniWallkey)
        }
      }
    }
</script>

<style scoped>
  .content {
    height: calc(100vh - 45px - 44px);
    overflow: hidden;
    background-color: #e6e6e6;
  }
  .content li {
    padding: 15px;
    text-align: center;
  }
  .active {
    color: var(--color-tint);
    font-weight: bold;
    background-color: white;
    border-left:3px solid var(--color-tint);
    box-sizing:border-box;
  }
</style>
