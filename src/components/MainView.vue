<template>
<div>
    test title
</div>
</template>

<script setup>
import { useCounterStore } from '@/store';

const useStore = useCounterStore()
console.log(useStore.count);

</script>