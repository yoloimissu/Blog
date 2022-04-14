---
title: js函数封装
abbrlink: cf102fe0
cover: /img/bgc.jpg
tags:
    - [封装] 
    - [JS] 
    - [函数]
categories:
    - [js]
    - [封装, 函数]
---
### 数组去重

```js
function unique1(arr) {
    return [...new Set(arr)]
}

function unique2(arr) {
    var obj = {};
    return arr.filter(ele => {
        if (!obj[ele]) {
            obj[ele] = true;
            return true;
        }
    })
}

function unique3(arr) {
    var result = [];
    arr.forEach(ele => {
        if (result.indexOf(ele) == -1) {
            result.push(ele)
        }
    })
    return result;
}
```
<!-- more -->
### 数组排序

```js
// 快排 [left] + min + [right]
function quickArr(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var left = [],
        right = [];
    var pIndex = Math.floor(arr.length / 2);
    var p = arr.splice(pIndex, 1)[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= p) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // 递归
    return quickArr(left).concat([p], quickArr(right));
}

// 冒泡
function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
```

### 字符串去重

```js
String.prototype.unique = function () {
    var obj = {},
        str = '',
        len = this.length;
    for (var i = 0; i < len; i++) {
        if (!obj[this[i]]) {
            str += this[i];
            obj[this[i]] = true;
        }
    }
    return str;
}
```

#### 去除连续的字符串

```js
function uniq(str) {
    return str.replace(/(\w)\1+/g, '$1')
}
```

#### 去除字符串空格

```js
const trim = function(str, type) { // 去除空格， type:  1-所有空格  2-前后空格  3-前空格 4-后空格
  type = type || 1
  switch (type) {
    case 1:
      return str.replace(/\s+/g, '')
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '')
    case 3:
      return str.replace(/(^\s*)/g, '')
    case 4:
      return str.replace(/(\s*$)/g, '')
    default:
      return str
  }
}
```

### 深拷贝 浅拷贝

```js
//深克隆（深克隆不考虑函数）
function deepClone(obj, result) {
    var result = result || {};
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] == 'object' && obj[prop] !== null) {
                // 引用值(obj/array)且不为null
                if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
                    // 对象
                    result[prop] = {};
                } else {
                    // 数组
                    result[prop] = [];
                }
                deepClone(obj[prop], result[prop])
    } else {
        // 原始值或func
        result[prop] = obj[prop]
    }
  }
}
return result;
}

// 深浅克隆是针对引用值
function deepClone(target) {
    if (typeof (target) !== 'object') {
        return target;
    }
    var result;
    if (Object.prototype.toString.call(target) == '[object Array]') {
        // 数组
        result = []
    } else {
        // 对象
        result = {};
    }
    for (var prop in target) {
        if (target.hasOwnProperty(prop)) {
            result[prop] = deepClone(target[prop])
        }
    }
    return result;
}
// 无法复制函数
var o1 = jsON.parse(jsON.stringify(obj1));
```
### 返回当前的时间（年月日时分秒）

```js
function getDateTime() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() + 1,
        minute = date.getMinutes(),
        second = date.getSeconds();
        month = checkTime(month);
        day = checkTime(day);
        hour = checkTime(hour);
        minute = checkTime(minute);
        second = checkTime(second);
     function checkTime(i) {
        if (i < 10) {
                i = "0" + i;
       }
      return i;
    }
    return "" + year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒"
}
```
### 获得滚动条的滚动距离

```js
function getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
}
```

#### （1）滚动到页面顶部

```js
export const scrollToTop = () => {
  const height = document.documentElement.scrollTop || document.body.scrollTop;
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, height - height / 8);
  }
}
```

#### （2）滚动到页面底部

```js
export const scrollToBottom = () => {
  window.scrollTo(0, document.documentElement.clientHeight);  
}
```

#### （3）滚动到指定元素区域

```js
export const smoothScroll = (element) => {
    document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
    });
};
```

#### （4）获取可视窗口高度

```js
export const getClientHeight = () => {
    let clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    else {
        clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
    }
    return clientHeight;
}
```

#### （5）获取可视窗口宽度

```js
export const getPageViewWidth = () => {
    return (document.compatMode == "BackCompat" ? document.body : document.documentElement).clientWidth;
}
```

#### （6）打开浏览器全屏

```js
export const toFullScreen = () => {
    let element = document.body;
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen()
    }
}
```

#### （7）退出浏览器全屏

```js
export const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
}
```

### 获得视口的尺寸

```js
function getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
}
```
### url中的参数
#### 获取参数
```js
function getWindonHref() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] === sHref) {
        return '';
    }
    var hrefarr = args[1].split('#')[0].split('&');
    var obj = {};
    for (var i = 0; i < hrefarr.length; i++) {
        hrefarr[i] = hrefarr[i].split('=');
        obj[hrefarr[i][0]] = hrefarr[i][1];
    }
    return obj;
}
```

```js
const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(URL);
};

getParameters(window.location);
// Result: { search : "easy", page : 3 }
```

```dart
或者更为简单的：

Object.fromEntries(new URLSearchParams(window.location.search))
// Result: { search : "easy", page : 3 }
```

#### 键值对拼接成URL参数

```js
export const params2Url = (obj) => {
     let params = []
     for (let key in obj) {
       params.push(`${key}=${obj[key]}`);
     }
     return encodeURIComponent(params.join('&'))
}
```

### 原生js封装ajax

```js
function ajax(method, url, callback, data, flag) {
    var xhr;
    flag = flag || true;
    method = method.toUpperCase();
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHttp');
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(2)
            callback(xhr.responseText);
        }
    }

    if (method == 'GET') {
        var date = new Date(),
        timer = date.getTime();
        xhr.open('GET', url + '?' + data + '&timer' + timer, flag);
        xhr.send()
        } else if (method == 'POST') {
        xhr.open('POST', url, flag);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
}
```
### cookie管理

```js
var cookie = {
    set: function (name, value, time) {
        document.cookie = name + '=' + value + '; max-age=' + time;
        return this;
    },
    remove: function (name) {
        return this.setCookie(name, '', -1);
    },
    get: function (name, callback) {
        var allCookieArr = document.cookie.split('; ');
        for (var i = 0; i < allCookieArr.length; i++) {
            var itemCookieArr = allCookieArr[i].split('=');
            if (itemCookieArr[0] === name) {
                return itemCookieArr[1]
            }
        }
        return undefined;
    }
}
```
### 防抖

```js
function debounce(handle, delay) {
    var timer = null;
    return function () {
        var _self = this,
            _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
}
```

### 节流

```js
function throttle(handler, wait) {
    var lastTime = 0;
    return function (e) {
        var nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handler.apply(this, arguments);
            lastTime = nowTime;
        }
    }
}
```
### 设备判断：android、ios、web

```js
const isDevice = function() { // 判断是android还是ios还是web
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/iPhone\sOS/i) === 'iphone os' || ua.match(/iPad/i) === 'ipad') { // ios
    return 'iOS'
  }
  if (ua.match(/Android/i) === 'android') {
    return 'Android'
  }
  return 'Web'
}
```

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
