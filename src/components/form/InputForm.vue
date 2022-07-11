<template>
    <div class="input_box">
        <p>{{ props.label }}</p>
        <input 
            :ref="props.refKey"
            :type="props.type"
            :name="props.name"
            :placeholder="props.placeholder"
            :readOnly="props.readOnly"
            :autofocus="false"
            v-model="inputValue"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
    label: {
        type: String
    },
    refKey: {
        type: String
    },
    type: {
        type: String
    },
    name: {
        type: String
    },
    placeholder: {
        type: String
    },
    readOnly: {
        type: Boolean,
        default: false
    },

});

const inputValue = ref("");
// input에 입력한 값을 부모 컴포넌트에 보냄
const emit = defineEmits(["update:value"])

// input에 갓을 입력할때마다 업데이트
watch(inputValue, (value) => {
    emit("update:value", value);
});
</script>
