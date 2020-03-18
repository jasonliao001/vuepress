1. ### nginx 搭建

- linux 中 yum 的方式安装 nginx
  ```
   yum list | grep nginx
  ```
- 如何自行配置 yum 源？更新 nginx 版本？
  官网

2. ### nginx 配置文件详解

- 查看 nginx 的安装目录

```
rpm -ql nginx
```

- nginx.conf 文件解读[这里](https://blog.csdn.net/qq_38314112/article/details/81059801)
- 如果使用阿里云的，一定要把实列的端口打开。
  `在“安全组配置”中端口配置就行了`

3. ### nginx 服务的启动，停止，重启

- 启动
  ```
    1.使用systemctl命令启动
      systemctl start nginx.service
     2.查询服务的运行状态
     ps aux | grep nginx
  ```
- 停止
  ```
     1. 立即停止
     nginx -s stop
     2.从容停止服务
     nginx -s quit
     3. killall 杀死进程
     killall nginx
     4.systemctl停止
     systemctl stop nginx.service
  ```
- 重启 nginx 服务

  ```
  systemctl restart nginx.service
  ```

- 重新载入配置文件
  ```
  nginx -s reload
  ```
- 查看端口号
  ```
  netstart -tlnp
  ```

4. ### nginx 访问权限设置

`使用location中的 deny 和 allow 字段来控制访问`

5. ### nginx 设置虚拟主机

- 基于端口号配置虚拟主机
  ```
  server{
      listen 8001;
      server_name localhost;
      root /usr/share/nginx/html/yourwebsitefile;
      index index.html
  }
  ```
- 基于 IP 配置虚拟主机

```
 server{
     listen 80;
     server_name youIP;
     root /usr/share/nginx/html/yourwebsitefile;
     index index.html
 }
```

- 基于域名配置虚拟主机

```
   1. 首先你得先申请个域名
   2. 在域名解析中新建解析，创建二级域名
   3.
   server{
     listen 80;
     server_name you域名;
     root /usr/share/nginx/html/yourwebsitefile;
     index index.html
  }
```

6.  ### nginx 反向代理设置

```
   server{
         listen 80;
         server_name baidu.com;
         location /{
                proxy_pass http://tencent.com;
         }
    }
```

7. ### nginx 配置移动端和 pc 端

```
   使用$http_user-agent配置
```

8. ### nginx 的 Gzip 压缩配置
   使用 nginx 中的 Gzip 打开就好
   request 中有`Accept-Encoding: gzip, deflate,` response 中返回`Content-Encoding: gzip`
