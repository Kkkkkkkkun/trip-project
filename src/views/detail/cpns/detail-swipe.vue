<script setup>
const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white" lazy-render>
        <template v-for="(item, index) in swipeData">
            <van-swipe-item class="item">
                <img :src="item.url" alt="">
            </van-swipe-item>
        </template>
        <template #indicator="{ active, total }">
            <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swipe {
    .swipe-list {
        img {
            width: 100%;
        }
        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: #fff;
            background: rgba(0, 0, 0, 0.8);
        }
    }
}
</style>