---
title: '[CSS] transition,animation, transform对比'
---

--------------------

## transition(过渡)

### 定义
Transition(<font color="red">过渡</font>):  
  CSS3引入这个之前, CSS状态变化都是即时完成  

  MDN定义:  
  CSS transitions 提供了一种在更改CSS属性时控制动画速度的方法。 其可以让属性变化成为一个持续一段时间的过程，而不是立即生效的。比如，将一个元素的颜色从白色改为黑色，通常这个改变是立即生效的，使用 CSS transitions 后该元素的颜色将逐渐从白色变为黑色，按照一定的曲线速率变化。这个过程可以自定义。

### 示例
  示例见下面  
  [阮一峰CSS动画简介](https://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)  
  [高亮菜单过渡效果](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

  ```css
  /* 属性值 */
    transition-property: height;
    transition-duration: 1s;
    transition-delay: 1s;
    transition-timing-function: ease;

  /* 简写 */
    transition: property duration timing-function delay;
    transition: margin-right 2s ease-in-out .5s;

  /* 4个属性定义 */
    1. transition-property
    指定一个或多个过渡的属性值，比如transition-property:opacity就是只指定opacity属性参与这个过渡。
    只有指定的属性才会在过渡中发生动画，其它属性仍瞬间变化。

    2. transition-duration
    指定过渡的时长。单位: s

    3. transition-delay
    指定延迟时间, 即属性开始变化时与过渡开始发生时之间的时长。// 这解释...真的令人头大

    3. transition-timing-function
    指定过渡动画缓动类型，有ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier()
                          慢快慢   线性    由慢到快   由快到慢    由慢到快再到慢   贝塞尔曲线
  ```

### 检测过渡是否完成

当过渡完成时触发一个事件，在符合标准的浏览器下，这个事件是 transitionend, 在 WebKit 下是 webkitTransitionEnd.  
```js
// 监听事件
el.addEventListener("transitionend", updateTransition, true);
```
:::tip

如果取消了过渡则不会触发 transitionend 事件，因为在过渡完成前动画的属性值改变了。

:::

### 优点与局限

  简单易用  

  局限有以下几点:  

（1）transition需要事件触发，所以没法在网页加载时自动发生。

（2）transition是一次性的，不能重复发生，除非一再触发。

（3）transition只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态。

（4）一条transition规则，只能定义一个属性的变化，不能涉及多个属性。  

  CSS Animation就是为了解决这些问题而提出的。

--------------------

## animation(动画)

### 定义
animation(<font color="red">动画</font>):  

MDN定义:  
CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。

### 示例
[赛隆人之眼](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation#cylon_eye)

```css
  /* 简写 */
  animation: 3s ease-in 1s infinite reverse both running slidein;

  /* 8个属性初始值 */
  animation-name: none
  animation-duration: 0s
  animation-timing-function: ease
  animation-delay: 0s
  animation-iteration-count: 1
  animation-direction: normal
  animation-fill-mode: none
  animation-play-state: running

```

```css
  /* 8个属性定义 */

  1. animation-name /* 指定动画名 */

  2. animation-duration /* 动画完成所需花费的全部时间，默认值为0，如果想做动画，则时间不能为0，要不然看不到效果 */

  3. animation-timing-function /* 参考上面transition的一下吧 */
  值:  
    linear 动画从头到尾的速度是相同的。
    ease 默认。动画以低速开始，然后加快，在结束前变慢。
    ease-in 动画以低速开始。
    ease-out 动画以低速结束。
    ease-in-out 动画以低速开始和结束。
    cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。
    关于贝塞尔曲线，网上有很多帮助生成曲线的工具，可以自己搜索一下

  4. animation-delay  /* 规定在动画开始之前的延迟。为负值代表跳过多少秒的动画立马开始 */

  5. animation-iteration-count  /* 定义动画播放次数的数值。值为infinite的话, 无限播放 */

  6. animation-direction /* 动画循环播放时，每次都是从结束状态跳回到起始状态，再开始播放。normal 默认值。动画应该正常播放。alternate 动画应该轮流反向播放。 */

  7. animation-fill-mode  /*动画结束以后，会立即从结束状态跳回到起始状态。如果想让动画保持在结束状态，需要使用animation-fill-mode属性。*/
  值: none 默认值，回到动画没开始时的状态。
      forwards 当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
      backwards：让动画回到第一帧的状态。
      both: 根据animation-direction（见后）轮流应用forwards和backwards规则。

  8. animation-play-state /* 有时，动画播放过程中，会突然停止。这时，默认行为是跳回到动画的开始状态。 */
```

### keyframes的写法
keyframes关键字用来定义动画的各个状态, 写法自由
```css
@keyframes rainbow {
  0% { background: #c00 }
  50% { background: orange }
  100% { background: red }
}
```

### 优点与局限

功能强大  

使用较复杂

眨眼和闪烁的动画对于有认知问题的人来说是有问题的，比如注意力缺陷多动障碍(ADHD)。此外，某些动画效果可以触发前庭神经紊乱、癫痫、偏头痛和暗点敏感性。

考虑提供一种暂停或禁用动画的机制，以及使用 [Reduced Motion Media Query简约运动媒体查询](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)，为那些表示不喜欢动画的用户创建一个良好的体验。


## transform(变换)

### 定义
MDN定义:  
CSStransform属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。

:::tip
只能转换由盒模型定位的元素。根据经验，如果元素具有display: block，则由盒模型定位元素。
:::

### 示例
菜鸟[CSS3 transform 属性](https://www.runoob.com/cssref/css3-pr-transform.html)

--------------------

## 参考

* 阮一峰[CSS动画简介](https://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)
* [CSS3 Transitions, Transforms和Animation使用简介与应用展示](https://www.zhangxinxu.com/wordpress/2010/11/css3-transitions-transforms-animation-introduction/)
* MDN[使用 CSS transitions](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
* MDN[animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

