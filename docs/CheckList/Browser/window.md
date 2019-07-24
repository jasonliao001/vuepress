## 全局对象属性

- `window.document`：指向`document`对象，
- `window.location`：指向`Location`对象，用于获取当前窗口的 URL 信息。
- `window.navigator`：指向`Navigator`对象，用于获取环境信息。
- `window.history`：指向`History`对象，表示浏览器的浏览历史。
- `window.localStorage`：指向本地储存的 localStorage 数据。
- `window.sessionStorage`：指向本地储存的 sessionStorage 数据。
- `window.console`：指向`console`对象，用于操作控制台。
- `window.screen`：指向`Screen`对象，表示屏幕信息。

## Screen 对象

`Screen.orientation`：返回一个对象，表示屏幕的方向。该对象的`type`属性是一个字符串，表示屏幕的具体方向，`landscape-primary`表示横放，`landscape-secondary`表示颠倒的横放，`portrait-primary`表示竖放，`portrait-secondary`。

```javascript
window.screen.orientation
// { angle: 0, type: "landscape-primary", onchange: null }
```

## Navigator 对象

`navigator.onLine`属性返回一个布尔值，表示用户当前在线还是离线（浏览器断线）。

> 有时，浏览器可以连接局域网，但是局域网不能连通外网。这时，有的浏览器的`onLine`属性会返回`true`，所以不能假定只要是`true`，用户就一定能访问互联网。不过，如果是`false`，可以断定用户一定离线。
>
> 用户变成在线会触发`online`事件，变成离线会触发`offline`事件，可以通过`window.ononline`和`window.onoffline`指定这两个事件的回调函数。

```javascript
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
```

`Navigator.geolocation`属性返回一个 Geolocation 对象，包含用户地理位置的信息。注意，该 API 只有在 HTTPS 协议下可用，否则调用下面方法时会报错。调用这三个方法时，浏览器会跳出一个对话框，要求用户给予授权

## window 对象

`window.open`方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。它会返回新窗口的引用，如果无法新建窗口，则返回`null`。

```javascript
window.open(url, windowName, [windowFeatures])

//由于open这个方法很容易被滥用，许多浏览器默认都不允许脚本自动新建窗口。只允许在用户点击链接或按钮时，脚本做出反应，弹出新窗口。因此，有必要检查一下打开新窗口是否成功
var popup = window.open();
if (popup === null) {
  // 新建窗口失败
}
```

第三个参数可以设定如下属性。

- left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，不能设置在屏幕以外的位置。
- top：新窗口距离屏幕最顶部的距离（单位像素）。
- height：新窗口内容区域的高度（单位像素），不得小于100。
- width：新窗口内容区域的宽度（单位像素），不得小于100。
- outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。
- outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。
- menubar：是否显示菜单栏。
- toolbar：是否显示工具栏。
- location：是否显示地址栏。
- personalbar：是否显示用户自己安装的工具栏。
- status：是否显示状态栏。
- dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；父窗口关闭，该窗口也关闭。
- minimizable：是否有最小化按钮，前提是`dialog=yes`。
- noopener：新窗口将与父窗口切断联系，即新窗口的`window.opener`属性返回`null`，父窗口的`window.open()`方法也返回`null`。
- resizable：新窗口是否可以调节大小。
- scrollbars：是否允许新窗口出现滚动条。
- dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。
- titlebar：新窗口是否显示标题栏。
- alwaysRaised：是否显示在所有窗口的顶部。
- alwaysLowered：是否显示在父窗口的底下。
- close：新窗口是否显示关闭按钮。

#### window.moveTo()，window.moveBy()

`window.moveTo()`方法用于移动浏览器窗口到指定位置。它接受两个参数，分别是窗口左上角距离屏幕左上角的水平距离和垂直距离，单位为像素。

#### error 事件和 onerror 属性

如果整个页面未捕获错误超过3个，就显示警告

```javascript
//如果整个页面未捕获错误超过3个，就显示警告
window.onerror = function(msg, url, line) {
  if (onerror.num++ > onerror.max) {
    alert('ERROR: ' + msg + '\n' + url + ':' + line);
    return true;
  }
}
onerror.max = 3;
onerror.num = 0;
```

```javascript
<script crossorigin="anonymous" src="//example.com/file.js"></script>
```

**注意：**`crossorigin="anonymous"`表示，读取文件不需要身份信息，即不需要 cookie 和 HTTP 认证信息。如果设为`crossorigin="use-credentials"`，就表示浏览器会上传 cookie 和 HTTP 认证信息，同时还需要服务器端打开 HTTP 头信息`Access-Control-Allow-Credentials`。

#### window 对象的事件监听属性

- `window.onafterprint`：`afterprint`事件的监听函数。
- `window.onbeforeprint`：`beforeprint`事件的监听函数。
- `window.onbeforeunload`：`beforeunload`事件的监听函数。
- `window.onhashchange`：`hashchange`事件的监听函数。
- `window.onlanguagechange`: `languagechange`的监听函数。
- `window.onmessage`：`message`事件的监听函数。
- `window.onmessageerror`：`MessageError`事件的监听函数。
- `window.onoffline`：`offline`事件的监听函数。
- `window.ononline`：`online`事件的监听函数。
- `window.onpagehide`：`pagehide`事件的监听函数。
- `window.onpageshow`：`pageshow`事件的监听函数。
- `window.onpopstate`：`popstate`事件的监听函数。
- `window.onstorage`：`storage`事件的监听函数。
- `window.onunhandledrejection`：未处理的 Promise 对象的`reject`事件的监听函数。
- `window.onunload`：`unload`事件的监听函数。

#### 浏览器端数据储存机制

> `sessionStorage`保存的数据用于浏览器的一次会话（session），当会话结束（通常是窗口关闭），数据被清空；`localStorage`保存的数据长期存在，下一次访问该网站的时候，网页可以直接读取以前保存的数据。除了保存期限的长短不同，这两个对象的其他方面都一致。

> 每个域名的存储上限视浏览器而定，Chrome 是 2.5MB，Firefox 和 Opera 是 5MB，IE 是 10MB。其中，Firefox 的存储空间由一级域名决定，而其他浏览器没有这个限制。也就是说，Firefox 中，`a.example.com`和`b.example.com`共享 5MB 的存储空间。另外，与 Cookie 一样，它们也受同域限制。某个网页存入的数据，只有同域下的网页才能读取，如果跨域操作会报错。

```javascript
Storage.setItem()
Storage.getItem()
Storage.removeItem()
Storage.clear()
//结合使用Storage.length属性和Storage.key()方法，可以遍历所有的键
for (var i = 0; i < window.localStorage.length; i++) {
  console.log(localStorage.key(i));
}
```

## 同源策略

**表单在历史上一直可以跨域发出请求。**

如果非同源，共有三种行为受到限制

（1） 无法读取非同源网页的 Cookie、LocalStorage 和 IndexedDB。

（2） 无法接触非同源网页的 DOM。

（3） 无法向非同源地址发送 AJAX 请求（可以发送，但浏览器会拒绝接受响应）。

**规避上面的限制**

Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。如果两个网页一级域名相同，只是次级域名不同，浏览器允许通过设置`document.domain`共享 Cookie。

A 网页的网址是`http://w1.example.com/a.html`，B 网页的网址是`http://w2.example.com/b.html`，那么只要设置相同的`document.domain`，两个网页就可以共享 Cookie。

```javascript
Set-Cookie: key=value; domain=.example.com; path=/
```

`iframe`元素可以在当前网页之中，嵌入其他网页。每个`iframe`元素形成自己的窗口，即有自己的`window`对象。`iframe`窗口之中的脚本，可以获得父窗口和子窗口。但是，只有在同源的情况下，父窗口和子窗口才能通信；如果跨域，就无法拿到对方的 DOM。

**对于完全不同源的网站，目前有两种方法，可以解决跨域窗口的通信问题。**

- 片段识别符（fragment identifier）
- 跨文档通信API（Cross-document messaging）window.postMessage()

片段标识符（fragment identifier）指的是，URL 的`#`号后面的部分，比如`http://example.com/x.html#fragment`的`#fragment`。如果只是改变片段标识符，页面不会重新刷新。

```javascript
//父窗口可以把信息，写入子窗口的片段标识符。
var src = originURL + '#' + data;
document.getElementById('myIFrame').src = src;
//子窗口通过监听hashchange事件得到通知。
window.onhashchange = checkMessage;
function checkMessage() {
  var message = window.location.hash;
}
```

跨文档通信 API（Cross-document messaging）。 API 为`window`对象新增了一个`window.postMessage`方法，允许跨窗口通信，不论这两个窗口是否同源。举例来说，父窗口`aaa.com`向子窗口`bbb.com`发消息，调用`postMessage`方法就可以了。

```javascript
/ 父窗口打开一个子窗口
var popup = window.open('http://bbb.com', 'title');
// 父窗口向子窗口发消息
popup.postMessage('Hello World!', 'http://bbb.com');
// 子窗口向父窗口发消息
window.opener.postMessage('Nice to see you', 'http://aaa.com');
// 父窗口和子窗口都可以用下面的代码，
// 监听 message 消息
window.addEventListener('message', function (e) {
     // event.source：发送消息的窗口
	//event.origin: 消息发向的网址
	//event.data: 消息内容
  console.log(e.data);
},false);
//event.origin属性可以过滤不是发给本窗口的消息
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  if (event.origin !== 'http://aaa.com') return;
  if (event.data === 'Hello World') {
    event.source.postMessage('Hello', event.origin);
  } else {
    console.log(event.data);
  }
}
```

通过`window.postMessage`，读写其他窗口的 **LocalStorage** 也成为了可能

```javascript
//主窗口写入 iframe 子窗口的localStorage。
window.onmessage = function(e) {
  if (e.origin !== 'http://bbb.com') {
    return;
  }
  var payload = JSON.parse(e.data);
  localStorage.setItem(payload.key, JSON.stringify(payload.data));
};
//子窗口将父窗口发来的消息，写入自己的 LocalStorage
var win = document.getElementsByTagName('iframe')[0].contentWindow;
var obj = { name: 'Jack' };
win.postMessage(
  JSON.stringify({key: 'storage', data: obj}),
  'http://bbb.com'
);
```

**除了架设服务器代理（浏览器请求同源服务器，再由后者请求外部服务），有三种方法规避这个限制**。

- JSONP
- WebSocket
- CORS

JSONP 是服务器与客户端跨源通信的常用方法。最大特点就是简单适用，老式浏览器全部支持，服务端改造非常小。JSONP 只能发`GET`请求

```javascript
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute("type","text/javascript");
  script.src = src;
  document.body.appendChild(script);
}
window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
//上面代码通过动态添加<script>元素，向服务器example.com发出请求。注意，该请求的查询字符串有一个callback参数，用来指定回调函数的名字，这对于 JSONP 是必需的。
//服务器收到这个请求以后，会将数据放在回调函数的参数位置返回。
foo({
  "ip": "8.8.8.8"
});
```

WebSocket 是一种通信协议，使用`ws://`（非加密）和`wss://`（加密）作为协议前缀。该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
上面代码中，有一个字段是Origin，表示该请求的请求源（origin），即发自哪个域名。
正是因为有了Origin这个字段，所以 WebSocket 才没有实行同源政策。因为服务器可以根据这个字段，判断是否许可本次通信。如果该域名在白名单内，服务器就会做出如下回应。
```

**CORS 是跨源资源分享（Cross-Origin Resource Sharing）的缩写。它是 W3C 标准，属于跨源 AJAX 请求的根本解决方法**

> CORS 需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能。
>
> 整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感知。因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。

CORS 请求分成两类：简单请求（simple request）和非简单请求（not-so-simple request）。

只要同时满足以下两大条件，就属于简单请求。

请求方法是以下三种方法之一。

- HEAD
- GET
- POST

HTTP 的头信息不超出以下几种字段。

- Accept
- Accept-Language
- Content-Language
- Last-Event-ID
- Content-Type：只限于三个值`application/x-www-form-urlencoded`、`multipart/form-data`、`text/plain`

> 凡是不同时满足上面两个条件，就属于非简单请求。一句话，简单请求就是简单的 HTTP 方法与简单的 HTTP 头信息的结合。
>
> 这样划分的原因是，**表单在历史上一直可以跨域发出请求**。简单请求就是表单请求，浏览器沿袭了传统的处理方式，不把行为复杂化，否则开发者可能转而使用表单，规避 CORS 的限制。对于非简单请求，浏览器会采用新的处理方式。

#### 简单请求

```javascript
//浏览器发现这次跨域 AJAX 请求是简单请求，就自动在头信息之中，添加一个`Origin`字段。
GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
//Origin字段用来说明，本次请求来自哪个域（协议 + 域名 + 端口）。服务器根据这个值，决定是否同意这次请求。
//如果Origin指定的源，不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。注意，这种错误无法通过状态码识别，因为 HTTP 回应的状态码有可能是200。
//如果Origin指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

**Access-Control-Allow-Origin**

它的值要么是请求时`Origin`字段的值，要么是一个`*`，表示接受任意域名的请求。

**Access-Control-Allow-Credentials**

该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。默认情况下，Cookie 不包括在 CORS 请求之中。设为`true`，即表示服务器明确许可，浏览器可以把 Cookie 包含在请求中，一起发给服务器。这个值也只能设为`true`，如果服务器不要浏览器发送 Cookie，不发送该字段即可。

**Access-Control-Expose-Headers**

CORS 请求时，`XMLHttpRequest`对象的`getResponseHeader()`方法只能拿到6个服务器返回的基本字段：`Cache-Control`、`Content-Language`、`Content-Type`、`Expires`、`Last-Modified`、`Pragma`。如果想拿到其他字段，就必须在`Access-Control-Expose-Headers`里面指定。上面的例子指定，`getResponseHeader('FooBar')`可以返回`FooBar`字段的值。

#### withCredentials 属性

> CORS 请求默认不包含 Cookie 信息（以及 HTTP 认证信息等）。如果需要包含 Cookie 信息，一方面要服务器同意，指定`Access-Control-Allow-Credentials`字段。

```javascript
//服务器同意
Access-Control-Allow-Credentials: true
// AJAX 请求中打开withCredentials属性
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

#### 非简单请求

> 非简单请求是那种对服务器提出特殊要求的请求，比如请求方法是`PUT`或`DELETE`，或者`Content-Type`字段的类型是`application/json`。

##### 预检请求

> 预检”请求用的请求方法是`OPTIONS`，表示这个请求是用来询问的。头信息里面，关键字段是`Origin`，表示请求来自哪个源。

```javascript
Access-Control-Allow-Methods: GET, POST, PUT //该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次“预检”请求。
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000 //该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。
```

##### 浏览器的正常请求和回应

一旦服务器通过了“预检”请求，以后每次浏览器正常的 CORS 请求，就都跟简单请求一样，会有一个`Origin`头信息字段。服务器的回应，也都会有一个`Access-Control-Allow-Origin`头信息字段。