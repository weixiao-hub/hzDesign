<script setup lang='ts'>
const barData = [
  {title:'动画',menu:[
    {title:"滚动页面动画",path:''}
  ]}
]
</script>
<template>
  <div class="note">
    <div class="sidebar-box">
      <sideBar :data="barData" />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>
<style scoped lang="less">
  
  .note {
    display: flex;
    .sidebar-box {
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