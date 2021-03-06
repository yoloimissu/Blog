---
title: css样式
abbrlink: 78cea6d8
cover: /img/bgf.jpg
date: 2022-04-01 16:17:28
tags: 
    - [CSS]
categories:
    - [CSS]
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

### 去掉a标签下划线

 text-decoration: none !important;

### 鼠标悬浮样式

cursor:default丨auto丨crosshair丨pointer丨move丨e-resize丨ne-resize丨nw-resize丨n-resize丨se-resize丨sw-resize丨s-resize丨w-resize丨text丨wait丨help丨
<div id="cursorAPI" >
  <div class="cursor-default">箭头</div>
  <div class="cursor-auto">光标</div>
  <div class="cursor-crosshair">十字线</div>
  <div class="cursor-pointer">指示链接的指针</div>
  <div class="cursor-move">指示某对象可被移动</div>
  <div class="cursor-e-resize">指示矩形框的边缘可被向右</div>
  <div class="cursor-ne-resize">指示矩形框的边缘可被向上及右移动</div>
  <div class="cursor-nw-resize">显示矩形的边缘可被向上及向左移动</div>
  <div class="cursor-n-resize">显示矩形的边缘可被向上及向上</div>
  <div class="cursor-se-resize">显示矩形的边缘可被向上及向下向右移动</div>
  <div class="cursor-sw-resize">显示矩形的边缘可被向上及向下及向左移动</div>
  <div class="cursor-s-resize">显示矩形的边缘可被向下移动</div>
  <div class="cursor-w-resize">显示矩形的边缘可被向左移动</div>
  <div class="cursor-text">指文本</div>
  <div class="cursor-wait">指示程序正忙</div>
  <div class="cursor-help">指示可用的帮助</div>
</div>

### 超出省略

```css
 {
    display: block;
    word-break: keep-all; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
{width: 200px;设置宽度
overflow: hidden;//超出隐藏
-webkit-line-clamp: 2;//设置为几，就最多显示几行
text-overflow: ellipsis;//隐藏的形式为...
display: -webkit-box;
    -webkit-box-orient: vertical;}
```
<!-- more -->


### 正常滚动隐藏滚动条

```css
. page_list_box{
       height: 210px;
       overflow-y:auto;
}
//谷歌
. page_list_box ::-webkit-scrollbar{
　　display:none;
}
//火狐
. page_list_box{
       scrollbar-width:none;
}
//ie
. page_list_box{
     -ms-overflow-style:none;
}
```
### CSS3 border-radius - 指定每个圆角

如果你在 border-radius 属性中只指定一个值，那么将生成 4 个 圆角。

但是，如果你要在四个角上一一指定，可以使用以下规则：

四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。
三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角
两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角
一个值： 四个圆角值相同

| border-radius              | 所有四个边角 border-*-*-radius 属性的缩写 |
| -------------------------- | ----------------------------------------- |
| border-top-left-radius     | 定义了左上角的弧度                        |
| border-top-right-radius    | 定义了右上角的弧度                        |
| border-bottom-right-radius | 定义了右下角的弧度                        |
| border-bottom-left-radius  | 定义了左下角的弧度                        |

### 鼠标悬浮放大
```css
.box1{
    height: 300px;
    width: 300px;
    background-color: #0ff;
    overflow: hidden;
  }
  .box2{
    width: 100%;
    height: 100%;
  }
  .box2:hover{
    transform: scale(1.5);
    transition: all 2s;
  }
```

### transform

Transform变形，主要包括以下几种：旋转rotate、扭曲skew、缩放scale和移动translate以及矩阵变形matrix(还没用过)

语法：

transform ： none |rotate | scale | skew | translate |matrix;

none:表示不进么变换；

一、旋转rotate

rotate() ：通过指定的角度参数对原元素指定一个2D rotation（2D 旋转），需先有transform-origin属性的定义。transform-origin定义的是旋转的基点，`transform-origin: x-axis y-axis z-axis;`属性值可以是百分比、em、px等具体的值，也可以是top、right、bottom、left和center关键词,其中angle是指旋转角度，如果设置的值为正数表示顺时针旋转，如果设置的值为负数，则表示逆时针旋转。如：transform:rotate(30deg):

二、移动translate

移动translate我们分为三种情况：translate(x,y)水平方向和垂直方向同时移动（也就是X轴和Y轴同时移动）；translateX(x)仅水平方向移动（X轴移动）；translateY(Y)仅垂直方向移动（Y轴移动），按照设定的x,y参数值,当值为负数时，反方向移动物体，其基点默认为元素 中心点，也可以根据transform-origin进行改变基点。

三、缩放scale

缩放scale和移动translate是极其相似，他也具有三种情况：scale(x,y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）；scaleX(x)元素仅水平方向缩放（X轴缩放）；scaleY(y)元素仅垂直方向缩放（Y轴缩放），但它们具有相同的缩放中心点和基数，其中心点就是元素的中心位置，缩放基数为1，如果其值大于1元素就放大，反之其值小于1，元素缩小。同样基点在元素中心位置；中X表示水平方向缩放的倍数，Y表示垂直方向的缩放倍数，而Y是一个可选参数，如果没有设置Y值，则表示X，Y两个方向的缩放倍数是一样的

四、扭曲skew

扭曲skew和translate、scale一样同样具有三种情况：skew(x,y)使元素在水平和垂直方向同时扭曲（X轴和Y轴同时按一定的角度值进行扭曲变形）；skewX(x)仅使元素在水平方向扭曲变形（X轴扭曲变形）；skewY(y)仅使元素在垂直方向扭曲变形（Y轴扭曲变形），第一个参数是水平方向扭曲角度，第二个参数是垂直方向扭曲角度。其中第二个参数是可选参数，如果没有设置第二个参数，那么Y轴为0deg。同样是以元素中心为基点，我们也可以通过transform-origin来改变元素的基点位置。

### 阴影

#### 盒子阴影

```css
div {
    width: 200px;
    height: 200px;
    border: 10px solid red;
    /* box-shadow: 5px 5px 3px 4px rgba(0, 0, 0, .4);  */
    /* box-shadow:水平位置 垂直位置 模糊距离 阴影尺寸（影子大小） 阴影颜色  内/外阴影； */
    box-shadow: 0 15px 30px  rgba(0, 0, 0, .4);
}
```

| 值       | 描述                                   |
| :------- | :------------------------------------- |
| h-shadow | 必需。水平阴景拍的位置。允许负值。     |
| v-shadow | 必需。垂直阴景拍的位置。允许负值。     |
| blur     | 可选。模糊距离。                       |
| spread   | 可选。阴景的尺寸。                     |
| color    | 可选。阴景的颜色。请参阅CSS颜色值。    |
| inset    | 可选。将外部阴影(outset)改为内部阴影。 |

#### 文字阴影

：text-shadow: 水平偏移量 垂直偏移量 模糊度 颜色

### box:hover img和.box img:hover的区别

.box:hover img：意思为鼠标经过.box里面的img发生变化

.box img:hover：意思为经过box里面的img时发生变化



