(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{273:function(t,a,n){"use strict";n.r(a);var s=n(28),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("ol",[n("li",[n("h3",{attrs:{id:"nginx-搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-搭建"}},[t._v("#")]),t._v(" nginx 搭建")])])]),t._v(" "),n("ul",[n("li",[t._v("linux 中 yum 的方式安装 nginx"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" yum list | grep nginx\n")])])])]),t._v(" "),n("li",[t._v("如何自行配置 yum 源？更新 nginx 版本？\n官网")])]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[n("h3",{attrs:{id:"nginx-配置文件详解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置文件详解"}},[t._v("#")]),t._v(" nginx 配置文件详解")])])]),t._v(" "),n("ul",[n("li",[t._v("查看 nginx 的安装目录")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("rpm -ql nginx\n")])])]),n("ul",[n("li",[t._v("nginx.conf 文件解读"),n("a",{attrs:{href:"https://blog.csdn.net/qq_38314112/article/details/81059801",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("如果使用阿里云的，一定要把实列的端口打开。\n"),n("code",[t._v("在“安全组配置”中端口配置就行了")])])]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[n("h3",{attrs:{id:"nginx-服务的启动，停止，重启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-服务的启动，停止，重启"}},[t._v("#")]),t._v(" nginx 服务的启动，停止，重启")])])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("启动")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("  1.使用systemctl命令启动\n    systemctl start nginx.service\n   2.查询服务的运行状态\n   ps aux | grep nginx\n")])])])]),t._v(" "),n("li",[n("p",[t._v("停止")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   1. 立即停止\n   nginx -s stop\n   2.从容停止服务\n   nginx -s quit\n   3. killall 杀死进程\n   killall nginx\n   4.systemctl停止\n   systemctl stop nginx.service\n")])])])]),t._v(" "),n("li",[n("p",[t._v("重启 nginx 服务")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("systemctl restart nginx.service\n")])])])]),t._v(" "),n("li",[n("p",[t._v("重新载入配置文件")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("nginx -s reload\n")])])])]),t._v(" "),n("li",[n("p",[t._v("查看端口号")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("netstart -tlnp\n")])])])])]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("h3",{attrs:{id:"nginx-访问权限设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-访问权限设置"}},[t._v("#")]),t._v(" nginx 访问权限设置")])])]),t._v(" "),n("p",[n("code",[t._v("使用location中的 deny 和 allow 字段来控制访问")])]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("h3",{attrs:{id:"nginx-设置虚拟主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-设置虚拟主机"}},[t._v("#")]),t._v(" nginx 设置虚拟主机")])])]),t._v(" "),n("ul",[n("li",[t._v("基于端口号配置虚拟主机"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("server{\n    listen 8001;\n    server_name localhost;\n    root /usr/share/nginx/html/yourwebsitefile;\n    index index.html\n}\n")])])])]),t._v(" "),n("li",[t._v("基于 IP 配置虚拟主机")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(" server{\n     listen 80;\n     server_name youIP;\n     root /usr/share/nginx/html/yourwebsitefile;\n     index index.html\n }\n")])])]),n("ul",[n("li",[t._v("基于域名配置虚拟主机")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   1. 首先你得先申请个域名\n   2. 在域名解析中新建解析，创建二级域名\n   3.\n   server{\n     listen 80;\n     server_name you域名;\n     root /usr/share/nginx/html/yourwebsitefile;\n     index index.html\n  }\n")])])]),n("ol",{attrs:{start:"6"}},[n("li",[n("h3",{attrs:{id:"nginx-反向代理设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反向代理设置"}},[t._v("#")]),t._v(" nginx 反向代理设置")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   server{\n         listen 80;\n         server_name baidu.com;\n         location /{\n                proxy_pass http://tencent.com;\n         }\n    }\n")])])]),n("ol",{attrs:{start:"7"}},[n("li",[n("h3",{attrs:{id:"nginx-配置移动端和-pc-端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置移动端和-pc-端"}},[t._v("#")]),t._v(" nginx 配置移动端和 pc 端")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("   使用$http_user-agent配置\n")])])]),n("ol",{attrs:{start:"8"}},[n("li",[n("h3",{attrs:{id:"nginx-的-gzip-压缩配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的-gzip-压缩配置"}},[t._v("#")]),t._v(" nginx 的 Gzip 压缩配置")]),t._v("\n使用 nginx 中的 Gzip 打开就好\nrequest 中有"),n("code",[t._v("Accept-Encoding: gzip, deflate,")]),t._v(" response 中返回"),n("code",[t._v("Content-Encoding: gzip")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);