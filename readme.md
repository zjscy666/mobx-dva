### mobx
* observable 将JS基本数据类型、引用类型、普通对象、类实例、数组和映射，转换为可观察数据。
* action 严格模式下，用来修改observable的数据的动作，只有action和runInAction才能修改observable
* runInAction 用来在异步的时候执行修改observable的数据的动作。例如网络请求后修改数据
* computed 根据现有的observable的值或其它计算值衍生出的值。只有在view使用了computed的值，computed才会执行计算

### mobx-react
* observer 将 React组件 转变成响应式组件。
* inject 将组件连接到提供的stores 。一般是用来连接到上层组件提供的store或者全局store
* Provider 它是一个react组件，用来向下传递 stores。任意子组件可以使用inject来获取Provider的store(一定要放根元素，不然会报错)

### 严格模式
* mobx.configure({ enforceActions: true })

### 装饰器如果报错，请配置vscode等编辑器