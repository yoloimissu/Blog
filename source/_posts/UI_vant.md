---
title: vant ui注意事项
abbrlink: 145f76bc
cover: /img/bgj.jpg
tags:
    - [vant]
    - [react]
    - [vue]
categories:
    - [vant]
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

# vant 



目前 Vant 官方提供了 [Vue 2 版本](https://vant-contrib.gitee.io/vant/v2)、[Vue 3 版本](https://vant-contrib.gitee.io/vant)和[微信小程序版本](http://vant-contrib.gitee.io/vant-weapp)，并由社区团队维护 [React 版本](https://github.com/3lang3/react-vant)和[支付宝小程序版本](https://github.com/ant-move/Vant-Aliapp)。
> 本文章摘自vant官方文档


## vue + vite


在 vite 项目中按需引入组件（推荐）在 vite 项目中使用 Vant 时，推荐vite-plugin-style-import它可以自动按需引入组件的样式。
### 安装插件
```bash
# 通过 npm 安装
npm i vite-plugin-style-import@1.4.1 -D

# 通过 yarn 安装
yarn add vite-plugin-style-import@1.4.1 -D

# 通过 pnpm 安装
pnpm add vite-plugin-style-import@1.4.1 -D

```
<!-- more -->
### 配置插件
vite.config.js
```js
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export default {
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
};

```
### 引入组件
```js
import { createApp } from 'vue';
import { Button } from 'vant';

const app = createApp();
app.use(Button);

```
## 在非vite项目中使用vant
### 安装插件

推荐babel-plugin-import插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

npm i babel-plugin-import -D

### 配置插件

在.babelrc 或 babel.config.js 中添加配置：
```js
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "vant",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}

```
## 引入组件
接着你可以在代码中直接引入 Vant 组件，插件会自动将代码转化为按需引入的形式。
```js
// 原始代码
import { Button } from 'vant';

// 编译后代码
import Button from 'vant/es/button';
import 'vant/es/button/style';


```
### 导入所有组件(不推荐)

```js
import { createApp } from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp();
app.use(Vant);

```
### 组件注册

#### 全局注册

```js
import { Button } from 'vant';
import { createApp } from 'vue';

const app = createApp();

// 方式一. 通过 app.use 注册
// 注册完成后，在模板中通过 <van-button> 或 <VanButton> 标签来使用按钮组件
app.use(Button);

// 方式二. 通过 app.component 注册
// 注册完成后，在模板中通过 <van-button> 标签来使用按钮组件
app.component(Button.name, Button);
```
#### 局部注册

```js
import { Button } from 'vant';

export default {
  components: {
    [Button.name]: Button,
  },
};
```
#### `<script setup>(vue3)`

在 `<script setup>` 中可以直接使用 Vant 组件，不需要进行组件注册。
```xml
<script setup>
  import { Button } from 'vant';
</script>

<template>
  <Button />
</template>
```
#### JSX/TSX(react)

```xml
import { Button } from 'vant';

export default {
  render() {
    return <Button />;
  },
};
```
## 浏览器适配

### `viewport` 布局
Vant 默认使用 `px` 作为样式单位，如果需要使用 `viewport` 单位 (vw, vh, vmin, vmax)，推荐使用 postcss-px-to-viewport进行转换。postcss-px-to-viewport是一款 PostCSS 插件，用于将 px 单位转化为 vw/vh 单位。
```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,
    },
  },
};
```
### Rem 布局适配
如果需要使用 `rem` 单位进行适配，推荐使用以下两个工具：

*   [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
*   [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值
```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
```

## 微信小程序使用

### 通过 npm 安装

```bash
# 通过 npm 安装
npm i @vant/weapp -S --production

# 通过 yarn 安装
yarn add @vant/weapp --production

# 安装 0.x 版本
npm i vant-weapp -S --production
```



### 修改 app.json

将 app.json 中的 `"style": "v2"` 去除，小程序的[新版基础组件](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#style)强行加上了许多样式，难以覆盖，不关闭将造成部分组件样式混乱。

### 修改 project.config.json

开发者工具创建的项目，`miniprogramRoot` 默认为 `miniprogram`，`package.json` 在其外部，npm 构建无法正常工作。

需要手动在 `project.config.json` 内添加如下配置，使开发者工具可以正确索引到 npm 依赖的位置。

```js
{
  ...
  "setting": {
    ...
    "packNpmManually": true,
    "packNpmRelationList": [
      {
        "packageJsonPath": "./package.json",
        "miniprogramNpmDistDir": "./miniprogram/"
      }
    ]
  }
}
```

注意： 由于目前新版开发者工具创建的小程序目录文件结构问题，npm构建的文件目录为miniprogram_npm，并且开发工具会默认在当前目录下创建miniprogram_npm的文件名，所以新版本的miniprogramNpmDistDir配置为'./'即可

### 构建 npm 包

打开微信开发者工具，点击 **工具 -> 构建 npm**，并勾选 **使用 npm 模块** 选项，构建完成后，即可引入组件。

![](https://img.yzcdn.cn/public_files/2019/08/15/fa0549210055976cb63798503611ce3d.png)

### typescript 支持

如果你使用 typescript 开发小程序，还需要做如下操作，以获得顺畅的开发体验。

#### 安装 miniprogram-api-typings

```bash
# 通过 npm 安装
npm i -D miniprogram-api-typings

# 通过 yarn 安装
yarn add -D miniprogram-api-typings
```

#### 在 tsconfig.json 中增加如下配置，以防止 tsc 编译报错。

请将`path/to/node_modules/@vant/weapp`修改为项目的 `node_modules` 中 @vant/weapp 所在的目录。

```json
{
  ...
  "compilerOptions": {
    ...
    "baseUrl": ".",
    "types": ["miniprogram-api-typings"],
    "paths": {
      "@vant/weapp/*": ["path/to/node_modules/@vant/weapp/dist/*"]
    },
    "lib": ["ES6"]
  }
}
```

### 引入组件

```js
// 通过 npm 安装
// app.json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```

### 使用组件

引入组件后，可以在 wxml 中直接使用组件

```xml
<van-button type="primary">按钮</van-button>
```
