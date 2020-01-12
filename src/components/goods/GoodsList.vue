<template>
    <div class="goods-list">
        <!-- 绑定:key :to  -->
        <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
            <img :src="item.img_url" alt="">
            <h1 class="title"> {{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">${{ item.self_price }}</span>
                    <span class="old">${{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>


    </div>

</template>

<script>
export default {
    data() {
        // data是往自己组件内部挂载一些私有数据的 
        return {
            pageindex: 1, //分页的页数
            goodslist: [] //存放商品列表的数组
        };
    },
    created() {
        this.getGoodsList();
    },
    methods: {
        getGoodsList() {
            // 获取商品列表 
            this.$http
                .get("api/getgoods?pageindex=" + this.pageindex) 
                .then(result => {
                    if(result.body.status === 0) {
                        console.log(result, 'getgoods, pageindex ==?');
                        this.goodslist = this.goodslist.concat(result.body.message);
                    }
                });
        },
        getMore() {
            // 当被触发的时候，获取整个DOM结构都会被触发，导致新一轮的函数生命周期的开始 TODO:
            this.pageindex++;
            this.getGoodsList();
        },
        goDetail(id) {
            // 使用js的形式进行路由导航 
            // 注意点： 
            //     this.$route 是路由【参数对象】, 所有路由中的参数，params,query参数都属于他
            //     this.$router 是一个路由【导航对象】,用它，可以方便的使用js代码，实现路由前进、后退、跳转
            console.log(this);
            // 1. 简单
                this.$router.push("/home/goodsinfo/" + id);
            // 2. 传递对象
                this.$router.push({ path: "/home/goodsinfo/" + id });
            // 3. 传递命名的路由
                this.$router.push({ name: "goodsinfo", params: { id }});
        }


    }
}
</script>

<style lang="scss" scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-around;

    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img {
            width: 100%;
        }
        .title {
            font-size: 14px;
        }
        .info {
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .now {
                color: red;
                font-weight: bold;
                font-size: 16px;
                }
                .old {
                text-decoration: line-through;
                font-size: 12px;
                margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
    
</style>