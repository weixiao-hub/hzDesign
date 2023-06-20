<template>
  <div class="code-bar">
    <i-code
      theme="outline"
      size="14"
      fill="#333"
      class="icon"
      @click="show = (!show)"
    />
    <i-copy
      v-if="show"
      theme="outline"
      size="14"
      fill="#333"
      class="icon"
    />
  </div>
  <pre v-if="show">
    <code
    class="hz-code"
    :style="{color:fontColor}"
  >
    {{ value }}
  </code>
  </pre>
</template>

<script lang="ts" setup>
import { ref,Ref } from 'vue';

  let show:Ref<boolean> = ref(false)
  const props = defineProps({
    fontColor:{
      type:String,
      default:'#abb2bf'
    },
    value:{
      type:String,
      default:''
    }
  })
  function splitValue(str:string) {
    console.log(str.split(' '));
    
  }

  splitValue(props.value)

</script>
<style lang="less">
  .code-bar {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 0.5rem;
    .icon {
      display: flex;
      justify-content: center;      
      align-items: center;
      padding: 0.2rem;
      cursor: pointer;
      background-color: #c4c5c9;
      border-radius: 0.3rem;
    }
  }
  .hz-code {
    white-space: pre-wrap;
    display: flex;
    background: #282c34;
    border-radius: 5px;
    padding: 1rem 0.8rem;
    overflow-x: auto;
    min-width: 300px;
  }
</style>