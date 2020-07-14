<template>
 <div>
      <el-card>
      <div class="box-card">
        <div class="box1">
          <div>
            <img class="img" src="../../assets/联系人.svg" alt />
          </div>
          <div>
            <div>new visits</div>
            <countTo :startVal="startVal" :endVal="arr.visits" :duration="3000"></countTo>
          </div>
        </div>
        <div class="box1">
          <div>
            <img class="img" src="../../assets/对话.svg" alt />
          </div>
          <div>
            <div>messages</div>
            <countTo :startVal="startVal" :endVal="arr.messages" :duration="3000"></countTo>
          </div>
        </div>
        <div class="box1">
          <div>
            <img class="img" src="../../assets/qian.svg" alt />
          </div>
          <div>
            <div>purchases</div>
            <countTo :startVal="startVal" :endVal="arr.purchases" :duration="3000"></countTo>
          </div>
        </div>
        <div class="box1">
          <div>
            <img class="img" src="../../assets/gouwuche.svg" alt />
          </div>
          <div>
            <div>shoppings</div>
            <countTo :startVal="startVal" :endVal="arr.shopping" :duration="3000"></countTo>
          </div>
        </div>
      </div>
    </el-card>
 </div>
</template>

<script>
import countTo from "vue-count-to";
 export default {
   name: '',
   props: {
       arr:{
           type:Object
       }
   },
   components: {
       countTo
   },
   data () {
     return {
          startVal: 0,
          endVal: ''
     }
   },
   methods: {

   },
   mounted() {

    },
   watch: {

   },
   computed: {

   },
   filters: {

   },
 }
</script>

<style scoped lang='scss'>
.box-card {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;

}
.box1 {
  width: 24%;
  height: 40px;
  background: beige;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.img {
  height: 30px;
  width: 30px;
}
</style>