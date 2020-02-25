<template>
    <div class="goodsparsm">
      <table>
        <tbody>
<!--          <tr v-for="item of itemParams.rule.tables[0]"><td v-for="items of item">{{items}}</td></tr>-->
          <tr v-for="item of itemParams"><td v-for="items of item">{{items}}</td></tr>
          <tr v-for="item of itemParamsone"><td>{{item.key}}</td><td>{{item.value}}</td></tr>
        </tbody>
      </table>
    </div>
</template>

<script>
    export default {
        name: "GoodsParam",
         props:{
           itemParams:{
             type:Array,
             default:[]
           },
           itemParamsone:{
             type:Array,
             default:[]
           }
         },
        created() {
        }
    }
</script>

<style scoped>
.goodsparsm table{
  width: 100%;
}
 table tr {
   display: flex;
 }
table tr td:nth-child(1){
  width: 50px;
  flex: none;
  font-weight: 600;
  color: black;
}
 table td{
  flex: 1;
  color: rgba(255, 0, 0, 0.5);
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #cccccc;
}

</style>
