---
title: TS2
cover: /img/bgf.jpg
tags:
  - - TS
categories:
  - - TS
abbrlink: cdb50069
date: 2022-04-19 10:34:00
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

### 类型断言

用于手动指定一个值的类型

#### 基本语法

（推荐）

```ts
值 as 类型

```

or

（不推荐）

```ts
<类型> 值

```

#### 用途

##### 将一个联合类型断言为其中一个类型

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

```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eb8d59054c6143318387a4313b8e3bff~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

##### 将一个父类断言为更加具体的子类

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

```

##### 将任何一个类型断言为`any`

这其实就是有一点不靠谱了，咱就是整个就是说你定义一个类型是`number`，但是如果你又觉得他好像不是`number`，那你可以把他再断言成`any`，举个栗子：

```ts
const foo: number = 1
foo.length = 1

```

这样写是不能通过编译的，因为`foo`是`number`类型，是没有`length`属性的，所以TypeScript给了提示`类型“number”上不存在属性“length”。`，这种提示非常有效！

但是有时候我们的写法是完全没有问题的，比如：

```ts
window.foo = 1

```

在js中，这种写法完全ok，给`window`添加属性`foo`，值为`1`，但是，在TypeScript中是不支持的，它会抛出这个错误`类型“Window & typeof globalThis”上不存在属性“foo”。`，这时候我们就可以用类型断言，把`window`断言成`any`，`any`类型上，访问任何属性都是允许的，像这样：

```ts
(window as any).foo = 1

```

ok

##### 将any断言成任何一种类型

举个栗子：

```ts
function getCacheData(key: string): any {
    return (window as any).cache[key]
}

```

上面的例子中，`getCacheData`返回的类型是any，我们不确定他到底返回的是什么类型，所以当我们使用这个function的时候，我们可以根据自己的需要，对他的返回值进行断言，举个栗子：

```ts
interface Cat {
    name: string;
    run(): void;
}
const tom = getCacheData('tom') as Cat;
tom.run()

```

#### 断言包含

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

```

如果我们加一个新的interface:

```ts
let coffeeCup: Cup = {
  width: 20,
  height: 60,
};

let anmimalCup: Animal = coffeeCup;

```

就会抛出错误`类型 "Cup" 中缺少属性 "name"，但类型 "Animal" 中需要该属性。`

#### 总结

类型断言的用途：

- 联合类型可以断言为其中一个类型
- 父类可以被断言为自类
- 任何类型可以断言成 any
- any可以断言成任何类型
- `A`包含`B`的所有属性，或者`B`包含`A`的所有属性，`A`和`B`才能相互断言

#### 双重断言

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

```

### 声明

#### declare var

声明全局变量

```ts
declare var username: string;

```

#### declare function

定义全局函数

```ts
declare function getToken(key: string): string
```

#### 类型别名

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

```

类型`Name`其实就是`string`的别名，类型`() => string`，一个函数返回一个字符串，这种格式就是类型`NameResolver`，`NameOrResolver`是一个联合类型，之前说过。

#### 字符串字面量类型

字符串字面量类型，用来约束取值职能是`某几个字符串`其中的一个字符串，举个🌰：

```ts
type EventSupport = 'click' | 'scroll' | 'mouseEnter'
function handleEvent(ele: Element, event: EventSupport): void {
    // do something
}

handleEvent(document.getElementById('app'), 'scroll') // 完全ok
handleEvent(document.getElementById('app'), 'dbclick') // 完全不ok

```

### 元组（Tuple）

元组用来合并不同类型的项，举个🌰：

```ts
let tom: [string,number] = ['tom', 25]

```

注意：

- 元组在定义赋值时，你定义的什么类型，初始赋值时，就得添加什么类型的值，必须全部添加完，不能多，也不能少
- 可以利用下标修改值，但是值必须是相同类型的
- 元组可以越界，越界的元素只能是你定义元组的时候的联合类型，不能是其他类型，越界的元素不能修改

.. 元组不是很好用，如果你真的不确定你的`[]`里有啥，其实最好就用`let tom: any[] = ['tom', 12]`

### 枚举（Enum）

枚举一般用来做映射，举个栗子：

```ts
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

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

```

枚举成员会被赋值为从0开始递增的数字，同事也会对枚举值到枚举名进行反向映射：

```ts
console.log(Days[0]); // Sun
console.log(Days["Sun"]) // 0

```

#### 自定义枚举

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

```

注意：这儿需要使用断言，让tsc无视类型检查





