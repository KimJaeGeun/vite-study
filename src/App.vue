<template>
<RouterView />
<msgModal v-if="useMsgModalStore.isOn" />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import msgModal from '@/components/common/modal/msgModal.vue'

import msgModalStore from '@/stores/msgModalStore';

const useMsgModalStore = msgModalStore();
</script>

<style>
</style>
