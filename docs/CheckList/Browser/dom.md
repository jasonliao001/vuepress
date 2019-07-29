## Dom

> DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。
>
> 浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。
>
> DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。

### Node 接口的方法

#### Node.hasChildNodes()

`hasChildNodes`方法结合`firstChild`属性和`nextSibling`属性，可以遍历当前节点的所有后代节点。

```javascript
function DOMComb(parent, callback) {
  if (parent.hasChildNodes()) {
    for (var node = parent.firstChild; node; node = node.nextSibling) {
      DOMComb(node, callback);
    }
  }
  callback(parent);
}
// 用法
DOMComb(document.body, console.log)
```

#### Node.cloneNode()

使用注意事项

(1）克隆一个节点，会拷贝该节点的所有属性，但是会丧失`addEventListener`方法和`on-`属性（即`node.onclick = fn`），添加在这个节点上的事件回调函数。

（2）该方法返回的节点不在文档之中，即没有任何父节点，必须使用诸如`Node.appendChild`这样的方法添加到文档之中。

（3）克隆一个节点之后，DOM 有可能出现两个有相同`id`属性（即`id="xxx"`）的网页元素，这时应该修改其中一个元素的`id`属性。如果原节点有`name`属性，可能也需要修改。

#### Node.contains()

- 参数节点为当前节点。
- 参数节点为当前节点的子节点。
- 参数节点为当前节点的后代节点。

#### Node.compareDocumentPosition()

`compareDocumentPosition`方法的用法，与`contains`方法完全一致，返回一个七个比特位的二进制值，表示参数节点与当前节点的关系

#### Node.isEqualNode()，Node.isSameNode()

`isEqualNode`方法返回一个布尔值，用于检查两个节点是否相等。所谓相等的节点，指的是两个节点的类型相同、属性相同、子节点相同。

#### Node.normalize()

`normailize`方法用于清理当前节点内部的所有文本节点（text）。它会去除空的文本节点，并且将毗邻的文本节点合并成一个，也就是说不存在空的文本节点，以及毗邻的文本节点。

#### Node.getRootNode()

`getRootNode`方法返回当前节点所在文档的根节点。

### NodeList 接口

> `NodeList`实例是一个类似数组的对象，它的成员是节点对象。通过以下方法可以得到`NodeList`实例
>
> - `Node.childNodes`
> - `document.querySelectorAll()`、`document.getElementsByTagName()`等节点搜索方法
> - NodeList.prototype.keys()，NodeList.prototype.values()，NodeList.prototype.entries()循环遍历

### HTMLCollection 接口

> `HTMLCollection`是一个节点对象的集合，只能包含元素节点（element），不能包含其他类型的节点。它的返回值是一个类似数组的对象，但是与`NodeList`接口不同，`HTMLCollection`没有`forEach`方法，只能使用`for`循环遍历。
>
> 返回`HTMLCollection`实例的，主要是一些`Document`对象的集合属性，比如`document.links`、`docuement.forms`、`document.images`等。

## document对象

`document`对象是文档的根节点，每张网页都有自己的`document`对象。`window.document`属性就指向这个对象。只要浏览器开始载入 HTML 文档，该对象就存在了，可以直接使用。

`document`对象有不同的办法可以获取。

- 正常的网页，直接使用`document`或`window.document`。
- `iframe`框架里面的网页，使用`iframe`节点的`contentDocument`属性。
- Ajax 操作返回的文档，使用`XMLHttpRequest`对象的`responseXML`属性。
- 内部节点的`ownerDocument`属性。

#### 快捷方式属性

**document.documentElement**

`document.documentElement`属性返回当前文档的根节点（root）。它通常是`document`节点的第二个子节点，紧跟在`document.doctype`节点后面。HTML网页的该属性，一般是`<html>`节点

**document.scrollingElement**

`document.scrollingElement`属性返回文档的滚动元素。也就是说，当文档整体滚动时，到底是哪个元素在滚动。

标准模式下，这个属性返回的文档的根元素`document.documentElement`（即`<html>`）。兼容（quirk）模式下，返回的是`<body>`元素，如果该元素不存在，返回`null`。

**document.activeElement**

**document.fullscreenElement**

`document.fullscreenElement`属性返回当前以全屏状态展示的 DOM 元素。如果不是全屏状态，该属性返回`null`。

#### 文档静态信息属性

**document.domain**

`ocument.domain`属性返回当前文档的域名，不包含协议和接口。比如，网页的网址是`http://www.example.com:80/hello.html`，那么`domain`属性就等于`www.example.com`。如果无法获取域名，该属性返回`null`。

**document.referrer**

`document.referrer`属性返回一个字符串，表示当前文档的访问者来自哪里。

**document.readyState**

- `loading`：加载 HTML 代码阶段（尚未完成解析）
- `interactive`：加载外部资源阶段
- `complete`：加载完成

1. 浏览器开始解析 HTML 文档，`document.readyState`属性等于`loading`。
2. 浏览器遇到 HTML 文档中的`<script>`元素，并且没有`async`或`defer`属性，就暂停解析，开始执行脚本，这时`document.readyState`属性还是等于`loading`。
3. HTML 文档解析完成，`document.readyState`属性变成`interactive`。
4. 浏览器等待图片、样式表、字体文件等外部资源加载完成，一旦全部加载完成，`document.readyState`属性变成`complete`。

```javascript
// 基本检查
if (document.readyState === 'complete') {
  // ...
}
// 轮询检查
var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    clearInterval(interval);
    // ...
  }
}, 100);
```

#### document.createDocumentFragment()

> `DocumentFragment`是一个存在于内存的 DOM 片段，不属于当前文档，常常用来生成一段较复杂的 DOM 结构，然后再插入当前文档。这样做的好处在于，因为`DocumentFragment`不属于当前文档，对它的任何改动，都不会引发网页的重新渲染，比直接修改当前文档的 DOM 有更好的性能表现。

```javascript
var docfrag = document.createDocumentFragment();

[1, 2, 3, 4].forEach(function (e) {
  var li = document.createElement('li');
  li.textContent = e;
  docfrag.appendChild(li);
});

var element  = document.getElementById('ul');
element.appendChild(docfrag);
```

#### document.createEvent()

`document.createEvent`方法生成一个事件对象（`Event`实例），该对象可以被`element.dispatchEvent`方法使用，触发指定事件。

```javascript
var event = document.createEvent('Event');
event.initEvent('build', true, true);
document.addEventListener('build', function (e) {
  console.log(e.type); // "build"
}, false);
document.dispatchEvent(event);
```

#### document.adoptNode()，document.importNode()

`document.adoptNode`方法将某个节点及其子节点，从原来所在的文档或`DocumentFragment`里面移除，归属当前`document`对象，返回插入后的新节点。插入的节点对象的`ownerDocument`属性，会变成当前的`document`对象，而`parentNode`属性是`null`。

#### document.createNodeIterator()

`document.createNodeIterator`方法返回一个子节点遍历器。

#### document.createTreeWalker()

`document.createTreeWalker`方法返回一个 DOM 的子树遍历器。它与`document.createNodeIterator`方法基本是类似的，区别在于它返回的是`TreeWalker`实例，后者返回的是`NodeIterator`实例。另外，它的第一个节点不是根节点。

`document.createTreeWalker`方法的第一个参数是所要遍历的根节点，第二个参数指定所要遍历的节点类型（与`document.createNodeIterator`方法的第二个参数相同）。

## Element对象

**Element.draggable**

`Element.draggable`属性返回一个布尔值，表示当前元素是否可拖动。该属性可读写。

**Element.tabIndex**

`Element.tabIndex`属性返回一个整数，表示当前元素在 Tab 键遍历时的顺序。该属性可读写。

`tabIndex`属性值如果是负值（通常是`-1`），则 Tab 键不会遍历到该元素。如果是正整数，则按照顺序，从小到大遍历。如果两个元素的`tabIndex`属性的正整数值相同，则按照出现的顺序遍历。遍历完所有`tabIndex`为正整数的元素以后，再遍历所有`tabIndex`等于`0`、或者属性值是非法值、或者没有`tabIndex`属性的元素，顺序为它们在网页中出现的顺序。

**Element.title**

`Element.title`属性用来读写当前元素的 HTML 属性`title`。该属性通常用来指定，鼠标悬浮时弹出的文字提示框。

**Element.hidden**

`Element.hidden`属性返回一个布尔值，表示当前元素的`hidden`属性，用来控制当前元素是否可见。该属性可读写。

**Element.contentEditable，Element.isContentEditable**

HTML 元素可以设置`contentEditable`属性，使得元素的内容可以编辑。

##### Element.dataset

网页元素可以自定义`data-`属性，用来添加数据。

HTML 代码中，`data-`属性的属性名，只能包含英文字母、数字、连词线（`-`）、点（`.`）、冒号（`:`）和下划线（`_`）。它们转成 JavaScript 对应的`dataset`属性名，规则如下

- 开头的`data-`会省略。
- 如果连词线后面跟了一个英文字母，那么连词线会取消，该字母变成大写。
- 其他字符不变。

##### Element.scrollIntoView()

`Element.scrollIntoView`方法滚动当前元素，进入浏览器的可见区域，类似于设置`window.location.hash`的效果。

##### Element.getBoundingClientRect()

`Element.getBoundingClientRect`方法返回一个对象，提供当前元素节点的大小、位置等信息，基本上就是 CSS 盒状模型的所有信息。

- `x`：元素左上角相对于视口的横坐标
- `y`：元素左上角相对于视口的纵坐标
- `height`：元素高度
- `width`：元素宽度
- `left`：元素左上角相对于视口的横坐标，与`x`属性相等
- `right`：元素右边界相对于视口的横坐标（等于`x + width`）
- `top`：元素顶部相对于视口的纵坐标，与`y`属性相等
- `bottom`：元素底部相对于视口的纵坐标（等于`y + height`）

##### Element.insertAdjacentElement()

`Element.insertAdjacentElement`方法在相对于当前元素的指定位置，插入一个新的节点。该方法返回被插入的节点，如果插入失败，返回`null`。

```
element.insertAdjacentElement(position, element);
```

- `beforebegin`：当前元素之前
- `afterbegin`：当前元素内部的第一个子节点前面
- `beforeend`：当前元素内部的最后一个子节点后面
- `afterend`：当前元素之后

注意，`beforebegin`和`afterend`这两个值，只在当前节点有父节点时才会生效。如果当前节点是由脚本创建的，没有父节点，那么插入会失败。

##### Element.insertAdjacentHTML()，Element.insertAdjacentText()

```javascript
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
```

该方法只是在现有的 DOM 结构里面插入节点，这使得它的执行速度比`innerHTML`方法快得多。

注意，该方法不会转义 HTML 字符串，这导致它不能用来插入用户输入的内容，否则会有安全风险。

`Element.insertAdjacentText`方法在相对于当前节点的指定位置，插入一个文本节点，用法与`Element.insertAdjacentHTML`方法完全一致。

## DocumentFragment节点

`DocumentFragment`节点代表一个文档的片段，本身就是一个完整的 DOM 树形结构。它没有父节点，`parentNode`返回`null`，但是可以插入任意数量的子节点。它不属于当前文档，操作`DocumentFragment`节点，要比直接操作 DOM 树快得多。

```javascript
var docFrag = document.createDocumentFragment();
// 等同于
var docFrag = new DocumentFragment();

var li = document.createElement('li');
li.textContent = 'Hello World';
docFrag.appendChild(li);

document.querySelector('ul').appendChild(docFrag);
```

`DocumentFragment`节点对象没有自己的属性和方法，全部继承自`Node`节点和`ParentNode`接口。也就是说，`DocumentFragment`节点比`Node`节点多出以下四个属性。

- `children`：返回一个动态的`HTMLCollection`集合对象，包括当前`DocumentFragment`对象的所有子元素节点。
- `firstElementChild`：返回当前`DocumentFragment`对象的第一个子元素节点，如果没有则返回`null`。
- `lastElementChild`：返回当前`DocumentFragment`对象的最后一个子元素节点，如果没有则返回`null`。
- `childElementCount`：返回当前`DocumentFragment`对象的所有子元素数量。

## Image对象

#### 特性相关的属性

**HTMLImageElement.srcset，HTMLImageElement.sizes**

`HTMLImageElement.srcset`属性和`HTMLImageElement.sizes`属性，分别用于读写`<img>`元素的`srcset`属性和`sizes`属性。它们用于`<img>`元素的响应式加载。`srcset`属性可以单独使用，但是`sizes`属性必须与`srcset`属性同时使用。

```javascript
// HTML 代码如下
// <img srcset="example-320w.jpg 320w,
//              example-480w.jpg 480w,
//              example-800w.jpg 800w"
//      sizes="(max-width: 320px) 280px,
//             (max-width: 480px) 440px,
//             800px"
//      id="myImg"
//      src="example-800w.jpg">
var img = document.getElementById('myImg');
img.srcset
// "example-320w.jpg 320w,
//  example-480w.jpg 480w,
//  example-800w.jpg 800w"

img.sizes
// "(max-width: 320px) 280px,
//  (max-width: 480px) 440px,
//  800px"
```

#### HTMLImageElement.naturalWidth，HTMLImageElement.naturalHeight

`HTMLImageElement.naturalWidth`属性表示图像的实际宽度（单位像素），`HTMLImageElement.naturalHeight`属性表示实际高度。这两个属性返回的都是整数。

如果图像还没有指定或不可得，这两个属性都等于`0`。

#### HTMLImageElement.crossOrigin

`HTMLImageElement.crossOrigin`属性用于读写`<img>`元素的`crossorigin`属性，表示跨域设置。

- `anonymous`：跨域请求不要求用户身份（credentials），这是默认值。
- `use-credentials`：跨域请求要求用户身份。

```javascript
// HTML 代码如下
// <img crossorigin="anonymous" id="myImg" src="pic.jpg">
var img = document.getElementById('img');
img.crossOrigin // "anonymous"
```

#### HTMLImageElement.referrerPolicy

`HTMLImageElement.referrerPolicy`用来读写`<img>`元素的 HTML 属性`referrerpolicy`，表示请求图像资源时，如何处理 HTTP 请求的`referrer`字段

- `no-referrer`：不带有`referrer`字段。
- `no-referrer-when-downgrade`：如果请求的地址不是 HTTPS 协议，就不带有`referrer`字段，这是默认值。
- `origin`：`referrer`字段是当前网页的地址，包含协议、域名和端口。
- `origin-when-cross-origin`：如果请求的地址与当前网页是同源关系，那么`referrer`字段将带有完整路径，否则将只包含协议、域名和端口。
- `unsafe-url`：`referrer`字段包含当前网页的地址，除了协议、域名和端口以外，还包括路径。这个设置是不安全的，因为会泄漏路径信息。

#### HTMLImageElement.x，HTMLImageElement.y

`HTMLImageElement.x`属性返回图像左上角相对于页面左上角的横坐标，`HTMLImageElement.y`属性返回纵坐标。