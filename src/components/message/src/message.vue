<template>
  <div
    ref="myElement"
    class="message"
    :class="[props.type, props.center ? 'center':'',leave?'fadeOut':'']"
    :style="{top:offset + 'px'}"
  >
    <div>{{ message }}</div>
    <div
      v-if="props.icon"
      class="icon-box"
      @click="() => {close()}"
    >
      <!-- <i class="icon fas fa-closed-captioning"></i> -->
      <i class="fas fa-times" />
    </div>
  </div>
</template>



<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRef, CSSProperties, watchEffect, shallowReactive, watch, nextTick } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  message: {
    type: String,
    default: '',
  },
  id: {
    type: Number,
    default: 0,
  },
  durations: {
    type: Number,
    default: 2000,
  },
  center: {
    type: Boolean,
    default: false,
  },
  onClose: {
    type: Function,
    default:() =>  {}
  },
  offset: {
    type: Number,
    default: 20,
  },
  onlyOne: {
    type: Boolean,
    default: false,
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  icon:{
    type:Boolean,
    default:false
  }

})


const leave = ref(false)
let timer:number;
function startTimer() {
  if(props.icon) return;
  timer = setTimeout(() => {
    close();
  }, props.durations)
}
onMounted(() => {
  startTimer()
})

const emits = defineEmits(['destory'])
const myElement = ref(null)
function close() {
  nextTick(function () {
    // leave.value = true
   (myElement.value! as HTMLElement).classList.add('fadeOut')
  });
 emits('destory');

}
onUnmounted(() => {
  clearTimeout(timer)
})


let offset = ref(props.offset)

</script>


<style scoped lang="less">
@import url('./var.less');
.message {
  padding: 0.8rem;
  position: absolute;
  display: flex;
  left: 50%;
  transform: translate(-50%,20px);
  min-width: 20rem;
  animation: fadeIn .4s linear;
  border-radius: 0.5rem;
  border:1px solid ;
  transition: top 0.4s linear;
}
.message.fadeOut {
  animation: fadeOut .4s linear forwards;
}
.icon-box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0.8rem;
  top: 0.4rem;
  opacity: 0.7;
  width: 1.2rem;
  border-radius: 50%;
  height: 1.2rem;
  cursor: pointer;
  color: #333;
}
.message.success {
  color: @color-success;
  background-color: @bg-color-success;
}
.message.warning {
  color: @color-warning;
  background-color: @bg-color-warning;
}
.message.error {
  color: @color-error;
  background-color: @bg-color-error;
}
.message.center {
  text-align: center;
  display: flex;
  justify-content: center;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, 0px);
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeOut {
  from {
  }
  to {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
}




@media screen and (max-width: 768px) {
  h1 {
    font-size: 1rem;
  }
}
</style>
