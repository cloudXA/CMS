// 使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)TODO:

import VueRouter from 'vue-router'

// // 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来,TODO:
// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。TODO:
// routes: [{ path: '/', redirect: '/home' }, { path: '/home', component: HomeContainer}]为路由映射组件部分

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// var router = new VueRouter({})部分为创建router实例部分TODO:
var router = new VueRouter({
  routes: [ // 配置路由规则
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    // 主页面下的newlist和newsifon链接导航TODO:
    { path: '/home/newslist', component: NewsList },
    // 动态路由匹配
    { path: '/home/newsinfo/:id', component: NewsInfo },
    { path: '/home/photolist', component: PhotoList },
    { path: '/home/photoinfo/:id', component: PhotoInfo },
    { path: '/home/goodslist', component: GoodsList },
    { path: '/home/goodsinfo/:id', component: GoodsInfo, name: 'goodsinfo' },
    { path: '/home/goodsdesc/:id', component: GoodsDesc, name: 'goodsdesc' },
    { path: '/home/goodscomment/:id', component: GoodsComment, name: 'goodscomment' }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router