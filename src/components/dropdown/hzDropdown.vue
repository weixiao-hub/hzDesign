<script setup lang='ts'>
import { ref } from 'vue'
const props = defineProps({
  trigger: {
    // 触发形式
    type: String,
    default: 'hover'
  },
  maxHeight: {
    type: Number,
    default: 320
  }
})

function mouseenter() {
  console.log('enter', props.maxHeight)
}

function mouseleave() {
  console.log('leave')
}
</script>
<template>
  <div
    class="hz-dropdown"
    @mouseenter="mouseenter()"
    @mouseleave="mouseleave"
  >
    <slot />
  </div>
</template>
<style scoped lang="less">

</style>
