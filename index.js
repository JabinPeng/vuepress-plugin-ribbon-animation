const { resolve } = require('path')

module.exports = (options = {}, context) => ({
    define() {
        const {
            size = 90, opacity = 0.6, zIndex = -1, opt = {
                // 色带HSL饱和度
                colorSaturation: "80%",
                // 色带HSL亮度量
                colorBrightness: "60%",
                // 带状颜色不透明度
                colorAlpha: 0.65,
                // 在HSL颜色空间中循环显示颜色的速度有多快
                colorCycleSpeed: 6,
                // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
                verticalPosition: "center",
                // 到达屏幕另一侧的速度有多快
                horizontalSpeed: 200,
                // 在任何给定时间，屏幕上会保留多少条带
                ribbonCount: 2,
                // 添加笔划以及色带填充颜色
                strokeSize: 0,
                // 通过页面滚动上的因子垂直移动色带
                parallaxAmount: -0.5,
                // 随着时间的推移，为每个功能区添加动画效果
                animateSections: true
            },
            ribbonShow = true,
            ribbonAnimationShow = true
        } = options

        return {
            RIBBON_SIZE: size,
            RIBBON_OPACITY: opacity,
            RIBBON_Z_INDEX: zIndex,
            RIBBON_OPTIONS: opt,
            RIBBON_SHOW: ribbonShow,
            RIBBONANIMATION_SHOW: ribbonAnimationShow,
        }
    },
    enhanceAppFiles: resolve(__dirname, "./bin/enhanceAppFile.js"),
    globalUIComponents: ["Ribbon", "RibbonAnimation"]
});
