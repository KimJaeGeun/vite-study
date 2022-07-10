<template>
<div>{{ store.counter }}</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

onMounted(() => {
    setTimeout(() => { store.increment() }, 2000)
})

</script>

<style>
</style>
