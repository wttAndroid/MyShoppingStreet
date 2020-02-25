<template>
    <div class="chebox" :class="{check:ischeck}"></div>
</template>

<script>
    export default {
        name: "CheckBox",
        props:{
          ischeck:{
            type:Boolean,
            default:true
          }
        }
    }
</script>

<style scoped>
.chebox {
  background: url("../../../assets/botton/checkNo.png") no-repeat center;
  background-size: 100%;
}
.check {
    background: url("../../../assets/botton/check.png") no-repeat center;
    background-size: 100%;
}
</style>
