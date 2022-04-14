---
title: TS
cover: /img/bgh.jpg
abbrlink: 6d6c8ae1
date: 2022-04-14 17:52:07
tags:
categories:
---



# 安装

执行命令：

```
npm install typescript -g
```

# Hello World

本地新建文件`hello.ts`，开始写代码

```typescript
function sayHelloWorld(person: string) {
    return name + ' hello world'
}
console.log(sayHelloWorld("Alice"))
复制代码
```

执行`tsc hello.ts`进行编译，会出现一个新的文件`hello.js`，此时我们执行如下命令：

```
node hello.js
复制代码
```

正常输出 `Alice hello world`，成功！

# tsconfig.json

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

# 数据类型

### 布尔值

```ts
let isOk: boolean = true
复制代码
```

### 数值

```ts
let age: number = 18
let notANumber: number = NaN
复制代码
```

### 字符串

```ts
let name: string = "Alice"
let age: number = 18
let sentence: string = `I from China Beijing, my name is ${name}, age ${age}`
复制代码
```

### 空值

Js中没有`Void`的概念，Ts中可以用`void`表示没有任何返回值的函数：

```ts
function alertHello(): void {
    alert('hello')
}
复制代码
```

### null & undefiled

```ts
let u: undefined = undefined
let n: null = null
```

`Any`表示你的变量可以是任何值，`Ts` -> `Js`。。。

```ts
let anyVar: any = '121'
anyVar = true
```

## 类型推论

如果你的变量没有赋值，那么`TypeScript`会看你后面的值是啥类型，那你这个变量就是啥类型

```ts
let age = 12 // === let age: number = 12
age = '12'
复制代码
```

抛出错误`不能将类型“string”分配给类型“number”。`

需要注意📢的是，如果你没有初始化变量，那就是`any`类型

```ts
let age;
age = 1
age = true
复制代码
```

这样完全Ok，并不会抛出错误，这样写类似于：

```ts
let age: any;
```

联合类型就是一个变量可以有多个类型，举个🌰

```ts
let isWhat: string | number | boolean;
isWhat = '1'
isWhat = 1
isWhat = true
复制代码
```

完全Ok，但是如果这样：

```ts
isWhat = [1,2,3]
复制代码
```

就会抛出错误`不能将类型“number[]”分配给类型“string | number | boolean”`

再举一个例子：

```ts
function getLength(something: string | number): number {
    return something.length
}
复制代码
```

这样写就会抛出错误`类型“number”上不存在属性“length”。`，`length`不是他们的共有属性，所以会报错，改成这样：

```ts
function getString(something: string | number): string {
    return something.toString()
}
复制代码
```

完全Ok！

## 接口

#### 基本定义

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
复制代码
```

上面的栗子，变量`alice`的结构必须与接口`Person`相一致，如果我们不写`age`，那么就会抛出错误`类型 "{ name: string; }" 中缺少属性 "age"，但类型 "Person" 中需要该属性。`

所以定义的变量的属性，比接口定义的少是不被允许的，当然！多了也是不允许的，必须一致！

比如我们在变量`alice`添加属性`address`，那么就会抛出错误`不能将类型“{ name: string; age: number; address: string; }”分配给类型“Person”。\ 对象文字可以只指定已知属性，并且“address”不在类型“Person”中。`

#### 可选属性

如果我们需要某个属性不是必须一致，那么可以这么做，继续用上面的栗子，假设`age`为不必要属性：

```ts
interface Person {
    name: string;
    age?: number;
}
let alice: Person = {
    name: 'Alice'
}
复制代码
```

完全Ok

#### 任意属性

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
复制代码
```

完全OK!

#### 只读属性

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

# 数组

## 基本定义

在TypeScript中，数组的定义如下：

```ts
let fibonacci: number[] = [1,2,3,4,5]
复制代码
```

上面的🌰中，不允许出现除number以外的类型，比如：

```ts
let fibonacci: number[] = [1,2,3, true]
复制代码
```

这样写会抛出异常`不能将类型“(number | boolean)[]”分配给类型“number”`

数组的方法也会根据数组在定义时的类型约定，受到限制，举个🌰

```ts
let fibonacci: number = [1,2,3,4]
fibonacce.push(true)
复制代码
```

这样写也不行，会抛出错误`不能将类型“number[]”分配给类型“number”` && `不能将类型“number[]”分配给类型“number”`

## 接口表示

举个🌰

```ts
interface NumberArray {
    [index: number]: number;
}
let fibonacce: NumberArray = [1,2,3,4]
复制代码
```

`NumberArray`：索引是数字时，值的类型必须用数字。

一般不会用这个去定义一个数组。

## 类数组

类数组不能用数组定义的方式去赋值，举个🌰

```ts
function sum() {
    let args: number[] = arguments;
}
复制代码
```

这样写会抛出错误`类型“IArguments”缺少类型“number[]”的以下属性: pop, push, concat, join 及其他 24 项`

因为类数组并没有数组原型上的方法，pop等等，所以如果用array去定义，那么类型校验不通过，我们可以用`IArguments`类型去定义一个类数组，举个🌰：

```ts
function sum() {
    let agrs: IArguments = arguments;
}
复制代码
```

类型`IArguments`其实就是一个`interface`，是TypeScript内置的类型，相当于这样写：

```ts
interface IAgruments {
    [index: number]: any;
    length: number;
    callee: function;
}
复制代码
```

除此之外，TypeScript中还有很多内置的类型，比如`NodeList`，`HTMLCollection`等

## 数组 any

无限制的数组项，举个🌰

```ts
let list: any[] = [1, '1', true, {name: '1'}, [3,4,5]]
复制代码
```

完全ok!

# 函数

## 基本定义

TypeScript中函数的定义如下：

```ts
function sum(x: number, y: number): number {
    return x + y
}
复制代码
```

## 函数表达式

```ts
let sum = function(x: number, y: nunmber): number {
    return x + y
}
复制代码
```

sum并没有类型的定义，可以给sum也加一个定义：

```ts
let sum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
}
复制代码
```

上面所有的定义中，函数的参数都是必传的，不能少，也不能多，比如这样：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b8e10648faee4617b00708a006d6ee03~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

再比如，这样：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a311de2657534931bbcfb04eb092086f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

## 可选参数

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
复制代码
```

需要注意的是，可选参数必须在最后面，也就是说，可选参数的后面，不能再接必需参数，像这样就不行：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2535b3fa07594976a0f9fb021089d354~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

## 参数默认值

TypeScript会将添加了默认值的参数自动设置为可选参数，举个🌰

```ts
function buildName(firstName: string, lastName: string = 'Yan'): string {
    return firstName + ' ' + lastName
}
console.log(buildName('Alice'))
复制代码
```

此时就不受「可选参数必须在必须参数后面」的限制了

## 剩余参数

`...rest`获取剩余参数

```ts
function push(array: any[], ...items: any[]) {
    items.forEach( item => array.push(item))
}
复制代码
```

# 类型断言

用于手动指定一个值的类型

## 基本语法

（推荐）

```ts
值 as 类型
复制代码
```

or

（不推荐）

```ts
<类型> 值
复制代码
```

## 用途

### 将一个联合类型断言为其中一个类型

TypeScript不确定一个联合类型的变量到底属于哪个类型的时候，只能访问此联合类型的所有类型中共有的属性或方法，比如之前说的`string` | `number` 访问`toString`，再举个栗子：

```ts
interface Dog {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}

function getName(animal: Dog | Fish) {
    return animal.name
}
复制代码
```

有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，举个栗子：

```ts
interface Dog {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function isFish(animal: Dog | Fish) {
    if( typeof animal.swim === 'function' ) return true
    return false
}
复制代码
```

上面这个栗子就会抛出错误`类型“Dog | Fish”上不存在属性“swim”`

这个时候我们就可以用`类型断言`，将`animal`断言成`Fish`：

```ts
interface Dog {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Dog | Fish): boolean {
    if(typeof (animal as Fish).swim === 'function') return true
    return false
}
复制代码
```

📢注意： 类型断言只能够【欺骗】TypeScript编译器，无法避免运行时的错误，滥用类型断言可能会导致运行错误，举个栗子：

```ts
interface Dog {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}
function goSwim(animal: Dog | Fish): void {
    (animal as Fish).swim()
}
const tony: Dog = {
    name: 'Tony',
    run() { console.log('im run!')}
}

swim(tony)
复制代码
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb8d59054c6143318387a4313b8e3bff~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

### 将一个父类断言为更加具体的子类

当类之间有继承关系时，类型断言也是很常见，举个栗子：

```ts
class ApiError extends Error {
    code: number = 0;
}

class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if( typeof (error as ApiError).code === 'number') return true
    return false
}

这个栗子中，声明了函数`isApiError`，用来判断传入的参数是不是`ApiError`类，但是由于父类`Error`中并没有`code`这个属性，所以直接使用就会报错，就要使用`as`进行`类型断言`
复制代码
```

### 将任何一个类型断言为`any`

这其实就是有一点不靠谱了，咱就是整个就是说你定义一个类型是`number`，但是如果你又觉得他好像不是`number`，那你可以把他再断言成`any`，举个栗子：

```ts
const foo: number = 1
foo.length = 1
复制代码
```

这样写是不能通过编译的，因为`foo`是`number`类型，是没有`length`属性的，所以TypeScript给了提示`类型“number”上不存在属性“length”。`，这种提示非常有效！

但是有时候我们的写法是完全没有问题的，比如：

```ts
window.foo = 1
复制代码
```

在js中，这种写法完全ok，给`window`添加属性`foo`，值为`1`，但是，在TypeScript中是不支持的，它会抛出这个错误`类型“Window & typeof globalThis”上不存在属性“foo”。`，这时候我们就可以用类型断言，把`window`断言成`any`，`any`类型上，访问任何属性都是允许的，像这样：

```ts
(window as any).foo = 1
复制代码
```

ok

### 将any断言成任何一种类型

举个栗子：

```ts
function getCacheData(key: string): any {
    return (window as any).cache[key]
}
复制代码
```

上面的例子中，`getCacheData`返回的类型是any，我们不确定他到底返回的是什么类型，所以当我们使用这个function的时候，我们可以根据自己的需要，对他的返回值进行断言，举个栗子：

```ts
interface Cat {
    name: string;
    run(): void;
}
const tom = getCacheData('tom') as Cat;
tom.run()
复制代码
```

### 断言包含

并不是所有的类型都能够相互断言，只有`A`包含`B`的所有属性，或者`B`包含`A`的所有属性，`A`和`B`才能相互断言，举个栗子：

```ts
interface Animal {
  name: string;
}

interface Cat {
  name: string;
  run(): void;
}

let tom: Cat = {
  name: "tom",
  run() {
    console.log("i can run");
  },
};

let anmimal: Animal = tom;
tom.run();
(anmimal as Cat).run();
复制代码
```

如果我们加一个新的interface:

```ts
let coffeeCup: Cup = {
  width: 20,
  height: 60,
};

let anmimalCup: Animal = coffeeCup;
复制代码
```

就会抛出错误`类型 "Cup" 中缺少属性 "name"，但类型 "Animal" 中需要该属性。`

## 总结

类型断言的用途：

- 联合类型可以断言为其中一个类型
- 父类可以被断言为自类
- 任何类型可以断言成 any
- any可以断言成任何类型
- `A`包含`B`的所有属性，或者`B`包含`A`的所有属性，`A`和`B`才能相互断言

## 双重断言

双重断言意味着打破 「`A`包含`B`的所有属性，或者`B`包含`A`的所有属性，`A`和`B`才能相互断言」的规则，举个栗子：

```ts
interface Cat {
  run(): void;
}
interface Fish {
  siwm(): void;
}

function testCat(cat: Cat) {
  return cat as any as Fish;
}

let tom: Cat = {
  run() {
    console.log("i can run");
  },
};

testCat(tom);
复制代码
```

# 声明

## declare var

声明全局变量

```ts
declare var username: string;
复制代码
```

## declare function

定义全局函数

```ts
declare function getToken(key: string): string
```

# 类型别名

类型别名顾名思义，即字面意思，其实`断言`也是字面意思，就是断定类型的方法，你说是什么类型就是什么类型，推翻约定，扯远了，继续说`类型别名`，举个🌰吧：

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if(typeof n === 'string') {
        return n
    } else {
        reutrn n()
    }
}
复制代码
```

类型`Name`其实就是`string`的别名，类型`() => string`，一个函数返回一个字符串，这种格式就是类型`NameResolver`，`NameOrResolver`是一个联合类型，之前说过。

# 字符串字面量类型

字符串字面量类型，用来约束取值职能是`某几个字符串`其中的一个字符串，举个🌰：

```ts
type EventSupport = 'click' | 'scroll' | 'mouseEnter'
function handleEvent(ele: Element, event: EventSupport): void {
    // do something
}

handleEvent(document.getElementById('app'), 'scroll') // 完全ok
handleEvent(document.getElementById('app'), 'dbclick') // 完全不ok
复制代码
```

# 元组（Tuple）

元组用来合并不同类型的项，举个🌰：

```ts
let tom: [string,number] = ['tom', 25]
复制代码
```

注意：

- 元组在定义赋值时，你定义的什么类型，初始赋值时，就得添加什么类型的值，必须全部添加完，不能多，也不能少
- 可以利用下标修改值，但是值必须是相同类型的
- 元组可以越界，越界的元素只能是你定义元组的时候的联合类型，不能是其他类型，越界的元素不能修改

.. 元组不是很好用，如果你真的不确定你的`[]`里有啥，其实最好就用`let tom: any[] = ['tom', 12]`

# 枚举（Enum）

枚举一般用来做映射，举个栗子：

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
复制代码
```

上面这段Ts编译成Js是这样：

```js
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
复制代码
```

枚举成员会被赋值为从0开始递增的数字，同事也会对枚举值到枚举名进行反向映射：

```ts
console.log(Days[0]); // Sun
console.log(Days["Sun"]) // 0
复制代码
```

## 自定义枚举

```ts
enum Days {
  Sun = <any>"Sun",
  Mon = <any>"Mon",
  Tue = <any>"Tue",
  Wed = <any>"Wed",
  Thu = <any>"Thu",
  Fri = <any>"Fri",
  Sat = <any>"Sat",
}
console.log(Days["Sun"]); // Sun
复制代码
```

注意：这儿需要使用断言，让tsc无视类型检查

# 类

其实在JS在ES6发布之前从来都没有类的概念，都是通过构造函数去模拟类，ES6发布了class，但是大部分Js程序员对类的概念还是比较模糊的，这我解释一下什么是类、对象、OOP、封装、集成、多态、修饰符、抽象类、接口

## 类的概念

`类`其实可以理解为一件事物的抽象，包含了这个事务的一些属性与方法举个简单的🌰，比如人，人就是一个大类，我们可以抽象出来他的一些特点，比如：`唱`、`跳`这是人的行为，`智商`、`情商`、`性别`等是人的属性。

## 对象

`对象`其实就是类的实例化，`类`是一个抽象，`对象`就是让他变得现实，一个类可以实例化多个对象，类似我们可以根据`人`这个类，制造很多人。

## 面向对象 OOP

面向对象开发的三大特性：封装、继承、多态

### 封装

`封装`的意思就是我们知道的意思，我们需要通过一些代码实现一个函数，这个函数就是一个封装，再通俗一点说，我们需要实现`人`会`跳`这个方法，细节呢？我们只需要封装起来，比如先下蹲一点，双腿发力，向上用力等等，把这些细节封装起来，就可以直接调用这个方法进行`跳`，同时呢外界也不能直接去修改内部的数据。

### 继承

子承父业，儿子继承老爹的所有方法&属性，但除了拥有父类所有用的特性外，还有一些别具一格的特性。

### 多态

由于继承产生了很多相关的不同类，很多儿子继承了同一个老爹，子类对同一个方法可以有不同的响应。比如`小王`和`小李`都继承老爹`老张`，但是分别实现了自己`getMoney`的方法，此时针对一个实例，我们无需了解他是`小王`还是`小李`，就可以直接调用`getMoney`方法，程序会自动判断出来应该如何执行`getMoney`。

### 修饰符

修饰符是一些关键字，用于限定成员或者类型的性质，比如`public`表示公有属性or方法

### 抽象类

抽象类是供其他类继承的`基类`，抽象类不允许被实例化，抽象类中的抽象方法必须在子类中被实现

### 接口

不同类之间共有的属性和方法，可以抽象成一个接口，接口可以被类实现，一个类职能继承自另外一个类，但是可以实现多个接口。

## ES6中类的用法

### 类的定义

使用`class`定义类，使用`constructor`定义构造函数，通过`new`生成新实例的时候，会自动调用构造函数。

```ts
class Person {
    public IQ;
    publick name;
    constructor(IQ, name) {
        this.IQ = IQ
        this.name = name
    }
    saySomething() {
        return `hello, im ${this.name}, IQ: ${this.IQ}`
    }
}
let alice = new Person("Alice", 120)
console.log(alice.saySomething())
复制代码
```

### 类的继承

现在有了人的类，我们现在实现一个`Cop`类，`Cop`也属于人，也有名字&IQ，子类中用`super`关键字来调用父类的构造函数与方法：

```ts
class Cop extends Person {
    public job;
    constructor(IQ, name, job) {
        super(IQ, name)
        this.job = job;
    }
    saySomething() {
        return super.saySomething() + 'my job js ${this.job}'
    }
}
let tom = new Cup('tom', 100, 'cop')
console.log(tom.saySomething())
复制代码
```

### 存取器

使用 getter 和 setter可以改变属性的赋值和读取行为：

```ts
class FakerCop extends Person {
    constructor(IQ, name, job) {
        super(IQ, name)
        this.job = job
    }
    get job() {
        return 'fakerCop'
    }
    set job(val) {
        console.log('u want my job is' + value + '?')
    }
}
let tony = new FakerCop("Tony", 200, 'fakerCop');
tony.job = 'realCop'
console.log(tony.job) // fakerCop
复制代码
```

### 静态方法

使用`static`修饰符修饰的方法成为静态方法，不需要被实例化，直接通过类来调用，举个🌰，定义一个判断真假cop的方法：

```ts
class Cop extends Person {
    public job;
    constructor(IQ, name, job) {
        super(IQ, name)
        this.job = job;
    }
    static isCop(c) {
        return c instanceof Cop;
    }
    saySomething() {
        return super.saySomething() + 'my job js ${this.job}'
    }
}

console.log(Cop.isCop(tom)) // true
console.log(Cop.isCop(tony)) // false
复制代码
```

## TypeScript中类的用法

### public private protected

- `public` 修饰的属性或者方法是公有的，可以在任何地方被访问，默认所有的方法和属性都是`public`
- `private` 修饰的属性或者方法是私有的，不能再声明他的类的外部访问
- `protected` 修饰的属性或者方法是受保护的，他和`private`类似，不同的是，它在子类中是可以访问的

`public` 举个栗子：

```ts
class Animal {
    public name;
    public constructor(name) {
        this.name = name
    }
}

let a = new Animal('Jack')
console.log(a.name) // Jack
a.name = 'Tom'
console.log(a.name) // Tom
复制代码
```

`private` 举个栗子：

```ts
class Animal {
    private name
    public constructor(name) {
        this.name = name
    }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tom'
复制代码
```

ts 会提示`属性“name”为私有属性，只能在类“Animal”中访问。`

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bee6d7f386f645e2a09da720cfc17359~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

子类中也不能访问，这里就不说了；

`protected` 举个栗子：

```ts
class Animal {
    protected name;
    public constructor(name) {
        this.name = name
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name)
    }
}
复制代码
```

子类可以访问父类的`protected`属性

当构造海曙为`protected`时，这个类只能继承，不能被实例化：

```ts
class Animal {
    protected name;
    protected constructor(name) {
        this.name = name
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

let a = new Animal('Jack')
复制代码
```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88ca6b42933548998c6f945fca588c25~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

### 参数属性

修饰符和`readonly`还可以在构造函数参数中使用，等同于类中定义该属性同时给该属性赋值，代码看上去会更简洁：

```ts
class Animal {
    // public name: string;
    public constructor(public name) {
        // this.name = name
    }
}
复制代码
```

### readonly

只读关键字

```ts
class Animal {
    public constructor(readonly name) {
        
    }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tony' // Error
复制代码
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e12c4bfed14499e830244d88a7d2d09~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

需要注意的是，如果readonly与其他修饰符同时出现的时候，需要写在最后，改造上面的栗子：

```ts
class Animal {
    public constructor(public readonly name: string) {}
}
复制代码
```

## 抽象类

`abstract` 用于定义抽象类和其中的抽象方法，首先抽象类不允许被实例化，举个栗子：

```ts
abstract class Animal {
    public constructor(public name: string) {}
    public abstract sayHi(): void;
}
let a = new Animal('jack')
复制代码
```

抛出错误：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/437f9f1183fb411ea26101a231764dac~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

其次，抽象类的抽象方法必须被子类实现：

```ts
class Cat extends Animal {
    public eat() {
        console.log()
    }
}
复制代码
```

如果不实现`sayHi`方法，就会抛出错误

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba2a45f3068a463e930a0de1dd8a716c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

正确的做法如下：

```ts
abstract class Animal {
  public constructor(public name: string) {}
  public abstract sayHi(): void;
}

class Cat extends Animal {
  public eat(): void {
    console.log("im eating");
  }
  public sayHi(): void {
    console.log("hi~ my name is " + this.name);
  }
}

let c = new Cat("Jack");
c.eat();
c.sayHi();
复制代码
```

## 类的类型

很简单

```ts
class Animal {
  public constructor(public name: string) {}
  public sayHi(): string {
    return `Hi~ my name is ${this.name}`;
  }
}

let a: Animal = new Animal("Jack");
复制代码
```

# 泛型

泛型是指在定义函数、接口、类的时候，不预先指定具体类型，而在使用的时候再指定类型的一种特性。

## 基本定义

我们实现一个 `createArray`函数，他可以创建一个指定长度的数组，同事将每一项都填充一个默认值：

```ts
function createArray(length: number, value: any): Array<any> {
    let result = []
    for(let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}
复制代码
```

上面我们用到的是`数组泛型`，但是`any`还是有点不妥，我们希望与 `value`的类型相同，但是我们并不知道`value`是什么类型，这时候`泛型`就起作用了：

```ts
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = []
    for(let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}
createArray<string>(3, 'x')
复制代码
```

上面的栗子里，我们在函数名后面添加了`<T>`，其中`T`用来指代任意输入的类型，在后面输入`value: T`和输出`Array<T>`中即可使用了。

接下来的调用中，具体的指定它为`string`，也可以不指定，交给`类型推导`

```ts
createArray(3, 'x')
复制代码
```

## 多个类型参数

定义泛型的时候，可以一次定义多个类型参数：

```ts
function swap<T, U>(tup;e: [T, U]): [T, U] {
    return [tuple[1], tuple[0]]
}
swap([7, 'seven']) // ['seven', 7]
复制代码
```

## 泛型约束

函数内部使用泛型变量的时候，我们可能不知道它到底是那种类型，所以不能随意的操作他的属性或者方法：

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length)
    return arg
}
复制代码
```

这样写会抛出错误：

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/db957a6204f1490f9df5edb3677250cf~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

因为泛型T上不一定有length，这时候，我们可以对泛型进行约束，只允许这个函数传入那些包含`length`属性的变量，这就是`泛型约束`：

```ts
interface lengthwise {
    length: number;
}
function loggintIdentity<T extends lengthwise>(agr: T): T {
    console.log(agr.length)
    return arg
}
复制代码
```

这个时候如果你调用`loggintIdentity`传入的值没有`length`属性，那么会抛出错误

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c69ce17696d407f84a810397974153d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

多个类型参数之间也可以互相约束：

```ts
function copyFields<T extends U, U>(target: T, source: U): T {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = (<T>source)[key];
    }
  }
  return target;
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(copyFields(x, { b: 10, d: 20 }));
复制代码
```

这块可能有同学看不懂`target[key] = (<T>source)[key]`是啥意思了，我在这解释一下：

```
(<T>source)[key]` === `(source as T)[key]
```

现在的情况是：`target`的类型是`T`，`source`的类型是`U`，二者的类型不同，所以无法直接赋值，二者必须断言一个，使他们变成统一类型，如果不这么做，会抛出一个错误：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/638dfc882d404d6a87cc67a14f4af2e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

## 泛型接口

接口可以约定一个函数的形状：

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, substring: string) {
    return source.search(subString) !== -1
}
复制代码
```

也可以使用有泛型的接口定义函数的形状：

```ts
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
createArray = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = <T>value;
  }
  return result;
};
console.log(createArray(3, "x"));
复制代码
```

## 泛型参数的默认值

```ts
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}
let createArray: CreateArrayFunc;
createArray = function <T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = <T>value;
  }
  return result;
};
console.log(createArray(3, "x"));
```
