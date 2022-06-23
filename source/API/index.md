---
title: API
cover: /img/bgh.jpg
date: 2022-04-21 09:32:53
tags:
categories:
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

## 已显示API

  顶部的hitokoto一言
  左侧头像下的今日诗词

<div class="myBody">
  <div class="mandatory">
    <input type="text" id="man-input" placeholder="请输入QQ">
    <a id="man-a" class="myButton" target="_blank">开始强制聊天</a> <span>（只能在电脑使用）</span>
  </div>
  <div class="axiosImg">
    <div class="sjtxImg">
      头像
      <label><input type="radio" name="sjtx" value="a1">男头</label>
      <label><input type="radio" name="sjtx" value="b2">女头</label>
      <label><input type="radio" name="sjtx" value="c1" checked>动漫头像</label>
      <label><input type="radio" name="sjtx" value="c2">动漫女头</label>
      <label><input type="radio" name="sjtx" value="c3">动漫男头</label>
      <button class="myButton" onclick="getSuiJiTouXiang()">获取头像</button>
    </div>
    <div class="sjbzImg mt20">
      背景
      <label><input type="radio" name="sjbz" value="meizi">妹子</label>
      <label><input type="radio" name="sjbz" value="dongman">动漫</label>
      <label><input type="radio" name="sjbz" value="fengjing">风景</label>
      <label><input type="radio" name="sjbz" value="suiji" checked>随机</label>
      <button class="myButton" onclick="getsjbz()">获取背景</button>
      <button class="myButton  ml20" onclick="getsjbz(2)">新标签页打开背景</button>
    </div>
  </div>
  <div class="qrcode mt20">
    <input type="text" id="qrcode" placeholder="输入转换的信息">
    <input type="number" id="qrcodeSize" placeholder="二维码的尺寸默认230">
    <button class="myButton" onclick="getqrcode()">获取二维码</button>
    <button class="myButton" onclick="getqrcode(2)">新标签页打开二维码</button>
  </div>
  <div class="APIshow mt20">
    <a id="imgLink" target="_blank" href=""><img id="imgShow" alt=""></a>
  </div>
  <div class="yan mt20">
    <button class="myButton" onclick="getyan()">获取鸡汤</button>
    <p id="yantext" style="height: 20px;display: block;"></p>
  </div>
 <div class="sweet yan mt20">
    <button class="myButton" onclick="getSweetNothings()">获取土味情话</button>
    <p id="sweettext"></p>
  </div>
  <div class="jrsc mt20">
    <div id="tags" style="margin-bottom: 30px;"></div>
    <p class="myH1 txtc" id="jrscTitle"></p>
    <p class="myH2 txtc" id="jrscAuthor"></p>
    <ul id="jrscdata">
    </ul>
    <ul id="jrsctranslate">
    </ul>
  </div>
</div>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
   var manA = document.getElementById('man-a')
  var manInput = document.getElementById('man-input')
  var sjtx = document.getElementsByName('sjtx')
  var sjbz = document.getElementsByName('sjbz')
  var yantext = document.getElementById("yantext")
  var qrcode = document.getElementById("qrcode")
  var qrcodeSize = document.getElementById("qrcodeSize")
  var Tags = document.getElementById("tags")
  var jrscTitle = document.getElementById("jrscTitle")
  var jrscAuthor = document.getElementById("jrscAuthor")
  var jrscdata = document.getElementById("jrscdata")
  var jrsctranslate = document.getElementById("jrsctranslate")
  var sweettext = document.getElementById("sweettext")
  var tady = document.getElementById("tady")
  var recently = document.getElementById("recently")
  var zhishu = document.getElementById("zhishu")
  var test = document.getElementById('test')
  var test2 = document.getElementById('test2')
  var lx;
  //强制聊天
  manInput.onblur = () => {
    manA.href = 'https://api.btstu.cn/qqtalk/api.php?qq=' + manInput.value
  }
  //获取随即头像
  const getSuiJiTouXiang = () => {
    imgShow.src = '../img/loading.gif'
    sjtx.forEach(item => {
      if (item.checked) {
        lx = item.value
        axios.get(`https://api.btstu.cn/sjtx/api.php?lx=${lx}&format=json`)
          .then(res => {
            imgLink.href = imgShow.src = '//images.weserv.nl/?url=' + res.data.imgurl
          });
      }
    })
  }
  //获取随机壁纸
  const getsjbz = (type) => {
    imgShow.src = '../img/loading.gif'
    sjbz.forEach(item => {
      if (item.checked) {
        lx = item.value
        axios.get(`https://api.btstu.cn/sjbz/api.php?lx=${lx}&format=json`)
          .then(res => {
            imgLink.href = imgShow.src = '//images.weserv.nl/?url=' + res.data.imgurl
            if (type === 2) {
              window.open(imgLink.href)
            };
          });
      }
    })
  }
  //回去毒鸡汤
  const getyan = () => {
    axios.get('https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json')
      .then(res => {
        yantext.innerText = res.data.text
      })
  };
  //获取二维码
  const getqrcode = (type) => {
    imgShow.src = '../img/loading.gif'
    imgLink.href = imgShow.src = `https://api.btstu.cn/qrcode/api.php?text=${qrcode.value}&size=${qrcodeSize.value}`
    if (type === 2) {
      window.open(imgLink.href)
    };
  }
  //获取今日诗词
 const getjrsc = () => {
    axios.get('https://v2.jinrishici.com/one.json')
      .then(res => {
        console.log(res);
        let data = res.data.data
        let origin = data.origin
        let jrscdataList = '<li class="txtc">正文</li>', translate = '<li class="txtc">译文</li>';
        jrscTitle.innerHTML = origin.title
        jrscAuthor.innerHTML = origin.dynasty + '·' + origin.author
        origin.content.forEach(item => {
          jrscdataList = jrscdataList + '<li class="txtc">' + item + '</li>'
        })
        jrscdata.innerHTML = jrscdataList
        if (origin.translate) {
          origin.translate.forEach(item => {
            translate = translate + '<li class="txtc">' + item + '</li>'
          });
          jrsctranslate.innerHTML = translate
        };
      })
    axios.get('https://v2.jinrishici.com/info')
      .then(res => {
        console.log(res.data.data);
        let { ip, region, tags } = res.data.data
        let tagList = '';
        sessionStorage.setItem('ip', ip)
        sessionStorage.setItem('region', region)
        sessionStorage.setItem('tags', tags)
        tags.forEach(ele => {
          tagList = tagList + '<span class="jrscTag" style="' + Color() + '">' + ele + '</span>'
        })
        Tags.innerHTML = tagList
      })
  };
  getjrsc()
  const getSweetNothings = () => {
    axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      .then(res => {
        console.log(res);
        sweettext.innerText = res.data.content
      });
  }
  const Color=()=> {
    this.color = [
      'color:#fff6e6;background-color:#415062',
      'color:#d5cecd;background-color:#414441',
      'color:#081408;background-color:#6a7962',
      'color:#101020;background-color:#c5a562',
      'color:#414c41;background-color:#b5eecd',
      'color:#494c49;background-color:#d5c6ac',
      'color:#ffffff;background-color:#5b8982',
      'color:#ffffff;background-color:#bac8a0',
      'color:#ddfced;background-color:#d47557',
      'color:#e3927f;background-color:#223c5f',
      'color:#f9ecdf;background-color:#825855',
      'color:#cfd468;background-color:#07553a',
    ];
    let num = Math.floor(Math.random() * this.color.length)
    return color[num]
  };
</script>

fastly.jsdelivr.net
testingcf.jsdelivr.net
gcore.jsdelivr.net
quantil.jsdelivr.net