<template>
  <div class="container">
    <div class="box">
      <div class="box1"></div>
      <div class="top">
        <div>
          <el-button type="danger" @click="revert">返回</el-button>
        </div>
        <div>
          <el-button type="primary" @click="publish">发布</el-button>
        </div>
      </div>
      <div class="box1"></div>
    </div>
    <el-card>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="文章标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="文章摘要" prop="abstract">
          <el-input v-model="ruleForm.abstract"></el-input>
        </el-form-item>
        <div style="display:flex">
          <el-form-item label="作者" prop="author">
            <el-input v-model="ruleForm.author" placeholder="请选择" style="width:170px"></el-input>
          </el-form-item>
          <el-form-item label="类目" prop="category">
            <el-select v-model="ruleForm.category" placeholder="请选择" style="width:150px">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="来源" prop="source">
            <el-select v-model="ruleForm.source" placeholder="请选择" style="width:150px">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="重要性" prop="star">
            <el-select v-model="ruleForm.star" placeholder="请选择" style="width:150px">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <!-- <div class="block"> -->
          <el-form-item label="发布时间" prop="date">
            <!-- <span class="demonstration">发布时间</span> -->
            <el-date-picker
              v-model="ruleForm.date"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions"
              style="width:150px"
            ></el-date-picker>
          </el-form-item>
          <!-- </div> -->
        </div>
        <mavon-editor :ishljs="true" v-model="ruleForm.text"></mavon-editor>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Edit",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {},
         rules: {
        title: [
          {
            required: true,
            message: "请输入文章标签",
            trigger: "blur"
          },
          {
            min: 3,
            max: 8,
            message: "长度在3~8位之间",
            trigger: "blur"
          }
        ],
        abstract: [
          {
            required: true,
            message: "请输入文章摘要",
            trigger: "blur"
          }
        ],
        author: [
          {
            required: true,
            message: "请输入作者",
            trigger: "blur"
          }
        ],
        category: [
          {
            required: true,
            message: "请输入你的类目",
            trigger: "blur"
          }
        ],
        source: [
          {
            required: true,
            message: "请输入你的来源",
            trigger: "blur"
          }
        ],
        star: [
          {
            required: true,
            message: "请选择一项",
            trigger: "blur"
          }
        ],
        date: [
          {
            required: true,
            message: "请让老子记录你的时间",
            trigger: "blur"
          }
        ]
      },
      id: ""
    };
  },
  methods: {
    publish() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          axios
            .post("/api/article/update", {
              title: this.ruleForm.title,
              abstract: this.ruleForm.abstract,
              author: this.ruleForm.author,
              category: this.ruleForm.category,
              source: this.ruleForm.source,
              star: this.ruleForm.star,
              text: this.ruleForm.text,
              data: this.ruleForm.data,
              id: this.id
            })
            .then(res => {
              if (res.data.success === true) {
                this.$message.success("发布成功");
                this.$router.push("/yifabu");
              } else {
                this.$message.error('发布失败');
              }
              console.log(res.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    revert() {
      this.$router.push("/yifabu");
    }
  },
  mounted() {
    this.id = this.$route.query._id;
     axios
        .post(`/api/article/article`, {
          _id: this.id
        })
        .then(res => {
          this.ruleForm = res.data.data
        })
        .catch(err => {
          console.log(err);
        });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 800px;
}
.box1 {
  width: 300px;
}
.briefly {
  display: flex;
}
.box {
  display: flex;
  margin-top: 20px;
}
.article {
  margin-top: 30px;
}
</style>