<template>
<div>
    <RouterLink to="/" class="text-sm font-semibold leading-7 text-blue-600"><span aria-hidden="true">&larr;</span> Back
        to home
    </RouterLink>
</div>
<div class="rounded-md w-full aspect-square mt-3">
    <QrcodeStream :track="paintOutline" @error="logErrors" />
    {{ qrcodeValue }}
</div>
</template>

<script setup>
import {
    QrcodeStream,
} from 'vue-qrcode-reader'
import {
    ref
} from 'vue'

const qrcodeValue = ref('test')

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
}
</script>
