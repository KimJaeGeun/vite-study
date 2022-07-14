
import { defineStore } from 'pinia';
import { ref, reactive, computed } from 'vue';

export const useDefaultStore = defineStore({
    id: 'default',
    state: () => ({
        name: 'jaegeun',
        age: 31,
    }),
    getters: {
        greeting: (state) => `my name is ${state.name}, and ${state.age}old`
    },
    actions: {
        ageUp (num:number) {
            this.age += num;
        }
    }
});

const defaultState = {
    name: 'jaegeun',
    age: 31,
}

export const useArrangeStore = defineStore('arrange', () => {
    const work = reactive({
        time: 100,
        worker: 'me'
    });

    const name = ref('jaegeun');
    const age = ref(31);

    const greeting = computed(() => `my name is ${name.value}, and ${age.value}old`);

    function ageUp (num:number) {
        age.value += num;
    }

    function initState () {
        name.value = defaultState.name;
        age.value = defaultState.age;
    }

    return {work, name, age, greeting, ageUp, initState}
});
