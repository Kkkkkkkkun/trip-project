<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/service'
import { computed, ref } from 'vue';
import DetailSwipe from './cpns/detail-swipe.vue'
import DetailInfos from './cpns/detail-infos.vue'
import detailSection from '@/components/detail-section/detail-section.vue';


const router = useRouter()
const route = useRoute()
const houseId = route.params.id

//发送网络请求
const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
getDetailInfos(houseId).then(res => {
    detailInfos.value = res.data
})


//监听返回点击
const onClickLeft = () => {
    router.back()
}
</script>

<template>
  <div class="detail top-page" >
    <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />

    <div class="main" v-if="mainPart">
        <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
        <DetailInfos :top-infos="mainPart.topModule"/>
        <div class="facility">
          <detail-section title="房屋设施" moreText="查看全部内容">
            <button>111111</button>
          </detail-section>
        </div>
    </div>
  </div>
</template>

<style lang="less" scoped>

</style> 