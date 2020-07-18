<template>
 <div>
     <div class="box1">
         <div class="box2">
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="register">注册</el-button>
        <el-button type="primary" @click="denglu">登录</el-button>
      </el-form-item>
    </el-form>
         </div>
     </div>
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
          ruleForm: {
        username: "",
        password: ""
      },
        rules: {
        username: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2~10为之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6~15位之间",
            trigger: "blur"
          }
        ]
      }
     }
   },
   methods: {
       denglu(){
      this.$router.push('/denglu')
    },
    register() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          // console.log(111);
         axios.post('/api/user/register',{
           username: this.ruleForm.username,
           password: this.ruleForm.password,
         }).then(res => {
           if(res.data.code === 200){
             console.log(res.data);
             this.$message.success('注册成功')  // message消息        success成功
             this.$router.push('/denglu')
           }
         }).catch(err => {
           console.log(err)
         })
        } else {
          this.$message.error("表单验证有误，请检查");
          return;
        }
      });
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
    .box1 {
  position: fixed;
  margin: 0px;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/unnamed.jpg");
  background-size: 100% 100%;
}
.box2{
    width: 400px;
    height: 300px;
    background: blanchedalmond;
    position: relative;
    top: 50%;
    transform: translateY(-70%);
    margin-left: 60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>