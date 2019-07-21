## 数据类型

### 基础类型

1. 数值（number）：整数和小数（比如 1 和 3.14）
2. 字符串（string）：文本（比如 Hello World）。
3. 布尔值（boolean）：表示真伪的两个特殊值，即 true（真）和 false（假）
4. undefined：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
5. null：表示空值，即此处的值为空。
6. 对象（object）：各种值组成的集合。
7. symbol

####   检测

- `typeof`运算符
- `instanceof`运算符(用来比较一个对象是否为某个构造函数的实例)
- `Object.prototype.toString`方法

### null 与 undefined

> JavaScript 的设计者 Brendan Eich，觉得这样做还不够。首先，第一版的 JavaScript 里面，null 就像在 Java 里一样，被当成一个对象，Brendan Eich 觉得表示“无”的值最好不是对象。其次，那时的 JavaScript 不包括错误处理机制，Brendan Eich 觉得，如果 null 自动转为 0，很不容易发现错误。
> 因此，他又设计了一个 undefined。区别是这样的：null 是一个表示“空”的对象，转为数值时为 0；undefined 是一个表示”此处无定义”的原始值，转为数值时为 NaN。

### 布尔值

转换规则是除了下面六个值被转为`false`，其他值都视为`true`。

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `""`或`''`（空字符串）

## 数据类型转换

### 强制转换

**Number**

> `Number`方法的参数是对象时，将返回`NaN`，除非是包含单个数值的数组。

```javascript
Number(undefined) // NaN
Number(null) //0
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```

**Boolean**

如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与`Boolean`函数的作用相同。这是一种常用的类型转换的写法。

```javascript
!!x
// 等同于
Boolean(x)
```

**String**

```javascript
String(undefined) // "undefined"
String(null) // "null"
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

## 错误机制处理

1. `SyntaxError`对象是解析代码时发生的语法错误
2. `ReferenceError`对象是引用一个不存在的变量时发生的错误。
3. `RangeError`对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是`Number`对象的方法参数超出范围，以及函数堆栈超过最大值。
4. `TypeError`对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用`new`命令，就会抛出这种错误，因为`new`命令的参数应该是一个构造函数。
5. `URIError`对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及`encodeURI()`、`decodeURI()`、`encodeURIComponent()`、`decodeURIComponent()`、`escape()`和`unescape()`这六个函数。
6. `eval`函数没有被正确执行时，会抛出`EvalError`错误。该错误类型已经不再使用了，只是为了保证与以前代码兼容，才继续保留。

### 表达式还是语句？

对象采用大括号表示，这导致了一个问题：如果行首是一个大括号，它到底是表达式还是语句？

```javascript
// call的实现
({ foo: 123})
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}
```

JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含`foo`属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签`foo`，指向表达式`123`。为了避免这种歧义，V8 引擎规定，如果行首是大括号，一律解释为对象。不过，为了避免歧义，最好还是在大括号前加上圆括号。

这种差异在`eval`语句（作用是对字符串求值）中反映得最明显。如果没有圆括号，`eval`将其理解为一个代码块；加上圆括号以后，就理解成一个对象









#### 

