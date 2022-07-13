<template>
<div>
<!-- {{defaultStore.greeting}} -->
{{arrangeStore.greeting}}
</div>
<button @click="edit">edit greeting</button>
<button @click="plus">plus 2</button>

</template>

<script setup lang="ts">
import { useDefaultStore, useArrangeStore } from '@/stores/sampleStore';

const defaultStore = useDefaultStore();
const arrangeStore = useArrangeStore();

function edit() {
    // defaultStore.ageUp(1);
    arrangeStore.ageUp(1);
}

function plus() {
    arrangeStore.age += 2;
}


</script>

<style>
</style>
