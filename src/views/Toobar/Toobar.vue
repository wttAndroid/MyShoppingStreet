<template>
        <toobar class="toobar">
            <toobaritem class="toobaritem" path="/home">
                <img slot="itemimg-active" src="~/assets/img/toobar/dianhua2.svg">
                <img slot="itemimg" src="~/assets/img/toobar/dianhua.svg">
                <div slot="itemtxt">首页</div>
            </toobaritem>
          <toobaritem class="toobaritem" path="/fenlei">
            <img slot="itemimg-active" src="~/assets/img/toobar/dingdan2.svg">
            <img slot="itemimg" src="~/assets/img/toobar/dingdan.svg">
            <div slot="itemtxt">分类</div>
          </toobaritem>
          <toobaritem class="toobaritem" path="/gouwuche">
            <img slot="itemimg-active" src="~/assets/img/toobar/pengyouquan2.svg">
            <img slot="itemimg" src="~/assets/img/toobar/pengyouquan.svg">
            <div slot="itemtxt">购物车</div>
          </toobaritem>
          <toobaritem class="toobaritem" path="/wode">
            <img slot="itemimg-active" src="~/assets/img/toobar/pinglun2.svg">
            <img slot="itemimg" src="~/assets/img/toobar/pinglun.svg">
            <div slot="itemtxt">我的</div>
          </toobaritem>
        </toobar>
</template>

<script>
    import toobar from "components/common/toobar/toobar";
    import toobaritem from "components/common/toobar/toobaritem";
    export default {
        name: "Toobar",
        components:{
            toobar,
            toobaritem
        }
    }
</script>

<style scoped>
.toobar {
  height: 45px;
  background-color: #f8f8f8;
  font-size: 12px;
  box-shadow: 0 -0.5px 0px #cccccc;
}
img {
  width: 23px;
  vertical-align: middle;
  margin: 1px;
}
</style>
