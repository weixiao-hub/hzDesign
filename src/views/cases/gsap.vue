<script setup lang='ts'>
import { onMounted } from 'vue';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
onMounted(()=>{
  ScrollTrigger.create({
    trigger:'.section2',
    start:'top top',
    end:'+=800',
    scrub:true,
    markers:true,
    pin:true,
    animation:gsap.timeline().to('.img-box .item1',{left:'10%',scale:0.8}).to('.img-box .item2',{left:'30%',scale:0.9},'<').to('.img-box .item4',{left:'70%',scale:0.9},'<').to('.img-box .item5',{left:'90%',scale:0.8},'<')
  })
})
</script>
<template>
  <div class="gsap-case">
    <section class="section1" />
    <section class="section2">
      <div class="img-box">
        <div class="item item1" />
        <div class="item item2" />
        <div class="item item3" />
        <div class="item item4" />
        <div class="item item5" />
      </div>
    </section>
    <section class="section3" />
  </div>
</template>
<style scoped lang="less">
  .gsap-case {
    section {
      width: 100%;
      height: 100vh;
    }
    .section1 {
      background-color: pink;
    }
    .section2 {
      position: relative;
      background-color: skyblue;
    }
    .section3 {
      background-color: rgb(88, 60, 64);
    }
    .img-box {
      top: 200px;
      display: flex;
      position: absolute;
      width: 100%;
      .item {
        width: 200px;
        height: 300px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%),scale(1);
      }
      .item1 {
        background-color: #df8989;
        z-index: 997;
      } .item2 {
        background-color: #8d3131;
        z-index: 998;
      } .item3 {
        background-color: #3a0e0e;
        z-index: 999;
      } .item4 {
        z-index: 998;

        background-color: #48c5a6;
      } .item5 {
        z-index: 997;
        background-color: #19397e;
      }
    }
  }
</style>