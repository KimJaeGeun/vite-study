<template>
<div class="login_box">
    <template v-if="useLoginStore.isLogin">
        <h3>로그인 되어있어요.</h3>
        <button @click="logout">logout</button>
    </template>
    <template v-else>
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
    </template>
</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { loginStore } from '@/stores/loginStore';
import { msgModalStore } from '@/stores/msgModalStore';

import InputForm from '@/components/common/form/InputForm.vue';

const useLoginStore = loginStore();
const useMsgModalStore = msgModalStore();
const userInfo = reactive({
    id: '',
    password: ''
});

// InputForm에 입력한 값을 받아옴
function setInputId(value:string) {
     userInfo.id = value;
}

function setInputPAssword(value:string) {
     userInfo.password = value;
}

async function login() {
    // 로그인 함수
    useMsgModalStore.isOn = true;
    if (userInfo.id === '0000' && userInfo.password === '0000') {
        await useLoginStore.login();
        console.log(useLoginStore.isLogin);
        useMsgModalStore.msg = 'login 성공'
    } else {
        useMsgModalStore.msg = 'login 실패'
    }
}
function logout() {
    useMsgModalStore.isOn = true;
    useMsgModalStore.msg = 'logout되었어요.'
    useLoginStore.logout();
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
