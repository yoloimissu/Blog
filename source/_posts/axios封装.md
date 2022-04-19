---
title: axios请求封装
abbrlink: c88f0c02
cover: /img/bgi.jpg
tags: 
    - [vue]
    - [封装]
categories:
    - [封装, axios]
---
![](https://cdn.jsdelivr.net/gh/yoloimissu/asset@v0.0.1/image/目录.png)
<!-- more -->
## config.js

```js
import axios from 'axios'

// 给所有axios请求设置基础的域名
// axios.defaults.baseURL = 'http://localhost:3000'
//用axios.create可以创建axios的实例，允许不同实例有不同配置

const axios1 = axios.create({
    //设置基础的域名
    baseURL: 'http://localhost:3000',
    // 请求超时的时间
    timeout: 5000
}); 
// const axios2 = axios.create({
//     baseURL: 'http://localhost:8080',
//     timeout: 5000
// });

<!-- more -->
//添加请求拦截器
axios1.interceptors.request.use(function (config) {
    //对发送的请求进一步操作
    config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// //添加响应拦截器
axios1.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    console.log('res-err', error);
    return Promise.reject(error);
  });
export default axios1
```

## https.js

```js
 import axios1 from './config'

//查询会员
export function selectGrade() {
    return axios1({
        url: '/Grade',
        method: 'get'
    })
}


// 添加会员
export function addGrade (data) {
    return axios1({
        url: '/Grade ',
        method: 'post',
        data
    })
}
// 添加会员（另一种写法看着更加简洁）
//export const addGrade = data => axios.post("/Grade ", data)

// 修改会员信息
export function editGrade(data) {
    return axios1({
        url: '/Grade',
        method: 'put',
        data
    })
}
//删除会员信息
export function delGrade(params) {
    return axios({
        url: '/Grade',
        method: 'delete',
        params
    })
}

// 删除图书
//export const delGrade = params => axios.get("/Grade",  params )
//export const delGrade = params => axios.get("/Grade", { params })
```

## 调用

```js
import {selectGrade} from '@/api/http';
......
//获取初始化数据
getGradeData() {
    selectGrade()
    .then((res) => {
    this.book = res.data.list;
    })
    .catch((err)=>{
    console.log(err);
    })
},
```