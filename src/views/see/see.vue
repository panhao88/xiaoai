<template>
<div class="all">
    <div class="top">
      <el-button type="primary" style="height:40px;" @click="clickblack">返回</el-button>
      <div class="FLE">
        <div>
          <h1>{{obj.title}}</h1>
        </div>
        <div>
         <h5>摘要：{{obj.abstract}}</h5>
        </div>
        <h3>发表于：{{date}}</h3>
      </div>
    </div>

    <el-card>
        <div>{{obj.text}}</div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      id: "",
      obj: {},
      date: ''
    };
  },
  components: {},
  methods: {
    clickblack() {
     history.back()
    },
    getData() {
      axios
        .post(`/api/article/article`, {
          _id: this.id
        })
        .then(res => {
          this.obj = res.data.data;
          this.date = dayjs(res.data.data.date).format("YYYY年MM月DD日HH时mm分ss秒");
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    
  },
  mounted() {
    this.id = this.$route.query._id;
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.all {
  width: 90%;
  height: 100%;
  margin: 10px 10px;
}
.top {
  width: 100%;
  height: 200px;
  display: flex;
}
.buttom {
  width: 100%;
  height: 250px;
}
.FLE {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>