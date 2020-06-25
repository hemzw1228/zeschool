
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


