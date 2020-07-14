<template>
  <div>
    <!-- 标签页 -->
    <el-card>
      <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="`未读消息(${arr1.length})`" name="second">
            <div v-if="arr1.length > 0">
              <div v-for="(item,index) in arr1" :key="index">
                <table class="table table-bordered">
                  <td>{{item.title}}</td>
                  <div class="didi">
                    <td>{{item.time}}</td>
                    <div>
                      <el-button type="primary" @click="clickA(item)">标记已读</el-button>
                    </div>
                  </div>
                </table>
              </div>
            </div>
            <div v-else>
              <h1>暂无数据</h1>
            </div>
            <div>
              <el-button type="success" @click="clickAA">全部标记为已读</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="`已读消息${arr2.length}`" name="first">
            <div v-if="arr2.length > 0">
              <div v-for="(item,index) in arr2" :key="index">
                <table class="table table-bordered">
                  <td>{{item.title}}</td>
                  <div class="didi">
                    <td>{{item.time}}</td>
                    <div>
                      <el-button type="danger" @click="clickB(item)">删除</el-button>
                    </div>
                  </div>
                </table>
              </div>
            </div>
            <div v-else>
              <h1>暂无数据</h1>
            </div>
            <div>
              <el-button type="success" @click="clickBB">全部删除</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="`回收站${arr3.length}`" name="third">
            <div v-if="arr3.length > 0">
              <div v-for="(item,index) in arr3" :key="index">
                <table class="table table-bordered">
                  <td>{{item.title}}</td>
                  <div class="didi">
                    <td>{{item.time}}</td>
                    <td>
                      <el-button type="warning" @click="clickC(item)">还原</el-button>
                    </td>
                  </div>
                </table>
              </div>
            </div>
            <div v-else><h1>暂无数据</h1></div>
            <div> <el-button type="success" @click="clickCC">清空回收站</el-button></div>
          </el-tab-pane>
        </el-tabs>
      </div>
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
      activeName: "second",
      arr1: [],
      arr2: [],
      arr3: [],
      tudo: [
        {
          title: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00",
          flag: 0
        },
        {
          title: "今晚12点整发大红包",
          time: "2018-04-19 20:00:00",
          flag: 0
        },
        {
          title: "[系统通知]该系统将于今晚凌晨6点到10点进行升级维护",
          time: "2018-04-19 20:00:00",
          flag: 1
        },
        {
          title: "[系统通知]你的优惠卷已经过期",
          time: "2018-04-19 20:00:33",
          flag: 2
        }
      ]
    };
  },
  methods: {
    handleClick(item) {
      this.arr1 = this.tudo.filter(item => {
        return item.flag === 0;
      });
      this.arr2 = this.tudo.filter(item => {
        return item.flag === 1;
      });
      this.arr3 = this.tudo.filter(item => {
        return item.flag === 2;
      });
    },
    clickA(item) {
      (item.flag = 1), this.handleClick();
    },
    clickAA(){
      this.arr1.map(item => {
        if (item.flag === 0) {
          item.flag = 1;
        }
      });
      this.handleClick();
    },
    clickB(item) {
      item.flag = 2;
      this.handleClick();
    },
    clickBB() {
      this.arr2.map(item => {
        if (item.flag === 1) {
          item.flag = 2;
        }
      });
      this.handleClick();
    },
    clickC(item){
      item.flag = 1;
      this.handleClick()
    },
    clickCC(){
      this.arr3.filter(item => {
        this.arr3 =''
      })
    }
  },
  mounted() {
    this.arr1 = this.tudo.filter(item => {
        return item.flag === 0;
      });
      this.arr2 = this.tudo.filter(item => {
        return item.flag === 1;
      });
      this.arr3 = this.tudo.filter(item => {
        return item.flag === 2;
      });
  },
  watch: {},
  computed: {},
  filters: {}
};
</script>

<style scoped lang='scss'>
.didi {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>