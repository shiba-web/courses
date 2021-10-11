# HTML 基本结构

在上一章节，我们对 HTML 建立了初步的概念，并学习了 HTML 的标准语法。  
在本章节，我们将学习用 HTML 编写网页所需要遵循的 **基本结构**。

## DOCTYPE 声明

HTML 经历了很多历史版本。上一代 HTML 是 HTML 4.01，发布于 1999 年 12 月 24 日；而如今的 HTML 5 发布于 2014 年 10 月，是一次脱胎换骨的巨大更新，也是促使 Web 在最近几年的发展一发不可收拾的重要因素之一。

每个 HTML 版本都互相不兼容，浏览器没法用一套规则去解析所有版本的 HTML，也就是说，我们需要以一种方式告诉浏览器，我们所写的 HTML 是哪个版本的。

在 HTML 文档中，指定版本方式就是在 HTML 文档的第一行添加一个 **DOCTYPE 声明**。DOCTYPE 声明不是标准 HTML 元素。实际上，这也是 HTML 文档中唯一的一处非元素：

```html
<!DOCTYPE html>
```

::: tip

如果不写 DOCTYPE 声明，浏览器通常会选择按照 HTML 5 的标准解析文档。但为了规范期间，强烈建议不要省略 DOCTYPE 声明。
HTML 5 的 DOCTYPE 声明是所有 HTML 版本中最简单的，HTML 历史版本的 DOCTYPE 声明相当冗长：

HTML 4.01 Strict：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

HTML 4.01 Transitional

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

HTML 4.01 Frameset

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

:::

## HTML 根元素

紧跟在 DOCTYPE 声明之后的便是 HTML 文档的根元素 `<html>` 了，HTML 文档的所有其它内容都在 `<html>` 的内部：

```html
<!DOCTYPE html>
<html>
  ...
</html>
```

`<html>` 具有一个常用的属性：`lang`（Language），用于指定这个 HTML 文档所使用的语言，网页翻译等许多功能都需要依赖这个属性。常用的值是英语`"en"`和中文`"zh"`：

```html
<!DOCTYPE html>
<html lang="zh">
  ...
</html>
```

::: tip

[MDN](https://developer.mozilla.org/zh-CN/) 是由开发了 _火狐浏览器_ 的开源组织 _Mozilla_ 创建的一个站点，提供了相当权威的 Web 开发文档。通常我们会去 MDN 查找有关元素、属性的信息。

:::

## Head 和 Body

html 根元素中，必须且只能有两个元素：`<head>` 和 `<body>`：

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

### Head

`<head>` 中用来定义那些**不会**显示在页面中的元素，这些元素通常是功能元素，而非视觉元素。

`<head>` 元素中必不可少的元素便是 `<title>`。`<title>` 内部的内容将会显示为页面的标题：

```html
<head>
  <title>页面的标题</title>
</head>
```

此外，`<head>` 中另一个最常见的元素是 `<meta>`。`<meta>` 用于定义页面的 **元数据**，也可以理解为就是用来配置页面的。

`<meta>` 可以定义无数种元数据，对于中文页面，我们必须通过 `<meta>` 来将页面的字符集配置为 _utf-8_，否则中文可能会出现乱码（不同浏览器表现不同）：

```html
<head>
  <meta charset="UTF-8" />
</head>
```

如果要在移动设备上正确地显示页面，需要定义另一个 `<meta>`，否则页面会在移动设备上变得非常小：

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

这个 `<meta>` 很难记，一般也不会刻意去记，我们只需要复制粘贴就可以了，在这里仅作为拓展，我们在很长一段时间内都用不到。

::: tip

要解释在移动设备上需要额外配置的原因，需要牵扯到许多概念，我们在这里不展开，可以搜索关键字：“HTML Viewport” 了解详情。

:::

### Body

`<body>` 元素及其内部的所有内容都会显示在网页中，也是我们所关心的主要部分。绝大部分的 HTML 元素都是用于 `<body>` 中的：

```html
<body>
  你会在页面的左上角看到这行字
</body>
```

在下一章节，我们将会学习用于 `<body>` 内部的各种视觉元素。
