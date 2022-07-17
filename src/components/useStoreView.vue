<template>
<div>
<div class="store_box">
<h2>options API Store Data</h2>
<p>state</p>
<div>name: {{defaultStore.name}}</div>
<div>age: {{defaultStore.age}}</div>
<p>getter</p>
<div>greeting: {{defaultStore.greeting}}</div>
<br />
<button @click="edit('o')">edit greeting</button>
<button @click="plus('o')">plus 2</button>
<button @click="reset('o')">reset</button>
</div>

<div class="store_box">
<h2>Composition API Store Data</h2>
<p>state</p>
<div>name: {{arrangeStore.name}}</div>
<div>age: {{arrangeStore.age}}</div>
<p>getter</p>
<div>greeting: {{arrangeStore.greeting}}</div>
<br />
<button @click="edit('c')">edit greeting</button>
<button @click="plus('c')">plus 2</button>
<button @click="reset('c')">reset</button>
</div>

<div class="store_box">
<h2>Multiple State edit</h2>
<div>name: {{ arrangeStore.work.time }}</div>
<div>age: {{ arrangeStore.work.worker }}</div>
<button @click="patch">patch</button>
</div>

</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useDefaultStore, useArrangeStore } from '@/stores/sampleStore';

const defaultStore = useDefaultStore();
const arrangeStore = useArrangeStore();

const { name, age } = storeToRefs(arrangeStore);

console.log(name, age)

function edit(type:string) {
    if (type === 'o') {
        defaultStore.ageUp(1);
    } else {
        arrangeStore.ageUp(1);
    }
}

function plus(type:string) {
    if (type === 'o') {
        defaultStore.age += 2;
    } else {
        arrangeStore.age += 2;
    }
}

function reset(type:string) {
    if (type === 'o') {
        defaultStore.$reset();
    } else {
        arrangeStore.initState();
    }
}

function patch() {
    arrangeStore.$patch({
        work: {
            time: 50,
            worker: 'you'
        },
    })
}
</script>

<style>
.store_box {
    border: 1px solid darkgrey;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
}

p {
    font-weight: bold;;
}

button {
    display: block;
    width: 150px;
    border: thin;
    border-radius: 10px;
    background-color: deepskyblue;
    color: white;
    font-weight: bold;
    margin: 1rem;
}
</style>
