<template>
  <div>
    <!-- 已发布 -->
    <el-card>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="#" width="30"></el-table-column>
          <el-table-column prop="date" label="标题" width="180"></el-table-column>
          <el-table-column prop="name" label="作者" width="70"></el-table-column>
          <el-table-column prop="address" label="类目" widt="90"></el-table-column>
          <el-table-column prop="address" label="来源" widt="70"></el-table-column>
          <el-table-column prop="address" label="重要性" widt="120"></el-table-column>
          <el-table-column prop="address" label="发布时间" widt="120"></el-table-column>
          <el-table-column prop="address" label="操纵" widt="180"></el-table-column>
        </el-table>
      </div>
    </el-card>
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
      tableData:[]
    };
  },
  methods: {
    getdsadd() {
      axios
        .get("/api/article/allArticle")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getdsadd();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
</style>