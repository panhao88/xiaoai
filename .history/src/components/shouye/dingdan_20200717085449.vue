<template>
  <el-card>
    <div>
      <!-- 订单、进度条 -->
      <div class="box">
        <div class="box1">
          <el-col>
            <el-card shadow="hover">
              <div class="box1-top">
                <div class="font">order_no</div>
                <div class="font">price</div>
                <div class="font">status</div>
              </div>
              <div class="box1-content" v-for="(item,index) in arr" :key="index">
                <span class="pan1">{{item.num}}</span>
                <span>{{item.price}}</span>
                <!-- 请求中原本没有 pending ， success 用if条件判断，自己添加 -->
                <span v-if="item.status===0">
                  <span class="status">pending</span>
                </span>
                <span v-if="item.status===1">
                  <span class="status_a">success</span>
                </span>
              </div>
            </el-card>
          </el-col>
        </div>
      <!-- todolist条件 -->
        <div class="box2">
          <el-col>
            <el-card shadow="hover">
              <div>
                <div class="icon" >
                  <!-- 也是用v-if来判断图标的显示和隐藏 -->
                  <i class="el-icon-arrow-down" @click="icont()" v-if="checkbos===false"></i>默认checkbox
                  <i class="el-icon-arrow-up" @click="icont111()" v-if="checkbos===true"></i>
                  <div>Todo-List</div>
                </div>
                <div v-for="(item,index) in abb" :key="index">
                  <div class="panpan1">
                    <div>
                      <input type="checkbox" v-model="item.checked" @change="btn()"/>
                    </div>
                    <div class="name1">{{item.name}}</div>
                  </div>
                </div>
                <div class="pak">
                  <div>
                    <button>{{conple}}items - left</button>
                  </div>
                  <div>
                    <button  @click="checkall">ALL</button>
                  </div>
                  <div><button @click="checkA">Active</button></div>
                  <div><button @click="checkB">Completed</button></div>
                </div>
              </div>
            </el-card>
          </el-col>
        </div>
        <!-- 图表条件 -->
        <div class="box3">
          <el-col>
            <el-card shadow="hover">
              <img
                class="img"
                src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png"
                alt
              />
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_a"
                  :color="customColor_a"
                ></el-progress>
              </div>
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_b"
                  :color="customColor_b"
                ></el-progress>
              </div>
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_c"
                  :color="customColor_c"
                ></el-progress>
              </div>
              <div class="progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_d"
                  :color="customColor_d"
                ></el-progress>
              </div>
            </el-card>
          </el-col>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      arr: [],
      checkbos: null,
      percentage_a: 70,
      percentage_b: 100,
      percentage_c: 54,
      percentage_d: 70,
      customColor_a: "#409eff",
      customColor_b: "#4682B4",
      customColor_c: "#7FFFD4",
      customColor_d: "#E9967A",
      abb: [],
      app:[],
    };
  },
  methods: {
    // OrderData订单请求
    getOrderData() {
      axios
        .get("/api/orderData")
        .then(res => {
           
          this.arr = res.data.data;
          console.log(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // Progress进度条请求
    getProgress() {
      axios
        .get("/api/progress")
        .then(res => {
            // console.log(res.data.data);
          // this.chartData1.columns = Object.keys(res.data.data[0]);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // todolis请求
    gettyui() {
      axios
        .get("/api/todolist")
        .then(res => {
          this.abb = res.data.data;
          // console.log(this.abb)
           this.app = res.data.data;
            this.checkbos=this.abb.every(item=>{
            return item.checked===true
          })
          // console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 全选
    // 用点击事件来进行，循环数组abb的每一项，如果数组的每一项都默认checked，那么让checkbox都为true
    icont(){
        this.abb.map(item=>{
          item.checked = true
        })
        
        this.checkbos=true
    },
    // 反选
    icont111(){
      this.abb.map(item=>{
          item.checked = false
        })
        
        this.checkbos=false
    },
    btn(){
      this.checkbos=this.abb.every(item=>{
        return item.checked
      })
    },
    // 全部的
    checkall(){
        this.abb = this.app
    },
    // 没有完成的
    checkA(){
        this.abb = this.app.filter(item => {
            return item.checked===false
        })
    },
    // 已完成的
    checkB(){
      this.abb = this.app.filter(item => {
        return item.checked === true
      })
    }
  },
  mounted() {
    this.getOrderData();
    this.getProgress();
    this.gettyui();
  },
  watch: {},
  computed: {
    conple() {
      let add = this.abb.filter(item => {
        return item.checked === false;
      });
      return add.length;
    }
  }
};
</script>

<style scoped lang='scss'>
.box {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.box1 {
  width: 50%;
  height: 500px;
  margin: 0px 10px;
}
.box1-top {
  height: 50px;
  line-height: 50px;
  display: flex;
  align-items: center;
  border-bottom: darkgrey solid 1px;
}
.font:nth-child(1) {
  margin-left: 100px;
}
.font:nth-child(2) {
  margin-left: 300px;
}
.font:nth-child(3) {
  margin-left: 160px;
}
.box1-content {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: darkgrey solid 1px;
}
.pan1 {
  width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
}
.status {
  background: darksalmon;
  border-radius: 10px;
  padding: 5px;
}
.status_a {
  background: aquamarine;
  border-radius: 10px;
  padding: 5px;
}

.box2 {
  width: 25%;
  height: 500px;
  margin: 0px 10px;
}
.box3 {
  width: 25%;
  height: 500px;
  margin: 0px 10px;
}
.img {
  width: 100%;
  margin: 15px 0px;
}
.progress {
  margin: 20px 0px;
}
.icon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name1 {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 20px;
}
.panpan1 {
  height: 50px;
  display: flex;
  align-items: center;
}
.pak{
    display: flex;
    justify-content: space-between;
    white-space: nowrap;

}
</style>