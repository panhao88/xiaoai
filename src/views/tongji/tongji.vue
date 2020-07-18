<template>
  <div>
    <!-- 统计 -->
    <el-card>
      <div class="total">
        <div class="total_a" style="background-color: rgb(124, 202, 191);">
          <div class="total_b">
            <div>今日发布</div>
            <div>{{toda.length}}</div>
          </div>
          <i class="el-icon-check"></i>
        </div>
        <div class="total_a" style="background-color: rgb(232, 138, 135);">
          <div class="total_b">
            <div>原创文章</div>
            <div>{{self.length}}</div>
          </div>
          <i class="el-icon-tickets"></i>
        </div>
      </div>
    </el-card>
    <el-card>
      <div class="box">
        <div>
          <ve-pie :data="chartData"></ve-pie>
        </div>
        <div>
          <ve-pie :data="chartData1"></ve-pie>
        </div>
      </div>
    </el-card>
    <el-card>
      <div>
        <div class="total_e">
          <ve-waterfall :data="chartData2"></ve-waterfall>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import lodash from "lodash";
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      chartData: {
        columns: ["分类", "数量"],
        rows: [
          //  {
          //    '分类':'性能优化',
          //    '数量':'1'
          //  },
          //   {
          //    '分类':'小程序',
          //    '数量':'1'
          //  },
          //   {
          //    '分类':'小程序',
          //    '数量':'1'
          //  }
        ]
      },
      chartData1: {
        columns: ["分类", "数量"],
        rows: []
      },
      chartData2: {
        columns: ["分类", "数量"],
        rows: []
      },
      toda: "",
      self: "",
  
    };
  },
  methods: {
    getdfasd() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data);
          let category = lodash.groupBy(res.data.data, "category");
          for (let i in category) {
            let obj = {};
            // 中文不能点，这样就拿到了数组的健
            obj["分类"] = i;
            obj["数量"] = category[i].length;
            this.chartData.rows.push(obj);
            // console.log(i);
            // i拿到的是数组的健（名字）
            // console.log(category[i]);
          }
          let source = lodash.groupBy(res.data.data, "source");
          for (let i in source) {
            let obj1 = {};
            obj1["分类"] = i;
            obj1["数量"] = source[i].length;
            this.chartData1.rows.push(obj1);
          }
          res.data.data.map(item => {
          });
          let date =  lodash.groupBy(res.data.data, "date");
          console.log(date);
          for (let i in date) {
            this.aaa=dayjs(i).format("YYYY年MM月DD日")
            console.log(this.aaa);
            let obj2 = {};
            obj2["分类"] = this.aaa;
            obj2["数量"] = date[i].length;
            this.chartData2.rows.push(obj2);
          }
          // console.log(category)
          
          this.toda = res.data.data.filter(item => {
            return item.date === dayjs().format("YYYY年MM月DD日");
          });
          this.self = res.data.data.filter(item => {
            return item.source === "原创";
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdfasd();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  display: flex;
}
.box div {
  flex: 1;
}
.total {
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-around;
}
.total_a {
  width: 25%;
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-around;
  color: white;
  background-color: rgb(124, 202, 191);
}
.total_b div {
  text-align: center;
}
</style>