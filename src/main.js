// 入口文件
import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器(借助moment插件，对时间格式化为指定的格式TODO:)
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

// 2.1 导入 vue-resource(个人感觉已经被axios替代啦🤔)
// vue更新到2.0之后,作者就宣告不再对vue-resource更新,而是推荐的axios。TODO:
import VueResource from 'vue-resource'
// 2.2 安装 vue-resource
Vue.use(VueResource)
// 设置请求的根路径

// http://www.liulongbin.top:3005/api/getlunbo




Vue.http.options.root = 'http://www.liulongbin.top:3005';


// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'


// 按需导入 Mint-UI 中的组件   (vue中自定义导入mint-ui部分组件的方式TODO:)
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


// 1.3 导入自己的 router.js 路由模块
// 暂时测试
// 被引入的模块没有导入import VueRouter from 'vue-router'的话，引入的模块中的VueRouter不会用在被引入的模块中TODO:
import router from './router.js'


// import HomeContainer from './components/tabbar/HomeContainer.vue'
// import MemberContainer from './components/tabbar/MemberContainer.vue'
// import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
// import SearchContainer from './components/tabbar/SearchContainer.vue'
// import NewsList from './components/news/NewsList.vue'
// import NewsInfo from './components/news/NewsInfo.vue'

// var router = new VueRouter({
//   routes: [ // 配置路由规则
//     { path: '/', redirect: '/home' },
//     { path: '/home', component: HomeContainer },
//     { path: '/member', component: MemberContainer },
//     { path: '/shopcar', component: ShopcarContainer },
//     { path: '/search', component: SearchContainer },
//     { path: '/home/newslist', component: NewsList },
//     { path: '/home/newsinfo/:id', component: NewsInfo }
//   ],
//   linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
// })


// 导入 App 根组件
import app from './App.vue'

// TODO:上结router.js 3.
// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
var vm = new Vue({
  el: '#app',
  render: c => c(app),
  router // 1.4 挂载路由对象到 VM 实例上
})

// 随笔：导入vue() vueRouter(路由请求) vueResource(ajax请求) router(自定义路由) app(组件),
// 在new Vue()渲染app组件，挂载router路由