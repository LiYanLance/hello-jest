# Jest

特点
- Out of box
- Snapshot
- Great API
- Code Coverage

## Matchers

`toBe` 使用 Object.is 来测试精确相等
想要检查对象的值，请使用 `toEqual` 代替

- Truthiness
- Numbers
- Strings
- Arrays
- Exceptions
- Customize

### Snapshot

#### Best Practice

1. Treat snapshots as code

提交 snapshot, review snapshot, 把它当做代码的一部分
确保 snapshot 明确，简短. 使用强制执行这些约定样式的工具，以确保 snapshot 可读.

eslint-plugin-jest (option: no-large-snapshots) `"rules": { "jest/no-large-snapshots": ["warn", { "maxSize": 12 }] }`
snapshot-diff: 适用于测试不同 React 组件状态之间的差异. `expect(snapshotDiff(a, b)).toMatchSnapshot()`

最终的目的是让 PR 中的 snapshot 简单到可 review,
并在出错的第一时间去检查失败的原因, 而不是直接 update snapshot.

2. Snapshot 应该是确定的

不应该每次 run 都不一样, e.g. 组件渲染了 `Date.now()`
这时候应该 mock Data.now 方法, 返回一个确定的值


3. 使用有意义的 snapshot 名字
```js
exports[`<UserName /> should handle some test case`] = `null`

exports[`<UserName /> should render null`] = `null`
```
后一个可读性更好

#### TDD
尽管可以手写 snapshot, 但大多数情况下都很难写出来.
Snapshot 致力于帮助确定测试模块的输出是否变化了，而不是在最开始就指导代码的设计  
TDD? I guess it's a NO.

## Asynchronous
### setTimeout

timer 函数: setTimeout, setInterval, clearTimeout, clearInterval

`jest.useFakeTimers()` 启动 fake timer, 会把 timer 函数变成 mock 函数.
每个 it 之后会重置, 需要单独在每个 test 之前调用一次, 或者放入 setUp (beforeEach) 函数中. 

`jest.runAllTimers()` 把所有 timer 都调到执行完毕的状态.
当有 timer 内嵌 timer 的并且还调用了外层 timer 的时候, runAllTimers 会进入死循环.
`jest.runOnlyPendingTimers()` 把在 pending 状态的 timer 调整到执行完毕状态. 新创建的 timer 不动.

还有一个 API, `jest.advanceTimersByTime(ms)` 跳到一段时间 ms 以后.
所有在此刻到 ms 之间应该被执行的 timer 都会被执行.
如果在此期间还创建了新的 timer, 且 timer 的执行时间先于 ms, 那新创建的 timer 也会被执行

## Mock
当使用 babel-jest 时, jest.mock() 会被自动 hoisting. 可以使用 jest.doMock() 避免这种提升.

- mockClear: 清空 mockFn.mock.calls 和 mockFn.mock.instances
- mockReset: 同上, 且清空 mock return value 和 mock implementation
- mockRestore: 同上, 且恢复原始（非 mock）implementation, 只能用于 SpyOn

### bypassing

运行 mock_modules/09_bypassing.spec.js 会抛出错误：TypeError：response.text is not a function
这是因为 node-fetch 中的 Response 已经被 jest.mock 给 mock 了. 可以用 requireActual 引入真实的 Response 解决

```js
const { Response } = jest.requireActual("node-fetch")
```

## Config

如果有一些 test utils 需要几乎在每个测试中都引用, 可以把这个文件所在文件夹配置到 moduleDirectories, 像使用 modules 一样引用
```js
// import { render, fireEvent } from "../../../../test-utils"
import { render, fireEvent } from "test-utils"
```
假设 test-utils 文件所在的文件夹是 utils, 配置如下, 在运行测试时, jest 会一层层向上找该文件夹.
```json
{
  "moduleDirectories": [ "node_modules", "utils"]
}
```

如果使用 TS, 在 tsconfig.js 中
```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "test-utils": ["../utils/test-utils"]
    }
  }
}
```

## Trouble Shooting
Docker 或 CI 服务器中执行 Jest 测试极慢. try:  
`jest --runInBand`  
`jest --maxWorkers=4`

