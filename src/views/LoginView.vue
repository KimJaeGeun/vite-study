<template>
    <div class="login_box">
        <template v-if="userInfo.authToken">
            <h3>로그인 되어있어요.</h3>
            <button @click="logout">
                logout
            </button>
        </template>
        <template v-else>
            <InputForm
                type="text"
                name="userId"
                placeholder="0000"
                v-model:value="inputData.id"
            />
            <InputForm
                type="password"
                name="userPassword"
                placeholder="0000"
                v-model:value="inputData.password"
            />
            <button @click="login">
                login
            </button>
        </template>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { storeToRefs } from 'pinia';

import loginStore from '@/stores/loginStore';
import msgModalStore from '@/stores/msgModalStore';

import InputForm from '@/components/common/form/InputForm.vue';

const useLoginStore = loginStore();
const useMsgModalStore = msgModalStore();

// action은 반응성 객체가 아니기에 구조 분해 할당할 수 없다.
const { userInfo } = storeToRefs(useLoginStore);

const inputData = reactive({
    id: '',
    password: ''
});

// 로그인 함수
function login () {
    if (inputData.id === '0000' && inputData.password === '0000') {
        // TODO: 실제 비동기 처리 시 해당 함수 변경
        useLoginStore.sampleLogin();
        useMsgModalStore.setMessage(true, 'login 성공');
    } else {
        useLoginStore.login({id: 'qwer', password: 'qwer'});
        useMsgModalStore.setMessage(true, 'login 실패');
    }
}

// 로그아웃 함수
function logout () {
    useMsgModalStore.setMessage(true, 'logout되었어요.');
    // TODO: 실제 비동기 처리 시 해당 함수 변경
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

:deep(.input_box) input {
    font-size: 20px;
    margin: 5px;
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
