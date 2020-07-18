<template>
  <div>
    <el-card class="all">
      <el-table :data="tableData" border style="width:88vw">
        <el-table-column label="#" width="40">
          <template slot-scope="scope">{{scope.$index + 1}}</template>
          <!-- scope改变属性值 -->
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="author" label="作者" width="100"></el-table-column>
        <el-table-column prop="category" label="类目" width="100"></el-table-column>
        <el-table-column prop="source" label="来源" width="100"></el-table-column>
        <el-table-column prop="star" label="重要性" width="100"></el-table-column>
        <el-table-column prop="date" label="发布时间"></el-table-column>
        <el-table-column prop="address" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              class="nall"
              @click.native.prevent="clickcompile(scope.row)"
            >编辑</el-button>

            <el-button type="danger" class="nall" @click.native.prevent="clickin(scope.row)">删除</el-button>

            <el-button type="success" class="nall" @click.native.prevent="clicksee(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
  data() {
    return {
      tableData: []
    };
  },
  components: {},
  methods: {
    // 获取所有的文章
    getDadasta() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          this.tableData = res.data.data;
          this.tableData.map(item => {
            item.date = dayjs(item.date).format(
              "YYYY年MM月DD日HH时mm分ss秒"
            );
            console.log(res.data);
          });
          // console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    clicksee(row) {
      //console.log(val);
      this.$router.push({ name: "see", query: { _id: row._id } });
    }, 
    clickcompile(row) {
      //console.log(val);
      this.$router.push({ name: "primary", query: { _id: row._id } });
    },
    // 删除文章
     clickin(row) {
      axios
        .post(`/api/article/delete`, {
          _id: row._id
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success("删除成功");
            this.getDadasta();
          } else {
            this.$message.error(res.data.message);
          }
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getDadasta();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.all {
  width: 100%;
  height: 100%;
}
</style>