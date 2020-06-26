
### 接口
- url:http://47.105.223.27:8081
- 导航 /web/navbar/category
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



- 文章详情 /web/article/articleDetails
```
    {"id":21}
```
- 导航获取内容或列表 /web/article/articleDetailsByUrl  

  ```
   参数url   pageNumber pageSize 
   or
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
        },
        {
            "id": 8,
            "createTime": "2019-09-14 15:30:48",
            "updateTime": "2019-09-14 15:30:48",
            "name": "工具",
            "description": "工具"
        },
        {
            "id": 9,
            "createTime": "2019-09-14 15:30:56",
            "updateTime": "2019-09-14 15:30:56",
            "name": "资源",
            "description": "资源"
        },
        {
            "id": 10,
            "createTime": "2019-09-14 15:31:36",
            "updateTime": "2019-09-14 15:31:36",
            "name": "JavaScript",
            "description": "JavaScript"
        }
    ]
}
```



### 首页数据渲染

- layout ---> default
- 轮播图---（轮播标签 "id": 7）
- 两块要闻大图--（标签id:6）
- 8块要闻标题（标签id:1）
- 4块通知（标签id:2）
- 校园人文（标签id:3）
- 校园活动（标签id:4）
- 专题专栏（标签id:5）

### 其他页面数据渲染

- layout --->common 
- 在 common 获取 header 和 bottom 的数据

### 导航条路由解决思路

**路由**

- /:fnav/ --->一级导航内容页     
- /:fnav/:snav --->二级导航内容页
- /newslist/:type？id --->新闻列表
  - type 二级路由的url
  - 利用 id 页
  - 根据newslist 获取侧边栏点击量最高新闻列表
- /news/id
  - 根据id 或去当前的文章
  - categoryId 获取列表
  - 根据newslist 获取侧边栏获取最新的新闻列表

