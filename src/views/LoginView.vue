<template>
<div class="login_box">
    <InputForm
        refKey=""
        type="text"
        name="userId"
        placeholder="0000"
        :inputValue="userInfo.id"
        v-on:update:value="setInputId"
    />
    <InputForm
        refKey=""
        type="text"
        name="userPassword"
        placeholder="0000"
        :inputValue="userInfo.password"
        v-on:update:value="setInputPAssword"
    />
    <button @click="login">login</button>
</div>

</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { msgModalStore } from '@/stores/msgModalStore';

import InputForm from '@/components/common/form/InputForm.vue';

const useMsgModalStore = msgModalStore();
const userInfo = reactive({
    id: '',
    password: ''
})

// InputForm에 입력한 값을 받아옴
function setInputId(value:string) {
     userInfo.id = value;
}

function setInputPAssword(value:string) {
     userInfo.password = value;
}

function login() {
    // 로그인 함수
    useMsgModalStore.isOn = true;
    if (userInfo.id === '0000' && userInfo.password === '0000') {
        useMsgModalStore.msg = 'login 성공'
    } else {
        useMsgModalStore.msg = 'login 실패'
    }
}
</script>

<style scoped>
.login_box{
    margin: auto;
    width: 600px;
    height: 100%;
    border: 1px solid;
    border-radius: 5px;
    background-color: aliceblue;
    text-align: center;
}

button {
    margin: 1rem;
    background-color: dodgerblue;
    border: outset;
    width: 5rem;
    height: 2rem;
    box-shadow: 2px 2px 3px steelblue;
}
</style>
