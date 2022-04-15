---
title: React
abbrlink: 19656fd5
cover: /img/bgc.jpg
date: 2022-04-01 18:03:06
tags:
    - [react]
categories:
    - [react]
---

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

#  React的生命周期

第一个阶段： 创建阶段

```
1. constructor        作用： (1) 获取props      (2) 初始化state
2. render
3. componentDidMount()  组件已经挂载到页面中

   componentDidMount()  1. 可以进行DOM操作  2. 可以发送请求获取数据
```

第二个阶段： 运行和交互阶段

    1. shouldComponentUpdate(nextProps, nextState) 
        作用：根据这个方法的返回值决定是否重新渲染组件，返回true重新渲染，否则不渲染
    2. render() 重新渲染组件
    3.  componentDidUpdate(prevProps, prevState) 组件已经被更新


第三个阶段： 卸载阶段 

    componentWillUnmount()  组件卸载期间
    在卸载组件的时候，执行清理工作，比如清除定时器，移除滚动监听等事件

#  组件传值的方式

一、父向子传值：
	父组件通过自定义属性向子组件传值，子组件通过this.props.属性名接收

二、子向父传值

	子组件通过调用父组件以props传入的方法来更改父组件的数据

三、状态提升 （兄弟组件传值）


	共享数据存在父组件，通过父子组件传值的方式实现传值

四、通过useContext实现自上而下的传值

	1. 调用React.createContext()创建Provider（提供数据）和 Consumer(消费数据)两个组件
	
	2. 使用Provider组件作为父节点，注入共享数据
	
	3. 使用Consumer组件在后代组件中引入共享数据

```
<wrapContext.Provider value={需共享的数据}>
     <div className="app">
         <Son></Son>
     </div>
</wrapContext.Provider>


<wrapContext.Consumer>
     {data => <h1>{data}</h1>}
</wrapContext.Consumer>
```

五、通过redux传值

# setState为什么是异步的

- setState 改变了状态并触发了 render， 而 render 往往是伴随着重绘和回流的，显然，这是非常影响浏览器性能的操作。

- 如果设计成同步的话，试想，假使多个组件绑定了一个合成事件处理函数，那么，当这个事件函数执行的时候，setState 会多次修改 state 并 render。
- 我们不如在 setState 的时候先不触发，而是先把那些需要更改的组件标记一下，最后一起改变 state 并渲染，这对浏览器性能的提升显然是有积极的影响的。

# 调用 setState 之后发生了什么？

- 在代码中调用 setState 函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发所谓的调和过程（Reconciliation）。
- 经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面。
- 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。
- 在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

#  函数组件和类组件的区别

一、 React 16.8 版本之前
函数式组件中没有this,不能有自己的state,也不能有生命周期函数
类组件中可以有this,state,生命周期函数

二、React 16.8之后，加入了Hook,所以
函数式组件仍然没有this
但是函数式组件可以通过新的Hook来实现state和生命周期函数

#  什么是JSX语法

JSX语法介绍：
    1、React官方提出了一套JSX语法规范，能够在JS文件中书写html代码
    2、JSX(符合XML规范的JS语法)原理：在JS文件中书写JSX语法，但是在React中，JSX在内部运行的时候，也是先把
       类似于HTML这样的标签代码转换为了React.createElement的形式创建，然后再去渲染

JSX语法的特点：

    1、在JSX创建DOM的时候，所有的节点必须有唯一的根元素包裹
    
    2、原生标签用小写，自定义组件首字母大写
    
    3、标签直接写，js语法写在{}中
    
    4、class属性，那么必须写成className
    
    4、label标签的for属性要写成htmlFor
    
    5、如果写注释，必须要放在{}里面
    
    6. jsx中不能用if语句，用三元运算来替代

# 项目中遇到的难点及解决方案

参考课堂案例 ： React+Antd 实现的教育培训类后台管理，针对对应的内容自行总结

## 导航菜单在刷新后，不能保持当前选中菜单的高亮

解决方案：

- 比如当前页面路由为： /admin/stu/studentInfo

- 把SubMenu的key值设置为url中第二部分的'stu',  Menu.Item的key值，设置为完整的/admin/stu/studentInfo
- 通过useLocation获取当前页面的url地址，解析url地址，用key1保存‘stu',用key2保存完整url
- 把key1绑定Menu的  defaultOpenKeys={key1}  defaultSelectedKeys={key2} 

```
function AdminMenu(props) {
  let { pathname } = useLocation()
  // /admin/stu/AddStudent
  let result = pathname.split("/")

  const key1 = [result.length === 4 ? result[2]: []]
  const key2 = [pathname]
 
  return (
    <Sider collapsible collapsed={props.collapsed}  className="sider" trigger={null}>
      <div className="logo" >云和教育</div>

      <Menu theme="dark"  defaultOpenKeys={key1}  defaultSelectedKeys={key2} mode="inline">
        <Menu.Item key="/admin/Home" icon={<PieChartOutlined />}>
          <NavLink to="/admin/Home">首页</NavLink>
        </Menu.Item>
        <SubMenu key="stu" icon={<UserOutlined />} title="学生管理">
          <Menu.Item key="/admin/stu/AdminClass">
            <NavLink to="/admin/stu/AdminClass">班级管理</NavLink>
          </Menu.Item>
          <Menu.Item key="/admin/stu/StudentInfo">
            <NavLink to="/admin/stu/StudentInfo">学生信息</NavLink>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="tea" icon={<TeamOutlined />} title="教师管理">
          <Menu.Item key="/admin/tea/TeacherInfo">
            <NavLink to="/admin/tea/TeacherInfo">教师信息</NavLink>


          </Menu.Item>
          <Menu.Item key="/admin/tea/TeacherHour">
            <NavLink to="/admin/tea/TeacherHour">课时统计</NavLink>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="/admin/Notice" icon={<FileOutlined />}>
          <NavLink to="/admin/Notice">图片上传</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default AdminMenu
```

##  Echarts图表在异步请求到数据后，不能正常渲染

需求描述： 不同专业学生总人数，客户要求页面中既要用表格显示，又要用饼图显示

实现思路： 考虑先用setTimeout模拟异步获取数据，获取到数据后，更新state,并用新的state来渲染饼图

问题： 更新state后，用新state赋给图表的options,却不能渲染

原因：setTimeout中的回调为闭包，更新state触发组件更新，但读取的state是上一个组件周期内的更新前state的值

解决方案：

( 最简单的可以更新state后，不用state更改options, 而是用刚刚拿到的数据来更改options, 

但是通过这个例子能表明深入理解react的内在机制,再遇到类似场景会有正确的解决方法

)

一、使用useRef，获取更新后的state

```
function Home() {
  const [data1, setData1] = useState([])
  const ref = useRef()
  ref.current = data1

  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("box"));
    let options =
    {
      title: {
        text: "异步数据加载示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      // 类目
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [],
        },
      ],
    }
    myChart.setOption(options)

    myChart.showLoading()
    setTimeout(() => {
      myChart.hideLoading()
      setData1([23, 45, 67, 23, 23, 45])
      // 绘制图表
      options.series[0].data = ref.current
      myChart.setOption(options);
    }, 3000)
  }, [])
```

二、使用useEffect监听数据的变化,获取更新的state

```
let myChart;
let options =  {
  title: {
    text: "异步数据加载示例",
  },
  tooltip: {},
  legend: {
    data: ["销量"],
  },
  // 类目
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: [],
    },
  ],
}

//第二种得到更新后数据的方案：  使用useEffect监听数据的变化
function Home() {
  const [data1, setData1] = useState([])
  
  useEffect(() => {
    console.log(1);
    // 基于准备好的dom，初始化echarts实例
    myChart = echarts.init(document.getElementById("box"));
    myChart.setOption(options)
    myChart.showLoading()
    let timer = setTimeout(() => {
      myChart.hideLoading()
      setData1([23, 45, 67, 23, 23, 45])
    }, 3000)

    return ()=>{
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (data1.length !== 0) {
      // 绘制图表
      options.series[0].data = data1
      myChart.setOption(options);
    }
  }, [data1])

  return (
    <div className="home">
      <div className="box" id="box" style={styleObj}></div>
    </div>
  )
}

export default Home
```

##  Antd中 使用日期组件报错

问题描述： 在编辑数据时，把原始数据传入表单时，一直报错，检查了各个环节都没有问题，查了很多资料，试了很多方法，最后终于解决了

原因：日期字段的格式转换 

为什么会出错： 

在班级管理中，添加班级时需要把日期选择器中获取的原始日期的值用moment库转换: moment(value).format("YYYY-MM-DD"),转后的结果 为“2021-11-12”，这样存入数据库

而表格中从数据库读出来的日期是正常格式 "2021-11-12", 按理说直接传给表单中的日期选择器的默认值即可，但就是这个地方出错了

正常格式也需要用moment（）处理，并且想当然用moment(value).format("YYYY-MM-DD")处理也是出错的，必须是moment()才行



添加时

```
 const onFinish = (values) => {
    // 日期处理
    values.startDate = moment(values.startDate).format
      ("YYYY-MM-DD")
    if (props.action === "add") {
      // 添加
      addClass(values)
        .then(res => {
          if (res.data.code === 0) {
            message.success('添加成功')
            props.setVisible(false)
            props.getData()
          } else {
            message.success('添加失败')
          }
        })
        .catch(err => {
          console.log(err);
        })
      }
}
       
```

编辑班级

```
 //编辑班级
  const editClass = (record)=>{
    //日期处理
    record.startDate = moment(record.startDate)
    setVisible(true)
    setRecord(record)
    setAction("edit")
  }
```

## 组件封装： 同时实现学生信息的添加和编辑

分析： 添加和编辑可以通过同一个弹窗解决

> 添加：表单中数据为空，提交按钮文字为"添加",执行添加业务  编辑：和添加功能布局相同，只是表单中要回填原始信息，提交按钮文字为“修改"，执行修改业务

组件封装思路：

- 新建EditStu组件，用<Modal>组件包裹<Form>组件

- 在父组件引用EditStu组件,并传入相关属性

  action: 添加时，传入"add", 编辑时，传入"edit", 通过action ,  来切换显示添加按钮还是修改按钮，并根据action,来决定表单提交后执行添加业务还是编辑业务

  visible: 控制<Modal>的显示隐藏，可实现在父组件中通过添加或编辑来显示表单弹窗

  setVisible: 传入子组件的父组件的方法，可更改父组件的visible,  实现在子组件中添加或修改后关闭弹窗

  getData: 传入子组件的父组件的方法，在添加或编辑后重新拉取后台数据

  record: 添加时，传入record为{}, 编辑时，传入原始记录数据，并实现表单数据回填

  ```
  <EditStu 
  	action={action}
      visible={visible} 
      setVisible={setVisible} 
      getData={getData}
      record={record}
  ></EditStu>
  ```

## Modal嵌套Form打开还是上一次的数据 

原因：

因为`<Modal>`隐藏显示时没有销毁 Modal 里的子元素UserForm，导致都每次读取上次的值。

解决方案：

在 Modal 上增加属性 `destroyOnClose`

## 封装组件时，弹窗中图片上传的处理

需求： 

​	添加功能时，Upload组件初始化显示plus图标，上传后显示预览图

​	编辑功能时，Upload组件初始化显示当前记录中的图片，上传后显示新的预览图

问题： 功能很清晰，但具体实现逻辑有些复杂，费了些功夫



分析实现的关键点：

1. 必须要分开设置两个state, 一个imageUrl用来存储预览图的url,一个imgUrl用来存储准备存入数据库的url

2. 预览图的处理：

   如果是添加，判断imageUrl，如果为假，说明还未选择图片，则显示plus图标，而在上传图片的逻辑执行之后，会给imageUrl赋值，则为真，显示预览图

   如果是修改，判断imageUrl，如果为假，说明还未选择新图片，则显示传入的当前记录的线上图片的地址，而再次上传图片的逻辑执行之后，会给imageUrl赋值，则为真，显示新的本地预览图

3. 上传图片成功后，要将上传后传回的线上图片地址存入表单的imgUrl字段，并将生成的本地图片url赋给imageUrl,以便显示预览图

    

    









​	
