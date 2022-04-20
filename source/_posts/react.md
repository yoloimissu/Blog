---
title: React1
abbrlink: 19656fd5
cover: /img/bgc.jpg
date: 2022-04-01 18:03:06
tags:
    - [react]
categories:
    - [react]
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

#  useRef的作用

- useRef 用来获取DOM元素对象

- 保存数据

##  获取DOM元素对象

```
import React, {useRef} from "react";

function Ref (){
    const box = useRef()

    return (
        <div>
            <div ref={box}>useRef</div>
            <button onClick={() => console.log(box)}>+1</button>
        </div>
    )
}
export default Ref;


```
<!-- more -->
>当我们需要获取元素对象的时候， 首先引入useRef， 其次调用useRef（）方法接收它的返回值，我们需要获取那个DOM元素就在那个DOM元素上进行绑定，通过ref属性将useRef的返回值绑定到元素身上，这样useRef的返回值，通过useRef返回一个对象，对象内部有个current属性，这个属性就对应着我们需要的元素对象；

## 保存数据

参考Antd项目案例： Echarts使用中，在定时器中不能获取更新后的数据 

解决方案： 用useRef保存更新后的数据，在定时器中通过useRef引用来获取更新后的数据

> 这里讲一下 ， 为什么不用let一个变量来保存数据， 因为再使用定时器更新状态数据时， 数值的每次变化都会引起组件的更新，每次更新都重新let一个变量，所以在进行解绑操作的时候，你的let变量为null，它并没有保存定时器，所以以上场景需要使用useRef进行保存数据，useRef不会因为组件的更新而丢失数据，虽然组件进行了更新，但是通过useRef保存的数据是不会丢失的，这里通过useRef中的current来进行保存也是官方要求的写法，所以如果你想要保存的数据不会因为组件的更新而丢失，就可以使用useRef来保存数据



#  为什么useState可以使用const解构赋值？

state数据更新，重新呈现组件后，将**再次执行该函数**，从而**创建新的作用域**，创建新的`count`变量，**该变量与先前的变量无关**。

#  高阶组件（HOC）

- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。
- HOC 自身不是 React API 的一部分，
- 它是一种基于 React 的组合特性而形成的设计模式。
- 具体而言，高阶组件是参数为组件，返回值为新组件的函数。
- react-redux中的connect()， 路由中的withRouter()都是高阶组件

#  纯函数和副作用

##  纯函数

如果一个函数符合两个条件，它被称为**纯函数**

- 函数在相同的输入值时，总是产生相同的输出。函数的输出和当前运行环境的**上下文状态**无关。
- 此函数运行过程不影响运行环境，比如不会触发事件、更改环境中的对象、终端输出值等。
- 简单来说，也就是当**一个函数的输出不受外部环境影响，同时也不影响外部环境时，该函数就是纯函数。**

## 副作用

除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，
比如说调用 DOM API 修改页面，或者你发送了 Ajax 请求，还有调用 window.reload 刷新浏览器，
甚至是 console.log 往控制台打印数据也是副作用。

#  redux-thunk和redux-saga的区别

- redux 的中间件原理很简单，就是对 store 的 dispatch 方法做一个升级，既可以接收对象，又可以接收函数了，继而可以在函数里边进行异步操作

- Redux-saga 和 Redux-thunk 解决的问题一致，但是实现方式有所不同，saga 把异步请求的操作全部放在 saga 文件中，而 thunk 只是来原来的基础上，对 actionCreator 进行一些操作（执行函数）。一般来说，saga 用于大型复杂项目，其 API 很多，拓展性极好。

#  Redux三大原则

- 唯一数据
  整个应用的 state 都被存储到一个状态树中，并且这个状态树，只存在于唯一的 store 一

- 保持只读状态
  state 是只读的，唯一改变 state 的方法就是触发 action，action 是一个用于描述以发生时间的普通对 象 一一

- 数据改变只能通过纯函数来执行
  使用纯函数来执行修改，为了描述 action 如何改变 state 的，需要编写 reducers

#  页面传值（路由组件传值）的三种方法

- query

  ```
  <Link to='/my?name=1&id=1'>我的</Link>
  const location = useLocation()
  console.log(location.search);
  ```

- 类似 body

  ```
  <Link to={{ pathname: '/class', state: {id:1} }}>分类</Link>
   let location = useLocation()
   console.log(location.state.id);
  ```

- params

  ```
  <Link to='/car/asdf'>购物车</Link> ----path: '/car/:name',
  let params = useParams()
  console.log(params);
  ```

#  动态路由和传参

- 定义动态路由，在url后加斜杠加冒号加参数

  ```
  <Route path="/cart/:id" component={Cart}></Route>
  ```

- 接收参数

  类组件中： 用props.match.params.id

  函数组件中用useParams路由钩子： 用  let {id} = useParams()

#  useEffect用法(函数组件的生命周期)

- useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。

- useEffect() 可以模拟生命周期函数的效果

- useEffect的第一个参数为回调函数

  (1) 只有一个参数时，组件初始化自动执行一次，之后每更新一次执行一次

  ```
  useEffect(()=>{
       console.log('没有第二个参数，多次执行');
  })
  ```

  (2) 第二个参数为空数组， 模拟 componentDidMount , 只在组件初始化时执行一次

  ```
  useEffect(()=>{
      console.log('第二个参数为空数组，只执行一次');
  },[])
  ```

  (3) 第二个参数为state，组件初始化执行一次，之后，只有该state改变时再次执行

  ```
  useEffect(()=>{
      console.log('第二个参数为state数据，数据改变一次执行一次');
  },[num])
  ```

  (4) 回调函数内部又return一个函数，return的回调 模拟 componentWillUnmount() 组件卸载的生命周期钩子

  ```
  useEffect(()=>{
       return ()=>{
           console.log('组件卸载时');
       }
  },[])
  ```

#  受控组件和非受控组件

- 受控组件


  表单元素的可变状态通常保存在组件的 state 属性中，并且只能通过使用 [`setState()`](https://react.docschina.org/docs/react-component.html#setstate)来更新

  这些值， 受到 React组件 控制的表单元素称为受控组件

- 非受控组件

  表单数据将交由 DOM 节点来处理，而不是由 React 组件来管理. 这样的表单元素称为非受控组件

#   怎么拆分redux中的reducer

- 为什么拆分reducer

  如果一个项目，比较大，需要redux存储的状态数据比较多时，reducer.js无疑是会非常臃肿的。所以为了简化reducer.js文件，我们应该按照功能模块将这个大的reducer.js文件，拆分成若干个reducer.js。那么这里就需要使用redux里面的一个方法：combineReducers 

- 如何实现拆分 

  - 在不同的reducer文件中创建针对不同模块的store数据和reducer
  - 把多个reducer引入store中，并用combineReducer实现合并
  - 在组件中获取数据时，需要指定模块，其它使用方法都不变

 #  为什么使用react-redux

最基本的 Redux 可以看出用起来还是比较繁琐的,react-redux使redux的使用相对更友好

# react-redux库的特点

- 使redux的使用相对更友好
- Redux 本身和React没有关系，只是数据处理中心，是React-Redux让他们联系在一起
- react-redux引入两个API : Provider和connect    
  - Provider实现store的全局访问，将store传给每个组件。
  - connect连接React组件和Redux store, 返回一个新的已与 Redux store 连接的组件类。使得组件中可以方便的访问store中的数据

#  react-redux怎么使用

- 安装react-redux

- store的定义和redux中一样，只是组件中使用store的方式发生改变

- 在根组件用Provider注入store

  ```
  <Provider store={store}>
       <Greeting></Greeting>
  </Provider>
  ```

- 在子组件中，用connect连接store和组件，把store数据和对store数据的操作映射到组件的props中

  ```
  // 从Redux状态树中提取需要的部分作为props传递给当前的组件
  const mapStateToProps = (state) => {
      return {
          city: state.city
      }
  }
  // 将需要绑定的响应事件（action）作为props传递到组件上
  const mapDispatchToProps = (dispatch) => {
      return {
          onClick(){
              const action = {
                  type: 'changeCity',
                  value: '广州'
              }
              dispatch(action)
          }
      }
  }
  export default connect(mapStateToProps, mapDispatchToActions)(组件);
  ```

# 如何获取原生DOM

有两种方案：

##  用回调的方式

在对应的元素中添加ref属性，值为一个回调，从而获取实例中对这个dom的引用

引用：

```
<input type="text" value="aaa" onChange={this.handlerChange} ref={(input)=>{ this.input = input}}></input>
```

调用 

```
componentDidMount(){
     this.input.focus()
}
```

## 用钩子函数useRef

#  搭建react项目的流程

- 用npx create-react-app 项目名     创建项目

- 进入项目目录，npm start 或yarn start启动项目

  以中后台管理项目为例：

- 在App.js中构建一级路由，实现 登录页，管理页，404页面的路由配置及路由拦截

- 在管理页中把左侧菜单和右侧内容区拆分出两个组件

- 在内容区组件中定义二级路由，即各个功能页面

- 通过左侧菜单实现路由切换

#  虚拟DOM的特点

虚拟Dom：虚拟Dom是描述真实Dom的js对象。

    特点：
    
    （1）处理了浏览器兼容性问题，避免用户操作真实DOM，不容易出错。
    
    （2）内容经过了XSS处理，可以防范XSS攻击。
    
    （3）可以实现跨平台开发。
    
    （4）在更新的时候，比较两棵虚拟DOM树的差异，差异化更新。

# diff算法

diff算法，就是用来找出两段文本之间的差异的一种算法。

- vdom为什么用diff算法？

  由于DOM操作是非常昂贵的，就可以通过diff算法来减少DOM操作。

# React的路由模式

- hash模式（HashRouter）：通过监听 hashchange 事件， 在回调里拿到 window.location.hash 的值。 hash 就是指 url 尾巴后的 # 号以及后面的字符。

  hash模式原理：

  > 使用window.location.hash属性及窗口的onhashchange事件，可以实现监听浏览器地址hash值变化，执行相应的js切换网页。 hash指的是地址中#号以及后面的字符，也称为散列值。

- history模式（BrowserRouter）： 利用history API实现url地址改变，网页内容改变。

  history模式原理：

  > window.history 属性指向 History 对象，它表示当前窗口的浏览历史。 History 对象保存了当前窗口访问过的所有页面网址

#  props.children的作用


类似vue中的插槽， 将组件标签中的内容渲染在组件内部指定的位置

父组件

```
import CartChild from './CartChild'
const Cart = () => {
    return (
        <div>
            Cart
            <hr />
            <CartChild>
                <h1>标签中间的内容</h1>
            </CartChild>
        </div>
    );
}

export default Cart;
```

子组件

```
import { withRouter } from 'react-router-dom'
const CartChild = (props) => {
    console.log('CartChild', props)
    return (
        <div>
            CartChild
            <hr/>
            
            // props.children的应用
            {props.children}
        </div>
    );
}

export default withRouter(CartChild);
```

# React的Hooks

一、   Hook出现的意义 ？


Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来


Hooks 优势：

（1）函数组件无 this 问题

（2）自定义 Hook 方便复用状态逻辑

（3）副作用的关注点分离




二、   React常用的Hook

    用于提升函数组件的功能
    
    useState: 引入state
    useEffect: 引入副作用
    useRef: 访问DOM
    useContext: 共享状态
    
    useReducer
    useMemo
    useCallback

三、  React-router 常用的Hook

    useLocation: 获取路由的Location信息
    useHistory:  引入history, 实现编程式导航
    useParams: 获取动态路由参数

#  redux的理解

## 为什么使用Redux

因为对于react来说，同级组件之间的通信尤为麻烦，或者是非常麻烦了，所以我们把所有需要多个组件使用的state拿出来，整合到顶部容器，进行分发。

首先明确一点，Redux 是一个有用的架构，但不是非用不可。事实上，大多数情况，你可以不用它，只用 React 就够了

## redux的工作流程

- 用户在UI组件中通过 store.dispatch触发action ；

- store 自动调用reducer，并传入之前的state，以及用户的action， 经过reducer返回新的state；

- store.subscribe(listener) 订阅state的变化，通过getState获取store数据，并通过setState更新react UI。

##  redux的相关概念：  

- store

  Redux的核心是store，它由Redux提供的 createStore(reducer， defaultState) 这个方法生成，

- 三个API，getState(),dispatch(),subscrible()。
      

  getState()：存储的数据，状态树；
  dispatch(action)：分发action，并返回一个action，这是唯一能改变store中数据的方式；
  subscribe(listener)：注册一个监听者，store发生变化的时候被调用。

- reducer

  reducer是一个纯函数，它根据previousState和action计算出新的state。指定了应用状态的变化如何响应action并发送到store的。
  reducer(previousState,action)

- action

  action本质上是一个JavaScript对象，其中必须包含一个type字段来表示将要执行的动作，其他的字段都可以根据需求来自定义。数据的唯一来源，描述了有事情发生这一事实。

  const ADD_TODO = 'ADD_TODO'
  ......
  {
  	type: ADD_TODO,
  	text: 'Build my first Redux app'
  }

#  路由API

- BrowserRouter和HashRouter    二者都是路由的包裹元素，      
      BrowserRouter是history模式, 生产版本需要后端进行相应的配置
      HashRouter是hash模式，路由前有'#'

- Route   配置路由, Route里面的path代表路径，component代表映射的路由组件

- Switch  代表内部的Route只会匹配一个，匹配到了就不会向下执行

- Redirect  代表重定向，to代表跳到目标路由地址，from代表来自哪个路径 
      <Redirect to="/home" from="/" />

- Link和NavLink: 二者都是实现路由跳转的   不同之处是NavLink可以设置激活样式属性

- withRouter :  向非路由组件注入路由信息

#   生命周期函数 shouldComponentUpdate的作用

作用：根据这个方法的返回值决定是否重新渲染组件，返回true重新渲染，否则不渲染

优势：通过某个条件渲染组件，降低组件渲染频率，提升组件性能


说明：如果返回值为false，那么，后续render()方法不会被调用

注意：这个方法必须返回布尔值！！！

应用场景 ：  比对更新后的props和更新前的props，改变了，return true， 重新渲染组件，没改变，return false,阻止渲染


    

    









​	
