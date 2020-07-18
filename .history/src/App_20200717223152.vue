<template>
  <div id="app">
 <!-- keep是用来保存组件的状态的有两个参数 include e'x   -->
    
  <keep-alive>
    <router-view/>  
  </keep-alive>




    <!-- router-view是用来承载路由的,只有写了才会显示我们配置的路由 -->
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
