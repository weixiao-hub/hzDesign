<template>
  <div id="Home">
    <header>
    <div class="logo">
      <span>hz-design</span>
    </div>
    <div class="navbar">
      <div class="item">设计</div>
      <div class="item">开发</div>
      <div class="item">组件</div>
      <div class="item"></div>
      <div class="item"></div>

    </div>
  </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'hzHome',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #Home {
    header {
      display: flex;
      justify-content: space-between;
      height: 50px;
      border-bottom: 1px solid #eee;
      box-shadow: 0 0 5px #eee;
    }
    .navbar {
      display: flex;
    }
  }
</style>
