<template>
  <div class="code-bar">
    <i-code
      theme="outline"
      size="14"
      class="icon"
      :class="{'active':show }"
      @click="show = !show"
    />
    <i-copy
      v-if="show"
      theme="outline"
      size="14"
      class="icon"
      @click="CopyCode"
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
import {copyCode,popup} from '@/utils'
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

  function CopyCode() {
    copyCode(props.value)
  }




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
      &:active {
        background-color: #232425;
        color:red
      }
    }
    .icon.active {
      background-color: #232425;
      color:red
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