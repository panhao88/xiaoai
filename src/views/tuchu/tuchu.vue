<template>
  <div>
    <!-- 退出登录 -->
    <div class="box">
      <div class="box2">期待你的下次光临</div>
      <div>
        <el-button type="success" round @click="goto">确认退出</el-button>
      </div>
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
    return {};
  },
  methods: {
    goto() {
            axios
        .get("/api/user/logout")
        .then(res => {
          if (res.data.code === 0) {
            this.$message.error('退出成功');
            localStorage.removeItem("user");
            this.$router.push("/denglu");
          } 
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
}
.box2 {
  font-size: 20px;
}
</style>