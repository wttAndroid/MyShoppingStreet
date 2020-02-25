<template>
    <div class="toobaritem" @click="clickPath">
        <div v-if="isactive"  class="toobaritemimg" ><slot name="itemimg-active"/></div>
        <div v-else  class="toobaritemimg"><slot name="itemimg"/></div>
        <div :class="{active:isactive}"><slot name="itemtxt"/></div>
    </div>
</template>

<script>
    export default {
        name: "toobaritem",
        props:{
          path:String
      },
       computed:{
         isactive() {
           return this.$route.path==this.path;
         }
       },
      methods:{
        clickPath(){
          if(this.$route.path!=this.path) {
            console.log(this.path)
            this.$router.replace(this.path)
          }
        }
    }
    }
</script>

<style scoped>
.toobaritem {
  flex: 1;
  text-align: center;
  padding: 3px;
}
.active {
  color: red;
}

</style>
