<template>
    <div class="input_box">
        <p>{{ props.label }}</p>
        <input
            :ref="props.refKey"
            :type="props.type"
            :name="props.name"
            :placeholder="props.placeholder"
            :readOnly="props.readOnly"
            :autoComplete="props.autoComplete"
            :autofocus="props.autofocus"
            v-model="inputValue"
        >
        <span>{{ props.validation }}</span>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

// defineProps에서는 외부에서 선언된 인터페이스, 타입은 적용할 수 없다.
// 모든 코드에 타입스크립트 100% 적용 해야함
const props = withDefaults(defineProps<{
    label: string;
    refKey: string;
    type: string;
    name: string;
    placeholder: string;
    readOnly: boolean;
    autoComplete: boolean;
    autofocus: boolean;
    validation: string;
}>(), {
    label: '',
    refKey: '',
    type: '',
    name: '',
    placeholder: '',
    readOnly: false,
    autoComplete: false,
    autofocus: false,
    validation: '',
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
