
import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const msgModalStore = defineStore('msgModalStore', () => {
    const defaultState = reactive({
        isOn: false,
        msg: '',
    });

    const isOn = ref(false);
    const msg = ref('');

    function initState () {
        isOn.value = defaultState.isOn;
        msg.value = defaultState.msg;
    }

    return {isOn, msg, initState}
});