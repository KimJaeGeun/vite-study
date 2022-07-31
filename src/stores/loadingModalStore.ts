
import { defineStore } from 'pinia';
import { ref } from 'vue';

const loadingModalStore = defineStore('loadingModalStore', () => {
    const isOn = ref(false);

    function setLoading (state: boolean) {
        isOn.value = state;
    }

    return { isOn, setLoading };
});

export default loadingModalStore;
