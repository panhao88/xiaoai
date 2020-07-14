<template>
 <div>
   <div class="box">
      <div class="box1">
         <el-col >
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="rgb(60,120,140)"
         active-text-color="#ffd04b"
     >
        <el-menu-item index="1" @click="tudu1">
        <i class="el-icon-thumb"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="tudu2">
        <i class="el-icon-menu"></i>
        <span slot="title">已发布</span>
      </el-menu-item>
      <el-menu-item index="3" @click="tudu3">
        <i class="el-icon-menu"></i>
        <span slot="title">统计</span>
      </el-menu-item>
      <el-menu-item index="4" @click="tudu4">
        <i class="el-icon-check"></i>
        <span slot="title">发表文章</span>
      </el-menu-item>
      <el-menu-item index="5" @click="tudu5">
        <i class="el-icon-setting"></i>
        <span slot="title">标签页</span>
      </el-menu-item>
       <el-menu-item index="6" @click="tudu6">
        <i class="el-icon-setting"></i>
        <span slot="title">导出excel</span>
      </el-menu-item>
       <el-menu-item index="7" @click="tudu7">
        <i class="el-icon-setting"></i>
        <span slot="title">图片上传</span>
      </el-menu-item>
      <el-menu-item index="8"  @click="tudu8">
        <i class="el-icon-setting"></i>
        <span slot="title">分页表格</span>
      </el-menu-item>
       <el-menu-item index="9"  @click="tudu9">
        <i class="el-icon-setting"></i>
        <span slot="title">退出系统</span>
      </el-menu-item>
    </el-menu>
  </el-col>
      </div>
   </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     tudu1(){
       this.$router.push('/')
     },
     tudu2(){
       this.$router.push('/yifabu')
     },
     tudu3(){
       this.$router.push('/tongji')
     },
     tudu4(){
       this.$router.push('/wenzhang')
     },
     tudu5(){
       this.$router.push('/biaoqianye')
     },
    tudu6(){
      this.$router.push('/excel')
    },
    tudu7(){
      this.$router.push('/tupian')
    },
    tudu8(){
      this.$router.push('/fenye')
    },
    tudu9(){
      this.$router.push('/tuchu')
    }
   },
   mounted() {

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
  .box{
    width: 15%;
    height: 600px;
     background: rgb(60,120,140);
     position: fixed;
  }
  .el-menu-vertical-demo{
    height: 600px;
    display: flex;
     flex-direction: column;
     justify-content: space-around;
  }
</style>