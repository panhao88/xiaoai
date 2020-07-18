<template>
  <div>
    <el-card>
        <div>
             <ve-line :data="chartData" ></ve-line>
        </div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  props: {
     
  },
  components: {},
  data() {
    return {
         chartData: {
          columns: [],
          rows: []
        }
    };
  },
  methods: {
        getFata(){
      axios.get("/api/homeChat").then(res =>{
        this.chartData.columns = Object.keys(res.data.data[0]) 
        // 遍列这个对象数组中的每一项，
        this.chartData.rows = res.data.data
        // console.log(res.data);
      }).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
        this. getFata();
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
</style>