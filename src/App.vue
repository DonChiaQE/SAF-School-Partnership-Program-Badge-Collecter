<template>
<div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 flex flex-col h-[100dvh]">
    <Header v-if="nameStore.name !== ''" />
    <div class="mx-auto max-w-3xl grow w-full">
        <router-view></router-view>
    </div>
    <Footer v-if="nameStore.name !== ''" />
</div>
</template>

<script setup>
import {
    RouterView,
} from 'vue-router'

import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { useNameStore } from './store/name'

const nameStore = useNameStore()
</script>

<style>
body {
    background-color: #f9fafb;
}
</style>
