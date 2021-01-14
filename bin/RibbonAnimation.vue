<template>
    <div class="RibbonAnimation" v-if="visible">
    </div>
</template>

<script>
    export default {
        name: 'RibbonAnimation',
        data() {
            return {
                RIBBON_OPTION: RIBBON_OPTIONS,
                visible: RIBBONANIMATION_SHOW
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
