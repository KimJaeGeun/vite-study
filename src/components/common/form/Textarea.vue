<template>
    <div class="input_box">
        <textarea
            :="props"
            v-on="{ focus, blur, input }"
        />
    </div>
</template>

<script setup lang="ts">
import type { InputValue } from '@/mapping/type';

// textarea 내 바인딩 옵션 타입
type Props = {
    class?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    readonly?: boolean;
    autofocus?: boolean;
    disabled?: boolean;
    maxlength?: number;
    autocomplete?: string;
    cols?: number;
    rows?: number;
    value?: InputValue;
};

// defineEmits 함수 타입
type Emits = {
    // 입력값 업데이트
    (e: 'update:value', value: InputValue): void;
    // 포커스에서 벗어날 시 이벤트
    (e: 'blur'): void;
    // 포커스 될 시 이벤트
    (e: 'focus'): void;
};

// 구조분해시 반응성이 상실되기에 구조분해를 할 수 없다.
const props = withDefaults(defineProps<Props>(), {
    class: '',
    name: '',
    type: '',
    placeholder: '',
    readonly: false,
    autofocus: false,
    disabled: false,
    maxlength: undefined,
    autocomplete: '',
    cols: undefined,
    rows: undefined,
    value: ''
});

// 부모 컴포넌트의 함수 접근
const emit = defineEmits<Emits>();

// textarea에 값을 입력할때마다 업데이트
const input = (e: Event) => {
    emit('update:value', (e.target as HTMLInputElement).value);
};

// textarea컴포넌트 focus 시 이벤트 실행
const focus = () => {
    emit('focus');
};

// textarea컴포넌트 focus상태에서 벗어날 시 이벤트 실행
const blur = () => {
    emit('blur');
};
</script>
