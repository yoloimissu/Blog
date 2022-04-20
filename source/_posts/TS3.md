---
title: TS3
cover: /img/bgg.jpg
tags:
  - - TS
categories:
  - - TS
abbrlink: bab230ff
date: 2022-04-19 10:34:06
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

### 类

其实在JS在ES6发布之前从来都没有类的概念，都是通过构造函数去模拟类，ES6发布了class，但是大部分Js程序员对类的概念还是比较模糊的，这我解释一下什么是类、对象、OOP、封装、集成、多态、修饰符、抽象类、接口

#### 类的概念

类`其实可以理解为一件事物的抽象，包含了这个事务的一些属性与方法举个简单的🌰，比如人，人就是一个大类，我们可以抽象出来他的一些特点，比如：`唱`、`跳`这是人的行为，`智商`、`情商`、`性别`等是人的属性。

#### 对象

对象`其实就是类的实例化，`类`是一个抽象，`对象`就是让他变得现实，一个类可以实例化多个对象，类似我们可以根据`人`这个类，制造很多人。

#### 面向对象 OOP

面向对象开发的三大特性：封装、继承、多态

##### 封装

封装`的意思就是我们知道的意思，我们需要通过一些代码实现一个函数，这个函数就是一个封装，再通俗一点说，我们需要实现`人`会`跳`这个方法，细节呢？我们只需要封装起来，比如先下蹲一点，双腿发力，向上用力等等，把这些细节封装起来，就可以直接调用这个方法进行`跳`，同时呢外界也不能直接去修改内部的数据。

##### 继承

子承父业，儿子继承老爹的所有方法&属性，但除了拥有父类所有用的特性外，还有一些别具一格的特性。

##### 多态

由于继承产生了很多相关的不同类，很多儿子继承了同一个老爹，子类对同一个方法可以有不同的响应。比如`小王`和`小李`都继承老爹`老张`，但是分别实现了自己`getMoney`的方法，此时针对一个实例，我们无需了解他是`小王`还是`小李`，就可以直接调用`getMoney`方法，程序会自动判断出来应该如何执行`getMoney`。

##### 修饰符

饰符是一些关键字，用于限定成员或者类型的性质，比如`public`表示公有属性or方法

##### 抽象类

抽象类是供其他类继承的`基类`，抽象类不允许被实例化，抽象类中的抽象方法必须在子类中被实现

##### 接口

不同类之间共有的属性和方法，可以抽象成一个接口，接口可以被类实现，一个类职能继承自另外一个类，但是可以实现多个接口。

#### ES6中类的用法

##### 类的定义

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

```

##### 类的继承

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

```

##### 存取器

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

```

##### 静态方法

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

```

#### TypeScript中类的用法

##### public private protected

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

```

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88ca6b42933548998c6f945fca588c25~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

##### 参数属性

修饰符和`readonly`还可以在构造函数参数中使用，等同于类中定义该属性同时给该属性赋值，代码看上去会更简洁：

```ts
class Animal {
    // public name: string;
    public constructor(public name) {
        // this.name = name
    }
}

```

##### readonly

只读关键字

```ts
class Animal {
    public constructor(readonly name) {
        
    }
}
let a = new Animal('Jack')
console.log(a.name)
a.name = 'Tony' // Error

```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9e12c4bfed14499e830244d88a7d2d09~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

需要注意的是，如果readonly与其他修饰符同时出现的时候，需要写在最后，改造上面的栗子：

```ts
class Animal {
    public constructor(public readonly name: string) {}
}

```

#### 抽象类

`abstract` 用于定义抽象类和其中的抽象方法，首先抽象类不允许被实例化，举个栗子：

```ts
abstract class Animal {
    public constructor(public name: string) {}
    public abstract sayHi(): void;
}
let a = new Animal('jack')

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

```

#### 类的类型

```ts
class Animal {
  public constructor(public name: string) {}
  public sayHi(): string {
    return `Hi~ my name is ${this.name}`;
  }
}

let a: Animal = new Animal("Jack");

```

### 泛型

泛型是指在定义函数、接口、类的时候，不预先指定具体类型，而在使用的时候再指定类型的一种特性。

#### 基本定义

我们实现一个 `createArray`函数，他可以创建一个指定长度的数组，同事将每一项都填充一个默认值：

```ts
function createArray(length: number, value: any): Array<any> {
    let result = []
    for(let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}

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

```

上面的栗子里，我们在函数名后面添加了`<T>`，其中`T`用来指代任意输入的类型，在后面输入`value: T`和输出`Array<T>`中即可使用了。

接下来的调用中，具体的指定它为`string`，也可以不指定，交给`类型推导`

```ts
createArray(3, 'x')

```

#### 多个类型参数

定义泛型的时候，可以一次定义多个类型参数：

```ts
function swap<T, U>(tup;e: [T, U]): [T, U] {
    return [tuple[1], tuple[0]]
}
swap([7, 'seven']) // ['seven', 7]

```

#### 泛型约束

函数内部使用泛型变量的时候，我们可能不知道它到底是那种类型，所以不能随意的操作他的属性或者方法：

```ts
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length)
    return arg
}

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

```

这块可能有同学看不懂`target[key] = (<T>source)[key]`是啥意思了，我在这解释一下：

```
(<T>source)[key]` === `(source as T)[key]
```

现在的情况是：`target`的类型是`T`，`source`的类型是`U`，二者的类型不同，所以无法直接赋值，二者必须断言一个，使他们变成统一类型，如果不这么做，会抛出一个错误：

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/638dfc882d404d6a87cc67a14f4af2e9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp?)

#### 泛型接口

接口可以约定一个函数的形状：

```ts
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, substring: string) {
    return source.search(subString) !== -1
}

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

```

#### 泛型参数的默认值

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



