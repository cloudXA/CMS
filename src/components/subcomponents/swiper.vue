<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 在组件中，使用v-for循环的时候，一定要使用key  -->
            <!-- 谁使用轮播图组件，谁为我们传递lunbotuList -->
            <!-- 此时，lunbotuList应该是父组件向子组件传值来设置 -->

            <!-- 没有使用:key结束的话，还有错误提示 -->
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="" :class="{'full': isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>


</template>

<script>
// 通过 以下语句
// <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
// 本组件传递了lunbotuList 和 isfull 两个数据
// 父子组件之间的传值，那么，该数据从何而来 
export default {
    props: ["lunbotuList", "isfull"]
};
</script>

<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            text-align: center;

            img {
                height: 100%;
            }
        }
    }

    .full {
        width: 100%;
    }
</style>