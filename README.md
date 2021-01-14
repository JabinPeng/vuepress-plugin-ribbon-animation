## 💌 vuepress-plugin-ribbon-animation

> 项目地址：[http://www.zpzpup.com/blog]

> 技术站: vue vuepress vuepress-theme-reco vuepress-plugin-ribbon 感谢各位大佬 😁

## 📢 说明

***放到开头，这里重点说明下，大家如果有啥问题咱就直接提‘lssues’吧，后面朋友遇到相同问题大家也可以参考***

## 🏠 项目截图
<p align="center">
  <img width="900" src="http://www.zpzpup.com/assets/image/blog04.png">
</p>


## 📎 项目配置也是很简单
> npm install vuepress-plugin-ribbon-animation -D

or

>cnpm install vuepress-plugin-ribbon-animation -D


大家目前去用1.1.2的版本 前面几个是测试用的版本 其他的大家就提lssues吧

```js
// 只要把这个放进 config的plugins中就可以了 有木有很简单
 ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
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
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }]
```
如果觉得很省事，帮到你了可以点个 ⭐ star 感激不尽 😁😁😁  [链接：🚀](https://github.com/JabinPeng/vuepress-plugin-ribbon-animation).



