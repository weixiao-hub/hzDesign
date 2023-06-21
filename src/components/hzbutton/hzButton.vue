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
      default:'l'
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
          return ['auto','0']
        default :
          return ['8px','auto']
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
    :style="{ borderRadius: hzShape[0] }"
  >
    <div
      class="hz-button-shape"
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
    overflow: hidden;
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
    color: @font-color-l;
    background-color: #edeeee;
    &:hover .hz-button-shape{
        background-color: #e4e4e4;
    }

    &:active .hz-button-shape{
      background-color: #edeeee;
    }
  }
  .outline {
    background-color: #fff;
    border-color: #2b5aed;
    border:1px solid #ccc;
    &:active {
      border-color: #ddd;
    }
  }


   .xl {
      height: 48px;
      min-width: 48px;

      border-radius: @radius-m;
      .hz-button-content {
        padding: 0 18px;
        font-size: 16px;
      }
    }
    .l {
      height: 36px;
      min-width: 36px;
      border-radius: @radius-m;

      .hz-button-content {
        padding:0 16px;
      }
    }
    .m {
      height: 32px;
      min-width: 32px;

      border-radius: @radius-s;

      .hz-button-content {
        padding:0 14px;
      }
    }
    .s {
      border-radius: @radius-s;
      height: 24px;
      min-width: 24px;

      font-size: 12px;
      .hz-button-content {
        padding:0 12px;
      }
    }

</style>