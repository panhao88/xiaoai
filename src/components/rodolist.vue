<template>
 <div>

 </div>
</template>

<script>
import axios from 'axios'
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
    getdasdasd(){
        axios.get("/api/todolist").then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
   },
   mounted() {
       this.getdasdasd()
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

</style>