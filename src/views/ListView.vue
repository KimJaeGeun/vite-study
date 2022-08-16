<template>
    <div class="list">
        <li>
            <RouterLink to="/">
                List
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/login">
                login
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/login2">
                login2
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/login3">
                login3
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/login4">
                login4
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/login">
                login
            </RouterLink>
        </li>
        <li>
            <RouterLink to="/info">
                Info
            </RouterLink>
        </li>
        
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<style scoped>
.list{
}

:deep(li) {

}
</style>
