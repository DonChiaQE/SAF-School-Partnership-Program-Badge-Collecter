<template>
<div class="mx-auto max-w-3xl w-full mb-8">
    <p class="text-xl font-light">Welcome,</p>
    <h1 class="text-4xl font-bold truncate">REC {{ nameStore.name }}</h1>
    <p class="text-xl font-light">SSPP 10 C4I Bn x EJC</p>
</div>
</template>

<script setup>
import {
    useNameStore
} from '../store/name'
const nameStore = useNameStore()
</script>
