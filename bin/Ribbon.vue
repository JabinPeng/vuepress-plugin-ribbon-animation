<template>
  <canvas id="Ribbon" v-if="visible"></canvas>
</template>

<script>
  export default {
    name: "Ribbon",
    data() {
      return {
        canvas: null,
        ctx: null,
        angle: 0,
        resizeTimeout: null,
        visible:RIBBON_SHOW,
        config: {
          size: RIBBON_SIZE,
          opacity: RIBBON_OPACITY,
          zIndex: RIBBON_Z_INDEX
        }
      }
    },

    mounted() {
      if (!RIBBON_SHOW) {
        return
      }
      const canvas = this.getCanvas()
      const ctx = canvas.getContext('2d')
      ctx.globalAlpha = this.config.opacity
      window.addEventListener(this.isMobile() ? 'touchstart' : 'click', this.redraw)
      window.addEventListener('resize', this.handleResize)
      this.canvas = canvas
      this.ctx = ctx
      this.redraw()
    },

    methods: {
      draw(foldMark) {
        const ctx = this.ctx
        const size = this.config.size
        const p1 = foldMark[0]
        const p2 = foldMark[1]
        const p3 = {x: p2.x + this.rand(-0.25, 1.75) * size, y: this.nextY(p2.y)}
        ctx.beginPath()
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
        ctx.lineTo(p3.x, p3.y)
        ctx.closePath()
        ctx.fillStyle = this.nextColor()
        ctx.fill()
        foldMark[0] = p2
        foldMark[1] = p3
      },

      getCanvas() {
        const canvas = document.getElementById('Ribbon')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        this.setStyle(canvas)
        return canvas
      },

      redraw() {
        const width = this.canvas.width
        const height = this.canvas.height
        const size = this.config.size
        const foldMark = [{x: 0, y: height * 0.7 + size}, {x: 0, y: height * 0.7 - size}]
        this.ctx.clearRect(0, 0, width, height)
        while(foldMark[1].x < width + size) this.draw(foldMark)
      },

      nextY(y){
        const width = this.canvas.width
        const height = this.canvas.height
        const size = this.config.size
        const t = y + this.rand(-1.1, 0.9) * size
        return (t > height || t < 0) ? this.nextY(y) : t
      },

      setStyle(canvas) {
        const style = canvas.style
        style.opacity = this.config.opacity
        style.position = 'fixed'
        style.top = 0
        style.left = 0
        style.zIndex = this.config.zIndex
        style.width = canvas.width
        style.height = canvas.height
        style.pointerEvents = 'none'
      },

      rand(start, end) {
        return Math.random() * (end - start) + start
      },

      nextColor() {
        const pi_2 = Math.PI*2
        this.angle += pi_2 * 0.02
        this.angle %= pi_2
        return "#" + (Math.cos(this.angle)*127+128<<16 |
                      Math.cos(this.angle+pi_2/3)*127+128<<8 |
                      Math.cos(this.angle+pi_2/3*2)*127+128)
                      .toString(16)
                      .padStart(6, "0")
      },

      isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      },

      handleResize() {
        if(this.resizeTimeout != null){
          clearTimeout(this.resizeTimeout)
        }
        this.resizeTimeout = setTimeout(() => {
          this.canvas.width  = window.innerWidth
          this.canvas.height = window.innerHeight
          this.redraw()
        }, 500)
      },
    }
  }
</script>
