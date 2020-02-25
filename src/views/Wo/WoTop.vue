<template>
    <div class="woTop">
      <a class="clearfix">

        <div class="toux">
          <slot name="userimg">
            <span class="iconfont icon-touxiang"></span>
          </slot>
        </div>


        <div class="uerstatu">

          <slot name="username">
            <div>登录/注册</div>
          </slot>

          <div class="pohone">
            <span class="iconfont icon-shouji">
            </span>
            <slot name="userphone">
              暂无绑定手机号码
            </slot>
          </div>

        </div>

        <span class="iconfont icon-youbian"></span>


      </a>
    </div>
</template>

<script>
    export default {
        name: "WoTop"
    }
</script>

<style scoped>
.woTop {
  background-color: var(--color-tint);
  padding: 10px;
}
a {
  color: white !important;
  display: block;
}
  .icon-touxiang,.toux{
    font-size: 60px;
    /*background-color: #fff;*/
    border-radius: 30px;
    float: left;
    overflow: hidden;
  }
  .icon-youbian {
    float: right;
    padding: 10px;
    margin-top: 10px;
    width: 12px;
    height: 18px;
    display: inline-block;
  }

  .uerstatu {
    float: left;
    margin: 10px 5px;
    line-height: 20px;
  }
  .pohone {
    position: relative;
    font-size: 13px;
  }

</style>
