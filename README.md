### 接口

- url:http://47.105.223.27:8081
- 导航 /web/navbar/category
```json
 {
            "id": 8,
            "createTime": "2020-06-22 13:19:32",
            "updateTime": "2020-06-26 21:56:23",
            "pid": 0,
            "name": "学校概况",
            "description": "一级导航",
            "sort": 1,
            "status": 1,
            "icon": null,
            "navType": 0,
            "navUrl": "xxgk",
            "parent": null,
            "children": [
                {
                    "id": 15,
                    "createTime": null,
                    "updateTime": null,
                    "pid": 8,
                    "name": "学校简介",
                    "description": "二级分类",
                    "sort": null,
                    "status": 1,
                    "icon": null,
                    "navType": 2,
                    "navUrl": "xxjj",
                    "parent": null,
                    "children": null
                }
  
            ]
        },
```



- 文章列表时间排序 /web/article/articleOrderByTime
```
    {
	"pageNumber":1,
	"pageSize":10,
	"id":21}
```


- 文章点击数量 /web/article/articleOrderByCount
```
 {
	"pageNumber":1,
	"pageSize":10,
	"id":21}
```
-  根据标签Id查询文章列表 /web/article/articleByTagId
```
 
 参数  id（tagid）   pageNumber pageSize  orderType;//0:时间，1：浏览次数
```

```json
{
    "status": "0000",
    "msg": "处理成功",
    "data": {
        "records": [
            {
                "id": 26,
                "createTime": "2020-06-26 21:29:09",
                "updateTime": null,
                "title": "南京日报：冯骥才眼中的文艺大家",
                "userId": "1",
                "author": "码上无忧",
                "coverImage": null,
                "qrcodePath": null,
                "isMarkdown": null,
                "content": null,
                "contentMd": null,
                "top": 1,
                "categoryId": null,
                "status": null,
                "recommended": 0,
                "slider": 0,
                "sliderImg": "",
                "original": 1,
                "description": "http://www.tju.edu.cn/info/1182/3171.htm",
                "keywords": null,
                "comment": null,
                "lookCount": 2,
                "commentCount": 0,
                "loveCount": 0,
                "newFlag": 0,
                "bizCategory": null
            }
        ],
        "total": 4,
        "size": 1,
        "current": 1,
        "orders": [],
        "pages": 4,
        "prePage": 0,
        "nextPage": 2,
        "hasPreviousPage": false,
        "hasNextPage": true,
        "firstPage": true,
        "lastPage": false,
        "searchCount": true
    }
}
```



- 文章详情 /web/article/articleDetails
```
    {"id":21}
```
- :star:导航获取内容或列表 /web/article/articleDetailsByUrl  

  - 神奇的接口，根据url即能获取**二级导航内容**又能获取**新闻列表**

  ```
  参数url   pageNumber pageSize 
   or
   
  ```

- 获取所有newslist 的新闻（**时间排序或点击量排序**）

  - /web/article/articleListByUrl

  ```json
  {
      "url":"newslist",
      "orderType":1--时间|0--浏览次数
      。。。分页参数
  }
  ```

- 标题查询接口 /web/article/articleQryByTitle

  ```json
  {
      "keywords":"adfasdf"
  }
  ```

- 轮播 /web/article/articleBySlider 
```
  {
	"pageNumber":1,
	"pageSize":3
  }
```
- 友连 web/link/qryLink 

```
  {
	"pageNumber":1,
	"pageSize":3
  }
```

- 基本信息 web/base/baseInfo
- 文章标签 web/navbar/tags

```json
{
    "status": "0000",
    "msg": "处理成功",
    "data": [
        {
            "id": 1,
            "createTime": "2018-01-14 21:35:31",
            "updateTime": "2020-06-25 16:28:50",
            "name": "首页要闻",
            "description": "要闻"
        },
        {
            "id": 2,
            "createTime": "2018-01-14 21:35:45",
            "updateTime": "2020-06-25 16:29:38",
            "name": "首页通知",
            "description": "首页板块2"
        },
        {
            "id": 3,
            "createTime": "2018-01-14 21:35:52",
            "updateTime": "2020-06-25 16:30:16",
            "name": "首页校园人文",
            "description": "校园板块顶部"
        },
        {
            "id": 4,
            "createTime": "2018-01-14 21:36:01",
            "updateTime": "2020-06-25 16:30:28",
            "name": "首页校园活动(大图)",
            "description": "校园板块底部大图"
        },
        {
            "id": 5,
            "createTime": "2018-07-25 18:55:06",
            "updateTime": "2020-06-25 16:30:57",
            "name": "首页专题",
            "description": "首页专题"
        },
        {
            "id": 6,
            "createTime": "2019-09-14 15:20:27",
            "updateTime": "2020-06-26 21:50:35",
            "name": "要闻大图",
            "description": "首页要闻大图"
        },
        {
            "id": 7,
            "createTime": "2019-09-14 15:30:40",
            "updateTime": "2020-06-26 21:51:23",
            "name": "轮播图",
            "description": "轮播图文章"
        }
    ]
}
```



### 首页数据渲染

- [ ] layout ---> default
- [ ] navbar 路由跳转
- [ ] 轮播图---（轮播标签 "id": 7）
- [ ] 两块要闻大图--（标签id:6）
- [ ] 8块要闻标题（标签id:1）
- [ ] 4块通知（标签id:2）
- [ ] 校园人文（标签id:3）
- [ ] 校园活动（标签id:4）
- [ ] 专题专栏（标签id:5）



### 二级导航页面

- 导航内容（接口 /web/article/articleDetailsByUrl)

- [x] 侧边栏导航信息 

    - 在common layout 的mounted 中 存储  **this.$store.state.navs**

    - 因为**mounted 触发时异步执行** 首次进入页面可this.$store.navs为空
    - 在挂载（mounted）页面时渲染侧边栏信息并且 监听（watch） this.$store.navs 更新侧边栏信息

- [x] 直接进入需要判断 ：fanv 和 snav

    - fnav 直接进入第一个子页面

- [ ] 封面图
- [x] 面包屑

### 新闻列表页

- url (newslist/:type)
- [x] 通过type 利用 接口（/web/article/articleDetailsByUrl ）获取新闻列表
- [x] 新闻标题
- [x] 通过newslist 获取点击量最高的新闻列表

### 新闻内容页面

- url(/news/id)

- [x] 通过id获取新闻信息（内容）
- [x] 通过newslist url 获取 最新新闻列表
- [ ] 通过categoryId 获取相关新闻列表

### 搜索页面

### 404 页面

### 



### 其他页面数据渲染

- layout --->common 
- 在 common 获取 header 和 bottom 的数据
- [x] 在common 中获取 navs 存储在 this.$store.state.navs

- [ ] 底部链接 和 版权信息

### 导航条路由解决思路

**路由**

- / --->首页***

- /:fnav/ --->一级导航内容页     
- /:fnav/:snav --->二级导航内容页
- /newslist/:type?tagid --->新闻列表
  - type 二级路由的url
  - 利用 id 页
  - 根据newslist 获取侧边栏点击量最高新闻列表
- /news/id
  - 根据id 或去当前的文章
  - categoryId 获取列表
  - 根据newslist 获取侧边栏获取最新的新闻列表


### 服务器

- nginx

  ```
  upstream ze{
          server 127.0.0.1:3000;  #反向代理地址
          keepalive 64;
  }
  server {
          listen 80;
          server_name 47.105.223.27;  #监听地址
          location / {
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection "upgrade";
                  proxy_set_header Host $host;
                  proxy_set_header X-Nginx-Proxy true;
                  proxy_cache_bypass $http_upgrade;
                  proxy_pass http://ze;
          }
          location ~\.(txt)$ {
                  root /var/www/jnode/;
          }
  }
  
  ```

- pm2 

  - pm2 start npm --name test -- run start   #启动npm run start  
    - 注意**npm run 的运行目录**
  - pm2 list   # 查看
  - pm2 delete [name|id|all]

  - pm2 stop [name]
  - pm2 restart [name]