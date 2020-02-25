<template>
    <div class="moduleitem">
      <slot></slot>
<!--        <div class="moduleitem-img"><slot name="moduleitem-img"></slot></div>-->
<!--        <div class="moduleitem-text"><slot name="moduleitem-text"></slot></div>-->
    </div>
</template>

<script>
    export default {
        name: "HomeModuleItem"
    }
</script>

<style scoped>
.moduleitem {
  flex: 1;
  text-align: center;
}
</style>
