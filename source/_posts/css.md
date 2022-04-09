---
title: css样式
abbrlink: 78cea6d8
date: 2022-04-01 16:17:28
tags: 
    - [css]
categories:
    - [css]
---

### 单行显示超出省略

```css
 {
    display: block;
    word-break: keep-all; 
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
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
