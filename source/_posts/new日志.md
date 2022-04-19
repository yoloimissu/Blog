---
title: 日志
cover: /img/bgc.jpg
abbrlink: b8fd4291
date: 2022-04-14 15:08:56
sticky: 9
tags:
    - [日志]
    - [CSS]
categories:
    - [CSS]
    - [日志]
---
### 添加蒙层自定义弹出模态框禁止底部滚动功能
弹出时让最下面的盒子定位fixed

###	选择器(摘自菜鸟教程)

| 选择器                 | 示例                  | 示例说明                                                   | CSS  |
| :--------------------- | :-------------------- | :--------------------------------------------------------- | :--- |
| class                  | .intro                | 选择所有class="intro"的元素                                | 1    |
| id                     | #firstname            | 选择所有id="firstname"的元素                               | 1    |
| *                      | *                     | 选择所有元素                                               | 2    |
| element                | p                     | 选择所有<p>元素                                            | 1    |
| element,element        | div,p                 | 选择所有<div>元素和<p>元素                                 | 1    |
| element element        | div p                 | 选择<div>元素内的所有<p>元素                               | 1    |
| element>element        | div>p                 | 选择所有父级是 <div> 元素的 <p> 元素                       | 2    |
| element+element        | div+p                 | 选择所有紧跟在 <div> 元素之后的第一个 <p> 元素             | 2    |
| attribute              | [target]              | 选择所有带有target属性元素                                 | 2    |
| attribute=value        | [target=-blank]       | 选择所有使用target="-blank"的元素                          | 2    |
| attribute~=value       | [title~=flower]       | 选择标题属性包含单词"flower"的所有元素                     | 2    |
| attribute\|=language   | [lang\|=en]           | 选择 lang 属性等于 **en**，或者以 **en-** 为开头的所有元素 | 2    |
| :link                  | a:link                | 选择所有未访问链接                                         | 1    |
| :visited               | a:visited             | 选择所有访问过的链接                                       | 1    |
| :active                | a:active              | 选择活动链接                                               | 1    |
| :hover                 | a:hover               | 选择鼠标在链接上面时                                       | 1    |
| :focus                 | input:focus           | 选择具有焦点的输入元素                                     | 2    |
| :first-letter          | p:first-letter        | 选择每一个<p>元素的第一个字母                              | 1    |
| :first-line            | p:first-line          | 选择每一个<p>元素的第一行                                  | 1    |
| :first-child           | p:first-child         | 指定只有当<p>元素是其父级的第一个子级的样式。              | 2    |
| :before                | p:before              | 在每个<p>元素之前插入内容                                  | 2    |
| :after                 | p:after               | 在每个<p>元素之后插入内容                                  | 2    |
| :lang language         | p:lang(it)            | 选择一个lang属性的起始值="it"的所有<p>元素                 | 2    |
| element1~element2      | p~ul                  | 选择p元素之后的每一个ul元素                                | 3    |
| attribute^=value       | a[src^="https"]       | 选择每一个src属性的值以"https"开头的元素                   | 3    |
| attribute$=value       | a[src$=".pdf"]        | 选择每一个src属性的值以".pdf"结尾的元素                    | 3    |
| attribute=value        | a[src*="runoob"]      | 选择每一个src属性的值包含子字符串"runoob"的元素            | 3    |
| :first-of-type         | p:first-of-type       | 选择每个p元素是其父级的第一个p元素                         | 3    |
| :last-of-type          | p:last-of-type        | 选择每个p元素是其父级的最后一个p元素                       | 3    |
| :only-of-type          | p:only-of-type        | 选择每个p元素是其父级的唯一p元素                           | 3    |
| :only-child            | p:only-child          | 选择每个p元素是其父级的唯一子元素                          | 3    |
| :nth-child(*n*)        | p:nth-child(2)        | 选择每个p元素是其父级的第二个子元素                        | 3    |
| :nth-last-child(*n*)   | p:nth-last-child(2)   | 选择每个p元素的是其父级的第二个子元素，从最后一个子项计数  | 3    |
| :nth-of-type(*n*)      | p:nth-of-type(2)      | 选择每个p元素是其父级的第二个p元素                         | 3    |
| :nth-last-of-type(*n*) | p:nth-last-of-type(2) | 选择每个p元素的是其父级的第二个p元素，从最后一个子项计数   | 3    |
| :last-child            | p:last-child          | 选择每个p元素是其父级的最后一个子级。                      | 3    |
| :root                  | :root                 | 选择文档的根元素                                           | 3    |
| :empty                 | p:empty               | 选择每个没有任何子级的p元素（包括文本节点）                | 3    |
| :target                | #news:target          | 选择当前活动的#news元素（包含该锚名称的点击的URL）         | 3    |
| :enabled               | input:enabled         | 选择每一个已启用的输入元素                                 | 3    |
| :disabled              | input:disabled        | 选择每一个禁用的输入元素                                   | 3    |
| hecked                 | input:checked         | 选择每个选中的输入元素                                     | 3    |

###	过度

`transition: *property duration timing-function delay*;`

| 值                         | 描述                                       |
| :------------------------- | :----------------------------------------- |
| transition-property        | 指定CSS属性的name，transition效果          |
| transition-duration        | transition效果需要指定多少秒或毫秒才能完成 |
| transition-timing-function | 指定transition效果的转速曲线               |
| transition-delay           | 定义transition效果开始的时候               |

### 动画

#### 定义动画

```css
@keyframes   动画名字{
选择帧
from{
第一帧的属性
}
n%{
第n帧的属性
}
to{
最后一帧的属性
}
}
```

#### 应用动画

```css
animation: name duration timing-function delay iteration-count direction fill-mode play-state;
```

| 值                        | 说明                                                         |
| :------------------------ | :----------------------------------------------------------- |
| animation-name            | 指定要绑定到选择器的关键帧的名称                             |
| animation-duration        | 动画指定需要多少秒或毫秒完成                                 |
| animation-timing-function | 设置动画将如何完成一个周期                                   |
| animation-delay           | 设置动画在启动前的延迟间隔。                                 |
| animation-iteration-count | 定义动画的播放次数。                                         |
| animation-direction       | 指定是否应该轮流反向播放动画。                               |
| animation-fill-mode       | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 |
| animation-play-state      | 指定动画是否正在运行或已暂停。                               |

### 弹性盒子

#### flex-direction

- row：横向从左到右排列（左对齐），默认的排列方式。
- row-reverse：反转横向排列（右对齐，从后往前排，最后一项排在最前面。
- column：纵向排列。
- column-reverse：反转纵向排列，从后往前排，最后一项排在最上面。

####  justify-content

- flex-start：弹性项目向行头紧挨着填充。这个是默认值。
- flex-end：弹性项目向行尾紧挨着填充。
- center：弹性项目居中紧挨着填充。
- space-between：弹性项目平均分布在该行上。
- space-around：弹性项目平均分布在该行上，两边留有一半的间隔空间。

#### align-items 属性

- flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
- flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
- center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。
- baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。
- stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。

#### flex-wrap 属性

- **nowrap** - 默认， 弹性容器为单行。
- **wrap** - 弹性容器为多行。
- **wrap-reverse** -反转 wrap 排列。

#### align-content 属性

`align-content` 属性用于修改 `flex-wrap` 属性的行为	

- `stretch` - 默认。各行将会伸展以占用剩余的空间。
- `flex-start` - 各行向弹性盒容器的起始位置堆叠。
- `flex-end` - 各行向弹性盒容器的结束位置堆叠。
- `center` -各行向弹性盒容器的中间位置堆叠。
- `space-between` -各行在弹性盒容器中平均分布。
- `space-around` - 各行在弹性盒容器中平均分布，两端保留子元素与子元素之间间距大小的一半。

#### 弹性子元素属性

##### 排序

```
order:用整数值来定义排列顺序，数值小的排在前面。可以为负值。
```

##### flex

`flex` 属性用于指定弹性子元素如何分配空间。

### 变换

2D变换：平移，缩放，旋转，倾斜，改变变换原点

3D变换

#### 要想看到变换后的3D效果，还需要哪些属性的配合使用?

##### Perspective-origin属性

perspective呈现为观看者（或摄像机）直接位于元素中心前面。perspective-origin属性移动相机位置左右或向上或向下

##### Backface-visibility属性

属性为 hidden元素将仅在面向观看者时可见，并且如果背面朝向观看者，则隐藏

##### Transform-style属性

属性用来指定被嵌套的元素在3D空间中如何显示

flat：默认值，子元素不保持它的3D位置。

preserve-3d：子元素会保持它的3D位置

##### Transform属性的值

##### 平移

translateX()，translateY()，translate(x-axis, y-axis)，translate3d()

##### 旋转

RotateX()，RotateY()，rotateZ()/rotate()，rotate3d()

##### 缩放

scaleX()，scaleY()，scale(x-axis, y-axis)，scaleZ()，scale3d()

##### 倾斜

skewX()，skewY()，skew(x-axis, y-axis)，

设置透视

perspective()

### 渐变

```css
//水平向右的背景渐变(红、绿、蓝)效果角度顺时针向上为0右为90下为180左为270
background: linear-gradient(90deg, red, green, blue);
//也可以使用方向（to bottom、to top、to right、to left、to bottom right，等等）。
 background-image: linear-gradient(to bottom right, red, yellow);
//使用透明度rgba
 background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
```

### 怎样使用色调、饱和度、亮度以及透明度为元素设置背景色

 `background-color: hsla(0, 71%, 32%, 0.288);`

属性分别为色调、饱和度、亮度以及透明度

色调取值0-360，饱和度和亮度取值0-100%，透明度取值0-1

### 怎样为图片应用滤镜效果(灰度滤镜)

` filter: grayscale(80%);`

取值范围0-100% 

### 移动端解决1px问题的方法有哪些?

#### 1、设置该元素缩小比例

```css
.scale{
    position: relative;
}
.scale:after{
    content:"";
    position: absolute;
    bottom:0px;
    left:0px;
    right:0px;
    border-bottom:1px solid #ddd;
    -webkit-transform:scaleY(.5);
    -webkit-transform-origin:0 0;
}
```

#### 2、设置整个页面的缩小比例

<meta name="viewport" content="width=device-width, initial-scale=0.5">

initial-scale=0.5为缩小为原来的1/2



