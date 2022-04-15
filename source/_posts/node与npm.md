---
title: node与npm
abbrlink: 8s88rrt
cover: /img/bgd.jpg
date: 2022-04-06 16:39:59
tags:
categories:
---



1. 运行 npm run xxx的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行；
2. 没有找到则从全局的 node_modules/.bin 中查找，npm i -g xxx就是安装到到全局目录；
3. 如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序。

<!-- more -->

# 格式化时间(moment )

```js
//格式化时间戳时间戳单位为秒时
import moment from 'moment';
let timeStr = moment.unix(1537527600).format('HH:mm:ss');
console.log('timeStr' );   //  19:00:00
//时间戳单位为毫秒时
import moment from 'moment';
let timeStr = moment(1537527600000).format('HH:mm:ss');
console.log('timeStr' );   //  19:00:00
```

## vue3使用

```js
    dataFormat(val) {
      return moment.unix(val).format('YYYY.MM.DD h:mm:ss')
    }
```
```html
<p class="code_content">{{ dataFormat(data) }}</p>
```

## vue2使用

使用filter  使用computed

### filter.js文件

```js
import moment from "moment";

// 会员优惠券格式化
export const formatGift = val => val + "元优惠券";
// 会员特权格式化
export const formatPrivilege = val => val + "折";
// 日期和格式化有时分秒
export const formatTime = val => moment(val).format("YYYY-MM-DD, h:mm:ss");
// 日期和格式化没有时分秒
export const formatTime2 = val => moment(val).format("YYYY-MM-DD");
// 性别格式化
export const formatGender = function(val) {
    if (val == 0) {
        return "女"
    }
    if (val == 1) {
        return "男"
    }
    if (val == 2) {
        return "保密"
    }
};
```
### main.js文件

```js
import * as filters from './utils/filters.js'

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
```
### 使用

```html
    <div>{{filterCount | formatGift }}</div>
     <div>{{filterCount | formatGift | formatPrivilege }}</div>//第一个的返回值作为第二个的参数
```
# vue-clipboard：复制到剪切板使用
vue-clipboard：分为vue-clipboard2和vue-clipboard3
## 详细使用链接看npm
[vue-clipboard2链接](https://www.npmjs.com/package/vue-clipboard2)
[vue-clipboard3链接](https://www.npmjs.com/package/vue-clipboard3)
# Lodash

###### Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单
