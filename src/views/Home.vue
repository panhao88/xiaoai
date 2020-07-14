<template>
  <div>
   <headr :arr = 'arr'></headr>
   <central></central>
    <figures></figures>
    <dingdan></dingdan>
  </div>
</template>

<script>
import axios from "axios";
import headr from "../components/shouye/headr"
import central from '../components/shouye/central'
import figures from '../components/shouye/figures'
import dingdan from '../components//shouye/dingdan'
export default {
  name: "",
  props: {},
  components: { 
    headr,
    central,
    figures,
    dingdan
   },
  data() {
    return {
      arr: {},
     
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/homeData")
        .then(res => {
          this.arr = res.data.data;
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
  
  },
  mounted() {
    this.getData();
  
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>

</style>
