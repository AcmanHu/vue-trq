import Vue from 'vue'
//路由的使用
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//引入组件
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Page from '../components/page/Page.vue'
import Page1 from '../components/page/Page1.vue'
import Page2 from '../components/page/Page2.vue'
import Page3 from '../components/page/Page3.vue'
import Page4 from '../components/page/Page4.vue'
import Page5 from '../components/page/Page5.vue'
import Page6 from '../components/page/Page6.vue'
import Page7 from '../components/page/Page7.vue'
import Page8 from '../components/page/Page8.vue'
import Page9 from '../components/page/Page9.vue'
import Page10 from '../components/page/Page10.vue'
import Page11 from '../components/page/Page11.vue'
import Page12 from '../components/page/Page12.vue'
import Page13 from '../components/page/Page13.vue'
import Page14 from '../components/page/Page14.vue'
import Page15 from '../components/page/Page15.vue'

//配置路由
const routes =[
  {path:'*',redirect:'/home'},
  {
    path:'/home',
    component:Home,
    children:[
      {path:'page',component:Page},
      {path:'page1',component:Page1},
      {path:'page2',component:Page2},
      {path:'page3',component:Page3},
      {path:'page4',component:Page4},
      {path:'page5',component:Page5},
      {path:'page6',component:Page6},
      {path:'page7',component:Page7},
      {path:'page8',component:Page8},
      {path:'page9',component:Page9},
      {path:'page10',component:Page10},
      {path:'page11',component:Page11},
      {path:'page12',component:Page12},
      {path:'page13',component:Page13},
      {path:'page14',component:Page14},
      {path:'page15',component:Page15},
    ]
  },
  {path:'/login',component:Login}
  
]
//实例化路由
const router = new VueRouter({
  routes
})
export default router;