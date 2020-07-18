<template>
  <div class="box1">
    <div class="box2">
    <!-- 动态绑定model的是表单prop里的数据对象 -->
    <!-- 动态绑定rules是验证prop表单的规则 -->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <div class="input-name">
            <el-input v-model="ruleForm.username"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <div class="input-name">
            <el-input v-model="ruleForm.password"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="验证码" prop="name">
          <div class="inputs">
            <el-input v-model="ruleForm.name"></el-input>
            <div v-html="code" @click="getCode"></div>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">注册</el-button>
          <el-button type="primary" @click="resetForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
         code:'',
      ruleForm: {
        username: "",
        password: "",
        name: "",
        
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
            message: "密码不能位空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6~15位之间",
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    //    跳转到注册页面
    // ref是用来给元素注册引用信息的，所应用的信息会放在$refs这个集合中，注意$refs后面要紧跟ref的值
    submitForm() {
      this.$router.push("/zhuce");
    },
    resetForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/user/login", {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              code: this.ruleForm.name
            })
            .then(res => {
              // console.log(res);
              if (res.data.code === 200) {
                console.log(res.data.data);
                let user = res.data.data[0];
              localStorage.setItem("user", JSON.stringify(user));
                this.$router.push("/home");
                this.$message.success("登录成功");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message.error("登录错误");
          return false;
        }
      });
    },
    getCode(){
        axios.get("/api/captcha").then(res => {
            // console.log(res.data);
            this.code = res.data
        }).catch(err => {
            console.log(err);
        })
    }
  },
  mounted() {
      this.getCode()
  },
  watch: {},
  computed: {},
  filters: {}
};
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
.box2 {
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

// input输入框名字
.input-name {
  width: 100%;
}
.inputs {
  width: 80%;
  display: flex;
}
</style>