<template>
<div>
    <RouterLink to="/" class="text-sm font-semibold leading-7 text-blue-600"><span aria-hidden="true">&larr;</span> Back
        to home
    </RouterLink>
</div>
<div class="rounded-md w-full aspect-square mt-3">
    <QrcodeStream class="w-full" :track="paintOutline" @error="logErrors" />
    {{ qrcodeValue }}
</div>
</template>

<script setup>
import {
    QrcodeStream,
} from 'vue-qrcode-reader'
import { useBadgesStore } from '../store/badges';
import { useNotificationsStore } from '../store/notifications';
import {
    ref
} from 'vue'

const qrcodeValue = ref('test')

const badgesStore = useBadgesStore()
const notificationStore = useNotificationsStore()

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
    for (badge in badgesStore.badges) {
        if (badge.qrCodeValue == qrcodeValue) {
            badgesStore.toggleCollected(badge.id)
            notificationStore.showNotification = true
            router.push('/')
        }
    }
}
</script>
