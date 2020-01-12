<template>

    
    <div>
         <!-- <span>{{ lsf | dateFormat }}</span> -->
        <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!-- 我们可以把一个数组传给 v-bind:class，以应用一个 class 列表：默认第一个项目item应用mui-active -->
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListByCateId(item.id)">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <!-- to相当于指定了跳转的链接地址url地址 -->
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img_url" alt="">
                <div class="info">
                    <h1 class="info-title"> {{ item.title }} </h1>
                    <div class="info-body"> {{ item.zhaiyao }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// 导入mui的js文件
import mui from '../../lib/mui/js/mui.js'

export default {
    // 一个组件的 data 选项必须是一个函数
    data() {
        return {
            cates: [], //所有分类的列表数组
            list: [] //图片列表的数组
        };
    },
    created() {
        this.getAllCategory();
        // 默认进入页面，就主动请求所有图片列表的数据
        this.getPhotoListByCateId(0);
    },
    mounted() {
        // 当组件中DOM结构被渲染并放到页面中后，会执行这个钩子函数，
        // 如果要操作元素了，最好在mounted里面，因为，此时DOM元素是最新的
        // 初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick减速系数，越大，滚动速度越慢，滚动距离越小 默认值0.0006
        })
    },
    methods: {
        getAllCategory() {
            // 获取所有的图片分类
            this.$http.get("api/getimgcategory").then(result => {
                if(result.body.status === 0) {
                    console.log(result, 'getallcategory图片');
                    // 手动拼接出一个最完整的分类列表
                    result.body.message.unshift({ title: "全部", id: 0 });
                    this.cates = result.body.message;

                }
            })
        },
        getPhotoListByCateId(cateId) {
            // 根据分类id,获取图片列表
            this.$http.get("api/getimages/" + cateId).then(result => {
                if(result.body.status === 0) {
                    this.list = result.body.message;
                    console.log(result,'getphotolistbycateID 图片列表');
                }
            })
        }
    }    
}
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y;
}

.photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 0 9px #999;
        position: relative;
        img {
            width: 100%;
            vertical-align: middle;
        }
        img[v-lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .info {
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: black;
            max-height: 84px;
            .info-title {
                font-size: 14px;
            }
            .info-body {
                font-size: 13px;
            }
        }
    }
}
    
</style>