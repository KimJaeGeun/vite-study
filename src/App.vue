<template>
<div>
    <nav>
        <RouterLink to="/">
            login
        </RouterLink>
        <RouterLink to="/useStore">
            useStore
        </RouterLink>
    </nav>
</div>
<RouterView />
<msgModal v-if="useMsgModalStore.isOn" />

</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

import msgModal from '@/components/common/modal/msgModal.vue'

import { msgModalStore } from '@/stores/msgModalStore';

const useMsgModalStore = msgModalStore();
</script>

<style>
</style>
