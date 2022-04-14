---
title: vue过滤器
abbrlink: 7934a770
cover: /img/bgb.jpg
tags:
    - [vue]
    - [封装]
categories:
    - [封装, filter]
    - [封装, 函数]
    - [vue]
---
# 过滤器的封装

## filters.js

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
<!-- more -->
## main.js

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
//引入fitlers.js
import * as filters from "./utils/filters"

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
	
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
```

## 使用

```js
{{data | formatGift}}   //在数据后面加上管道符后面加上相应的过滤器的函数
```
