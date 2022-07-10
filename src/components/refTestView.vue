<template>
<div ref="test">test label</div>
<div>{{ test2.a }}</div>
<div>{{ test2.b }}</div>
<br />
<div>{{ test3.a }}</div>
<div>{{ test3.b }}</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";

const test = ref("test");
const test2 = ref({
  a: 1,
  b: 2,
});
const test3 = reactive({
  a: 3,
  b: 4,
});

// mount전이므로 String "test"을 반환
console.log(test.value);

onMounted( () => {
  // mount후이므로 dom객체 <div ref="test">test label</div>
  console.log(test.value);
  // 렌더링 된 dom요소내 엘리먼트에 접근가능
  // console.log(test.value.innerText);
})

// ref 렌더링 테스트
watch(() => test2.value.a, () => {
  console.log("ref a changed")
})

watch(() => test2.value.b, () => {
  console.log("ref b changed")
})

watch(() => test3.a, () => {
  console.log("reac a changed")
})

watch(() => test3.b, () => {
  console.log("reac b changed")
})

setTimeout(() => {test2.value.a = 0;} ,3000)
setTimeout(() => {test3.a = 0;} ,3000)


</script>

<style>
</style>
