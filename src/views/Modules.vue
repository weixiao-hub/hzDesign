<script setup lang='ts'>
import { defineComponent } from 'vue'
defineComponent({
  name: 'HzModules'
})
</script>
<template>
  <div class="modules">
    <div class="component-bar">
      <div class="bar-item-title">
        通用
      </div>
      <router-link
        to="/modules/button"
        class="bar-item"
      >
        按钮
      </router-link>
      <div class="bar-item-title">
        导航
      </div>
      <router-link
        to="/modules/dropdown"
        class="bar-item"
      >
        Dropdown 下拉菜单
      </router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<style scoped lang="less">

  .modules {
    display: flex;
    .component-bar {
      padding: 2rem 1rem 0;
      min-width: 328px;
      border-right: solid 1px #eee;
      height: 100%;
      overflow:hidden;
    .bar-item-title {
      font-weight: 600;
      padding: 0.5rem 0.5rem;
    }
    .bar-item {
      transition: all 0.5s;
      display: flex;
      padding: 0.5rem 0.5rem;
      margin-left: 1rem;

    }
    .bar-item.router-link-active {
      background-color: #e7f1ff;
      border-radius: 0.5rem;
    }
}
.main {
  padding: 2rem 4rem;
  flex: 1;
}
  }
</style>
