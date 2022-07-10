<template>
<div ref="test">test label</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const test = ref("test");

// mount전이므로 String "test"을 반환
console.log(test.value);

onMounted( () => {
  // mount후이므로 dom객체 <div ref="test">test label</div>
  console.log(test.value);
  // 렌더링 된 dom요소내 엘리먼트에 접근가능
  console.log(test.value.innerText);
})

</script>

<style>
</style>
