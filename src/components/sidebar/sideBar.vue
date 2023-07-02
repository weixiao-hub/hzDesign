<script setup lang='ts'>
import { PropType } from 'vue';
import {menu} from './index'
 const Props =  defineProps({
    data:{
      type:Array as unknown as PropType<[menu]>,
      required:true
    }
  })
  
</script>
<template>
  <div class="side-bar">
    <div
      v-for="(item,index) in data"
      :key="index"
    >
      <div class="bar-item-title">
        {{ item.title }}
      </div>
      <router-link
        v-for="(bar,i) in item.menu"
        :key="i"
        :to="(bar.path as string)"
        class="bar-item"
      >
        {{ bar.title }}
      </router-link>
    </div>
  </div>
</template>
<style scoped lang="less">
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
</style>