# Jest

特点
- Out of box
- Snapshot
- Great API
- Code Coverage

## Matchers

`toBe` 使用 Object.is 来测试精确相等
想要检查对象的值，请使用 `toEqual` 代替

### Truthiness
### Numbers
### Strings
### Arrays
### Exceptions
### Customize

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

exports[`<UserName /> should render null`] = `null`;
```
后一个可读性更好

#### TDD
尽管可以手写 snapshot, 但大多数情况下很难写出来.
Snapshot 致力于帮助确定测试模块的输出是否变化了，而不是在最开始就指导代码的设计
TDD? I guess it's a NO.

## Asynchronous

## Mock

## Setup/Teardown
