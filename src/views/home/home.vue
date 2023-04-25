<script setup>
import { computed, ref, watch } from 'vue'
import homeNavBar from './cpns/home-nav-bar.vue';
import homeSearchBox from './cpns/home-search-box.vue';
import useHomeStore from '@/stores/modules/home';
import homeCategories from "./cpns/home-categories.vue";
import homeContent from './cpns/home-content.vue';
import useScroll from '@/hooks/useScroll'
import searchBar from '@/components/search-bar/search-bar.vue';

//发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

//监听窗口滚动
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false
    })
  }
})

//搜索框显示控制
const isShowSearchBar = computed(() => {
  return scrollTop.value > 360
})
</script>

<template>
  <div class="home">
    <homeNavBar/>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <homeSearchBox />
    <homeCategories />

    <div class="search-bar" v-if="isShowSearchBar">
    <searchBar />
    </div>
    <homeContent />
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 60px;
}

  .banner {
    img {
      width: 100%;
    }
  }

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>