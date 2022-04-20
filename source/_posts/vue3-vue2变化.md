---
title: vue3-vue2变化
abbrlink: 2f025768
cover: /img/bgb.jpg
date: 2022-04-02 14:14:15
tags:
    - [vue3]
categories:
    - [vue]

---
<p id="hitokotoText"></p>
<p id="hitokotoFrom"></p>

## Vue2.x 与 Vue3.0 的对比

- Vue2 对 TypeScript 支持不友好，所有属性都放在 `this` 对象上，难以推断出数据类型。
- Vue2 大量的 API 挂载在 Vue 对象的原型上，难以实现 tree shaking。
- Vue2 架构层面对跨平台 DOM 渲染开发支持不友好。
- Vue3 采用 Composition API，受 React Hook 启发。
- Vue3 更好地支持 JSX。
- Vue3 的 Template 支持多个根标签，Vue2.x 不支持。
- Vue3 对虚拟 DOM 进行了重写、对模板的编译进行了优化。
- …
<!-- more -->
## setup() 函数

`setup()` 是 Vue3.0 专门为组件提供的新属性。它为我们使用 Vue3.0 的 Composition API 新特性提供了统一的入口，`setup()` 在 `beforeCreate()` 之后和 `created()` 之前执行，Vue3.0 取消了这两个 2.x 版本的生命周期钩子函数，统一用 `setup()` 代替，该函数相当于一个生命周期函数，Vue2.x 中的 `data`，`methods`，`watch` 等全部都用对应的新增 API 写在 `setup()` 中。

```js
setup(props, context) {

    // context.attrs
    // context.slots
    // context.parent
    // context.root
    // context.emit
    // context.refs

    return {

    }
  }
```

- `props` 用来接收 `props` 数据。
- `context` 用来定义上下文，上下文对象中包含了一些有用的属性，这些属性在 Vue2.x 中需要通过 `this` 才能访问到，但在 `setup()` 中无法访问到 `this`。
- `return {}` 返回值，返回的是响应式数据，template 模版中需要使用的函数。

## reactive() 函数

`reactive()` 接收一个普通对象，返回一个响应式的数据对象，响应式数据对象创建出来之后，在 `setup()` 中 `return` 出去，即可在 `template` 中使用。

```js
<template> {{ name }} </template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from "vue";
  export default defineComponent({
    setup(props, context) {
      const person = reactive({
        name: "zhangsan",
        age: 18,
      });

      return person;
    },
  });
</script>
```

## ref() 函数

`ref()` 用来根据给定的值创建一个响应式的数据对象，`ref()` 调用的返回值是一个对象，这个对象上只包含一个 `value` 属性，只在 `setup()` 函数内部获取 `ref()` 对象的值需要加上 `.value`。

```js
<template>
  <div class="mine">{{ count }}</div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    setup() {
      const count = ref<number>(10);
      console.log(count.value);
      return {
        count,
      };
    },
  });
</script>
```

在 `reactive()` 对象中访问 `ref()` 创建的响应式数据对象时，不需要加 `.value`。

```js
<template>
  <div class="mine">{{ count }} - {{ n }}</div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from "vue";
  export default defineComponent({
    setup() {
      const count = ref<number>(10);
      const obj = reactive({
        n: 100,
        count,
      });
      // 通过 reactive 来获取 ref 的值时，不需要使用 .value 属性
      console.log(obj.count); // 10
      return {
        ...toRefs(obj),
      };
    },
  });
</script>
```

## isRef() 函数

`isRef()` 用来判断某个值是否为 `ref()` 创建出来的对象。

```js
import { defineComponent, isRef, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    const name: string = "vue";
    const age = ref<number>(18);
    console.log(isRef(age)); // true
    console.log(isRef(name)); // false

    return {
      age,
      name,
    };
  },
});
```

## toRefs() 函数

`toRefs()` 可以将 `reactive()` 创建出来的响应式对象，转换为普通的对象，这个普通对象上的每个属性节点，都是 `ref()` 类型的响应式数据。

```js
<template>
  <div class="mine">{{ name }} {{ age }}</div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs } from "vue";
  export default defineComponent({
    setup(props, context) {
      const person = reactive({
        name: "zhangsan",
      });

      const age = ref(18);

      return {
        ...toRefs(person),
        age,
      };
    },
  });
</script>
```

## computed() 函数

`computed()` 用来创建计算属性，和前面一样，它返回的值是一个 `ref()` 对象。里面可以传方法，或者对象，对象中包含 `set()`、`get()` 方法。

### 创建只读的计算属性

```js
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    const age = ref(18);

    // 根据 age 的值，创建一个响应式的计算属性 readOnlyAge，它会根据依赖的 ref 自动计算并返回一个新的 ref
    const readOnlyAge = computed(() => age.value++); // 19

    return {
      age,
      readOnlyAge,
    };
  },
});
```

### 通过 set()、get() 方法创建一个可读可写的计算属性

```js
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    const age = ref<number>(18);

    const computedAge = computed({
      get: () => age.value + 1,
      set: (value) => age.value + value,
    });

    // 为计算属性赋值的操作，会触发 set 函数，触发 set 函数后，age 的值会被更新
    age.value = 100;
    return {
      age,
      computedAge,
    };
  },
});
```

## watch() 函数

`watch()` 用来监听特定的数据源，并在回调函数中返回。默认情况是懒执行的，仅在监听的源数据变更时才执行回调。

### 监听 reactive() 创建的数据源

```js
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  setup(props, context) {
    const person = reactive<Person>({ name: "vue", age: 10 });

    watch(
      () => person.age,
      (newValue, oldValue) => {
        console.log(newValue); // 100
        console.log(oldValue); // 10
      }
    );

    // 修改 age 时会触发 watch 的回调，打印出改变前后的值
    person.age = 100;

    return {
      ...toRefs(person),
    };
  },
});
```

### 监听用 ref() 创建的数据源

```js
import { defineComponent, ref, watch } from "vue";
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  setup(props, context) {
    const age = ref<number>(10);

    watch(age, (oldValue, newValue) => {
      console.log("oldValue: ", oldValue); // 10
      console.log("newValue: ", newValue); // 100
    });

    // 修改 age 时会触发 watch 的回调, 打印变更后的值
    age.value = 100;

    return {
      age,
    };
  },
});
```

### 同时监听多个值

```js
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  setup(props, context) {
    const state = reactive<Person>({ name: "zhangsan", age: 10 });

    watch(
      [() => state.age, () => state.name],
      ([newAge, newName], [oldAge, oldName]) => {
        console.log(newAge);
        console.log(newName);

        console.log(oldAge);
        console.log(oldName);
      }
    );
    // 修改 state 时会触发 watch 的回调，打印变更前后的值，此时需要注意，更改其中一个值，都会执行 watch 的回调
    state.age = 100;
    state.name = "lisi";

    return {
      ...toRefs(state),
    };
  },
});
```

### stop 停止监听

在 `setup()` 内创建的 `watch()` 监视，会在当前组件被销毁的时候自动停止。如果想要明确地停止某个监听，可以调用 `watch()` 的返回值即可。

```js
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
interface Person {
  name: string;
  age: number;
}
export default defineComponent({
  setup(props, context) {
    const state = reactive<Person>({ name: "zhangsan", age: 10 });

    const stop = watch(
      [() => state.age, () => state.name],
      ([newAge, newName], [oldAge, oldName]) => {
        console.log(newAge);
        console.log(newName);

        console.log(oldAge);
        console.log(oldName);
      }
    );
    state.age = 100;
    state.name = "lisi";

    setTimeout(() => {
      stop();
      // 此时修改时, 不会触发 watch 回调
      state.age = 1000;
      state.name = "wangwu";
    }, 1000); // 1秒之后讲取消watch的监听

    return {
      ...toRefs(state),
    };
  },
});
```

## LifeCycle Hooks 新的生命周期函数

```js
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onErrorCaptured,
  onMounted,
  onUnmounted,
  onUpdated,
} from "vue";
export default defineComponent({
  setup(props, context) {
    onBeforeMount(() => {
      console.log("beformounted!");
    });
    onMounted(() => {
      console.log("mounted!");
    });

    onBeforeUpdate(() => {
      console.log("beforupdated!");
    });
    onUpdated(() => {
      console.log("updated!");
    });

    onBeforeUnmount(() => {
      console.log("beforunmounted!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });

    onErrorCaptured(() => {
      console.log("errorCaptured!");
    });

    return {};
  },
});
```

## Template refs

通过 `refs` 来返回真实 DOM 元素，为了获得对模板内元素或组件实例的引用，我们可以在 `setup()` 中声明一个 `ref()` 并返回它。

1. 在 HTML 添加 `ref` 的属性。
2. 在 `steup()` 中定义一个 `ref()`。
3. 在 `steup()` 中返回 `ref()` 的实例.
4. `onMounted()` 中可以得到 `ref()` 的 RefImpl 的对象, 通过 `.value` 获取真实 DOM。

```js
<template>
  <div ref="elmRefs">
    <span>test</span>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  export default defineComponent({
    setup(props, context) {
      // 获取真实DOM
      const elmRefs = ref<null | HTMLElement>(null);

      onMounted(() => {
        console.log(elmRefs.value); // 得到一个 RefImpl 的对象, 通过 .value 访问到数据
      });

      return {
        elmRefs,
      };
    },
  });
</script>
```

## Vue3 全局配置

通过 Vue 实例上 config 来配置，包含 Vue 应用程序全局配置的对象。在挂载应用程序之前修改下面列出的属性。

```js
const app = Vue.createApp({})
app.config = {...}
```

为组件渲染功能和观察程序期间的未捕获错误分配处理程序

```js
app.config.errorHandler = (err, vm, info) => {};
```

可以在应用程序内的任何组件实例中访问的全局属性，组件的属性将具有优先权。这可以代替 Vue2.x `Vue.prototype` 扩展。

```js
import axios from "axios";
const app = Vue.createApp({});
app.config.globalProperties.$http = axios;
```

可以在组件内通过 `getCurrentInstance()` 来获取全局 `globalProperties` 中配置的信息，`getCurrentInstance()` 获取当前组件的实例，然后通过 ctx 属性获得当前上下文，这样我们就能在 `setup()` 中使用 router 和 vuex，通过这个属性我们就可以操作变量、全局属性、组件属性等等。

```js
setup() {
  const { ctx } = getCurrentInstance();
  // ctx.$http
}
```

## Suspense 组件

在介绍 Vue 的 Suspense 组件之前，我们有必要先了解一下 React 的 Suspense 组件，因为它们的功能类似。
React.lazy 接受一个函数，这个函数需要动态调用 `import()`。它必须返回一个 `Promise`，该 `Promise` 需要 `resolve` 一个 default export 的 React 组件。

```js
import React, { Suspense } from "react";

const myComponent = React.lazy(() => import("./Component"));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <myComponent />
      </Suspense>
    </div>
  );
}
```

Vue3 也新增了 React.lazy 类似功能的 `defineAsyncComponent` 函数，处理动态引入的组件。`defineAsyncComponent` 可以接受返回 `Promise` 的工厂函数。从服务器检索到组件定义时，应该调用 `Promise` 的解析回调。您还可以调用 `reject(reason)` 来指示负载已经失败。

```js
import { defineAsyncComponent } from "vue";

const AsyncComp = defineAsyncComponent(
  () => import("./components/AsyncComponent.vue")
);

app.component("async-component", AsyncComp);
```

Vue3 也新增了 Suspense 组件:

```js
<template>
  <Suspense>
    <template #default>
      <my-component />
    </template>
    <template #fallback> Loading ... </template>
  </Suspense>
</template>

<script lang="ts">
  import { defineComponent, defineAsyncComponent } from "vue";
  const MyComponent = defineAsyncComponent(() => import("./Component"));

  export default defineComponent({
    components: {
      MyComponent,
    },
    setup() {
      return {};
    },
  });
</script>
```
