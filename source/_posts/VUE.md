---
title: VUE
abbrlink: 560a971e
cover: /img/bgj.jpg
date: 2022-04-01 17:27:46
tags:
    - [vue]
categories:
    - [vue]
---
## 实现数组更新检测的方法



```js
// ====================================数组更新检测
push()，pop()，shift()，unshift()，splice()，sort()，reverse()

    // 三个参数： 数组，索引，新值
    Vue.set(this.list,3,5)  //可以触发视图更新
    this.$set(this.list,3,5)  //可以触发视图更新


// =====================================对象的更新检测


// 三个参数：对象，属性，新值
Vue.set(this.person,"sex","男")  //可以触发视图更新
this.$set(this.list,3,5)  //可以触发视图更新
```
<!-- more -->
## 事件修饰符

事件修饰符： @click.修饰符
            1. @click.stop  阻止冒泡
            2. @click.prevent  阻止浏览器默认行为
            3. @click.once 只执行一次
            4. @keyup.键名  (13，enter都是指回车键， 38： 上箭头)
            5. @click.self   当事件发生在该元素本身而不是子元素的时候会触发；
            6. @click.capture   在事件捕获阶段触发事件处理程序

## 计算属性computed和方法methods的区别以及watch用法


        1. 计算属性和方法都是函数，计算属性一定有返回值，它通过对数据进行处理，返回一个结果 
    
        2. 在模板中调用时，计算属性不加(),而methods必须需要加()
        
        3. 计算属性和方法最主要的区别是计算属性有缓存功能。
    
            方法被调用时每次都要重复执行函数
    
            计算属性初次调用时执行函数，然后会缓存结果。当再次被调用时，如果依赖的响应式数据没有发生改变，则直接返回之前缓存的结果 。
    
            如果依赖发生了改变，则会再次执行函数并缓存结果 
    
        4. 不支持异步，当computed内有异步操作时无效，无法监听数据的变化

watch: 

1. 侦听响应式数据的变化，数据变化时，执行相应的业务逻辑，可以有返回值，也可以没有
2. 侦听器默认在页面初始化时不执行，只有侦听数据发生变化才会执行。添加上immediate可初始化时就执行
3. 添加上immediate可初始化时就执行
4. 支持异步操作

```js
 watch: {
                // 侦听响应式数据num2的更新，只要num2数据更新，就触发该侦听器(函数)
                num2: {
                    handler(val,oldVal) {
                        console.log('侦听num2一次');
                        this.getTotal = this.price * this.num2
                    },
                    // //初始化时即自动执行一次
                    immediate: true
                }
       }
```

computed的应用场景：  过滤后台数据，只显示男生信息
watch的应用场景 ： 楼层导航，切换楼层时，监听楼层索引的变化，调整滚动条位置
## vue中的组件传值
1、父传子：父组件中通过v-bind绑定一个属性，子组件中通过props接收父组件中的绑定的属性

2、子传父：子组件通过广播的方式$emit发送自定义事件，将值传递给父组件，父组件监听事件，触发一个函数去接收子组件中传递过来的值

3、兄弟间传值： 

    (1)通过父组件中转来传值，即A和B是兄弟组件，可以A传给父组件，由父组件再传给B
    
    (2) new一个Bus实例，通过$emit传递数据，通过$on监听获取数据   
    const Bus = new Vue() Bus.$emit("send",this.msg) Bus.$on("send",(data)=>{this.msg = data})
    (3) vuex

4、使用vuex状态管理，可以实现数据的随意存储和获取

    如果应用比较简单，就不需要使用Vuex，直接使用父子组件传值及其它传值方式即可，使用Vuex就要额外的引入vuex的框架，可能是繁琐冗余的
    
    如果需要构建一个中大型单页应用，就可以使用vuex更好地在组件外部管理状态


## vue中如何获取原生dom
1. 在元素标签上添加ref属性   
2. 通过this.$refs.属性名来获取dom
3. 应用场景： 楼层导航中，要获取每个楼层距离页面顶端的偏移值

```xml
<ul ref="ulEl">
    <li v-for="(item,index) in list" ref="liEl">{{item}}</li>
</ul>
<p ref="pEl">这是一个段落</p>
```


## vue中this.$nextTick()的用法
一般在请求数据后，需要获取dom的时候使用。

在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
## 生命周期钩子

```js
// 创建之前，在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化，不能访问data数据
    1. beforeCreate(){
        console.log('beforeCreate',this.msg);
    },
    //创建之后，data和methods中的数据已经初始化，此时可以访问data数据
    // 一般在这个函数中发起ajax请求
    2. created(){
        console.log('created',this.msg);
    },
    // 挂载之前，表示模板已经在内存中编译完成，但尚未把模板渲染到页面中。
    // 此时还没有渲染用数据生成的新dom
    3. beforeMount(){
        console.log('beforeMount',this.$el);
    },
    // 挂载完毕 ，表示内存中的模板，已经真实的挂载到了页面中，用户已经可以看到渲染好的页面了
    // 此时可以访问dom
    4. mounted(){
        console.log('mounted',this.$el);
    },
    // 更新之前，当且仅当data被修改时才触发这个生命周期函数，但此时仅仅是数据被修改，页面还未更新。
    5. beforeUpdate(){
        console.log('beforeUpdate',this.msg);
        console.log('beforeUpdate',this.$el.innerHTML);
    },
    // 更新之后， 会根据新数据生成最新的内存DOM树，重新渲染到真实的页面中去，
    // 此时的data数据和页面已完成同步
    6. updated(){
        console.log('updated',this.$el.innerHTML);
    },
    // 销毁之前，当执行beforeDestory钩子函数的时候，Vue实例就已经从运行阶段，进入到了销毁阶段。
    // 当执行beforeDestory的时候，实例身上所有的data和所有的methods，以及过滤器、指令...都处于可用状态，此时还没有真正执行销毁过程。
    7. beforeDestroy(){
        console.log('beforeDestroy');
    },
    // 销毁之后，当执行到destoryed函数的时候，组件已经被全部销毁了，data与methods均不可用。
    // 更改data数据，页面不会更新
    //应用： 清除定时器
    8. destroyed(){
        console.log('destroyed');
    }
	//当使用了<keep-alive>缓存组件时，会增加两个生命周期钩子

	//当缓存组件被激活时
	9. activated(){
    	console.log('a-当缓存组件被激活时');
	},
	10.当缓存组件失活时
	deactivated(){
		console.log('a-当缓存组件失活时');
    }
```

## Vue中keep-alive组件

### keep-alive组件：  

​		缓存组件        作用：可以让组件保留状态，避免重新渲染，提升页面性能

### 举例：

​		  在tab切换中，切换三个组件，不用keep-alive,每个组件在重新显示时，都会再执行created,并重复发起请求
​                如果在外面包裹keep-alive, 则初次创建后会缓存组件，再次显示，不会再执行created,而是直接显示缓存的内容，不会再重复发起请求

### 使用keep-alive后，缓存组件会多两个生命周期钩子：



```js
//当缓存组件被激活时    
activated(){
        console.log('a-当缓存组件被激活时');
    },
    //当缓存组件失活时
    deactivated(){
        console.log('a-当缓存组件失活时');
    }
```

### keep-alive有两个属性:  include exclude

`<keep-alive include="a1"> `  只有a1被缓存，a1是组件的name属性的值
`<keep-alive exclude="a1">`   只有a1没有被缓存

###  在动态路由的出口 `<router-view>`上使用keep-alive的技巧

如果不用keep-alive,会重复发起请求(请求写到created,不会重复请求，但写到watch中，监听$route的变化，就会重复请求)

使用的步骤：

(1) 在动态路由组件内部的created中发起ajax请求
(2)  设置key值

```js
<keep-alive>
      <router-view :key="$route.fullPath"></router-view>
 </keep-alive 
```

## vue中如何实现嵌套路由
一、在路由配置中，一级路由中添加children选项，来配置嵌套路由

```js
const routes = [
    {
        path: '/home',
        component: ()=> import(路由组件的地址),
        children: [
            {
                path: 'star',
                component: Star
            }
        ]

}

]

```





二、在父组件中，通过`<router-link to="/home/star">`跳转到该嵌套路由

三、该嵌套路由对应的出口`` <router-view>``是在它的父级路由组件中定义的
 ## 列举所有的导航守卫
          一、 全局前置守卫
          	router.beforeEach((to,from,next)=>{
          	
          	})
    
        二、 全局解析守卫
    
            和 router.beforeEach 类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
            
            router.beforeResolve((to,from,next)=>{
    
            })
    
        三、 全局后置钩子
    
            和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身：
    
            router.afterEach((to,from)=>{
    
            })
    
        四、 路由独享的守卫
    
            在路由配置上直接定义 beforeEnter 守卫
    
            {
                path: '/foo',
                component: Foo,
                beforeEnter: (to, from, next) => {
                    // ...
                }
            }
    
        五、 组件内的守卫
        
            const Foo = {
                template: `...`,
                beforeRouteEnter(to, from, next) {
                    // 在渲染该组件的对应路由被 confirm 前调用
                    // 不！能！获取组件实例 `this`
                    // 因为当守卫执行前，组件实例还没被创建
                },
                beforeRouteUpdate(to, from, next) {
                    // 在当前路由改变，但是该组件被复用时调用
                    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
                    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
                    // 可以访问组件实例 `this`
                },
                beforeRouteLeave(to, from, next) {
                    // 导航离开该组件的对应路由时调用
                    // 可以访问组件实例 `this`
                }
            }

## 完整的导航解析流程
1. 导航被触发。
2. 在失活的组件里调用 beforeRouteLeave 守卫。
3. 调用全局的 beforeEach 守卫。
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
5. 在路由配置里调用 beforeEnter。
6. 解析异步路由组件。
7. 在被激活的组件里调用 beforeRouteEnter。
8. 调用全局的 beforeResolve 守卫 (2.5+)。
9. 导航被确认。
10. 调用全局的 afterEach 钩子。
11. 触发 DOM 更新。
12. 调用 beforeRouteEnter 守卫中传给 next 的回调函数，创建好的组件实例会作为回调函数的参数传入。

## 路由中的滚动行为设置

应用场景 ：  在一个路由组件中滚动页面，切换到另一个组件中时，滚动条自动恢复到页面顶端的位置

        下面的代码要加在router对象的配置中
    
        //创建路由对象
        const router = new VueRouter({
            routes,
            scrollBehavior(to, from) {
                return { x: 0, y: 0 }
            }
        })
 ## vue中动态添加路由
 动态添加路由的API    router对象的addRoutes方法，参数必须是一个数组

         // 把下面的路由配置动态添加到路由表中
         let route = [{
            path: '/user',
            component: ()=> import("@/views/user.vue")
         }]
         this.$router.addRoutes(route)
         alert('添加了新路由')


         角色管理(权限管理)
    
            1.  在需要动态添加的路由上添加角色的路由元信息   meta: { role: ['admin','user']}
            2.  在用户登录后，会根据用户账号，来过滤有权限的路由，并把这些路由通过addRoutes方法动态添加到路由表中
