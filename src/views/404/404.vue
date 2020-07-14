<template>
 <div>
      <div>
         <div class="box1">看到姐姐时,你已经错了哦弟弟</div>
         <img class="box" src="../../assets/timg.jpg" alt="">
     </div>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

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
     .box{
        width: 400px;
        height: 500px;
        display: flex;
        margin: 50px auto;
    }
    .box1{
        width: 250px;
        height: 40px;
        display: flex;
        margin: 20px auto;
        font-size: 30px;
        color: red;
    }
</style>