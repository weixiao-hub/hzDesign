<script setup lang='ts'>
const barData = [
  {
    title:'动画',
    menu:[
      {title:"滚随滚动条动画",path:'/cases/gsap'}
    ]
  }
]
</script>
<template>
  <div class="case-box">
    <div class="component-bar">
      <sideBar :data="barData" />
    </div>
    <div class="main">
      <RouterView />
    </div>
  </div>
</template>
<style scoped lang="less">
  .case-box {
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