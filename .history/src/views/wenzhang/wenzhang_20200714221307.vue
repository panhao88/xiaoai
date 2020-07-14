<template>
  <div>
    <!-- 文章 -->
    <el-card>
      <div style="width:100%; display:flex;  justify-content: center;">
        <el-button type="danger">查看</el-button>
        <el-button type="primary">发布</el-button>
      </div>
    </el-card>
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
        <el-card>
          <div style="display:flex;  justify-content: center;">
            <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
          </div>
        </el-card>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: {
        title: "",
        abstract: "",
        author: "",
        category: "",
        source: "",
        star: "",
        text: "",
        date: ""
      },
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
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      options1: [
        {
          value: "vue",
          label: "vue"
        },
        {
          value: "React",
          label: "React"
        },
        {
          value: "Node.js",
          label: "Node.js"
        },
        {
          value: "性能优化",
          label: "性能优化"
        },
        {
          value: "javaScript",
          label: "javaScript"
        },
        {
          value: "小程序",
          label: "小程序"
        },
        {
          value: "工具类",
          label: "工具类"
        },
        {
          value: "其他",
          label: "其他"
        }
      ],
      options2: [
        {
          value: "原创",
          label: "原创"
        },
        {
          value: "转载",
          label: "转载"
        },
        {
          value: "与他人合作",
          label: "与他人合作"
        }
      ],
      options3: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        }
      ]
    };
  },
  methods: {
      submitForm(ruleForm){
        this.$
      }
    getDSAD() {
      axios.post("/api/article/create", {});
    }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.box {
}
</style>