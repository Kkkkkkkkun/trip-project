<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from '@/service'
import { computed, ref, } from 'vue';
import DetailSwipe from './cpns/detail-swipe.vue'
import DetailInfos from './cpns/detail-infos.vue'
import detailFacility from './cpns/detail-facility.vue';
import detailLandlord from './cpns/detail-landlord.vue';
import detailComment from './cpns/detail-comment.vue';
import detailNotice from './cpns/detail-notice.vue';
import detailMap from './cpns/detail-map.vue';
import detailIntro from './cpns/detail-intro.vue';


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
  <div class="detail top-page" ref="detailRef">
    <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <DetailSwipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <DetailInfos :top-infos="mainPart.topModule"/>
      <detailFacility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility" />
      <detailLandlord :landlord="mainPart.dynamicModule.landlordModule"/>
      <detailComment :comment="mainPart.dynamicModule.commentModule"/>
      <detailNotice :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <detailMap />
      <detailIntro :price-intro="mainPart.introductionModule"/>
    </div>
    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" text="购物车" />
        <van-action-bar-icon icon="shop-o" text="店铺" />
        <van-action-bar-button color="#ff9854" type="danger" text="立即购买" />
    </van-action-bar>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin-bottom: 20px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style> 