<template>
<div>
    <RouterLink to="/" class="text-sm font-semibold leading-7 text-blue-600"><span aria-hidden="true">&larr;</span> Back
        to home
    </RouterLink>
</div>
<div class="rounded-md w-full aspect-square mt-3">
    <QrcodeStream class="w-full" :track="paintOutline" @error="logErrors" />
    <!-- <button @click="testBadge()" class="absolute bottom-0 right-0 bg-blue-600 text-white rounded-md p-2 m-2">Submit</button> -->
</div>
</template>

<script setup>
import {
    QrcodeStream,
} from 'vue-qrcode-reader'
import {
    useBadgesStore
} from '../store/badges';
import {
    useNotificationsStore
} from '../store/notifications';
import {
    RouterLink,
    useRoute,
    useRouter
} from 'vue-router'
import {
    ref
} from 'vue'

const qrcodeValue = ref('test')

const badgesStore = useBadgesStore()
const notificationStore = useNotificationsStore()
const router = useRouter()

const logErrors = (error) => {
    console.log(error)
}

function paintOutline(detectedCodes, ctx) {
    for (const detectedCode of detectedCodes) {
        const rawValue = detectedCode.rawValue
        qrcodeValue.value = rawValue

        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints

        ctx.strokeStyle = 'red'

        ctx.beginPath()
        ctx.moveTo(firstPoint.x, firstPoint.y)
        for (const {
                x,
                y
            } of otherPoints) {
            ctx.lineTo(x, y)
        }
        ctx.lineTo(firstPoint.x, firstPoint.y)
        ctx.closePath()
        ctx.stroke()
    }

    for (const badge of badgesStore.badges) {
        if (badge.qrCodeValue === qrcodeValue.value) {
            badgesStore.toggleCollected(badge.id)
            notificationStore.showNotification = true
            // delay
            setTimeout(() => {
                router.push('/')
            }, 1000)
        }
    }
}

function testBadge() {
    badgesStore.toggleCollected(1)
    notificationStore.showNotification = true
    // delay
    setTimeout(() => {
        router.push('/')
    }, 2000)
}
</script>
