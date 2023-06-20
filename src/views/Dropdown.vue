<script setup lang='ts'>
import { defineComponent } from 'vue'
defineComponent({
  name: 'HzDropdown'
})
</script>
<template>
  <div>
    <div class="top-title">
      <p class="hz-title xl">
        Dropdown 下拉菜单
      </p>
      <p>页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。通常用于菜单下拉。</p>
    </div>
    <div class="case-card">
      <p class="hz-title">
        基本用法
      </p>
      <p class="secondary">
        下拉菜单的基本用法，默认采用hover触发，使用value传递选值，@select返回选择结果。
      </p>
      <div class="container">
        <HzDropdown />
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">

</style>
