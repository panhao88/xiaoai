<template>
  <div>
    <div class="box">
      <div class="box1">
        <div>欢迎{{didi.username}} 来到小爱后台管理系统</div>
      </div>

      <div class="box2">
        <div>{{time}}{{didi.username}}</div><span class="kongge"></span>
        <div>上次登录时间:{{shijian}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      didi: {},
      shijian: "",
      time: ""
    };
  },
  methods: {},
  mounted() {
    this.didi = JSON.parse(localStorage.getItem("user"));
    clg
    this.shijian = dayjs().format("YYYY年MM月DD日HH时mm分ss秒");
    let time = dayjs().format("HH");
    if (time >= 1 && time < 10) {
      this.time = '早上好,亲爱的';
    } else if (time >= 10 && time < 14) {
      this.time = "中午好,亲爱的";
    } else if (time >= 14 && time < 18) {
      this.time = "下午好,亲爱的";
    } else if (time >= 18 && time < 24) {
      this.time = "晚上好,亲爱的";
    } else {
      this.time = "晚安宝贝,亲爱的";
    }
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  height: 60px;
  background: rgb(46, 94, 133);
  display: flex;
  justify-content: space-between;
    position: fixed;
    z-index: 1;
}
.box1 {
  width: 300px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // background: yellow;
  margin-left: 50px;
  color: beige;
  font-size: 15px;
}
.box2 {
  width: 500px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  // background: yellowgreen;
  margin-right: 50px;
  color: beige;
  font-size: 15px;
}
.kongge{
  width: 14px;
}
</style>