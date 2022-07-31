<template>
    <div class="info_box">
        {{ userInfo }}
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import loginStore from '@/stores/loginStore';


const useLoginStore = loginStore();

// action은 반응성 객체가 아니기에 구조 분해 할당할 수 없다.
const { userInfo } = storeToRefs(useLoginStore);

</script>

<style scoped>
.info_box{
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
</style>
