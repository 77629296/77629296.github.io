# isFlattenable

lodash 用 `isFlattenable` 内部函数来判断某个值是否可以被展平。

明显数组和类数组的 `arguments` 对象，可以通过遍历来展平。

另外在 `ES6` 中，可以设置 `Symbol.isConcatSpreadable` 的属性来表示该对象是否可以被展平。 `Symbol.isConcatSpreadable` 的值如果被设置为真值时，该对象是可以被展平的。

## 代码实现

```jsx
/**
 * defaultShowCode: true
 */

import React from 'react';
import code from './';

export default () => '源码在index.js';
```
