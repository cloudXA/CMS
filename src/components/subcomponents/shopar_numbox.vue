<template>
    <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
        <button class="mui-btn mui-btn-number-minus" type="button">-</button>
        <input type="number" id="test" class="mui-input-numbox" :value="initcount" @change="countChanged" ref="numbox" readonly />>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>

    <!-- 子组件什么时候把数据传递给父组件 -->
</template>

<script>
export default {
    mounted() {
        // 初始化数字选择框组件
        mui(".mui-numbox").numbox();
    },
    methods: {
        countChanged() {
            // 数量改变了
            console.log(this.$refs.numbox.value);
            // 每当数量值改变，则立即把最新的数量同步到购物车的store中，覆盖之前的数量制 
            this.$store.commit("updateGoodsInfo", {
                id: this.goodsid,
                count: this.$refs.numbox.value
            });
        }
    },
    props: ["initcount", "goodsid"]
}
</script>

<style lang="scss" scoped>
    
</style>