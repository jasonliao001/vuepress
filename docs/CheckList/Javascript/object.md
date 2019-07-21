## Object

> `Object`对象的原生方法分成两类：`Object`本身的方法(静态方法)与`Object`的实例方法。

`Object`本身是一个函数，可以当作工具方法使用，将任意值转为对象，

- 如果参数为空（或者为`undefined`和`null`），`Object()`返回一个空对象。
- 如果参数是原始类型的值，`Object`方法将其转为对应的包装对象的实例。
- 如果`Object`方法的参数是一个对象，它总是返回该对象，即不用转换.

```javascript
Object(undefined); //{}
Object(null); //{}
Object(1) // Number{1}
function isObject(value) {
  return value === Object(value);
}
```

#### Object 的静态方法

**遍历对象的属性**

- `Object.keys()`，`Object.getOwnPropertyNames()`

**对象属性模型的相关方法**

- `Object.getOwnPropertyDescriptor()`：获取某个属性的描述对象。
- `Object.defineProperty()`：通过描述对象，定义某个属性。
- `Object.defineProperties()`：通过描述对象，定义多个属性。

**控制对象状态的方法**(局限性:1.可以通过改变原型对象，来为对象增加属性。2.如果属性值是对象，上面这些方法只能冻结属性指向的对象，而不能冻结对象本身的内容)

- `Object.preventExtensions()`：防止对象扩展。
- `Object.isExtensible()`：判断对象是否可扩展(检查是否可以为一个对象添加属性)。
- `Object.seal()`：禁止对象配置(只是禁止新增或删除属性，并不影响修改某个属性的值)。
- `Object.isSealed()`：判断一个对象是否可配置。
- `Object.freeze()`：冻结一个对象。
- `Object.isFrozen()`：判断一个对象是否被冻结。

**原型链相关方法**

- `Object.create()`：该方法可以指定原型对象和属性，返回一个新的对象。
- `Object.getPrototypeOf()`：获取对象的`Prototype`对象(返回参数对象的原型。这是获取原型对象的标准方法。)。
- `Object.setPrototypeOf`方法为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是现有对象，第二个是原型对象。

#### Object 的实例方法

- `Object.prototype.valueOf()`：返回当前对象对应的值。
- `Object.prototype.toString()`：返回当前对象对应的字符串形式。
- `Object.prototype.toLocaleString()`：返回当前对象对应的本地字符串形式。
- `Object.prototype.hasOwnProperty()`：判断某个属性是否为当前对象自身的属性，还是继承自原型对象的属性。
- `Object.prototype.isPrototypeOf()`：判断当前对象是否为另一个对象的原型。
- `Object.prototype.propertyIsEnumerable()`：判断某个属性是否可枚举

### 属性描述对象

> JavaScript 提供了一个内部数据结构，用来描述对象的属性，控制它的行为，比如该属性是否可写、可遍历等等。这个内部数据结构称为“属性描述对象”（attributes object）。每个属性都有自己对应的属性描述对象，保存该属性的一些元信息。

```javascript
{
  value: 123,
  writable: true,
  enumerable: true,
  configurable: true,
  get: undefined,
  set: undefined
}
```

1. `value`: 是该属性的属性值，默认为`undefined`。
2. `writable`: 是一个布尔值，表示属性值（value）是否可改变（即是否可写），默认为`true`。
3. `enumerable`:是一个布尔值，表示该属性是否可遍历，默认为`true`。如果设为`false`，会使得某些操作（比如`for...in`循环、`Object.keys()`,`JSON.stringify`）跳过该属性。
4. `configurable`:是一个布尔值，表示可配置性，默认为`true`。如果设为`false`，将阻止某些操作改写该属性，比如无法删除该属性，也不得改变该属性的属性描述对象（`value`属性除外）。也就是说，`configurable`属性控制了属性描述对象的可写性。
5. `get`:是一个函数，表示该属性的取值函数（getter），默认为`undefined`。
6. `set`:是一个函数，表示该属性的存值函数（setter），默认为`undefined`。

- `Object.getOwnPropertyDescriptor()`用于对象自身的属性，不能用于继承的属性
- `Object.getOwnPropertyNames()`方法返回一个数组，成员是参数对象自身的全部属性的属性名，不管该属性是否可遍历。
- `Object.defineProperty()`，`Object.defineProperties()`方法允许通过属性描述对象，定义或修改一个属性，然后返回修改后的对象
- `Object.prototype.propertyIsEnumerable()`用来判断某个属性是否可遍历。

注意：取值函数`get`不能接受参数，存值函数`set`只能接受一个参数（即属性的值）

### 包装对象

> 所谓“包装对象”，就是分别与数值、字符串、布尔值相对应的`Number`、`String`、`Boolean`三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象。

##### 原始类型与实例对象的自动转换

原始类型的值，可以自动当作包装对象调用，即调用各种包装对象的属性和方法。这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，在使用后立刻销毁实例。

比如，字符串可以调用`length`属性，返回字符串的长度。

```javascript
abc'.length // 3
```

上面代码中，`abc`是一个字符串，本身不是对象，不能调用`length`属性。JavaScript 引擎自动将其转为包装对象，在这个对象上调用`length`属性。调用结束后，这个临时对象就会被销毁。这就叫原始类型与实例对象的自动转换。

### 面向对象编程

##### new 命令的原理

> 1. 创建一个空对象，作为将要返回的对象实例。
> 2. 将这个空对象的原型，指向构造函数的`prototype`属性。
> 3. 将这个空对象赋值给函数内部的`this`关键字。
> 4. 开始执行构造函数内部的代码。

```javascript
function _new(/* 构造函数 */ constructor, /* 构造函数参数 */ params) {
  // 将 arguments 对象转为数组
  var args = [].slice.call(arguments);
  // 取出构造函数
  var constructor = args.shift();
  // 创建一个空对象，继承构造函数的 prototype 属性
  var context = Object.create(constructor.prototype);
  // 执行构造函数
  var result = constructor.apply(context, args);
  // 如果返回结果是对象，就直接返回，否则返回 context 对象
  return (typeof result === 'object' && result != null) ? result : context;
}

// 实例
var actor = _new(Person, '张三', 28);
```

##### new.target

> 函数内部可以使用`new.target`属性。如果当前函数是`new`命令调用，`new.target`指向当前函数，否则为`undefined`。

##### Object.create() 创建实例对象

> 生成实例对象的常用方法是，使用`new`命令让构造函数返回一个实例。但是很多时候，只能拿到一个实例对象，它可能根本不是由构建函数生成的，那么能不能从一个实例对象，生成另一个实例对象呢？
>
> JavaScript 提供了`Object.create`方法，用来满足这种需求。该方法接受一个对象作为参数，然后以它为原型，返回一个实例对象。该实例完全继承原型对象的属性。

```javascript
// Object.create 实现
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
```

除了对象的原型，`Object.create`方法还可以接受第二个参数。该参数是一个属性描述对象，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性。

```javascript
var obj = Object.create({}, {
  p1: {
    value: 123,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  p2: {
    value: 'abc',
    enumerable: true,
    configurable: true,
    writable: true,
  }
});

// 等同于
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
```

`Object.create`方法生成的对象，继承了它的原型对象的构造函数。

```javascript
function A() {}
var a = new A();
var b = Object.create(a);
b.constructor === A // true
b instanceof A // true
```

#### prototype 对象

> JavaScript 继承机制的设计思想就是，原型对象的所有属性和方法，都能被实例对象共享。也就是说，如果属性和方法定义在原型上，那么所有实例对象就能共享，不仅节省了内存，还体现了实例对象之间的联系。JavaScript 规定，每个函数都有一个`prototype`属性，指向一个对象。

#### 原型链

> 读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，如果找不到，就到它的原型去找，如果还是找不到，就到原型的原型去找。如果直到最顶层的`Object.prototype`还是找不到，则返回`undefined`。如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）

如果让构造函数的`prototype`属性指向一个数组，就意味着实例对象可以调用数组方法。

```javascript
var MyArray = function () {};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray();
mine.push(1, 2, 3);
mine.length // 3
mine instanceof Array // true
```

### constructor 属性

> `prototype`对象有一个`constructor`属性，默认指向`prototype`对象所在的构造函数。由于`constructor`属性定义在`prototype`对象上面，意味着可以被所有实例对象继承。

### 多重继承

> JavaScript 不提供多重继承功能，即不允许一个对象同时继承多个对象。但是，可以通过变通方法，实现这个功能。

```javascript
function M1() {
  this.hello = 'hello';
}
function M2() {
  this.world = 'world';
}
function S() {
  M1.call(this);
  M2.call(this);
}
// 继承 M1
S.prototype = Object.create(M1.prototype);
// 继承链上加入 M2
Object.assign(S.prototype, M2.prototype);
// 指定构造函数
S.prototype.constructor = S;
var s = new S();
s.hello // 'hello：'
s.world // 'world'
```

组合继承