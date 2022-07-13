
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useDefaultStore = defineStore({
    id: 'default',
    state: () => ({
        name: 'jaegeun',
        age: 31,
    }),
    getters: {
        greeting: ({ name, age }) => `my name is ${name}, and ${age}old`
    },
    actions: {
        ageUp (num:number) {
            this.age += num;
        }
    }
});

export const useArrangeStore = defineStore('arrange', () => {
    const name = ref('jaegeun');
    const age = ref(31);

    const greeting = computed(() => `my name is ${name.value}, and ${age.value}old`);

    function ageUp (num:number) {
        age.value += num;
    }

    return {name, age, greeting, ageUp}
});
