<script setup lang='ts'>
import {ref} from 'vue'
  const props = defineProps({
    // type	按钮的类型	'primary' | 'secondary' | 'outline'
    type:{
      type:String,
      default:'primary'
    },
    shape:{
      //按钮形状round/圆角、circle/圆、square/正方形
      type:String,
      default:''
    },
    // s/m/l/xl
    size:{
      type:String,
      default:'xl'
    },
    // 长按钮
    long:{
      type:Boolean,
      default:false
    },
    loading:{
      type:Boolean,
      default:false,
    },
    // 禁用状态
    disabled:{
      type:Boolean,
      default:false
    },
    // 按钮的状态	'primary' | 'success' | 'warning' | 'danger'
    status:{
      type:String,
      default:''
    },
    iconColor:{
      type:String,
      default:''
    }
  })
  const btShape = (shape:string):[string,string] =>{
    switch(shape){
      case 'round':
          return ['200px','auto']
        case 'circle':
          return ['200px','0']
        case 'square':
          return ['200px','0']
        default :
          return ['auto','auto']
    }
  }
const hzShape = ref(['','']);
const hzIconColor = ref('')

if(props.type == 'secondary' || props.type == 'outline' ) {
  hzIconColor.value = '#2b5aed'
}else {
  hzIconColor.value = '#fff'
}

hzShape.value = btShape(props.shape)

</script>
<template>
  <div
    class="hz-button"
    :class="[type,size,{loading:loading}]"
  >
    <div
      class="hz-button-shape"
      :style="{borderRadius:hzShape[0]}"
    />
    <p class="hz-button-content">
      <i-loading-one
        v-show="loading"
        theme="outline"
        size="24"
        :fill="iconColor? iconColor : hzIconColor"
        class="i-loading"
      />
      <slot />
    </p>
  </div>
</template>
<style scoped lang="less">
@import url('../../assets/style/base.less');
   @keyframes rotate {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
    }
  .hz-button {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    .i-loading{
      display: inline-flex;
      align-items: center;
      justify-content: center;
      animation: rotate infinite 1.5s linear;
      width: 16px;     
      height: 16px;
      margin-right:  4px;
    }
   .hz-button-shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all @animatf;
    
   }
   .hz-button-content {
    width: auto;
    transition: color .1s;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
   }
  }

  .hz-button.loading {
    opacity: 0.7;
    pointer-events: none;
  }
  .primary {
    color: #fff;
    .hz-button-shape {
      background-color: #2b5aed;
      border-color: #2b5aed;
    }
  
    &:hover .hz-button-shape{
        opacity: 0.8;
    }

    &:active .hz-button-shape{
        opacity: 1;
    }

   
  }

  .secondary {
    color:#2b5aed;
    background-color: #eef2fe;
    &:hover .hz-button-shape{
        background-color: #e5ebfc;
    }

    &:active .hz-button-shape{
      background-color: #eef2fe;
    }
  }
  .outline {
    color:#2b5aed;
    background-color: #fff;
    border-color: #2b5aed;
  }


   .xl {
      height: 48px;
      border-radius: @radius-xl;
      .hz-button-content {
        padding: 0 24px;
      }
    }
    .l {
      height: 36px;
    }
    .m {
      height: 32px;
    }
    .s {
      height: 24px;
    }

</style>