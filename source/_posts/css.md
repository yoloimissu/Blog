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

