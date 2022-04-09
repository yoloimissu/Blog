---
title: 原生js
abbrlink: 17c7b154
date: 2022-04-01 16:00:19
tags:
    - [js]
    - [数组]
    - [对象]
categories:
    - [js]
---

### 函数（方法）对象

```js
// 1、作为值赋值给另一个变量
function foo () {}
var bar = foo;
// 无论是使用函数名（foo）还是变量名（bar）调用函数，它执行的都是同一个函数。
 bar()
 foo()
//2.函数作为实参传递个另一个函数
function bar (fun) {
  	var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (var i = 0; i < arr1.length; i++) {
        fun(arr1[i], i)
     }
}
 // 将 foo 函数作为 bar 函数的实参，传入的 bar 函数内部，供其调用。
bar(function (num, index) {
     console.log(num, index)
 });
// 3、作为另一个函数的返回值
function foo () {
	function bar () {console.log('bar')}
 // 将内部函数作为返回值传递到函数外部
     return bar;
}
// 使用变量 fun 接收 foo() 函数返回的内部函数（bar）
 var fun = foo();
 // 通过变量 fun 调用 bar 函数
fun();

```

### 闭包函数
<!-- more -->

```js
/* 闭包函数特点：
 1、函数嵌套函数
  2、内部函数使用了外部函数的成员（变量、形参）
*/
function foo () {
	var count = 0;
	function bar () {
// 内部函数使用了外部函数的成员变量 greeting
		count++;
		console.log(count);
	}           
		return bar;
}
var fun = foo();
// 变量 fun 只要一直引用函数 bar()，则 bar() 函数中使用 count 变量就一直不会被销毁。
fun();//1
fun();//2
fun();//3
//当变量不在引用foo（）时bar() 以及 bar() 函数中使用的 count 变量就会回收。
fun=null;
```



###  arguments 对象

 arguments 对象可以访问函数内部的所有参数，实参例如函数内部改变实参的值不会改变外部的函数的值

```js
function f2(a, b) {
    console.log(a)//4
    console.log(b)//6
    arguments[0] = 10;
    arguments[1] = 20;
    return a + b;
}
var x = 4, y = 6;
    console.log(f2(x, y));//30
    console.log(x)//4
    console.log(y)//6
```

### 数组

删除数组中的已知索引的某个元素使用 delete arr1[index]

### 数组实例方法

1. push  向数组中结尾添加一个或多个元素`arr.push('a')`或者`arr.push('a','b')`把里面的内容添加到数组末尾，并返回修改后的长度。

2. pop 删除数组结尾的一个元素。`arr.pop()`移除数组最后一项，返回移除的那个值，减少数组的length

3. unshift 向数组的开始添加一个或多个元素与push类似

4. shift()：删除原数组第一项，并返回删除元素的值；如果数组为空则返回undefined 。unshift:将参数添加到原数组开头，并返回数组的长度

5. splice 对数组进行删除，替换，插入

   ```js
   arr1.splice(4);//一个参数代表从索引为4开始删除到数组最后
   arr1.splice(4, 3);//两个参数代表从索引4开始删除，删除3个
   arr1.splice(4, 3, 'a', 'b', 'c');//从索引为4的开始替换替换三个元素替换为a,b,c,也可以替换为任意数量的元素
   arr1.splice(4, 0, 'a', 'b', 'c');//从索引为4 的开始插入元素，索引4及其以后的元素向后排
   ```

6. forEach  遍历数组需要一个函数 

   ```js
   arr1.forEach(function (num, index，arr1) {
       //forEach的函数一个又是三个参数第一个必填正在遍历的元素，2索引，3正在操作的数组,一般情况3不填
               console.log(num, index ,arr1)
           });
   ```

7. `join`就是把数组转换为字符串默认使用‘，’连接

8. sort()：将数组里的项从小到大排序这是按照ASCII排列，传入一个函数如下可以正常排序，也可以和math.random一起使用打乱数组

   ```js
   const array  = [40, 10, 9, 5, 55, 19];
   array.sort((a,b) => a-b);
   // 输出
    [5, 9, 10, 19, 40, 55]
   
   array.sort((a,b) => b-a);
   // 输出
   [55, 40, 19, 10, 9, 5]
   array.sort(() => {
       return Math.random() - 0.5;
   });
   ```

   

9. reverse()：反转数组项的顺序

10. concat() ：将参数添加到原数组中。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组。在没有给 concat()方法传递参数的情况下，它只是复制当前数组并返回副本。

11. slice()方法返回从该参数指定位置开始到当前数组末尾的所有项。如果有两个参数，该方法返回起始和结束位置之间的项——但不包括结束位置的项。

12. map()：指“映射”，对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。

13. filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。过滤出虚假值,重复值(也可以使用es6set)

    ```js
    const array = [3, 0, 6, 7, '', false];
    array.filter(Boolean);
    // 输出
    [3, 6, 7]
    const array  = [5,4,7,8,9,2,7,5];
    array.filter((item,idx,arr) => arr.indexOf(item) === idx);
    [...new Set(array)];
    ```

    

14. every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true

15. some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。

16. Array.reduce方法的使用

    reduce(fn,initValue)接收2个参数。第一个是迭代器函数，函数的作用是对数组中从左到右的每一个元素进行处理。函数有4个参数，分别是accumulator、currentValue、currentIndex、array。
    accumulator 累加器，即函数上一次调用的返回值。
    第一次的时候为 initialValue || arr[0]
    currentValue 数组中函数正在处理的的值
    第一次的时候initialValue || arr[1]
    currentIndex 数组中函数正在处理的的索引
    array 函数调用的数组
    initValue reduce 的第二个可选参数，累加器的初始值。没有时，累加器第一次的值为currentValue；

### 数组方法

1. Array.from()想要转换成数组的伪数组对象或可迭代对象

2. Array.isArray()用于确定传递的值是否是一个 Array

3. Array.of()

  ```js
   Array.of(7);       // [7]
   Array.of(1, 2, 3); // [1, 2, 3]
   
   Array(7);          // [ , , , , , , ]
   Array(1, 2, 3);    // [1, 2, 3]
  ```

4. 


### 字符串

1. .find()：可以在一个较长的字符串中查找字串。它返回字串所在位置的最左端索引，如果没有找到，则返回-1.

2. split()：将字符串分割成数组

3. join()：数组转换字符串

4. replace()：返回某字符串的所有匹配项均被替换之后得到的字符串

5. toLowerCase() 方法用于把字符串转换为小写。

6. toUpperCase() 方法用于将小写字符转换为大写。

7. substring() 方法返回字符串的子字符串。两个参数开始和结束

8. indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。

   注释：indexOf() 方法对大小写敏感！

   注释：如果要检索的字符串值没有出现，则该方法返回 -1。

### 数字

   1. ```js
      num.toFixed(2);js   //四舍五入
   ```

   2. ```js
      Math.floor(15.7784514000 * 100) / 100 // 输出结果为 15.77
   ```



### Object对象

1. 遍历OBject对象使用forin或者使用keys()拿属性名遍历

2. ```js
   // 方式一：
   // 1.1 使用 Object.keys() 方法获取被遍历对象中的所有属性名，并以数组的形式返回
   var array = Object.keys(obj1);
   // 1.2 遍历数组中的所有属性名，然后根据属性名获取对应的属性值
   for (var i = 0; i < array.length; i++) {
   	console.log(array[i], obj1[array[i]])  
    }
   // 方式二：
   for (var key in obj1) {
   	console.log(key, obj1[key])
   }
   ```

### js类型转换

在Js中类型转换只有三种情况，分别是:转换为布尔值(调用Boolean()方法)

转换为数字（调用Number().parseInt()和parseFloat()方法)

转换为字符串（调用.toString()或者String()方法)

### 判断js数据类型

首先我们可以用typeof去判断，typeof只能判断基本数据类型，对于引用数据类型，一律返回object，在js中，数组是一种特殊的对象类型，因此typeof一个数组,返回的是object。

还可以通过instanceof来判断，它不能检测基本数据类型，它是用来判断一个实例是否属于某种类型，使用它的方式可以用Ainstanceof B,如果A是B的实例，则返回true,否则返回f1ase。

然后还可以用constructor来判断，除了undefined和null之外，其它类型都可以通过constructor来判断,但是如果声明了一个构造函数，并且把它的原型指向改变了，这种情况下，constructor也不能准确的判断。

原因是因为实例对象可能会自定义tostring方法，把这个方法给覆盖掉，我们可以通过国的.call()方法，可以在任意信上调用这个方法，帮助我们的断这个信的类型。

### 节点

#### classList 操作节点类名

```js
//节点名为box
box.classList.add('top')//为节点添加一个名为top的类名
box.classList.remove('top')//s删除节点上名为top的类名
box.classList.contains('top')//判断节点上是否有名为top的类名，有返回true，无返回false
box.classList.replace('top','bottom')//替换指定的类名
box.classList.toggle('top',true)//判断节点上有top类名true 表示没有，则强制添加，有，则什么都不做 false 表示有，则删除，没有的话也不会强制添加。
```

#### 操作标签属性

```js
//节点名为p
p
// 使用 setAttribute() 方法为标签添加新属性也可以为已有属性重新复制
p.setAttribute('id', 'p1');
p.setAttribute('class', 'paragraph');
// 使用 getAttribute() 方法获取标签的属性值
console.log(p.getAttribute('id'));//p1
console.log(p.getAttribute('class'));//paragraph
//用 setAttribute() 方法为标签也可以为已有属性重新复制
p.setAttribute('id', 'p2');
console.log(p.getAttribute('id'));//p2
// 使用 removeAttribute() 方法删除已有属性
p.removeAttribute('class');
```

#### 创建节点，向目标元素中追加子元素

```js
//目标元素的节点为box
//创建子元素节点
var h1 =document.createElement('h1');
//为子元素添加文本内容
 h1.innerText = 'Hello World';
//把子元素添加到box中
 box.appendChild(h1);
//创建子元素2
 var h2 = document.createElement('h2');
 h2.innerText = '你好世界';
//把子元素2添加到子元素1之前
box.insertBefore(h2, h1);
//用子元素2替换子元素1
box.replaceChild(h2, h1);
//删除子元素2
box.removeChild(h2);
//拷贝元素false表示浅拷贝不会拷贝元素的后代元素，true表示深拷贝会拷贝后代元素
var copy1 = box.cloneNode(false);
var copy2 = box.cloneNode(true);
```

#### 节点关系

```html
<div>
        <div>
            <p>p1</p>
            <p>p2</p>
            <p>p3</p>
        </div>
        <div id="div2">
            <p>p4</p>
            <p>p5</p>
            <p>p6</p>
        </div>
        <div>
            <p>p7</p>
            <p>p8</p>
            <p>p9</p>
        </div>
    </div>
    <script>
        var div2 = document.querySelector('#div2');
        // 获取父节点
        //console.log(div2.parentNode)
        
        // 上一个兄弟文本节点
        // console.log(div2.previousSibling); 
        // 上一个兄弟元素节点
        // console.log(div2.previousElementSibling); 

        // 下一个兄弟文本节点
        // console.log(div2.nextSibling); 
        // 下一个兄弟元素节点
        // console.log(div2.nextElementSibling); 

        // 所有子节点（包含文本节点）
        // console.log(div2.childNodes)
        // 所有元素子节点（只包含元素节点）
        // console.log(div2.children)

        // 第一个文本子节点
        // console.log(div2.firstChild)
        // 第一个元素子节点
        // console.log(div2.firstElementChild)

        // 最后一个文本子节点
        // console.log(div2.lastChild)
        // // 最后一个元素子节点
        // console.log(div2.lastElementChild)
    </script>
```

### 注册事件

直接在标签内部属性注册事件` <button type="button" onclick="foo()">点我</button>`然后再script标签内部写事件函数的事件

```html
<!-- 1、使用标签的 onclick 属性注册点击事件 -->
 <button type="button" onclick="foo()">点我</button>
    <script>
        function foo() {
            console.log('foo')
        };
        // 2、通过节点对象的 onclick 属性注册点击事件
        //var btn = document.querySelector('button');

        //btn.onclick = function handleClick () {
        //    console.log('hello')
       // };
    </script>
```

