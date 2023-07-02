<script setup lang='ts'>
import { defineComponent } from 'vue'
import {menu} from '@/components/sidebar/index'
const barData:menu[] = [
  {
    title: '通用',
    menu: [
      {
        title: '按钮',
        path: '/modules/button'
      }
    ]
  },
  {
    title: '导航',
    menu: [
      {
        title: 'Dropdown',
        path: '/modules/dropdown'
      }
    ]
  },
]
defineComponent({
  name: 'HzModules'
})
</script>
<template>
  <div class="modules">
    <div class="component-bar">
      <!-- <div class="bar-item-title">
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
      </router-link> -->
      <sideBar :data="barData" />
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
}
.main {
  padding: 2rem 4rem;
  flex: 1;
}
  }
</style>
