<template>
    <div class="modal_overlay">
        <div class="msg_modal">
            <p>{{ useMsgModalStore.msg }}</p>
            <button @click="close">
                close
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import msgModalStore from '@/stores/msgModalStore';

const useMsgModalStore = msgModalStore();

function close () {
    useMsgModalStore.$reset();
}

</script>
<style scoped>
.modal_overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.50);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}
.msg_modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 200px;
    background-color: lightslategrey;
    text-align: center;
    border-radius: 10px;
    border: double;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}
p {
    white-space: pre-wrap;
    color: white;
    font-weight: bold;
    font-size: 20px;
}
button {
    margin-top: 0.5rem;
    background-color: dodgerblue;
    border: outset;
    width: 5rem;
    height: 2rem;
    box-shadow: 2px 2px 3px steelblue;
}
</style>