---
title: vue小知识
abbrlink: '78072e01'
tags:
    - [vue]
    - [配置]
categories:
    - [vue]
---
## 样式穿透

在项目中为了避免页面间样式污染常用scoped组件私有化，如果要改变element-ui或者vant的样式时需要用样式穿透才可复写样式。

### 1./deep/

在 vue3.0之前可使用，例如(复写样式前加/deep/)，vue3.0及后使用就会报错
```css
/deep/ .el-input {
    width: 60px;
}
```
### 2.::v-deep

在vue3.0及后使用，替代/deep/
```css
::v-deep .el-input {
    width: 60px;
}
```
如果报错::v-deep usage as a combinator has been deprecated. Use :deep(<inner-selector>) instead.
```css
::v-deep(.van-tabs__line) {
  background-color: #5873fd !important;
}
```
<!-- more -->
### 3.>>>

只作用于css，对于less和scss不起作用，如果是less和scss的话需要用到/deep/或::v-deep

## vite搭建项目vite.config,js基本配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // 插件配置
  plugins: [vue()],
  //设置的别名 
  resolve: {
    // 如果报错__dirname找不到，需要安装node,
    // 执行npm i @types/node --save-dev
    alias: {
      '@': path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@common": path.resolve(__dirname, "./src/common"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@views": path.resolve(__dirname, "./src/views"),
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
    // 服务配置
  server:{    
    port:3000,// 端口号    
    open:true,// 自动在浏览器打开    
    https:false,// 是否开启 https
  },
  // css 处理
  css:{
    preprocessorOptions: {
            scss: {
                /* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
                additionalData: `@import "./src/styles/css/global.scss";`,
            },
        },
  },
  //  生产环境
  build: {
    //指定输出路径
    assetsDir: "./",
    // 指定输出文件路径
    outDir: "dist",
    // 代码压缩配置
    terserOptions: {
      // 生产环境移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
```
## 不使用vite搭建的vue项目 配置vue.config.js

```js
module.exports = {
    // pabulicPath:process.env.NODE_ENV === 'production' ? '' : '',
    devServer:{
        host:'0.0.0.0',
        port:'8080',
        // https:false,
        open:true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy:{ //配置跨域
            '/api':{
                target:'http://localhost:3000/web',
                ws:true,
                changeOrigin:true,//允许跨域
                pathRewrite:{
                    '^/api':''   //请求的时候使用这个api就可以
                }
            }
        }
    }
}
```

## `v-bind` 缩写

```
<!-- 完整语法 -->
<a v-bind:href="url"> ... </a>

<!-- 缩写 -->
<a :href="url"> ... </a>

<!-- 动态参数的缩写 -->
<a :[key]="url"> ... </a>

```

## `v-on` 缩写

```
<!-- 完整语法 -->
<a v-on:click="doSomething"> ... </a>

<!-- 缩写 -->
<a @click="doSomething"> ... </a>

<!-- 动态参数的缩写 -->
<a @[event]="doSomething"> ... </a>
```
## 动态参数

```js
//使用
<img src=".." :[www]="eee"  alt="" />
//响应式数据
data() {
    return {
      www: 'id',
      eee: 'eee'
    }
  },
```
## 点击事件

```html
//右键点击：在需要右击的div上，加上@contextmenu.prevent方法就行
<a @contextmenu.prevent="show('你右键点击了元素')"> 右击 </a>
//在需要右击的div上，加上@dblclick方法就行
<a @dblclickt="show('你双击了元素')"> 双击 </a>
//方法  
show (txt){
  console.log(txt);
}
```
## props

### 数组形式的

```js
  props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
```
### 带有类型的对象形式

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object,
  callback: Function,
  contactsPromise: Promise // 或任何其他构造函数
}
```
### 带有条件限制的对象形式

```js
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 值会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组的默认值必须从一个工厂函数返回
      default() {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator(value) {
        // 这个值必须与下列字符串中的其中一个相匹配
        return ['success', 'warning', 'danger'].includes(value)
      }
    },
    // 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组的默认值不同，这不是一个工厂函数——这是一个用作默认值的函数
      default() {
        return 'Default function'
      }
    }
  }
})
```

  
