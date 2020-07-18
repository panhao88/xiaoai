import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/layout.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path:'yifabu',
        name:'yifabu',
        component:() => import('../views/yifabu/yifabu.vue'),
        meta:{
          title:'已发布'
        }
      },
      {
        path:'tongji',
        name:'tongji',
        component:() => import('../views/tongji/tongji.vue'),
        meta:{
          title:'统计'
        }
      },
      {
        path:'wenzhang',
        name:'wenzhang',
        component:() => import('../views/wenzhang/wenzhang.vue'),
        meta:{
          title:'发表文章'
        }
      },
      {
        path:'biaoqianye',
        name:'biaoqianye',
        component:() => import('../views/biaoqianye/biaoqianye.vue'),
        meta:{
          title:'标签页'
        }
      },
      {
        path:'excel',
        name:'excel',
        component:() => import('../views/excel/excel.vue'),
        meta:{
          title:'导出'
        }
      },
      {
        path:'tupian',
        name:'tupian',
        component:() => import('../views/tupian/tupian.vue'),
        meta:{
          title:'图片'
        }
      },
      {
        path:'primary',
        name:'primary',
        component:() => import('../views/primary/primary.vue'),
        meta:{
          title:'编辑文章'
        }
      },
      {
        path:'see',
        name:'see',
        component:() => import('../views/see/see.vue'),
        meta:{
          title:'查看文章'
        }
      },
      {
        path:'fenye',
        name:'fenye',
        component:() => import('../views/fenye/fenye.vue'),
        meta:{
          title:'分页表格'
        }
      },
      {
        path:'tuchu',
        name:'tuchu',
        component:() => import('../views/tuchu/tuchu.vue'),
        meta:{
          title:'退出系统'
        }
      },
    ]
  },
 
  {
        path:'see',
        name:'see',
        component:() => import('../views/see/see.vue')
      },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/denglu',
    name: 'denglu',
    component: () => import('../views/denglu/denglu.vue'),
    meta: {
      title: '登陆页面'
    }
  },
  {
    path: '/zhuce',
    name: 'zhuce',
    component: () => import('../views/zhuce/zhuce.vue'),
    meta: {
      title: "注册页"
    }
  },
  {
    path: '/rodolist',
    name: 'rodolist',
    component: () => import('../components/'),
  },
  {
    path: '*',
    component: () => import('../views/404/404.vue'),
    meta: {
      title: '错误页'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// let whitepath =['/denglu','/zhuce']
router.beforeEach((to, from, next) => {// 网页名字
  document.title = to.meta.title


  let user = JSON.parse(localStorage.getItem('user'))//路由守卫
// console.log(user);
  if (to.path === '/denglu' || to.path === '/zhuce') next()
  else user ? next() : next('/denglu')
// else if(user!==''){
// next()
// }
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
