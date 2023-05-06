<script setup>
import detailSection from '@/components/detail-section/detail-section.vue';

</script>

<template>
  <div class="map">
    <detailSection title="位置周边" more-text="查看周边更多信息">
        <div class="baidu">地图信息</div>
        <div class="slot">
          <img src="@/assets/img/404.png" alt="">
        </div>
    </detailSection>
  </div>
</template>

<style lang="less" scoped>
.slot {
  img {
    width: 100%;
  }
}
</style>