<template>
<div v-if="nameStore.name !== ''" class="flex flex-col space-y-4">
    <div class="bg-white w-full rounded-xl p-6 shadow">
        <div class="grid grid-cols-5 sm:grid-cols-5 gap-y-3">
            <div class="flex justify-center" v-for="badge in badgesStore.badges">
                <div class="rounded-full h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28" :class="[ badge.collected ? badge.color : 'bg-gray-300']"></div>
            </div>
        </div>
    </div>

    <RouterLink to="/scanner" class="mt-6">
        <button type="button" class="w-full sm:w-auto inline-flex justify-center items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-3.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
            QR Code Scanner
            <CameraIcon class="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
    </RouterLink>

    <Notification v-if="notificationStore.showNotification" />
</div>
<NameModal v-if="nameStore.name === ''" />
</template>

<script setup>
import {
    CameraIcon
} from '@heroicons/vue/20/solid'
import {
    useBadgesStore
} from '../store/badges'
import {
    useNotificationsStore
} from '../store/notifications'
import {
    useNameStore
} from '../store/name'

import Notification from '../components/Notification.vue'
import NameModal from '../components/NameModal.vue'

const nameStore = useNameStore()
const badgesStore = useBadgesStore()
const notificationStore = useNotificationsStore()

function toggleBadge(id) {
    badgesStore.toggleCollected(id);
}

if (notificationStore.showNotification) {
    setTimeout(() => {
        notificationStore.showNotification = false
    }, 6000)
}
</script>
