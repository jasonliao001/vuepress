## WebSocket

#### 为什么要有WebSocket？

因为 HTTP 协议有一个缺陷：通信只能由客户端发起。

特点：

（1）建立在 TCP 协议之上，服务器端的实现比较容易。

（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。

（3）数据格式比较轻量，性能开销小，通信高效。

（4）可以发送文本，也可以发送二进制数据。

（5）没有同源限制，客户端可以与任意服务器通信，完全可以取代 Ajax。

（6）协议标识符是`ws`（如果加密，则为`wss`，对应 HTTPS 协议），服务器网址就是 URL。

```javascript
var ws = new WebSocket('wss://echo.websocket.org');

ws.onopen = function(evt) {
  console.log('Connection open ...');
  ws.send('Hello WebSockets!');
};

ws.onmessage = function(evt) {
  console.log('Received Message: ' + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log('Connection closed.');
};
```

#### webSocket.readyState

- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败。

```javascript
switch (ws.readyState) {
  case WebSocket.CONNECTING:
    // do something
    break;
  case WebSocket.OPEN:
    // do something
    break;
  case WebSocket.CLOSING:
    // do something
    break;
  case WebSocket.CLOSED:
    // do something
    break;
  default:
    // this never happens
    break;
}
```

## Web Notifications API

> Notification API 是浏览器的通知接口，用于在用户的桌面（而不是网页上）显示通知信息，桌面电脑和手机都适用，比如通知用户收到了一封 Email。具体的实现形式由浏览器自行部署，对于手机来说，一般显示在顶部的通知栏。
>
> 如果网页代码调用这个API，浏览器会询问用户是否接受。只有在用户同意的情况下，通知信息才会显示。

```javascript
if(window.Notification && Notification.permission !== "denied") {
	Notification.requestPermission(function(status) {
		var n = new Notification('通知标题', { body: '这里是通知内容！' }); 
	});
}
```

### Notification对象的属性和方法

#### Notification.permission

Notification.permission属性，用于读取用户给予的权限，它是一个只读属性，它有三种状态。

- default：用户还没有做出任何许可，因此不会弹出通知。
- granted：用户明确同意接收通知。
- denied：用户明确拒绝接收通知。

#### Notification.requestPermission()

Notification.requestPermission方法用于让用户做出选择，到底是否接收通知。它的参数是一个回调函数，该函数可以接收用户授权状态作为参数。

```
Notification.requestPermission(function (status) {
  if (status === "granted") {
    var n = new Notification("Hi!");
  } else {
    alert("Hi!");
  }
});
```

#### Notification构造函数

```
var notification = new Notification('收到新邮件', {
  body: '您总共有3封未读邮件。'
});

notification.title // "收到新邮件"
notification.body // "您总共有3封未读邮件。"
```

#### 实例对象的事件

- show：通知显示给用户时触发。
- click：用户点击通知时触发。
- close：用户关闭通知时触发。
- error：通知出错时触发（大多数发生在通知无法正确显示时）。