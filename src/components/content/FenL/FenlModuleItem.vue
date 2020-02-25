<template>
  <div class="moduleitem" ref="moduleitem">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "FenlModuleItem",
        props:{
          cols:{
            type:Number,
            default:5
          },
          itemSpace: {
            type: Number,
            default: 30
          }
        },
        mounted() {
            let width=this.$refs.moduleitem.parentNode.clientWidth;//父亲宽度  总宽度
            this.$refs.moduleitem.children[0].childNodes[0].style.width=(width-this.itemSpace)/this.cols+'px'
          }
    }
</script>

<style scoped>
  .moduleitem {
    flex: 1;
    text-align: center;
  }
</style>
