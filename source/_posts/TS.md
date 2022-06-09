---
title: TS
cover: /img/bgb.jpg
abbrlink: 6d6c8ae1
date: 2022-04-14 17:52:07
tags: 
    - [TS]
categories:
    - [TS]
---

<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

### 安装

执行命令：

```
npm install typescript -g
```

### Hello World

本地新建文件`hello.ts`，开始写代码

```typescript
function sayHelloWorld(person: string) {
    return name + ' hello world'
}
console.log(sayHelloWorld("Alice"))

```

执行`tsc hello.ts`进行编译，会出现一个新的文件`hello.js`，此时我们执行如下命令：

```
node hello.js

```

正常输出 `Alice hello world`，成功！

### tsconfig.json

这个文件是`Ts`的编译选项配置文件生成tsconfig.json在项目根目录执行

```
tsc --init
```

这里放一个配置表：

```
"compilerOptions": {
  "incremental": true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
  "tsBuildInfoFile": "./buildFile", // 增量编译文件的存储位置
  "diagnostics": true, // 打印诊断信息 
  "target": "ES5", // 目标语言的版本
  "module": "CommonJS", // 生成代码的模板标准
  "outFile": "./app.js", // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置"module": "AMD",
  "lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"], // TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
  "allowJS": true, // 允许编译器编译JS，JSX文件
  "checkJs": true, // 允许在JS文件中报错，通常与allowJS一起使用
  "outDir": "./dist", // 指定输出目录
  "rootDir": "./", // 指定输出文件目录(用于输出)，用于控制输出目录结构
  "declaration": true, // 生成声明文件，开启后会自动生成声明文件
  "declarationDir": "./file", // 指定生成声明文件存放目录
  "emitDeclarationOnly": true, // 只生成声明文件，而不会生成js文件
  "sourceMap": true, // 生成目标文件的sourceMap文件
  "inlineSourceMap": true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
  "declarationMap": true, // 为声明文件生成sourceMap
  "typeRoots": [], // 声明文件目录，默认时node_modules/@types
  "types": [], // 加载的声明文件包
  "removeComments":true, // 删除注释 
  "noEmit": true, // 不输出文件,即编译后不会生成任何js文件
  "noEmitOnError": true, // 发送错误时不输出任何文件
  "noEmitHelpers": true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
  "importHelpers": true, // 通过tslib引入helper函数，文件必须是模块
  "downlevelIteration": true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
  "strict": true, // 开启所有严格的类型检查
  "alwaysStrict": true, // 在代码中注入'use strict'
  "noImplicitAny": true, // 不允许隐式的any类型
  "strictNullChecks": true, // 不允许把null、undefined赋值给其他类型的变量
  "strictFunctionTypes": true, // 不允许函数参数双向协变
  "strictPropertyInitialization": true, // 类的实例属性必须初始化
  "strictBindCallApply": true, // 严格的bind/call/apply检查
  "noImplicitThis": true, // 不允许this有隐式的any类型
  "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
  "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
  "noFallthroughCasesInSwitch": true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)
  "noImplicitReturns": true, //每个分支都会有返回值
  "esModuleInterop": true, // 允许export=导出，由import from 导入
  "allowUmdGlobalAccess": true, // 允许在模块中全局变量的方式访问umd模块
  "moduleResolution": "node", // 模块解析策略，ts默认用node的解析策略，即相对的方式导入
  "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
  "paths": { // 路径映射，相对于baseUrl
    // 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置
    "jquery": ["node_modules/jquery/dist/jquery.min.js"]
  },
  "rootDirs": ["src","out"], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
  "listEmittedFiles": true, // 打印输出文件
  "listFiles": true// 打印编译的文件(包括引用的声明文件)
}
```

### 数据类型

#### 布尔值

```ts
let isOk: boolean = true

```

#### 数值

```ts
let age: number = 18
let notANumber: number = NaN

```

#### 字符串

```ts
let name: string = "Alice"
let age: number = 18
let sentence: string = `I from China Beijing, my name is ${name}, age ${age}`

```

#### 空值

Js中没有`Void`的概念，Ts中可以用`void`表示没有任何返回值的函数：

```ts
function alertHello(): void {
    alert('hello')
}

```

#### null & undefiled

```ts
let u: undefined = undefined
let n: null = null
```

`Any`表示你的变量可以是任何值，`Ts` -> `Js`。。。

```ts
let anyVar: any = '121'
anyVar = true
```

#### 类型推论

如果你的变量没有赋值，那么`TypeScript`会看你后面的值是啥类型，那你这个变量就是啥类型

```ts
let age = 12 // === let age: number = 12
age = '12'

```

抛出错误`不能将类型“string”分配给类型“number”。`

需要注意📢的是，如果你没有初始化变量，那就是`any`类型

```ts
let age;
age = 1
age = true

```

并不会抛出错误，这样写类似于：

```ts
let age: any;
```

联合类型就是一个变量可以有多个类型，举个🌰

```ts
let isWhat: string | number | boolean;
isWhat = '1'
isWhat = 1
isWhat = true

```

完全Ok，但是如果这样：

```ts
isWhat = [1,2,3]

```

就会抛出错误`不能将类型“number[]”分配给类型“string | number | boolean”`

再举一个例子：

```ts
function getLength(something: string | number): number {
    return something.length
}

```

这样写就会抛出错误`类型“number”上不存在属性“length”。`，`length`不是他们的共有属性，所以会报错，改成这样：

```ts
function getString(something: string | number): string {
    return something.toString()
}

```

完全Ok！

#### 接口

##### 基本定义

`interface`是对行为的抽象，举个🌰：

```ts
interface Person {
    name: string;
    age: number;
}
let alice: Person = {
    name: 'Alice',
    age: 18
}

```

上面的栗子，变量`alice`的结构必须与接口`Person`相一致，如果我们不写`age`，那么就会抛出错误`类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性。`

所以定义的变量的属性，比接口定义的少是不被允许的，当然！多了也是不允许的，必须一致！

比如我们在变量`alice`添加属性`address`，那么就会抛出错误`不能将类型“{ name: string; age: number; address: string; }”分配给类型“Person”。\ 对象文字可以只指定已知属性，并且“address”不在类型“Person”中。`

##### 可选属性

如果我们需要某个属性不是必须一致，那么可以这么做，继续用上面的栗子，假设`age`为不必要属性：

```ts
interface Person {
    name: string;
    age?: number;
}
let alice: Person = {
    name: 'Alice'
}

```

完全Ok

##### 任意属性

如果我们需要在变量中定义一些我们将来可能会添加的属性，有极大的不确定性的话，比如我们想要新增一个`address`属性，那么我们可以这样：

```ts
interface Person {
    name: string;
    age?: number;
    [propName: string]: any
}
let alice: Person = {
    name: 'Alice',
    address: 'China Beijing',
    gender: 0
}

```

完全OK!

##### 只读属性

有时候我们需要一个属性不能再被修改，需要用到`readonly`定义属性，举个🌰

```ts
interface Person {
    readonly id: number;
    name: string;
    [propName: string]: any;
}
let alice: Person = {
    id: 1,
    name: 'Alice',
    gender: 0
}
alice.id = 2
// error: 无法分配到 "id" ，因为它是只读属性。
```

### 数组

#### 基本定义

在TypeScript中，数组的定义如下：

```ts
let fibonacci: number[] = [1,2,3,4,5]

```

上面的🌰中，不允许出现除number以外的类型，比如：

```ts
let fibonacci: number[] = [1,2,3, true]

```

这样写会抛出异常`不能将类型“(number | boolean)[]”分配给类型“number”`

数组的方法也会根据数组在定义时的类型约定，受到限制，举个🌰

```ts
let fibonacci: number = [1,2,3,4]
fibonacce.push(true)

```

这样写也不行，会抛出错误`不能将类型“number[]”分配给类型“number”` && `不能将类型“number[]”分配给类型“number”`

#### 接口表示

举个🌰

```ts
interface NumberArray {
    [index: number]: number;
}
let fibonacce: NumberArray = [1,2,3,4]

```

`NumberArray`：索引是数字时，值的类型必须用数字。

一般不会用这个去定义一个数组。

#### 类数组

类数组不能用数组定义的方式去赋值，举个🌰

```ts
function sum() {
    let args: number[] = arguments;
}

```

这样写会抛出错误`类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项`

因为类数组并没有数组原型上的方法，pop等等，所以如果用array去定义，那么类型校验不通过，我们可以用`IArguments`类型去定义一个类数组，举个🌰：

```ts
function sum() {
    let agrs: IArguments = arguments;
}

```

类型`IArguments`其实就是一个`interface`，是TypeScript内置的类型，相当于这样写：

```ts
interface IAgruments {
    [index: number]: any;
    length: number;
    callee: function;
}

```

除此之外，TypeScript中还有很多内置的类型，比如`NodeList`，`HTMLCollection`等

#### 数组 any

无限制的数组项，举个🌰

```ts
let list: any[] = [1, '1', true, {name: '1'}, [3,4,5]]

```

完全ok!

### 函数

#### 基本定义

TypeScript中函数的定义如下：

```ts
function sum(x: number, y: number): number {
    return x + y
}

```

#### 函数表达式

```ts
let sum = function(x: number, y: nunmber): number {
    return x + y
}

```

sum并没有类型的定义，可以给sum也加一个定义：

```ts
let sum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
}

```

上面所有的定义中，函数的参数都是必传的，不能少，也不能多，比如这样：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8e10648faee4617b00708a006d6ee03~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

再比如，这样：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a311de2657534931bbcfb04eb092086f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

#### 可选参数

与接口中的可选属性类似，用`?`表示，举个🌰：

```ts
let buildName: (f: string, l?: string) => string = function (
  firstName: string,
  lastName?: string
): string {
  if (lastName) return firstName + " " + lastName;
  return firstName;
};

console.log(buildName("Alice"));
console.log(buildName("Alice", "Yan"));

```

需要注意的是，可选参数必须在最后面，也就是说，可选参数的后面，不能再接必需参数，像这样就不行：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2535b3fa07594976a0f9fb021089d354~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

#### 参数默认值

TypeScript会将添加了默认值的参数自动设置为可选参数，举个🌰

```ts
function buildName(firstName: string, lastName: string = 'Yan'): string {
    return firstName + ' ' + lastName
}
console.log(buildName('Alice'))

```

此时就不受「可选参数必须在必须参数后面」的限制了

#### 剩余参数

`...rest`获取剩余参数

```ts
function push(array: any[], ...items: any[]) {
    items.forEach( item => array.push(item))
}

```
