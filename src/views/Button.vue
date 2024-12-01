<script setup lang='ts'>
import { defineComponent } from 'vue'
import {onBeforeRouteUpdate,onBeforeRouteLeave} from 'vue-router'
onBeforeRouteLeave(() =>{
  console.log('按钮组件：onBeforeRouteLeave');
})
onBeforeRouteUpdate(() =>{
  console.log('按钮组件：onBeforeRouteUpdate');
})
defineComponent({
  name: 'HzButton'
})
let code:string = `<Button>主要按钮</Button>
    <Button type="sceondary">次要按钮</Button> 
    <Button type="outline">线框按钮</Button>`
</script>
<template>
  <div>
    <div class="top-title">
      <p class="hz-title xl">
        Button 按钮
      </p>
    </div>
    <div class="case-card">
      <p class="hz-title">
        按钮类型 type
      </p>
      <p>按钮有三种类型：主按钮、次按钮、线框按钮。主按钮在同一个操作区域建议最多出现一次。</p>
      <div class="container">
        <HzButton>
          主要按钮
        </HzButton>
        <HzButton
          type="secondary"
        >
          次要按钮
        </HzButton>
        <HzButton
          type="outline"
        >
          线框按钮
        </HzButton>
      </div>
      <div class="code-container">
        <hzCode :value="code" />
      </div>
    </div>
  </div>
</template>
<style scoped>

</style>
