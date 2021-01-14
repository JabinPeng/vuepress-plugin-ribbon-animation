<template>
    <div class="RibbonAnimation">
    </div>
</template>

<script>
import Ribbons from './ribbon'
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
            this.initRIbbonAnimation()
        },
        methods: {
            initRIbbonAnimation() {
                new Ribbons(this.RIBBON_OPTION)
        }
    }
    }
</script>
