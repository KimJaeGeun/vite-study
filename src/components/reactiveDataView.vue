<template>
  <!-- ref객체는 template내에서는 .value없이 값에 접근 가능  -->
  <div>{{ reactiveObj.array }}</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
// not reactive data
const text = "not reactive";
const array = ["not reactive"];

// ref
const refObj = ref([0, "t"]);

// reactive
const reactiveObj = reactive({
  obj: {
    a: 1,
    b: 2,
  },
  array: [1, 2, 3]
})


function reactFunc() {
    // 반응성 객체가 아니기에 감지하지 않음
    // text = "text change";
    // array = ["text change"];
    
    // ref -> 반응성 객체이기에 변경감지
    // value를 통해 값에 접근
    // refObj.value = { a: 2 }

    // reactive -> 반응성 객체이기에 변경감지
    reactiveObj.array.push(4)
}

setTimeout( reactFunc ,3000)
</script>
