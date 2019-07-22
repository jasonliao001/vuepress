## AJAX

> AJAX 通过原生的`XMLHttpRequest`对象发出 HTTP 请求，得到服务器返回的数据后，再进行处理。现在，服务器返回的都是 JSON 格式的数据，XML 格式已经过时了，但是 AJAX 这个名字已经成了一个通用名词，字面含义已经消失了。

```javascript
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  // 通信成功时，状态值为4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.open('GET', '/endpoint', true);
xhr.send(null);
```

#### XMLHttpRequest.status

- 200, OK，访问正常
- 301, Moved Permanently，永久移动
- 302, Move temporarily，暂时移动
- 304, Not Modified，未修改
- 307, Temporary Redirect，暂时重定向
- 401, Unauthorized，未授权
- 403, Forbidden，禁止访问
- 404, Not Found，未发现指定网址
- 500, Internal Server Error，服务器发生错误

#### XMLHttpRequest.timeout，XMLHttpRequestEventTarget.ontimeout

> `XMLHttpRequest.timeout`属性返回一个整数，表示多少毫秒后，如果请求仍然没有得到结果，就会自动终止。如果该属性等于0，就表示没有时间限制。
>
> `XMLHttpRequestEventTarget.ontimeout`属性用于设置一个监听函数，如果发生 timeout 事件，就会执行这个监听函数。

#### XMLHttpRequest 对象可以对以下事件指定监听函数。

- XMLHttpRequest.onloadstart：loadstart 事件（HTTP 请求发出）的监听函数
- XMLHttpRequest.onprogress：progress事件（正在发送和加载数据）的监听函数
- XMLHttpRequest.onabort：abort 事件（请求中止，比如用户调用了`abort()`方法）的监听函数
- XMLHttpRequest.onerror：error 事件（请求失败）的监听函数
- XMLHttpRequest.onload：load 事件（请求成功完成）的监听函数
- XMLHttpRequest.ontimeout：timeout 事件（用户指定的时限超过了，请求还未完成）的监听函数
- XMLHttpRequest.onloadend：loadend 事件（请求完成，不管成功或失败）的监听函数

#### XMLHttpRequest.withCredentials

如果需要跨域 AJAX 请求发送Cookie，需要`withCredentials`属性设为`true`,为了让这个属性生效，服务器必须显式返回`Access-Control-Allow-Credentials`这个头信息

#### XMLHttpRequest.upload

> XMLHttpRequest 不仅可以发送请求，还可以发送文件，这就是 AJAX 文件上传。发送文件以后，通过`XMLHttpRequest.upload`属性可以得到一个对象，通过观察这个对象，可以得知上传的进展

### 表单数据上传

> HTML 网页的`<form>`元素能够以四种格式，向服务器发送数据。

使用`POST`方法，将`enctype`属性设为`application/x-www-form-urlencoded`，这是默认方法

```javascript
<form action="register.php" method="post" onsubmit="AJAXSubmit(this); return false;">
</form>
// header
Content-Type: application/x-www-form-urlencoded
foo=bar&baz=The+first+line.&#37;0D%0AThe+second+line.%0D%0A
```

使用`POST`方法，将`enctype`属性设为`text/plain`。

```javascript
<form action="register.php" method="post" enctype="text/plain" onsubmit="AJAXSubmit(this); return false;">
</form>
//header
Content-Type: text/plain
foo=bar
baz=The first line.
The second line.
```

第三种方法是POST发送，Encoding type为multipart/form-data

```javascript
<form action="register.php" method="post" enctype="multipart/form-data" onsubmit="AJAXSubmit(this); return false;">
</form>
//header
Content-Type: multipart/form-data; boundary=---------------------------314911788813839
-----------------------------314911788813839
Content-Disposition: form-data; name="foo"
bar
-----------------------------314911788813839
Content-Disposition: form-data; name="baz"
The first line.
The second line.
-----------------------------314911788813839--
```

使用`GET`方法，`enctype`属性将被忽略。

```javascript
<form action="register.php" method="get" onsubmit="AJAXSubmit(this); return false;">
</form>
//header
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

### 认识script

为了防止攻击者篡改外部脚本，`script`标签允许设置一个`integrity`属性，写入该外部脚本的 Hash 签名，用来验证脚本的一致性。

```javascript
<script src="/assets/application.js"
  integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs=">
</script>

```

#### 工作原理

1. 浏览器一边下载 HTML 网页，一边开始解析。也就是说，不等到下载完，就开始解析。
2. 解析过程中，浏览器发现`<script>`元素，就暂停解析，把网页渲染的控制权转交给 JavaScript 引擎。
3. 如果`<script>`元素引用了外部脚本，就下载该脚本再执行，否则就直接执行代码。
4. JavaScript 引擎执行完毕，控制权交还渲染引擎，恢复往下解析 HTML 网页。

注意：对于来自同一个域名的资源，比如脚本文件、样式表文件、图片文件等，浏览器一般有限制，同时最多下载6～20个资源，即最多同时打开的 TCP 连接有限制，这是为了防止对服务器造成太大压力。如果是来自不同域名的资源，就没有这个限制。所以，通常把静态文件放在不同的域名之下，以加快下载速度。

#### defer

> 浏览器下载脚本文件的时候，不会阻塞页面渲染。下载的脚本文件在`DOMContentLoaded`事件触发前执行（即刚刚读取完`</html>`标签），而且可以保证执行顺序就是它们在页面上出现的顺序。
>
> 对于内置而不是加载外部脚本的`script`标签，以及动态生成的`script`标签，`defer`属性不起作用。另外，使用`defer`加载的外部脚本不应该使用`document.write`方法。

1. 浏览器开始解析 HTML 网页。
2. 解析过程中，发现带有`defer`属性的`<script>`元素。
3. 浏览器继续往下解析 HTML 网页，同时并行下载`<script>`元素加载的外部脚本。
4. 浏览器完成解析 HTML 网页，此时再回过头执行已经下载完成的脚本

#### async

> `async`属性的作用是，使用另一个进程下载脚本，下载时不会阻塞渲染。
>
> `async`属性可以保证脚本下载的同时，浏览器继续渲染。需要注意的是，一旦采用这个属性，就无法保证脚本的执行顺序。哪个脚本先下载结束，就先执行那个脚本。另外，使用`async`属性的脚本文件里面的代码，不应该使用`document.write`方法。

**`defer`属性和`async`属性到底应该使用哪一个？**

> 如果脚本之间没有依赖关系，就使用`async`属性，如果脚本之间有依赖关系，就使用`defer`属性。如果同时使用`async`和`defer`属性，后者不起作用，浏览器行为由`async`属性决定

#### 加载使用的协议

```javascript
<script src="example.js"></script> //如果不指定协议，浏览器默认采用 HTTP 协议下载。

<script src="//example.js"></script> //根据页面本身的协议来决定加载协议,如cdn写法
```