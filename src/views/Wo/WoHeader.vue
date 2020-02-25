<template>
    <div class="woheader">
        <div class="headeritem">
            <div>
              <span>0</span>元
            </div>
          <div>我的余额</div>
        </div>

      <div class="headeritem">
        <div>
          <span>0</span>个
        </div>
        <div>我的优惠</div>
      </div>

      <div class="headeritem">
        <div>
          <span>0</span>分
        </div>
        <div>我的积分</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "WoHeader"
    }
</script>

<style scoped>
.woheader {
  display: flex;
  background-color: #f4f4f4;
  border-bottom: 10px solid #f4f4f4;
  font-size: 13px;
  text-align: center;
}
  .headeritem {
    flex: 1;
    padding: 20px;
    margin-right: 1px;
    background-color: white;
    line-height: 20px;
  }

.headeritem:last-of-type {
  margin-right: 0;
}
  .headeritem span {
    font-size: 20px;
    font-weight: bold;
    color: orangered;
  }
</style>
