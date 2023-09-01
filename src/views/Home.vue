<template>
<div class="flex flex-col space-y-4">

    <div class="bg-gray-100 w-full rounded-md p-6">
        <div class="grid grid-cols-5 sm:grid-cols-4 gap-y-3">
            <div class="flex justify-center" v-for="n in 10">
                <div class="bg-blue-300 rounded-full h-16 w-16"></div>
            </div>
        </div>
    </div>

    <RouterLink to="/scanner" class="mt-6">
        <button type="button" class="w-full sm:w-auto inline-flex justify-center items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            QR Code Scanner
            <CameraIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
    </RouterLink>

</div>
</template>

<script setup>
import {
    CameraIcon
} from '@heroicons/vue/20/solid'
</script>
