---
title: js函数封装(二)
abbrlink: cfe8efe0
cover: /img/bga.jpg
tags:
    - [封装] 
    - [JS] 
    - [函数]
categories:
    - [js]
    - [封装, 函数]
---

### 判断是否为微信

```js
const isWx = function() { // 判断是否为微信
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  }
  return false
}
```

### 是否为PC端

```js
const isPC = function() { // 是否为PC端
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
```

### 判断图片加载完成

```js
const imgLoadAll = function(arr, callback) { // 图片加载
  let arrImg = []
  for (let i = 0; i < arr.length; i++) {
    let img = new Image()
    img.src = arr[i]
    img.onload = function() {
      arrImg.push(this)
      if (arrImg.length == arr.length) {
        callback && callback()
      }
    }
  }
}
```

### 音频加载完成操作

```js
const loadAudio = function(src, callback) { // 音频加载
  var audio = new Audio(src)
  audio.onloadedmetadata = callback
  audio.src = src
}
```

### 图片地址转base64

```js
const getBase64 = function(img) { //传入图片路径，返回base64，使用getBase64(url).then(function(base64){},function(err){}); 
  let getBase64Image = function(img, width, height) { //width、height调用时传入具体像素值，控制大小,不传则默认图像大小
    let canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    let dataURL = canvas.toDataURL();
    return dataURL;
  }
  let image = new Image();
  image.crossOrigin = '';
  image.src = img;
  let deferred = $.Deferred();
  if (img) {
    image.onload = function() {
      deferred.resolve(getBase64Image(image));
    }
    return deferred.promise();
  }
}
```
### 检测密码强度

```js
export const checkPwd = (str) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
//匹配  . 或者-或者_
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
}
```
### 禁止滑动
```js
	function stop(){
        document.body.style.overflow='hidden';       
        document.addEventListener("touchmove",mo,false);//禁止页面滑动
	}
```
### 取消滑动限制
```js

/***取消滑动限制***/
	function move(){
        document.body.style.overflow='';//出现滚动条
        document.removeEventListener("touchmove",mo,false);       
	} 

```
### 顶部导航下拉
```js
//顶部导航下拉
  $(".nav-box .lv1-box").hover(function(){
      $(this).find(".lv2-box").stop(true,true).slideDown();  
        },function(){
      $(this).find(".lv2-box").stop(true,true).hide();
      $(this).find(".more").removeClass("on");
      $(this).find(".lv3-box").stop(true,true).hide();
  }) 

	$(".lv2 .more").click(function(){
    $(this).stop(true,true).toggleClass("on");
    $(this).parent().siblings(".lv3-box").stop(true,true).slideToggle();
    $(this).parent().parent().siblings().find(".more").stop(true,true).removeClass("on");
    $(this).parent().parent().siblings().find(".lv3-box").stop(true,true).slideUp();
  })
```
  ### 图片放大
  #### 图片放大1
  ```js

  //图片放大1
  var $w = parseInt($('.pchannel-second .imgs-box img').width()),
     $h = parseInt($('.pchannel-second .imgs-box img').height()),
     $w2 = $w *1.1,
     $h2 = $h *1.1,
     left1 = $w/2,
     top1 = $h/2,
     left2 = $w2/2,
     top2 = $h2/2;

  $('.pchannel-second ul li').hover(function(){
     $(this).find("img").stop().animate({height:$h2+"px",width:$w2+"px",marginLeft:"-"+left2+"px",marginTop:"-"+top2+"px"},300);
    },function(){
     $(this).find("img").stop().animate({height:$h+"px",width:$w+"px",marginLeft:"-"+left1+"px",marginTop:"-"+top1+"px"},300);  
  });
  ```
  #### 图片放大2
  ```js
  //图片放大2
  var $cw = parseInt($('.cchannel-second .imgs-box img').width()),
     $ch = parseInt($('.cchannel-second .imgs-box img').height()),
     $cw2 = $cw *1.1,
     $ch2 = $ch *1.1,
     cleft1 = $cw/2,
     ctop1 = $ch/2,
     cleft2 = $cw2/2,
     ctop2 = $ch2/2;

  $('.cchannel-second ul li').hover(function(){
     $(this).find("img").stop().animate({height:$ch2+"px",width:$cw2+"px",marginLeft:"-"+cleft2+"px",marginTop:"-"+ctop2+"px"},300);
    },function(){
     $(this).find("img").stop().animate({height:$ch+"px",width:$cw+"px",marginLeft:"-"+cleft1+"px",marginTop:"-"+ctop1+"px"},300);  
  }); 
  ```
#### 图片放大3
```js
  //图片放大3
  var $bw = parseInt($('.bank-second .imgs-box img').width()),
     $bh = parseInt($('.bank-second .imgs-box img').height()),
     $bw2 = $bw *1.1,
     $bh2 = $bh *1.1,
     bleft1 = $bw/2,
     btop1 = $bh/2,
     bleft2 = $bw2/2,
     btop2 = $bh2/2;

  $('.bank-second .imgs-box').hover(function(){
     $(this).find("img").stop().animate({height:$bh2+"px",width:$bw2+"px",marginLeft:"-"+bleft2+"px",marginTop:"-"+btop2+"px"},300);
    },function(){
     $(this).find("img").stop().animate({height:$bh+"px",width:$bw+"px",marginLeft:"-"+bleft1+"px",marginTop:"-"+btop1+"px"},300);  
  });  
```
  #### 图片放大4
  ```js
  //图片放大4
  var $pw = parseInt($('.prefer-box .list .imgs-box img').width()),
     $ph = parseInt($('.prefer-box .list .imgs-box img').height()),
     $pw2 = $pw *1.1,
     $ph2 = $ph *1.1,
     pleft1 = $pw/2,
     ptop1 = $ph/2,
     pleft2 = $pw2/2,
     ptop2 = $ph2/2;

  $('.prefer-box .list .imgs-box').hover(function(){
     $(this).find("img").stop().animate({height:$ph2+"px",width:$pw2+"px",marginLeft:"-"+pleft2+"px",marginTop:"-"+ptop2+"px"},300);
    },function(){
     $(this).find("img").stop().animate({height:$ph+"px",width:$pw+"px",marginLeft:"-"+pleft1+"px",marginTop:"-"+ptop1+"px"},300);  
  });  
  ```

### 触底加载
```js
let scrollTop = document.documentElement.scrollTop;
  // 屏幕的高度
  let a = document.body.offsetTop;
  console.log(a, scrollTop)
  let windowHeight = window.innerHeight;
  // 网页内容高度
  let docHeight = document.documentElement.getBoundingClientRect().height
      // console.log(docHeight)
  if (scrollTop + windowHeight >= docHeight - 100) {
      flag = false
      // 开始加载
      // this.page = this.page + 1
  }
```



