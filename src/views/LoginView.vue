<template>
    <InputForm
        refKey=""
        type="text"
        name="testInput"
        placeholder="test value"
        :inputValue="userInfo.id"
        v-on:update:value="setInput"
    />
    <button @click="login">login</button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import InputForm from '@/components/common/form/InputForm.vue';

const userInfo = reactive({
    id: '',
    password: ''
})

// InputForm에 입력한 값을 받아옴
function setInput(value:string) {
    userInfo.id = value;
}

function login() {
    console.log(userInfo.id)
}



</script>
