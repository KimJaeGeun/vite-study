import { ref, reactive } from "vue";

export function useCounter() {
    const counter = reactive({
        a: 1
    });
    
    function increment() {
        counter.a += 1;
    }

    return {
        counter,
        increment
    }
}
