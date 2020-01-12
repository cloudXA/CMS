<template>
    <div class="photoinfo-container">
        <h3> {{ photoinfo.title }} </h3>
        <p class="subtitle">
            <span>发表时间： {{ photoinfo.add_time | dateFormat }}</span>
            <span>点击：{{ photoinfo.click }}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
            <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" alt="" @click="$preview.open(index, list)" :key="item.src">
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content"></div>

        <!-- <cmt-box :id="id"></cmt-box> -->
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/comment.vue';

export default {
    data() {
        return {
            id: this.$route.params.id, //从路由中获取到 图片id
            photoinfo: {}, //图片详情
            list: [] //缩略图的数组
        };
    },
    //TODO:无法渲染页面
    created() {
        this.getPhotoInfo();
        this.getThumbs();
    },
    methods: {
        getPhotoInfo() {
            // 获取图片的详情
            this.$http.get("api/getimageInfo/" + this.id).then(result => {
                if(result.body.status === 0) {
                    this.photoinfo = result.body.message[0];
                    console.log(result, 'getimageInfo');
                }
            });
        },
        getThumbs() {
            // 获取缩略图
            this.$http.get("api/getthumimages/"+ this.id).then(result => {
                if (result.body.status === 0) {
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    });
                    // 把完整的数据保存到list中
                    this.list = result.body.message;
                    console.log(result, 'getthumbs');
                }
            });
        }
    },
    components: {
        "cmt-box": comment
    }

}
</script>