<template>
    <div class="input_box">
        <input
            :="props"
        >
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
// input 내 바인딩 옵션 타입
type Props = {
    class?: string;
    type: string;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    maxlength?: number;
    autocomplete?: string;
    value?: string | number | undefined;
};
// 구조분해시 반응성이 상실되기에 구조분해를 할 수 없다.
const props = withDefaults(defineProps<Props>(), {
    class: '',
    type: '',
    name: '',
    placeholder: '',
    readonly: false,
    autofocus: false,
    disabled: false,
    maxlength: undefined,
    autocomplete: '',
    value: '',
});

const inputValue = ref('');

// input에 입력한 값을 부모 컴포넌트에 보냄
const emit = defineEmits(['update:value']);

// input에 값을 입력할때마다 업데이트
watch(inputValue, (value :string) => {
    emit('update:value', value);
});
</script>

<style scoped>
span {
    display: block;
    color: red;
}

</style>
