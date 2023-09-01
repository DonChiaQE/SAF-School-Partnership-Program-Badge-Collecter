<template>
    <div class="mb-8">
        <p class="text-xl font-light">Welcome,</p>
        <h1 class="text-4xl font-bold">REC {{ nameStore.name }}</h1>
        <p class="text-xl font-light">SSPP 10C4I x EJC</p>
    </div>
</template>

<script setup>
import { useNameStore } from '../store/name'
const nameStore = useNameStore()
</script>