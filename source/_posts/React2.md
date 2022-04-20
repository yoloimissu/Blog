---
title: React2
cover: /img/bge.jpg
abbrlink: ebd9f80f
date: 2022-04-19 10:30:52
tags:
    - [react]
categories:
    - [react]
---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

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



