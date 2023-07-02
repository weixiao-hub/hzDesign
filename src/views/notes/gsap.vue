<script setup lang='ts'>
</script>
<template>
  <div class="hz-title">
    gsap 核心语法
  </div>
  <p>gsap.to() 从元素的起使值开始，动画到我们指定的结束值</p>
  <p>gsap.from() 反过来。我们指定起始值，动画到结束值</p>
  <p>gsap.fromTo() 自定义起始值和结束值</p>
  <p>gsap.set() 立即设置属性（无动画）</p>
  <p>gsap.timeline 不同的动画按照添加顺序依次执行</p>
  <div class="container">
    <code>
      <pre>
      const t = gsap.timeline();
      t.to('',{},2);  // 第一个动画2s后执行
      t.to('',{},'《') : 小于号表示  第一个动画开始，我也开始执行
      t.to('',{},'》') : 大于号表示  第一个动画结束，我才开始（默认值）
      t.to('',{},'+=1') : += 表示  第一个动画结束后多少秒，我才开始
      t.to('',{},'-=1') : -= 表示  第一个动画结束前多少秒，我就开始
    </pre>
    </code>
  </div>
  <p>tip: stack属性用于同种动画错开执行</p>
</template>
<style scoped>

</style>