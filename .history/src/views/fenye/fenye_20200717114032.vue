<template>
  <div>
    <!-- 分页 -->
    <el-card>
        <div style="width:100%">
             <el-card> 
      <input type="text" placeholder="请输入你想搜索的商品名称" v-model="didi" />
    </el-card>
    <el-card>
      <div>
        <table class="table table-bordered">
          <el-table
            :data="add.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
            style="width:100%"
          >
          <!-- label显示地标题 -->
          prop对应列内容的字段名
            <el-table-column label="姓名" width="300" prop="NAME"></el-table-column>
            <el-table-column label="商品编号" width="220" prop="GOODS_SERIAL_NUMBER"></el-table-column>
            <el-table-column label="原价" width="240" prop="ORI_PRICE"></el-table-column>
            <el-table-column label="现价" width="240" prop="PRESENT_PRICE"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  icon="el-icon-edit"
                  @click="handleEdit(scope.row)"
                >编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </table>
        <el-dialog  :visible.sync="dialogVisible" width="30%">
          <el-form>
            <el-form-item label="名称" label-width="40px">
              <el-input v-model="obj.NAME" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="原价" label-width="40px">
              <el-input v-model="obj.ORI_PRICE" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="现价" label-width="40px">
              <el-input v-model="obj.PRESENT_PRICE" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10,20,30,40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="add.length"
        ></el-pagination>
      </div>
    </el-card>
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
      add: [],
      didi: "",
      abb: [],
      obj: {},
      dialogVisible: false,
      //  默认一页多少条
      pageSize: 40,
      //  默认第几页
      currentPage: 1
    };
  },
  methods: {
    // 请求请求
    getdasd() {
      axios
        .get("/api/tableData")
        .then(res => {
          this.add = res.data.data;
          this.obj = res.data.data
          this.abb = res.data.data;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 分页条数
    handleSizeChange(val) {
      this.pageSize = val;
    },
    // 分页页数
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    // 编辑资料
    handleEdit(row) {
      this.dialogVisible = true;
      this.obj = row;
    },
    // 删除资料
    handleDelete(index, row) {
      this.add.splice(index, 1);
    },
  },
  mounted() {
    // 请求的调用
    this.getdasd();
  },
  watch: {
    // 模糊搜索监听关键字
    didi(val) {
       this.currentPage = 1;
      this.add = this.abb.filter(item => {
        return JSON.stringify(item).includes(val);
      });
    }
  },
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box1 {
  display: flex;
}
.box2 {
  width: 140px;
  background: chartreuse;
  display: flex;
  justify-content: center;
}

</style>