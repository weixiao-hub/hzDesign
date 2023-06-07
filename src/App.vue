<template>
 <header class="header">
    <div class="logo">
      <i-virgo theme="outline" size="37" fill="red" class="icon"/>
      <span>hz-design</span>
    </div>
    <div class="navbar">
      <router-link to="/">设计</router-link>
      <router-link to="/">开发</router-link>
      <router-link :to="{name:'modules'}">组件</router-link>
      <router-link to="/"></router-link>
      <router-link to="/"></router-link>
    </div>
  </header>
  <router-view/>
</template>

<style lang="less">
@import './assets/style/index.less';
    .header {
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 68px;
      border-bottom: 1px solid #eee;
      box-shadow: 0 0 5px #eee;
      .icon {
        display: flex;
        align-items: center;
        margin-right: 0.7rem;
        font-size: 2rem;
      }
    }

    .logo {
      display: flex;
      align-items: center;
    }
    .logo span{
      font-size: 18px;
      font-weight: 600;
    }
    .navbar {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 16px;
      color: @font-color-l;
      > * {
      cursor: pointer;
        margin-left: 0.7rem;
      }
    }
</style>
