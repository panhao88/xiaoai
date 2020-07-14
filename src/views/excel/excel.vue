<template>
 <div>
     <!-- 导出excel -->
  <el-card>
    <div>
      <table class="table  table-bordered " >
        <tr>
          <td>名称</td>
          <td>商品编号</td>
          <td>原价</td>
          <td>现价</td>
        </tr>
        <tr v-for="(item,index) in add.slice((currentPage -1 ) * pageSize,currentPage * pageSize) " :key="index"  class="table table-bordered">
            <td>
            <div class="box">{{item.NAME}}</div>
          </td>
          <td>
            <div>{{item.GOODS_SERIAL_NUMBER}}</div>
          </td>
          <td>
            <div>{{item.ORI_PRICE}}</div>
          </td>
          <td>
            <div>{{item.PRESENT_PRICE}}</div>
          </td>
        </tr>
      </table>
       <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10,20,30,40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="add.length">
    </el-pagination>
    </div>
  </el-card>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       add:[],
      //  默认一页多少条
       pageSize:10,
      //  默认第几页
       currentPage:1
     }
   },
   methods: {
     getdasd(){
       axios.get('/api/tableData').then(res => {
         this.add = res.data.data
        //  console.log(res.data);
       }).catch(err => {
         console.log(err);
       })
     },
     handleSizeChange(val){
       this.pageSize = val
     },
     handleCurrentChange(val){
       this.currentPage = val
     }
   },
   mounted() {
     this.getdasd()
    },
   watch: {

   },
   computed: {

   },
   filters: {

   },
 }
</script>

<style scoped lang='scss'>
  .table{
    font-size: 25px;
    font-weight: 400;
    font-family:NSimSun  ;
  }
</style>