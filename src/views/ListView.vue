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
