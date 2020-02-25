<template>
    <div>
      <navbar class="navbar">
        <div slot="center">超级商城</div>
      </navbar>
      <wo-top></wo-top>
      <wo-header></wo-header>
      <wo-fun-list :funclist="funclistnone"></wo-fun-list>
      <wo-fun-list :funclist="funclist" :isboder="false"></wo-fun-list>
    </div>
</template>

<script>
    import Navbar from "../../components/common/navbar/navbar";
    import WoTop from "./WoTop";
    import WoHeader from "./WoHeader";
    import WoFunList from "./WoFunList";
    export default {
        name: "Wo",
        components: {
          Navbar,WoTop,WoHeader,WoFunList
        },
        data(){
              return {
                funclistnone:[{
                  text:'我的消息',
                  icon:'icon-form'
                },{
                  text:'积分商城',
                  icon:'icon-save'
                },{
                  text:'会员卡',
                  icon:'icon-huiyuan'
                }],
                funclist:[{
                    text:'我的购物车',
                    icon:'icon-gouwuche'
                  },{
                    text:'下载APP购物车',
                    icon:'icon-xiazai'
                  }]
              }
        }

    }
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
}
</style>
