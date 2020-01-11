<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>

    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>

    <!-- num0: 
      当我们定义这个 <comment-box></comment-box> 组件时 -->
      
    <!-- 评论子组件区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
// num1:
  // 使用了诸如 Babel 和 webpack 的模块系统。在这些情况下，我们推荐创建一个 components 目录，并将每个组件放置在其各自的文件中。

// num2: 
//   然后你需要在局部注册之前导入每个你想使用的组件。

// 1. 导入 评论子组件
import comment from "../subcomponents/comment.vue";

export default {
  data() {
    return {
      // 使用this.$route 获取url中的params对象中id
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsinfo: {} // 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        console.log(this.$route,'this.$route');
        console.log(result, 'result');
        if (result.body.status === 0) {
          // 将详细信息对象给newsinfo
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    }
  },
  // num3:
  //   然后在 components 选项中定义你想要使用的组件：
  
  components: {
    // 用来注册子组件的节点
    "comment-box": comment
  }
};
</script>

<style lang="scss">
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
