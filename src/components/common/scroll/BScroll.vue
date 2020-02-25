<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "BScroll",
        props:{
          click:{
            type:Boolean,
            default:true
          },
          probeType:{
            type:Number,
            default: 0
          },
          pullUpLoad:{
            type:Boolean,
            default: true
          }
        },
        data(){
          return {
            Scroll:null
          }
        },
        methods:{
            updaterHeight() {
             this.Scroll&&this.Scroll.refresh&&this.Scroll.refresh();
            },
            getScroY() {
              return  this.Scroll?this.Scroll.y:0;
            },
            tpScro(y=0,date=1000) {
              this.Scroll&&this.Scroll.scrollTo(0,y,date)
            },
            pullFnish() {
              this.Scroll&&this.Scroll.finishPullUp&&this.Scroll.finishPullUp();
              // this.updaterHeight();
            },
            refresh() {
              this.Scroll&&this.Scroll.refresh&&this.Scroll.refresh();
            }
        },
        mounted() {
        this.Scroll=new BScroll(this.$refs.wrapper,{
           click:this.click,
           probeType:this.probeType,
           pullUpLoad:this.pullUpLoad
        });
          this.Scroll.on('scroll',(posion)=>{
              this.$emit('scrollEvent',posion);
          });
          this.Scroll.on('pullingUp',()=>{

            this.$emit('pullInfo');
          });
       }
    }
</script>

<style scoped>

</style>
