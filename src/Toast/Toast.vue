<template>
    <div class="toast" v-if="isshow">
      {{message}}
    </div>
</template>

<script>
    export default {
        name: "Toaset",
        data(){
            return {
              message:'',
              isshow:false
            }
        },
        methods:{
          show(message,duration=1000){
            this.message=message;
            this.isshow=true;
            setTimeout(() =>{
              this.isshow=false;
            },duration);
          }
        }
    }
</script>

<style scoped>
.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  z-index: 999;
  background-color:rgba(0,0,0,.5);
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  font-size: 10px;
  color: white;
}
</style>
