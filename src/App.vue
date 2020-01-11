<template>
  <div class="app-container">

    <!-- 顶部 Header 区域 -->
    <mt-header fixed title="cms-内容管理系统-vue"></mt-header>


    <!-- 中间的 路由 router-view 区域 -->
	
	
	<!-- TODO:-->
	 <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
		<transition>
			<router-view></router-view>
		</transition>

		<!-- <router-link to="about">about</router-link> -->

    <!-- 底部 Tabbar 区域 -->
	<!-- <router-link ></router-link>将被渲染为<a>标签TODO: -->
		<!-- 使用 router-link 组件来导航.TODO: -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
</script>


<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
	padding-bottom: 50px;
  overflow-x: hidden;
}

// 定义进入过渡的开始状态。TODO:
.v-enter {
  opacity: 0;
  transform: translateX(50%);
}

// 定义进入过渡的结束状态。TODO:
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

// v-enter-active:定义进入过渡生效时的状态。
// v-leave-active:定义离开过渡生效时的状态。TODO:
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
