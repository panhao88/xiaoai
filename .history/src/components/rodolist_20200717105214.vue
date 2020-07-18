<template>
 <div>

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
    getdasdasd(){
        axios.get("/api/todolist").then(res => {
            console.log(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
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

</style>