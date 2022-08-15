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

// 모든 코드에 타입스크립트 100% 적용 해야함
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    refKey: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    },
    readOnly: {
        type: Boolean,
        default: false
    },
    autoComplete: {
        type: Boolean,
        default: false
    },
    autofocus: {
        type: Boolean,
        default: false
    },
    validation: {
        type: String,
        default: ''
    }
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
