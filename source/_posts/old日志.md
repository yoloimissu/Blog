---
title: 日志
abbrlink: '21892891'
cover: /img/bge.jpg
date: 2022-04-01 17:20:40
tags:
    - [日志]
categories:
    - [日志]
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

## 20210810

### 语义化标签

header：页眉顶部内容

nav：导航

main：页面主要的内容

footer：页面底部内容

aside：定义页面的侧边栏内容

section：定义文档中的节比如章节、页眉、页脚或文档中的其他部分
<!-- more -->

##	20210811	



### class~="group2"

选择 class 属性值包含 group2 类名的元素，类名之间以空格分隔，包括属性值等于 group2 的元素

### class|="group1"

选择 class 属性值以 group1 子串开头，子串之间以连接符（-）分隔，包括属性值等于 group1 的元素

nth-child() 与nth-of-type()选择器的区别是什么?

#### nth-child()

选择要求该元素是某种元素，且父元素的第几个子元素
比如p:nth-child()-选择要求该元素是p元素，且是父元素的第2个子元素，

#### nth-of-type()

选择父元素某个元素的第几个
比如p:nth-of-type()选择父元素下p元素的第2个

##	20210812

### 网络字体的使用

使用@font-face属性引入字体

```css
@font-face {
 font-family:myFont;
 src: url('adfbaosisubdfos.ttf'),
 url('ndsofnkfdsm.eot');
}

字体的使用

div {
  font-family:myFont;
}
```



### 背景图片尺寸时contain和cover的作用分别是什么?

#### contain

自动等比例缩放，自己能够完全被 div 显示出来，但是不保证完全铺满整个 div 区域

#### cover

自动等比例缩放，自己能完全铺满整个 div 区域，但是不保证自己能够完全被 div 显示出来，超出 div 的部分会被隐藏

##	20210813

###	过度

#### transition-property：

选择过度应用于那个属性当他的属性为all是选择所有属性为过渡属性。

#### transition-duration

设置动画过度持续的时间

#### transition-timing-function

设置过度随时间的变化曲线属性值有  ease ease-in ease-out ease-in-out linear cubic-bezier() cubic-bezier()有四个参数

####  transition-delay

设置过度执行前的延迟时间

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



### 应用动画

#### animation-name: 动画名字;

指定动画的名字 

#### animation-duration: 

动画播放持续时间（动画播放的时长） 

#### animaion-timing-function: 

动画播放速度随时间变化的规律 

#### animation-play-state: 

定义动画的播放状态（控制动画是否播放） running播放 paused停止

#### anmation-iteration-count: 

  /指定动画播放的次数，可以设置数字 和 infinite （无数次） 

#### animation-delay: 

设置动画播放前的延迟时间 

## 20210816

### 给弹性盒子容器设置的CSS属性有哪些?

​	flex-direction决定主轴的方向

​	flex-wrap是否换行		

​	flex-flow是flex-direction属性和flex-wrap属性的简写形式

​	justify-content项目在主轴上的对齐方式

​	align-items项目在交叉轴上如何对齐

​	align-content多根轴线的对齐方式

### 给弹性盒子子元素设置的CSS属性有哪些?

order定义项目的排列顺序。数值越小，排列越靠前，默认为0

flex-grow定义项目的放大比例，默认为0	

flex-shrink定义了项目的缩小比例，默认为1

flex-basis定义了在分配多余空间之前，项目占据的主轴空间

flex是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto

align-self允许单个项目有与其他项目不一样的对齐方式

## 20210817

### 变换的种类有哪些?

2D变换：平移，缩放，旋转，倾斜，改变变换原点

3D变换

### 要想看到变换后的3D效果，还需要哪些属性的配合使用?

#### Perspective-origin属性

perspective呈现为观看者（或摄像机）直接位于元素中心前面。perspective-origin属性移动相机位置左右或向上或向下

#### Backface-visibility属性

属性为 hidden元素将仅在面向观看者时可见，并且如果背面朝向观看者，则隐藏

### Transform-style属性

属性用来指定被嵌套的元素在3D空间中如何显示

flat：默认值，子元素不保持它的3D位置。

preserve-3d：子元素会保持它的3D位置

### Transform属性的值

#### 平移

translateX()

translateY()

translate(x-axis, y-axis)

translate3d()

#### 旋转

RotateX()

RotateY()

rotateZ()/rotate()

rotate3d()

#### 缩放

scaleX()

scaleY()

scale(x-axis, y-axis)

scaleZ()

scale3d()

#### 倾斜

skewX()

skewY()

skew(x-axis, y-axis)

#### 设置透视

perspective()

## 20210818

### 媒体查询的语法格式是什么样的?

```css
@media not | only 媒体（设备）类型 and (查询条件) {

​        // CSS 样式     条件可以有多个，not条件去反值，only正常取值     }
```



### 怎样给元素添加一个水平向右的背景渐变(红、绿、蓝)效果?

```css
background: linear-gradient(90deg, red, green, blue);
```

## 20210819

### 怎样使用色调、饱和度、亮度以及透明度为元素设置背景色?

 `background-color: hsla(0, 71%, 32%, 0.288);`

属性分别为色调、饱和度、亮度以及透明度

色调取值0-360，饱和度和亮度取值0-100%，透明度取值0-1

### 怎样为图片应用滤镜效果(灰度滤镜)?

` filter: grayscale(80%);`

取值范围0-100% 

## 20210820

### 请分别给出em、rem、vh、vw这些相对单位的计算方法?

em 是一个相对单位，相对于父元素字体的大小

rem 是一个相对单位，相对于根元素（html）上设置的字体大小

vw 和 vh 是相对于视口的单位，1vw = 视口宽度的 1%；1vh = 视口高度的 1%

### 怎样将视口的宽度设置成与设备的宽度一样?

 width=device-width, 将视口宽度设置成与设备的宽度一致

### 如何查看缩放的像素比DPR

1、在浏览器控制台中运行js代码                                                                                                                                                                                window.devicePixelRatio

## 移动端高清、多屏适配方案

[http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041

## 20210823

### 解决1px问题的方法有哪些?

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

### 怎样适配多种类型的屏幕?

使用@media (min-device-width: 屏幕宽度) {}分别设置

```html
 html {
​      font-size: 32px;
​    }
​    @media (min-device-width: 320px) {
​      html {
​        font-size: 64px;
​      }
​    }
​    @media (min-device-width: 375px) {
​      html {
​      font-size: 75px;
​      }
​    }
```

## 20210824

### 拿到一张设计稿后，我们应该先做什么?

结构分析一定要先做，分析页面整体布局，有哪些模块

### 假如我们有一张75opx*1334px的设计稿，怎样将设计稿上的尺寸转换成css像素?

 （1）. 有张750px的设计稿，iPhone6的设备宽度375，取375为量取大小。

 （2）. 那么设计稿里面100px，在iPhone6显示为100px / (750 /375 ) = 50px。

 （3）. html的 font-size值 X（例如50px），那rem值就是 (50/X) rem； 

## 20210825

### 打开命令行窗口的方式有哪几种?

1、通过运行命令窗口运行cmd

2、在开始菜单里面找到Windows PowerShell

3、在要打开的目录下按着shift+鼠标右键的菜单提示有在PowerShell打开

4、在要打开的目录上面的路径里面输入cmd

### 为什么要将dart-sass的解压目录添加到Path环境变量中

为了方便使用在任何目录下都能直接使用

## 20210826

### 这样在 Sass 文件中定义变量和使用变量?

```scss
//定义变量
$color:#333;
//使用变量
color:$color;
```

### 请写出混入和扩展的语法，以及两者的区别。

#### 混入

```scss
// 使用 @mixin 指令定义混合并设置没有参数传入时的默认值
@mixin hr($width: 100px, $height: 100px, $bgc: red) {
    width: $width;
    height: $height;
    background-color: $bgc;
}
// 使用 @include 指令应用混合（将 foo 中的代码包含进来）
.box1{
    font-size: 14px;
    // 当混合有默认值时，我们在使用它的时候可以不给它传值，此时小括号也不用写。
    @include hr;
}
.box2 {
    border: 1px solid #ccc;
    // 向混合中传入参数
    @include hr($width: 200px, $height: 200px, $bgc: green);
}

```

#### 扩展

```scss
.box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}

// 假设 box2 也需要 box1 中的样式，你会怎么做？
.box2 {
    font-size: 14px;
    color: white;
    // 使用 @extend 指令让 box2 继承 box1 中的样式。
    @extend .box1;
}
```

#### 混入和扩展区别

都是一套样式多次使用，混入可以修改这个样式里面的值和属性，扩展就是继承这套样式不能修改

## 20210827

### 怎样在页面中引入 Bootstrap样式库?	

首先使用link标签引入下载好的bootstrap的css文件，或者通过cdn引入bootstrap的css文件到项目中

然后就可以直接使用bootstrap中的类名使用

### CDN（内容分发网络）的作用是什么?

加快您的网站速度

降低带宽成本

CDN让网站运营更加稳定

提高安全性

## 20210830

### boot 为我们提供了哪几种类型的容器类?

| 容器类             | 超小 <576px | 小 ≥576px | 中 ≥768px | 大 ≥992px | 特大 ≥1200px |
| :----------------- | ----------- | --------- | --------- | --------- | :----------- |
| `.container`       | 100%        | 540像素   | 720 像素  | 960 像素  | 1140 像素    |
| `.container-sm`    | 100%        | 540像素   | 720 像素  | 960 像素  | 1140 像素    |
| `.container-md`    | 100%        | 100%      | 720 像素  | 960 像素  | 1140 像素    |
| `.container-lg`    | 100%        | 100%      | 100%      | 960 像素  | 1140 像素    |
| `.container-xl`    | 100%        | 100%      | 100%      | 100%      | 1140 像素    |
| `.container-fluid` | 100%        | 100%      | 100%      | 100%      | 100%         |

### boot为我们提供了哪几种类型的列?

相同宽度

指定宽度

可变的弹性宽度(由内容填充)

等宽多行

## 20210831

### 如何设置列在水平方向上的对齐方式,需要使用哪些类名?

justify-content-start 左对齐

justify-content-center 居中对齐

justify-content-end  右对齐

justify-content-around 剩余空间平均分布在元素的两侧

 justify-content-between 剩余空间分布在子元素之间

### 如何设置列在垂直方向上的对齐方式,需要使用哪些类名?

algin-items-start 顶部对齐

algin-items-cener 垂直居中对齐

algin-items-end  底部对齐

## 20210901

### 请使用boot提供的样式写一个导航栏?

```html
<!--  -->
<div class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container">
            <a href="" class="navbar-brand">
                <img src="../img/1.jpeg" class="d-inline-block" width="30" height="30" alt=""> 笔记
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mylinks">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" collapse navbar-collapse" id="mylinks">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item "><a href="" class="nav-link  active">首页</a></li>
                    <li class="nav-item"><a href="" class="nav-link">笔记详情</a></li>
                    <li class="nav-item"><a href="" class="nav-link">反馈给我</a></li>
                    <li class="nav-item"><a href="" class="nav-link">我的问题</a></li>
                </ul>
                <form action="" class="form-inline my-2 my-lg-0">
                    <input type="search" name="" id="" class="form-control mr-sm-2">
                    <button type="submit" class="btn btn-success  my-2 my-sm-0">搜索</button>
                </form>
                <ul class="navbar-nav ">
                    <li class="nav-item"><a href="" class="nav-link">登录</a></li>
                    <li class="nav-item"><a href="" class="nav-link">注册</a></li>
                </ul>
            </div>
        </div>
    </div>
	<script src="../jquery/jquery.js"></script>
    <script src="../js/bootstrap.js"></script>
```

### 表单中可以使用栅格布局吗?需要用到哪些类名?

可以  

form-row

form-group

form-control

form-check form-check-input form-check-label form-check-inline

## 20210902

### 使用boot的模态框需要用到哪些类名?

```html
类名：modal  modal-dialog  modal-content  modal-header  modal-title  modal-body  modal-footer
<button type="button" class="btn btn-danger" data-toggle="modal" data-target="#modal1">弹出</button>
<div class="modal" tabindex="-1" id="modal1">
     <div class="modal-dialog">
          <div class="modal-content">
               <div class="modal-header">
                    <h5 class="modal-title">删除操作确认</h5>
                    <button type="button" class="close" data-dismiss="modal">
                    	<span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                	<p>确定要删除该学生的信息吗？</p>
                </div>
                <div class="modal-footer justify-content-between">
                 	<button class="btn btn-primary">确定</button>
                 	<button class="btn btn-success" data-dismiss="modal">取消</button>
                 </div>
            </div>
      </div>
</div>
```

### 请使用boot的轮播组件写一个轮播图

```html
<div id="mycarousel" class="carousel slide " data-ride="carousel">
     <div class="carousel-inner">
          <div class="carousel-item active">
                <img src="../img/1.jpeg" class="d-block w-100" alt="">
           </div>
           <div class="carousel-item">
                <img src="../img/2.jpeg" class="d-block w-100" alt="">
           </div>
           <div class="carousel-item">
                 <img src="../img/3.jpeg" class="d-block w-100" alt="">
           </div>
           <div class="carousel-item">
                <img src="../img/4.jpeg" class="d-block w-100" alt="">
           </div>
           <a href="#mycarousel" class="carousel-control-prev" data-slide="prev">
              <span class="carousel-control-prev-icon"></span>
           </a>
           <a href="#mycarousel" class="carousel-control-next" data-slide="next">
               <span class="carousel-control-next-icon"></span>
           </a>
           <ol class="carousel-indicators">
                <li data-slide-to="0" data-target="#mycarousel" class="active"></li>
                <li data-slide-to="1" data-target="#mycarousel"></li>
                <li data-slide-to="2" data-target="#mycarousel"></li>
                <li data-slide-to="3" data-target="#mycarousel"></li>
           </ol>
</div>
```

## 20210903

### 怎样监听body元素中内容的滚动?

1 .将被监听的元素设置成相对定位 

2 .为被监听的元素添加自定义属性，data-spy="scroll" data-target="#mynav

3.为 div.nav 的父元素添加一个 id, 然后将 id 与 data-target 属性关联起来

4.为页面中的不同部分添加 id 属性，然后将 id 属性值与链接的 href 属性关联起来

### 怎样使用导航动态切换页面内容的显示和隐藏?

1.首先写一个导航  

ul类名  ：nav nav-pills

li类名  ：nav-item

a类名：nav-link     默认选择的加 active

 a 添加属性 data-toggle="tab" 链接指向显示内容的id 

2.在写需要隐藏的和展示的内容

所有隐藏的内容写到tab-content类中下面是tab-pane类

然后里面分开写每个要展示的内容，每一块要展开的内容都写在tab-pane类中这，每个类的元素再加一个id与导航链接。默认显示的这个元素加上active 和show

## 20210906

### 请写一个简单的下拉菜单

```html
<div class="dropdown">
     <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">下拉菜单</button>
     <div class="dropdown-menu">
        <a href="" class="dropdown-item">菜单项1</a>
        <a href="" class="dropdown-item">菜单项2</a>
        <a href="" class="dropdown-item">菜单项3</a>
        <a href="" class="dropdown-item">菜单项4</a>
     </div>
 </div>
```

### 怎样通过导航切换页面内容的显示和隐藏。

1.首先写一个导航  

ul类名  ：nav nav-pills

li类名  ：nav-item

a类名：nav-link     默认选择的加 active

 a 添加属性 data-toggle="tab" 链接指向显示内容的id 

2.在写需要隐藏的和展示的内容

所有隐藏的内容写到tab-content类中下面是tab-pane类

然后里面分开写每个要展示的内容，每一块要展开的内容都写在tab-pane类中这，每个类的元素再加一个id与导航链接。默认显示的这个元素加上active 和show

```html
			<div class="col-12">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a href="#home" data-toggle="tab" class="nav-link active">首页</a>
                    </li>
                    <li class="nav-item">
                        <a href="#qa" data-toggle="tab" class="nav-link">问答</a>
                    </li>
                    <li class="nav-item">
                        <a href="#topic" data-toggle="tab" class="nav-link">话题</a>
                    </li>
                    <li class="nav-item">
                        <a href="#expert" data-toggle="tab" class="nav-link">专家</a>
                    </li>
                </ul>
            </div>
            <div class="col-12">
                <div class="tab-content">
                    <div class="tab-pane show active" id="home">
                        <div class="card card-body">
                            <h2>首页</h2>
                        </div>
                    </div>
                    <div class="tab-pane" id="qa">
                        <div class="card card-body">
                            <h2>问答</h2>
                        </div>
                    </div>
                    <div class="tab-pane" id="topic">
                        <div class="card card-body">
                            <h2>话题</h2>
                        </div>
                    </div>
                    <div class="tab-pane" id="expert">
                        <div class="card card-body">
                            <h2>专家</h2>
                        </div>
                    </div>
                </div>
            </div>
```

## 20210907

### 怎样让页面中的元素在大屏幕和超大屏幕上隐藏，在大屏幕以下显示?

在需要隐藏的元素上加一个d-lg-none类 

### 怎样让页面中的元素在大屏幕和超大屏幕上占8列，在大屏幕以下占12列?、

在该元素上加上类名col-12 col-lg-8

## 20210908

### 版本控制系统的作用是什么?

版本控制是一种记录一个或若干个文件变化，以便我们在将来某个时候查看（回溯）特定版本的修订情况的系统。在实际的项目中，我们使用它帮我们管理项目的源代码。

### Windows系统与类Unix系统上使用的换行符分别是什么?

Unix系统里的换行符"\n"；Windows系统里面的换行符"\r\n"；

## 20210909

### 怎样通过命令创建一个本地仓库?

` git init Yong`创建一个名字为Yong的仓库

### 如何对仓库中的内容进行增删改?

添加追踪文件：` git add 文件名`

把追踪的文件提交：`git commit`

从仓库中删除文件不让他跟踪：`git rm --cached 文件名`

移动文件`git mv 文件名 移动到的路径/文件名`重命名`git mv 文件名  新的文件名`

## 20210910

### 怎样克隆一个远程仓库?

1.直接使用下载打包的zip文件

2.使用代码`git clone 地址`

### 怎样从远程仓库中拉去数据，以及怎样向远程仓库推送数据?

拉取数据` git pull`

推送数据`git push`

`git tag v0.0.0`给上次提交的信息打上一个标记比如版本号v0.0.0 也可以给某次打上标签，在后面加上要打标签的某次的哈希值

`git tag`查看所有标签

` git push origin --tags`把标签提交到远程仓库中origin可以省略`git push origin 标签`提交单个标签

` git tag --delete v0.9.0`删除本地仓库的标签

` git push origin :refs/tags/v0.9.0`删除远程仓库的标签



## 20210913

### 怎样将本地仓库中的所有标签推送到远程仓库?

` git push origin --tags`把标签提交到远程仓库中

### 如何使用GitHub托管仓库中的静态资源?

新建一个仓库把代码放进去，然后打开仓库设置找到page选项打开设置选择分支和目录保存，上面会给一个网址打开网址，该网址就是托管的已经渲染的资源

## 20210914

### 标识符的组合规则是什么?

标识符的命名规则：只能由数字、字母、下划线以及美元符号（$）组成，并且不能以数字开头，不能使用 ECMAScript 规范中的关键字和保留字。

### JS的代码规范有哪些?

1、推荐采用第一个单词全部小写，其余单词的首字母大写的方式，例如，firstName，getUserInfo。

2、标识符时区分大小写（大小写敏感）的，例如，标识符 name 和 Name 是两个不同的标识符。

3、js 代码对换行、缩进、空格不敏感。

4、推荐在每一条语句后面加一个分号（;），虽然分号不是必须的，但是为了防止程序被压缩之后出错，推荐大家把分号加上。

5、js 代码中的所有符号，都必须是英文的。例如，引号、分号等等



## 20210915

### 昨天我们学习的数据类型有哪些?

数字，字符串，布尔类型，undefined类型，null类型，object对象，array对象，data对象

### 请简述简单类型的值和复杂类型的值在内存中的存储方式?

简单数据类型的数据是直接被存储在操作系统为变量分配的内存空间中，一个变量的变化不会使另一个发生变化。

复杂数据类型的变量中保存的不是对象本身而是对象在内存中的地址，其中一个变化另个也会发生变化

## 20210916

### 哪些值在会被转换成true，哪些值会被转换成false?

 非空字符串， 非零数字，对象（Object、Array 等等）， 转换为true

 false，undefined，null，0，NaN， 空字符串转化为false

### 请简述自增自减操作符的运算规律。

参运算时，写在前面先自减一，然后再参与其他运算。写在后面，先参与运算，然后再自减一

## 20210917

### 请简述if-else条件语句的执行流程。

```html
		   if (条件表达式1) {
                当条件表达式1成立时要执行的代码
            } else if (条件表达式2) {
                当条件表达式2成立时要执行的代码
            } else if (条件表达式3) {
                当条件表达式3成立时要执行的代码
            } else {
                当条件表达式1、2、3 都不成立时要执行的代码
            }
```



### 请简述switch条件语句的执行流程。

```html
 			switch (条件表达式) {
                case 值1:
                    当条件表达式计算之后的结果与值1相等时，要执行的语句
                    break;
                case 值2:
                    当条件表达式计算之后的结果与值2相等时，要执行的语句
                    break;
                ...  // 可以写多个 case 语句
                default:
                    当条件表达式计算之后的结果与与上面的每一个值都不相同时，要执行的语句
                    break;
            }
```



