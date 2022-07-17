<template>
<!-- <useStoreView /> -->
<LoginView />
<msgModal v-if="useMsgModalStore.isOn" />
</template>

<script setup lang="ts">
import msgModal from '@/components/common/modal/msgModal.vue'
import LoginView from '@/views/LoginView.vue';
import useStoreView from '@/components/useStoreView.vue';

import { msgModalStore } from '@/stores/msgModalStore';

const useMsgModalStore = msgModalStore();

</script>

<style>
</style>
