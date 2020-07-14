<template>
  <el-card>
    <div>
      <div class="boxss">
        <div class="box">
            <ve-radar :data="chartData"></ve-radar>
        </div>

        <div class="box">
            <ve-pie :data="chartData1"></ve-pie>

        </div>
        <div class="box">
            <ve-histogram :data="chartData2"></ve-histogram>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chartData: {
        columns: [],
        rows: []
      },
      chartData1: {
        columns: [],
        rows: []
      },
      chartData2: {
        columns: [],
        rows: []
      }
    };
  },
  methods: {
    //    雷达图
    getQwer() {
      axios
        .get("/api/radarChat")
        .then(res => {
          this.chartData.columns = Object.keys(res.data.data[0]);
          this.chartData.rows = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //    饼图
    getDahgf() {
      axios
        .get("/api/ringChat")
        .then(res => {
          this.chartData1.columns = Object.keys(res.data.data[0]);
          this.chartData1.rows = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //    柱状图
    getDhfh() {
      axios
        .get("/api/homeChat")
        .then(res => {
          this.chartData2.columns = Object.keys(res.data.data[0]);
          this.chartData2.rows = res.data.data;
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getQwer();
    this.getDahgf();
    this.getDhfh();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>

.boxss{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.boxss>div{
    flex:3;
}
</style>