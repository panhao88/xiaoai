<template>
  <div>
    <!-- 图片上传 -->
    <el-card>
      <el-card>
        <h1>支持拖拽</h1>
      </el-card>
      <div class="all">
        <el-upload
          class="upload-demo"
          drag
          action="api/upload"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </div>
       <el-card>
        <h1>支持裁剪</h1>
      </el-card>
      <el-card>
        <div id="app">
      <button class="btn" @click="toggleShow">上传图片</button>
      <my-upload  
      @crop-success="cropSuccess" 
     @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      v-model="show" 
      :width="200" 
     :height="200" 
     img-format="png" 
     :size="size"
     langType='zh'
     :noRotate='false'
     field="file"
     url="/api/upload"></my-upload>
     <img :src="imgDataUrl">
   </div>
      </el-card>
     
    </el-card>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";
export default {
  name: "",
  props: {},
  components: {
    myUpload
  },
  data() {
    return {
       imgDataUrl: "",
        show: false,
        size:2.1
    };
  },
  methods: {
      toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------',imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field){
            console.log('-------- upload success --------');
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log('field: ' + field);
        },
        //上传失败回调
        cropUploadFail(status, field){
            console.log('-------- upload fail --------');
            console.log('上传失败状态'+ status);
            console.log('field: ' + field);
        }
  },
  mounted() {},
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>

</style>