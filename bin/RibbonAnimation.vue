<template>
    <div class="RibbonAnimation">
    </div>
</template>

<script>
    export default {
        name: 'RibbonAnimation',
        data() {
            return {
                RIBBON_OPTION: RIBBON_OPTIONS
            }
        },
        mounted () {
            if (!RIBBONANIMATION_SHOW) {
                return
            }
            const Ribbons = require('./ribbon')
            new Ribbons.default(this.RIBBON_OPTION)
        }
    }
</script>
