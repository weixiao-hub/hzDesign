<script setup lang='ts'>
import { defineComponent } from 'vue'
defineComponent({
  name: 'HzButton'
})
</script>
<template>
  <div>
    <HzButton
      :loading="true"
      shape="circle"
    >
      主要按钮
    </HzButton>
    <HzButton
      shape="circle"
      type="secondary"
      size="l"
    >
      次要按钮
    </HzButton>
    <HzButton
      shape="circle"
      type="outline"
      size="s"
    >
      线框按钮
    </HzButton>
    <HzButton
      shape="circle"
      type="outline"
      size="m"
    >
      线框按钮
    </HzButton>
  </div>
</template>
<style scoped>

</style>
