# 眨眼效果

## 引言

原本是想给网页做一下性能测试，然后看到了一篇文章[12 个免费在线的 Web 网站性能测试工具](https://www.oschina.net/news/21033/12-free-online-tools-for-website-testing)，就想着挨个点进去试试。看到[第二个](https://k6.io/)时候，看到了眨眼效果，就想这是怎么实现的，然后问了群里小伙伴，原来很简单。那也想自己实现下，就写了一个简单的 demo 实现了一下。

## 使用说明

- 引入 js 文件
- 传入相关参数，创建一个 $Wink 的示例

### 示例

```html
...
<div id="content"></div>
<script src="./wink.js"></script>
...

<script>
  const itemImgName = ['developers', 'devops', 'managers']
  const contentEl = document.querySelector('#content')
  const wink = new $Wink(contentEl, itemImgName)
</script>
```

## 参数说明
- el
  容器节点
- itemImgName :string[]
  图片名称
- time :stirng
  间隔时间 
