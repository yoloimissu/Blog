首页字体

​	在主题的目录下的css文件夹下新建一个css文件

```css
//Keynote名字随意但是使用要同一
@font-face {
  font-family:'Keynote';
  src:url('./1.ttf'); /* 修改成你的字体 */
  font-display:swap
}
h1#site-title {
  font-family:Keynote!important
}
span#subtitle {
  font-family:Keynote!important
}
a#site-name {
  font-family:Keynote!important
}
```

在主题配置文件中引入

```
inject:
  head: 
    - <link rel="stylesheet" href="/css/custom.css" media="defer" onload="this.media='all'">
```
修改图片
标签分类使用固定图片高清图

