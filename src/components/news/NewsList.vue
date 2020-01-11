<template>
  <div>
    
    <ul class="mui-table-view">
      <!-- 遍历后端响应的数组--详细的新闻列表 -->
      <!-- 细节:每个li中绑定id--:key="item.id",通过router-link to (渲染后的标签为<a href="/home/newsinfoid">指定点击后的url地址) -->
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <!-- 导航的链接包含对应的id -->
        <router-link :to="'/home/newsinfo/' + item.id">
        <!-- 详细显示每条数据中的img title add_time (由全局过滤器指定给定的格式，在main.js中定义) click  -->
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间：{{ item.add_time | dateFormat }}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </router-link>
      </li>

    </ul>

  </div>
</template>
<script>
// 引入mint-ui中的Toast，给出友善的提示信息
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: [] // 新闻列表
    };
  },
  // 借助声明周期函数加载this.getNewsList()函数
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      // 获取新闻列表
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          // 如果没有失败，应该把数据保存到 data 上
          // 把响应的数组数据指定给在data()中的newslist中
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
