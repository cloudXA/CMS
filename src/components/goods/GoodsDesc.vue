<template >
    <div class="goodsdesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <!-- info.content中含有标签及其内容，如果在双括号中，则完全显示;如果在v-html中，则根据标签之性质，在浏览器中渲染 -->
        <!-- <div class="content">{{ info.content }}</div> -->
        <div class="content" v-html="info.content"></div>

    </div>
</template>

<script>
// 将实例挂载到 DOM 并在数据变化时更新 DOM 等、 
export default {
    data() {
        // 如果你知道你会在晚些时候需要一个属性，但是一开始它为空或不存在，
        // 那么你仅需要设置一些初始值。已经存在于 data 中的属性才是响应式的
        return {
            info: {} //图文数据
        };
    },
    // 比如 created 钩子可以用来在一个实例被创建之后执行代码：
    created() {
        this.getGoodsDesc();
    },
    methods: {
        getGoodsDesc() {
            this.$http
                .get("api/goods/getdesc/" + this.$route.params.id)
                .then(result => {
                    if (result.body.status === 0) {
                        this.info = result.body.message[0];
                        console.log(result, '商品介绍goodsdesc')
                    }
                })
        }
    }
}
</script>

<style lang="scss">
.goodsdesc-container {
    padding: 4px;
    h3 {
        font-size: 16px;
        color: #226aff;
        text-align: center;
        margin: 15px 0;
    }
    .content {
        img {
            width: 100%;
        }
    }
}
    
</style>