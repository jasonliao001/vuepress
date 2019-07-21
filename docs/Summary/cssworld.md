## 目录结构

> 实例代码：[《CSS 世界》demo 原型页面索引](http://demo.cssworld.cn/)

### 第 1 章 概

1. 流体布局
2. `table`
3. CSS3

### 第 2 章 术语和概念

1. 未定义行为

### 第 3 章 流、元素和基本概念

1. 块级元素

   - 为什么`list-item`元素会出现项目符号
   - `display: inline-table;`的盒子是怎样组成的
   - `width/height`作用在哪个盒子上

2. `width/height`作用的具体细节
   - 深藏不漏的`width:auto`
   - `width`值作用的细节
   - CSS 流体布局下的宽度分离原则
   - 改变`width/height`作用细节的`box-sizing`
   - 相对简单的`height:auto`
   - 关于`height:100%`

3. `min-width/max-width`和`min-height/max-height`
   - 为流体而生的`min-width/max-width`
   - 与众不同的初始值
   - 超越`!important`，超越最大
   - 任意高度元素的展开收起动画技术

4. 内联元素

   - 哪些元素是内联元素
   - 内联盒模型
   - 幽灵空白节点

### 第 4 章 盒尺寸四大家族

1. 深入理解`content`

   - `content`与替换元素
   - `content`内容生成技术

2. 温和的`padding`属性

   - `padding`与元素的尺寸
   - `padding`的百分比值
   - 标签元素内置的`padding`
   - `padding`与图形绘制

3. 激进的`margin`属性

   - `margin`与元素尺寸以及相关布局
   - `margin`的百分比值
   - `margin`合并
   - `margin:auto`
   - `margin`无效情形解析

4. 功勋卓著的`border`属性

   - 为什么`border-width`不支持百分比值
   - 了解各种`border-style`类型
   - `border-color`和`color`
   - `border`与透明边框技巧
   - `border`与图形构建
   - `border`等高布局技术

### 第 5 章 内联元素与流

1. 字母`x`

   - 字母`x`与 CSS 世界的基线
   - 字母`x`与 CSS 中的`x-height`
   - 字母`x`与 CSS 中的`ex`

2. 内联元素的基石`line-height`

   - 内联元素的高度之本——`line-height`
   - 为什么`line-height`可以让内联元素“垂直居中”
   - 深入`line-height`的各类属性值
   - 内联元素`line-height`的“大值特性”

3. `line-height`的好朋友`vertical-align`
   - `vertical-align`家族基本认识
   - `vertical-align`作用前提
   - `vertical-align`和`line-height`之间的关系
   - 深入理解`vertical-align`线性类属性值
   - 深入理解`vertical-align`文本类属性值
   - 简单了解深入理解`vertical-align`线性类属性值上标下标类属性值
   - 无处不在的`vertical-align`
   - 基于`vertical-align`属性的水平垂直居中弹框

### 第 6 章 流的破坏与保护

1. 魔鬼属性`float`

   - `float`的本质与特性
   - `float`的作用机制
   - `float`更深入的作用机制
   - `float`与流体布局

2. `float`的天然克星`clear`
   - 什么是`clear`属性
   - 成事不足败事有余的`clear`

3. CSS 世界的结界——`BFC`

   - **BFC**的定义
   - **BFC**与流体布局

4. 最佳结界`overflow`

   - `overflow`裁剪界线`border box`
   - 了解`overflow-x`和`overflow-y`
   - `overflow`与滚动条
   - 依赖`overflow`的样式表现
   - `overflow`与锚点定位

5. `float`的兄弟`position:absolute`
   - `absolute`的包含块
   - 具有相对特性的无依赖`absolute`绝对定位
   - `absolute`与`text-align`

6. `absolute`与`overflow`

7. `absolute`与`clip`
   - 重新认识的`clip`属性
   - 深入了解`clip`的渲染

8. `absolute`的流体特性
   - 当`absolute`遇到`left/top/right/bottom`属性
   - `absolute`的流体特性
   - `absolute`的`margin:auto`居中

9. `position:relative`才是大哥
   - `relative`对`absolute`的限制
   - `relative`与定位
   - `relative`的最小化影响原则

10. 强悍的`position:fixed`固定定位

   - `position:fixed`不一样的“包含块”
   - `position:fixed`的`absolute`模拟
   - `position:fixed`与背景锁定

### 第 7 章 层叠规则

1. `z-index`
2. 层叠上下文和层叠水平
3. 理解元素的层叠顺序
4. 牢记层叠准则
5. 深入了解层叠上下文
   - 特性
   - 创建
   - 层叠上下文与层叠顺序
6. `z-index`负值深入理解
7. `z-index`准则

### 第 8 章 文本处理能力

1. line-height的另一个朋友font-size
   - `font-size`和`vertical-align`的隐秘故事
   - 理解`font-size`与`ex`、`em`和`rem`的关系
   - 理解`font-size`的关键字属性值
   - `font-size:0`与文本的隐藏

2. 字体属性家族font-family

   - 了解衬线字体和无衬线字体
   - 等宽字体的实践价值
   - 中文字体和英文名称
   - 一些补充说明

3. 字体家族其他成员

   - `font-weight`
   - `font-style`
   - `font-variant`

4. font属性
   - 缩写的`font`属性
   - 使用关键字值得`font`属性
   - `font`关键字属性值的应用价值

5. @font face规则
   - `@font face`的本质是变量
   - `@font face`与字体图标技术

6. 文本的控制

   - `text-indent`与内联元素缩进
   - `letter-spacing`与字符间距
   - `word-spacing`与单词间距
   - 了解`word-break`和`word-wrap`的区别
   - `white-space`与换行和空格的控制
   - `text-align`与元素对齐
   - 如何解决`text-decoration`下划线和文本重叠的问题
   - `text-transform`字符大小写

7. 了解:first-letter/:first-line伪元素

   - 深入`:first-letter`伪元素及其实例
   - `:first-line`伪元素

### 第 9 章 元素的修饰与美化

1. color
   - 颜色关键字
   - 不支持的`transparent`关键字
   - 不支持的`currentColor`变量
   - 不支持的`rgba`颜色和`hsla`颜色
   - 支持却鸡肋的系统颜色

2. background
   - 隐藏元素的`background-image`到底加不加载
   - 与众不同的`background-position`百分比计算方式
   - `background-repeat`与渲染性能
   - 外强中干的`background-attachment:fixed`
   - `background-color`背景色永远是最低的
   - 利用多背景的属性**hack**小技巧
   - 渐变背景和`rgba`背景色的兼容处理

### 第 10 章 元素的显示与隐藏

1. `display`与元素的显示/隐藏

2. visibility与元素的显示/隐藏
   - 不仅仅是保留空间
   - 了解`visibility:collapse`

### 第 11 章 用户界面样式

1. 和border形似的outline属性

   - 绝不可以在全局设置`outline:0 none`
   - 真正不占据空间的`outline`及其应用

2. 光标属性cursor

   - 琳琅满目的`cursor`属性值
   - 自定义光标

### 第 12 章 流向的改变

1. 改变水平流向的direction

   - `direction`简介
   - `direction`的黄金搭档`unicode-bidi`

2. writing-mode
   - `writing-mode`原来的作用
   - `writing-mode`改变了哪些规则
   - `writing-mode`和`direction`的关系

##  概述

### CSS3

1. 布局更丰富
   - 移动端媒体查询以及响应式布局，如图片元素的`srcset`属性、`object-fit`属性
   - 弹性盒子布局`flex`
   - 栅格布局`grid`
2. 视觉表现
   - 圆角、阴影和渐变让元素更有质感
   - `transform`变换
   - `filter`滤镜和混合模式
   - `animation`动画

### 术语和概念

1. 属性
2. 值
   - 整数值
   - 数值
   - 百分比
   - 长度值
   - 颜色值
3. 关键字
4. 变量
5. 长度单位
   1. 相对长度单位
      - 相对字体长度单位，如`em`、`ex`
      - 相对视区长度单位，如`vw`、`vh`、`vmin`、`vmax`
   2. 绝对长度单位，如`px`
6. 功能符，值以函数的形式指定，主要用来表示颜色`rgba`、背景图片地址`url`、元素属性值、计算`calc`和过渡效果
7. 属性值，属性冒号`:`后面的所有内容统称为属性值
8. 声明
9. 生命块
10. 规则和规则集
11. 选择器
    - 类选择器`.`
    - ID选择器`#`
    - 属性选择器`[title]{}`、`[title="css"]{}`
    - 伪类选择器`:`
    - 伪元素选择器`::`
12. 关系选择器
    - 后代选择器，**空格**
    - 相邻后代选择器，`>`
    - 兄弟选择器，`~`
    - 相邻兄弟选择器，`+`
13. @规则，`@media`、`@font-face`、`@page`、`@support`

### 未定义行为

未定义行为就是不同浏览器对样式的支持度不一样，得到的效果也不一致。

## 流、元素和基本概念

### 块级元素

`li`元素默认的`display`值是`list-item`，和`table`都是块级元素，在一个水平流上只能单独显示一个元素，多个则换行显示。可以配合`clear`属性来清除浮动带来的影响。

```
.clear:after {
    content: '';
    display: table; /*也可以是block，或是list-item*/
    clear: both;
}
```

实际开发中，不推荐使用`list-item`，一是会出现项目符号，而是IE不支持伪元素`:after`。

#### 为什么`list-item`元素会出现项目符号

list-item元素出现项目符号是因为生成了一个附加盒子（**标记盒子**），专门用来放圆点、数字这些项目符号。IE下伪元素不支持`list-item`或许就是无法创建**标记盒子**导致的。

#### `display: inline-table;`的盒子是怎样组成的

外面内联，里面`table`，元素和文字在一行显示。

#### `width/height`作用在哪个盒子上

`width/height`作用在**里面的盒子**，也就是**容器盒子**。

#### `width/height`作用的具体细节

块级元素的流体特性主要体现在水平方向上。

#### 深藏不漏的`width:auto`

`width`的默认值是`auto`，它至少包含4中不同的宽度表现：

1. **充分利用可用空间**。元素默认宽度是100%父级容器。
2. **收缩与包裹**。典型代表是浮动、绝对定位和`inline-block`元素或`table`元素。
3. **收缩到最小**。这个最容易出现在`table-layout`为`auto`表格中。
4. **超出容器限制**。除非有明确的`width`设置，否则表格`min-content`的尺寸都不会主动超出父容器的宽度。特殊情况：内容很长的英文和数字，或者内联元素设置为`white-space:nowrap;`。这种情况称为`max-content`。

**1. 外部尺寸与流体特性**

1. 正常流宽度。**无宽度，无图片，无浮动。**充分利用浏览器自身的行为特性来完成页面布局。表现为“外部尺寸”的块级元素一旦设置了宽度就会丢失流动性。
2. 格式化宽度。仅出现在“绝对定位模型”中，在默认情况下，绝对定位元素的宽度表现为“包裹性”，宽度由内部尺寸决定。对于**非替代元素**，当`left/top`或`top/bottom`对立方位的属性值同时存在的时候，元素的宽度表现为**格式化宽度**，其宽度大小相对于最近的具有定位特性的祖先元素计算。格式化宽度具有完全的流体性，也就是`margin/padding/border/content`区域会自动分配水平（垂直）空间。

**2. 内部尺寸与流体特性**

内部尺寸有3种表现特性：

1. 包裹性。对于一个元素，如果其

   ```
   display:inline-block;
   ```

   ，那么里面的内容宽度不会超过容器。

   - 按钮是CSS中最具有代表性的`inline-block`元素，也是包裹性最好的实例。具体表现为：**按钮文字越多则宽度越宽（内部尺寸特性），如果文字太多则会在容器的宽度处自动换行（自适应特性）。**
   - `input`标签按钮，默认`white-space:pre;`不会换行；需要将`pre`值重置为默认的`normal`。

**包裹性在实际开发中的作用**

> 需求：页面某个模块的文字内容是动态的，可长可短。文字少的时候居中显示，文字超过一行的时候居左显示。该如何实现？

```
.box {
    text-align: center;
}

.content {
    display: inline-block;
    text-align: left;
}
```

除了`inline-block`元素，绝对定位和浮动元素都具有包裹性，均有类似的智能宽度行为。

1. 首选最小宽度。元素最适合的最小宽度。具体表现规则：
   - 东亚文字最小宽度为每个汉字的宽度。
   - 西方文字最小宽度由特定的连续的英文字符单元决定。英文字符一般会终止于空格、短横线、问好以及其他非英文字符。
   - 要让英文字符的每个字符都用最小宽度单元，可以使用`word-break:break-all;`
   - 图片的替代元素的最小宽度是该元素内容本身的宽度。
2. 最大宽度。最大连续内联盒子的宽度。

#### `width`值作用的细节

1. 流动性丢失
   - 块级元素设定`width`具体数值，则元素的流动性就会被阻断。
2. 与实际表现不一致
   - `padding`、`border`属性发生改变会影响`content`内容的尺寸，出现页面布局错位。

### CSS流体布局下的宽度分离原则

**宽度分离原则**，就是CSS中的`width`属性不与影响宽度的`padding/border`属性共存。

```
.box {
    width: 100px;
    border: 1px solid #ccc;
}
```

`width`独占一层标签，而`padding/border/margin`利用流动性在内部自适应呈现。

```
.father {
    width: 100px;
}

.son {
    margin: 0 20px;
    border: 1px solid #ccc;
}
```

### 改变`width/height`作用细节的`box-sizing`

**box-sizing的作用**

默认情况下，`width`是作用在`content box`上，`box-sizing`的作用就是可以把`width`作用的盒子变成其他几个。

`box-sizing: border-box;`就是让100像素的宽度直接作用在`border box`上，从默认的`content box`变成`border box`。此时，`content box`从宽度值中释放，形成了局部的流动性，和`padding`一起自动分配`width`值。

box-sizing不支持`margin-box`，只有当元素没有水平`margin`时，`box-sizing`才能真正计算，**宽度分离**等策略可以彻底解决所有的宽度计算问题。

> 在CSS世界中，唯一离不开`box-sizing:border-box;`的就是原生普通文本框`input`和`textarea`的100%自适应父容器宽度。 替换元素的特性之一是尺寸由内部元素决定，且无论其`display`属性值是`inline`还是`block`。对于非替换元素，如果`display`值是`block`，就会具有流动性，宽度由外部尺寸决定，但是替换元素的宽度不受`display`水平影响，因此，通过修改`textarea`的`display`水平是无法让尺寸100%自适应父容器。

### 相对简单的`height:auto`

### 关于`height:100%`

对于`width`属性，父元素`width`设为`auto`，其百分比也支持；但是对于`height`属性，如果父元素`height`设为`auto`，只要子元素在文档流中，其百分比完全被忽略。

> 对于普通文档流中的元素，百分比高度值要想起作用，其父级必须有一个可以生效的高度值。

**1. 父级没有具体高度值，height:100%;会无效**

> 浏览器渲染的基本原理：首先，先下载文档内容，加载头部的样式资源，然后按照从上而下、自外而内的顺序渲染DOM内容。

如果包含块的高度没有显式指定（即高度由内容决定），并且该元素不是绝对定位，则计算值为`auto`。

**2. 让元素支持height:100%效果**

1. 设定显式的高度值。

   html, body { height: 100%; }

2. 使用绝对定位。

   div { height: 100%; position: absolute; }

> 绝对定位的宽高百分比计算是相对于`padding box`，也就是会把`padding`大小值计算在内。非绝对定位元素则是相对于`content box`计算。

**图片左右半区点击分别上一张图下一张图效果**

在图片外面包一层具有“包裹性”同时具有定位特性的标签。

```
.box {
    display: inline-block;
    position: relative;
}
```

在图片上覆盖两个绝对定位，同时设`height:100%;`，则无论图片多高，左右半区都能自动和图片高度一模一样，无需任何使用JS的计算。

### `min-width/max-width`和`min-height/max-height`

### 为流体而生的`min-width/max-width`

`min-width/max-width`出现的场景一定是自适应布局或流体布局中。

```
.container {
    min-width: 1200px;
    max-width: 1400px;
}
```

为了避免图片在移动端展示过大影响体验，经常会有下面的`max-width`限制：

```
img {
    max-width: 100%;
    height: auto !important;
}
```

`height:auto;`是必须的，否则如果原始图片有设定`height`，`max-width`生效时图片就会被水平压缩。强制`height`为`auto`可以确保宽度不超出的同时使图片保持原来的比例。

### 与众不同的初始值

`max-width/max-height`的初始值是`none`，`min-width/min-height`的初始值是`auto`。

1. `min-height/width`的值为`auto`合法。
2. 数值变化无动画。`min-height`的初始值是`auto`。

### 超越`!important`，超越最大

**1. 超越!important**

超越`!important`指的是`max-width`会覆盖`width`。

```
<img src="1.jpg" style="width: 480px !important;" alt="">
img {
    max-width: 256px;
}
```

最终图片显示宽度`256px`。

**2. 超越最大**

**超越最大**指的是`min-width`覆盖`max-width`，此规则发生在`min-width`和`max-width`冲突的时候。

```
.container {
    min-width: 1400px;
    max-width: 1200px;
}
```

最小宽度设置比最大宽度还大，这个时候，`min-width`显示，`max-width`被忽略。`.container`元素表现为至少`1400px`宽度。

### 任意高度元素的展开收起动画技术

**元素展开收起时有明显的高度滑动效果**

```
.element {
    max-height: 0;
    overflow: hidden;
    transition: max-height .25s;
}

.element.active {
    max-height: 666px;
}
```

`max-height`使用足够安全的最小值，避免出现延迟。

### 内联元素

在CSS世界中，内联元素是最为重要的。这些CSS属性往往具有继承特性。

#### 哪些元素是内联元素

**1. 从定义看 **

内联元素特指“外在盒子”，和`display:inline;`的元素不是一个概念。

**2. 从表现看**

内联元素的典型特性是可以和文字在一行显示。

#### 内联盒模型

1. 内容区域。

   - **内容区域**指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制，本质上是一个`字符盒子`。
   - 但是像图片这类替换元素，内容区域可以看成元素本身。可以把文本选中的背景色区域作为内容区域。
   - 

2. 内联盒子。

   - **内联盒子**不会让内容成块显示，而是排成一行，**内联盒子**指的就是“外在盒子”，用来决定元素是内联还是块级。

   - 外在盒子

     又可以划分为“内联盒子”和“匿名内联盒子”两类：

     - 外部内联标签`span`、`a`、`em`等，则属于“内联盒子”；如果这是文字`<p>这是一行普通文字，这里有个<em>em</em>标签。（这里是匿名内联盒子）</p>`，则属于“匿名内联盒子”。
     - 并非单独文字都是“匿名内联盒子”，关键要看前后的标签是内联还是块级。

3. 行框盒子。

   - 每一行就是一个“行框盒子”，每个“行框盒子”又是由一个个“内联盒子”组成。

4. 包含盒子。

   - `p`标签就是一个**包含盒子**，此盒子由一行一行的“行框盒子”组成。

### 幽灵空白节点

**幽灵空白节点**具体指的是：在HTML5文档声明中，内联元素的所有解析和渲染表现就如同每个行框盒子的前面有一个“空白节点”一样。这个“空白节点”永远透明，不占据任何宽度，看不见也无法通过脚本获取，但又确实存在，表现如同文本节点一样。

**幽灵空白节点**是一个存在于每个“行框盒子”前面，同时具有该元素的字体和行高属性的`0`宽度的内联盒。



## 盒尺寸四大家族

### 深入理解`content`

#### `content`与替换元素

##### 1. 什么是替换元素

通过修改某个属性值呈现的内容就可以被替换的元素称为**替换元素**。因此，`img`、`object`、`video`、`iframe`或者表单元素`textarea`和`input`都是典型的替换元素。

替换元素除了内容可替换这一特性外，还有一些特性：

1. **内容的外观不受页面上的CSS的影响**。样式表现在CSS作用域之外。更改替换元素自身的外观需要浏览器自身暴露的一些样式接口。
2. **有自己的尺寸**。替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是`300px*150px`。
3. **在很多CSS属性上有自己的一套表现规则。**比较具有代表性的就是`vertical-align`属性。对于非替换元素，`vertical-align`的默认值是`baseline`，被定义为字符`x`的下边缘；对于替换元素的内容没有字符`x`，替换元素的基线就被定义为元素的下边缘。

##### 2. 替换元素的默认`display`值

所有的替换元素都是内联元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。

> 各个替换元素的默认`display`属性值（P46）

**`input`和`button`按钮的区别在什么地方？**区别在于两种按钮默认的`white-space`值不一样，前者是`pre`，后者是`normal`，所表现出来的差异是：**当按钮文字足够多时，input按钮不会自动换行，button按钮则会。**

> 替换元素的`display`是`inline`、`block`和`inline-block`中的任意一个，其尺寸计算规则都是一样的。

##### 3. 替换元素的尺寸计算规则

替换元素的尺寸从内到外分为3类：固有尺寸、HTML尺寸和CSS尺寸。

1. 固有尺寸指的是替换内容原本的尺寸。
2. HTML尺寸`img`、`input`只能通过HTML原生属性改变。
3. CSS尺寸指的是可以通过CSS的`width`和`height`或者`max-width/min-width`和`max-height/min-width`设置的尺寸，对应盒尺寸的`content box`。

> 可以影响替换元素的3层结构（由里到外）：固有尺寸->HTML尺寸->CSS尺寸

这3层结构的计算规则：

- 如果没有CSS尺寸和HTML尺寸，使用固有尺寸作为最终的宽高。

页面显示宽高就是图片自身的尺寸`256px*192px`。

- 如果没有CSS尺寸，则使用HTML尺寸作为最终的宽高。

通过HTML属性`width`和`height`限定了图片的HTML尺寸，因此最终图片所呈现的宽高就是`128px*128px`。

- 如果有CSS尺寸，则最终尺寸由CSS属性决定。

此时，固有尺寸、CSS尺寸和HTML尺寸同时存在，起作用的是CSS属性限定的尺寸，因此，最终图片所呈现的宽高就是`200px*150px`。

- 如果固有尺寸含有固有的宽高比例，同时仅设置了宽度或高度，则元素依然按照固有的宽高比例显示。

设置的宽度，因为图片自身有着固定的宽高比例，所以最终图片呈现的宽高就是`200px*150px`（`150=200+192/256`）

- 如果条件不符合，在所有现代浏览器下的尺寸表现都是`300px*150px`。
- 内联替换元素和块级替换元素使用上面同一套尺寸计算规则。

> 实际开发中，为了提高加载性能和节约带宽费用，首屏图片采用滚屏的方式异步加载，并且使用一张透明的图片占位。一般直接使用`<img>`。

```
img {
    visibility: hidden;
}

img[src] {
    visibility: visible;
}
```

当`img`标签中有`src`属性时，即使为空，浏览器依然会发起请求，而且请求的是当前页面数据。当图片的`src`缺省时，图片不会有任何请求，是最高效的实现方式。

Firefox下`img`的表现是一个内联元素，而非替换元素，因此很多设置都它下面无效。要修复这个问题非常简单，就是直接设置`img {display:inline-block;}`

> 在CSS中，图片的固有尺寸是无法改变的，显示的仅仅是设定的`content box`尺寸，图片中的`content`替换内容默认的适配方式是填充`fill`。 尺寸变化的本质并不是改变固有尺寸，而是采用了填充作为适配HTML尺寸和CSS尺寸的方式。 在CSS3中，`img`以及其它替换元素的适配方式可以通过`object-fit`属性进行修改。

##### 4. 替换元素和非替换元素的距离

###### **观点1：替换元素和非替换元素之间只隔了一个src属性**

如果把`img`的`src`属性去掉，`img`就是一个和`span`类似的普通的内联标签，也就变成了一个非替换元素。

```
img {
    display: block;
    outline: 1px solid;
}
<img>
```

在Firefox下，最终的宽度是100%自适应父容器的可用宽度。**span标签设置width和height是无效的。如果设置<img alt="图片">不为空的alt值，Chrome下也会有同样的表现。**

> 在IE中有个默认的占位替换内容，当`src`属性缺失时，会使用这个默认的占位内容，这也是IE浏览器下默认`img`尺寸是`28*30`，而不是Chrome下的`0*0`的原因。

另一个证明**替换元素和非替换元素的区别在于src属性**的实例就是**基于伪元素的图片内容生成技术。**

可以对`img`元素使用`::before`和`::after`伪元素进行内容生成以及样式构建，为了解决兼容性问题，需要注意一些技术点：

1. 不能有`src`属性（关键所在）
2. 不能使用`content`属性生成图片（针对Chrome）
3. 需要有`alt`属性并且有值（针对Chrome）
4. Firefox下`::before`伪元素的`content`值会被无视，`::after`无此问题，应该与Firefox自己占用了`::before`伪元素的`content`有关。

> **基于伪元素的图片内容生成技术**，在图片还没有加载时把`alt`信息呈现出来。

> 实例Demo：[src缺省时img元素的alt信息展示](http://demo.cssworld.cn/4/1-2.php)

###### **观点2：替换元素和非替换元素之间只隔了一个CSScontent属性**

`content`属性决定了是替换元素还是非替换元素。

以下两个实例是等效的：

```
//组一
img {
    content: url("https://www.baidu.com/img/bd_logo1.png");
}
<img>

<img src="https://www.baidu.com/img/bd_logo1.png">

//组二
<img src="https://www.baidu.com/img/bd_logo1.png">

img:hover {
    content: url("logo.jpg");
}   
```

使用`content`属性，可以让普通标签元素变成替换元素。

##### 5. `content`与替换元素关系

`content`生成的内容和普通内容有很多不同的特性表现：

1. 使用`content`生成的文本无法选中、无法复制，无法被屏幕阅读设备读取，也无法被搜索引擎抓取。
2. 不能左右`:empty`伪类。`:empty`是一个CSS选择器，当元素里面无内容时进行匹配。
3. `content`动态生成值无法获取。`content`可以实现计算器效果，可以自动累加数值。

### `content`内容生成技术

#### 1. `content`辅助元素生成

```
.element:before {
    content: '';
}
```

辅助元素最常见的应用就是**清除浮动**带来的影响：

```
.clear:after {
    content: '';
    display: table; /*也可以是block*/
    clear: both;
}
```

另一个很具有代表性的应用就是**辅助实现“两端对齐”以及“垂直居中/上边缘/下边缘对齐”效果**

`:before`伪元素用于辅助实现底对齐，`:after`伪元素用于辅助实现两端对齐。

#### 2. `content`字符内容生成

直接写入字符内容，常见应用是配合`@font-face`规则实现图标字体效果。

插入Unicode字符，典型应用是插入换行符来实现某些布局或效果。

```
:after {
    content: '\A';
    white-space: pre;
}
```

`\A`是换行符中的LF字符，其Unicode编码是`000A`，在CSS的`content`属性中则直接写成`\A`;换行符中的CR字符，其Unicode编码是`000D`，在CSS的`content`属性中则直接写成`\D`。分别指回车`CR`和换行`LF`。

#### 3. `content`图片生成

`base64`图片由于内联在CSS文件中，直接出现没有尺寸为`0`的状态，同时无须额外设置`display:block/inline-block;`，CSS代码更省。

#### 4. `content`开启闭合符号生成P63

#### 5. `content attr`属性值内容生成

```
.icon:before {
    content: attr(data-title);
}
```

#### 6. 深入理解`content`计数器

1. 属性`counter-reset`，计数器重置，还可以设置为`none`和`inherit`。取消重置以及继承重置。

2. 属性`counter-increment`，计数器递增，计数器数值变化遵循HTML渲染顺序，遇到一个`increment`计数器就变化，`counter`输出的时候就是此时的计数值。

   `counter-increment`的其他特性：

   - `counter-reset`可以一次命名两个计数器名称，`counter-increment`相对应的设定。
   - 变化的值可以灵活设定。
   - 值可以是`none`或`inherit`

3. 方法`counter()/counters()`。

   - `counter(name)`
   - `counter(name,style)`，`style`参数支持关键字值是`list-style-type`所支持的值。它的作用是：除了递增递减数字，还可以是英文字母或罗马字符等。
   - `counter`还支持级联。一个`counter`属性值可有多个`coutner()`方法。

`coutners()`方法就是**嵌套计数**，基本用法是`counters(name,string);`，其中，`string`参数为字符串（需要引号，是必需参数），表示子序号的连接字符串。

实现嵌套，**必须让每个列表容器拥有一个唯一的计数源**，通过子辈对父辈的`counter-reset`重置、配合`counters()`方法才能实现计数嵌套效果。

> 一个容器的`counter-reset`是唯一的，一旦子元素出现`counter-reset`。就会改变整个容器的嵌套关系。

`counters()`支持`style`自定义递增形式：

```
counters(name, string, style);
```

#### 7. `content`内容生成的混合特性

`content`内容生成的混合特性指的是各种`content`内容生成语法可以混合在一起使用。

### 温和的`padding`属性

#### `padding`与元素的尺寸

CSS中默认的`box-sizing`是`content-box`，使用`padding`会增加元素的尺寸。

内联元素的`padding`在垂直方向会影响布局，影响视觉表现。内联元素没有可视宽度/高度（`clientWidth/clientHeight`永远为`0`），垂直方向的行为表现完全受`line-height`和`vertical-align`的影响。

**利用内联元素的padding实现高度可控的分割线。**

网页通过地址栏的`hash`值和页面HTML的`id`值一样发生锚点定位。

> **内联元素设置padding不会影响布局，但是块级元素就会。**

```
<h3><span id="hash">标题</span></h3>
h3 {
    line-height: 30px;
    font-size: 14px;
}

h3 > span {
    padding-top: 58px;
}
```

**对于非替换元素的内联元素，不仅padding不会加入行盒高度的计算，margin/border也都是如此，都是不计算高度，但实际上在内联盒周围发生了渲染。**

#### `padding`的百分比值

`padding`属性值不支持负值，支持百分比值，`padding`百分比值无论是水平方向还是垂直方向均是相对于宽度计算。

**实现一个固定比例（宽高比）的头图效果。**

```
.box {
    padding: 10% 50%;
    position: relative;
}

.box > img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
```

内联元素和块状元素应用百分比值的表现：

- 同样相对于宽度计算；
- 默认的高度和宽度细节有差异；
- `padding`会断行。

**内联元素的垂直padding会让“幽灵空白节点”出现。**

内联元素默认的高度完全受`font-size`大小控制。通过以下方法使得“幽灵空白节点”高度变为`0`。

```
span{
    padding: 50%;
    font-size: 0;
    background-color: gray;
}
```

#### 标签元素内置的`padding`

1. `ol/ul`列表内置`padding-left`，单位是`px`，如果列表中的`font-size`值很小，则`li`元素的项目符号就会在`ol/ul`元素的左边缘距离很开。
2. 表单元素大都内置padding。
   - 所有浏览器`input/textarea`输入框内置`padding`
   - 所有浏览器`button`按钮内置`padding`
   - 部分浏览器`select`下拉内置`padding`
   - 所有浏览器`radio/checkbox`单复选框无内置`padding`
   - `button`按钮元素的`padding`最难控制

**使用label元素解决button按钮在不同浏览器下padding表现不一致的问题**

```
button {
    position: absolute;
    clip: rect(0 0 0 0);
}

label {
    display: inline-block;
    line-height: 20px;
    padding: 10px;
}
```

#### `padding`与图形绘制

**“三道杠”小图标**

```
<div class="icon-menu"></div>
.icon-menu {
    display: inline-block;
    width: 100px;
    height: 8px;
    padding: 20px 0;
    border-top: 8px solid;
    border-bottom: 8px solid;
    background-color: currentColor;
    background-clip: content-box;
}
```

**“双层圆点”图**

```
<div class="icon-dot"></div>
.icon-dot {
    display: inline-block;
    width: 100px;
    height: 100px;
    padding: 10px;
    border: 10px solid;
    border-radius: 50%;
    background-color: currentColor;
    background-clip: content-box;
}
```

### 激进的`margin`属性

#### `margin`与元素尺寸以及相关布局

**1. 元素尺寸**

- **元素尺寸**：对应jQuery中的`$().width/$().height()`方法，包括`padding/border`，也就是元素的`border box`的尺寸。在原生的**DOM API**中写成`offsetWidth/offsetHeight`，也称为**元素偏移尺寸**。
- **元素内部尺寸**：对应jQuery中的`$().innerWidth()/$().innerHeight()`方法，表示元素的内部尺寸，包括`padding`但不包括`border`，也就是元素的`padding box`的尺寸。在原生的**DOM API**中写成`clientWidth/clientHeight`，也称为**元素可视尺寸**。
- **元素外部尺寸**：对应jQuery中的`$().outerWidth(true)/$().outerHeight(true)`方法，表示元素的外部尺寸，包括`padding/border/margin`，也就是元素的`margin box`的尺寸。没有对应的原生的**DOM API**。

**2. margin与元素的内部尺寸**

> **一侧定宽的两栏自适应布局效果**

1. 如果图片左侧定位：

```
<div class="box">
    <img src="1.jpg" alt="">
    <p>文字内容...</p>
</div>
.box {
    overflow: hidden;
}

.box > img {
    float: left;
}

.box > p {
    margin-left: 140px;
}
```

文字内容根据`.box`盒子的宽度变化而自动排列，形成自适应布局效果。

1. 如果图片右侧定位：改变浮动和`margin`方向。借助`margin`负值定位实现。
2. 如果图片右侧定位，同时顺序一致：

```
<div class="box">
    <div class="full">
        <p>文字内容...</p>
    </div>
    <img src="1.jpg" alt="">
</div>
.box {
    overflow: hidden;
}

.full {
    width: 100%;
    float: left;
}

.box > img {
    float: left;
    margin-left: -128px;
}

.full > p {
    margin-right: 140px;
}
```

1. 如果图片右侧定位，同时顺序一致。

> 需求：列表块两端对齐，一行显示3个，中间有2个`20px`的间隙。

```
ul {
    list-style-type: none;
    margin-right: -20px;
}

ul > li {
    float: left;
    width: 100px;
    margin-right: 20px;
    background-color: #a0b3d6;
}
```

**3. margin与元素的外部尺寸**

> 借助`margin`的外部尺寸特性来实现底部留白。只能使用子元素的`margin-bottom`来实现滚动容器的底部留白。

```
<div style="height: 200px;">
    <img src="1.jpg" alt="" style="margin: 50px 0;">
</div>
```

> 利用`margin`外部尺寸实现等高布局。此布局多出现在分栏有背景色或中间有分割线的布局中。`height:100%`需要在父级设定具体高度值时才有效。

```
<div class="column-box">
    <div class="column-left"></div>
    <div class="column-right"></div>
</div>
.column-box {
    overflow: hidden;
}

.column-left, .column-right {
    margin-bottom: -9999px;
    padding-bottom: 9999px;
}
```

> **等高布局实现原理**

垂直方向`margin`无法改变元素的内部尺寸，但却能改变外部尺寸。默认情况下，垂直方向块级元素上下距离是`0`，一旦设置`margin-bottom:-9999px;`后面所有元素和上面元素的空间距离变成`-9999px`，就是后面元素都往上移动`9999px`。`padding-bottom:9999px;`增加元素高度，正负一抵消，对布局层并无影响，但视觉层多了`9999px`高度的可使用的背景色。配合`overflow:hidden;`把多余的色块背景隐藏，实现视觉上的等高布局效果。

### `margin`的百分比值

元素设置`margin`在垂直方向上无法改变元素自身的内部尺寸，往往需要父元素作为载体，此外，由于`margin`合并的存在，垂直方向往往需要双倍尺寸才能和`padding`表现一致。

#### `margin`合并

块级元素的上边距`margin-top`与下边距`margin-bottom`有时会合并为单个外边距。

1. **块级元素**，但不包括浮动和绝对定位元素。
2. **只发生在垂直方向**，默认文档流是水平的，因此发生`margin`合并就是垂直方向。

**margin合并的3种场景**

1. 相邻兄弟元素`margin`合并。
2. 父级和第一个/最后一个子元素。

**阻止margin合并**

对于`margin-top`合并，可以进行如下操作（满足一个条件即可）：

- 父元素设置为块状格式化上下文元素
- 父元素设置`border-top`值；
- 父元素设置`padding-top`值；
- 父元素和第一个子元素之间添加内联元素进行分隔。

对于`margin-bottom`合并，可以进行如下操作（满足一个条件即可）：

- 父元素设置为块状格式化上下文元素
- 父元素设置`border-bottom`值；
- 父元素设置`padding-bottom`值；
- 父元素和第一个子元素之间添加内联元素进行分隔。
- 父元素设置`height`、`min-height`、`max-height`

`margin`合并导致头图掉下来可以添加`.container{overlfow:hidden;}`进行修复。

其原理是通过设置`overflow`属性让父级元素块状格式化上下文。

1. 空块级元素的`margin`合并。`border`阻断`margin`合并。

> 不希望空`div`元素有`margin`合并，可以进行如下操作：

- 设置垂直方向的`border`
- 设置垂直方向的`padding`
- 里面添加内联元素（直接Space空格键无效）
- 设置`height`或`min-height`

**3. margin合并的计算规则**

> `margin`合并的计算规则总结为**正正取大值**，**正负值相加**，**负负最负值**

**4. margin合并的意义**

合并机制可以保证元素上下间距一致。

父子`margin`合并的意义在于：在页面上任何地方嵌套或直接放入任何空`div`，都不会影响原来的块布局。

遇到列表或模块，全部保留上下`margin`设置：

```
.list {
    margin-top: 15px;
    margin-bottom: 15px;
}
```

#### `margin:auto`

1. 元素没有设置`width/height`，也会自动填满容器。
2. 元素没有设置`width/height`，也会自动填满包含块容器。

`margin:auto`的填充规则：

1. 如果一侧定值，一侧`auto`，则`auto`为剩余空间大小。
2. 如果两侧均是`auto`，则平分剩余空间。

`auto`用于计算对应方向所获得的剩余空间大小。

**实现右对齐效果，margin属性的auto计算就是为块级元素左中右对齐而设计的，和内联元素使用text-align控制左中右对齐相对应。**

**居中对齐左右同时auto计算即可**

**绝对定位垂直水平居中**

#### `margin`无效情形解析

1. `display`计算值`inline`的非替换元素的垂直`margin`无效。
2. 表格中`tr`和`td`元素或设置`display`计算值是`table-cell`或`table-row`的元素的`margin`都是无效。
3. `margin`合并的时候，更改`margin`值可能没有效果。
4. 绝对定位元素非定位方位的`margin`值无效。绝对定位元素的渲染是独立的，所以设置了`top`、`left`方位，再设置`margin-right`无效。
5. 定高容器的子元素的`margin-bottom`或定宽容器的子元素的`margin-right`的定位失效。**使用margin属性改变自身的位置，必须是和当前元素定位方向一样的margin属性，否则margin只能影响后面的元素或父元素。**
6. 鞭长莫及导致的`margin`无效。
7. 内联特性导致的`margin`无效。

### 功勋卓著的`border`属性

#### 为什么`border-width`不支持百分比值

`border-width`支持关键字，`thin`、`medium`

#### 了解各种`border-style`类型

1. `border-style:none`，默认值
2. `border-style:solid`，实线边框
3. `border-style:dashed`，虚线边框
4. `border-style:dotted`，点线边框
5. `border-style:double`，双线边框
6. 其他`border-style`类型，`inset`内凹，`outset`外凸，`groove`沟槽，`ridge`山脊

#### `border-color`和`color`

`border-color`默认颜色就是`color`色值。

#### `border`与透明边框技巧

**1. 右下方background定位技巧**

方法一：**使用透明边框**

```
.box {
    border: 50px solid transparent;
    background-position: 100% 50%;
}
```

**2. 增加点击区域大小**

**3. 三角等图形绘制**

```
.box {
    width: 0;
    border: 10px solid;
    border-color: #f30 transparent transparent;
}  
<div class="box"></div> 
```

#### `border`与图形构建

#### `border`等高布局技术

**父容器不能使用overflow:hidden;清除浮动影响，因为溢出隐藏是基于padding box的，如果设置了则左浮动的导航列表元素就会被隐藏掉。**

## 内联元素与流

### 字母`x`

#### 字母`x`与CSS世界的基线

字母`x`的下边缘（线）就是**基线**。

#### 字母`x`与CSS中的`x-height`

`x-height`指的是字母`x`的高度。

`vertical-align:middle;`的`middle`指的是基线网上`1/2 x-height`高度。

#### 字母`x`与CSS中的`ex`

`ex`是CSS中的一个相对单位，指的是小写字母`x`的高度，即`x-height`。

`ex`的作用是**不受字体和字号影响的内联元素的垂直居中对齐效果**。

内联元素默认是基线对齐，而基线就是`x`的底部，而`1ex`就是一个`x`的高度。

**文字与小三角图标**

### 内联元素的基石`line-height`

#### 内联元素的高度之本——`line-height`

**`div`高度是行高`line-height`决定的，而非文字。**对于非替换元素的纯内联元素，其可视高度完全由`line-height`决定。

行距=`line-height`-`font-size`。`em`是一个相对`font-size`大小的CSS单位，因此`1em`等于当前一个`font-size`大小。

`line-height`不会影响替换元素。图片为内联元素，会构成一个“行框盒子”，而在HTML5下，每一个“行框盒子”的前面都是一个宽度为`0`的“幽灵空白节点”，其内联特性表现和普通字符完全一样。

对于块级元素，`line-height`对其本身没有任何作用，改变`line-height`，块级元素的高度跟着变化实际上是**通过改变块级元素里面内联元素占据的高度实现。**

#### 为什么`line-height`可以让内联元素“垂直居中”

**行高实现多行文本或图片等替换元素的垂直居中效果**

#### 深入`line-height`的各类属性值

`line-height`的默认值是`normal`，还支持数值、百分比值以及长度值。

在实际开发中，需要对`line-height`的默认值进行重置：

1. **数值**。计算方法`line-height`=1.5*`font-size`
2. **百分比值**。`line-height`=150%*`font-size`
3. **长度值**。`line-height`=1.5*`font-size`

- 制作一个图文内容比较多的网站，使用**数值**作为单位，`line-height`值可以设置在`1.6~1.8`。
- 偏重布局结构的网站，使用**长度值**或**数值**都可以，`line-height`值可以设置在`20px`。

#### 内联元素`line-height`的“大值特性”

**无论内联元素line-height如何设置，最终父级元素的高度都是由数值大的那个line-height决定，称之为内联元素line-height的“大值特性”**

每个内联盒子外层都有一个看不见的**行框盒子**，在每个**行框盒子**前面都有一个**宽度为0的具有该元素的字体和行高属性的看不见的幽灵空白节点**。

#### `line-height`的好朋友`vertical-align`

凡是`line-height`起作用的地方`vertical-align`也一定起作用。

#### `vertical-align`家族基本认识

`vertical-align`属性值分为以下4类：

1. **线类**。`baseline`默认值、`top`、`middle`、`bottom`
2. **文本类**。`text-top`、`text-bottom`
3. **上标下标类**。`sub`、`super`
4. **数值百分比类**。`20px`、`2em`、`20%`等，正值往上偏移，负值往下偏移。

`vertical-align`的默认值是`baseline`，即基线对齐，而基线的定义是字母`x`的下边缘。因此，内联元素默认都是沿着字母`x`的下边缘对齐。

`margin/padding`是相对于宽度计算，`line-height`是相对于`font-size`计算，`vertical-align`属性的百分比值是相对于`line-height`计算。

#### `vertical-align`作用前提

`vertical-align`作用前提条件：**只能应用于内联元素以及display值为table-cell的元素**。也就是只能作用在`display`计算值为`inline`、`inline-block`、`inline-table`、`inline-cell`的元素上。

**块级元素不支持。浮动元素和绝对定位会让元素块状化，从而导致vertical-align不起作用。**

#### `vertical-align`和`line-height`之间的关系

**解决图片底部留有间隙的问题**

消除间隙的方法，从**幽灵空白节点**、`line-height`和`vertical-align`入手：

1. **图片块状化**。
2. **容器`line-height`足够小。**比如容器设置`line-height:0;`
3. **容器font-size足够小**。
4. **图片设置其他vertical-align属性值**。间隙产生的原因之一就是**基线对齐**，所以设置`vertical-align`的值为`top/bottom/middle`其中一个。

### 深入理解`vertical-align`线性类属性值

#### 1. `inline-block`与`baseline`

**一个inline-block元素，如果里面没有内联元素，或者overflow:visible，则该元素的基线就是其margin底边缘；否则其基线就是元素里面最后一行内联元素的基线。**

没有内联元素，基线就是容器的`margin`下边缘，即下边框下面的位置；有内联元素，基线就是字符的下边缘。

字符实际占据的高度是由`line-height`决定，当`line-height`变为`0`时，字符占据的高度也是`0`，此时高度的起始位置就变成字符内容区域的垂直中心位置。

**解决间隙问题的方法**

1. 改变占位`<i>`元素的基线；
2. 改造**幽灵空白节点**的基线位置；
3. 使用其他`vertical-align`对齐方式。

**改造幽灵空白节点的基线位置可以使用font-size，当字体足够小时（设为0），基线和中线会重合在一起。**

> **基于20px图标对齐的处理技巧**

1. **图标高度和当前行高都是20px**。
2. **图标标签里面永远有字符**。借助`:before`和`:after`伪元素生成一个空格字符。
3. **图标CSS不适用overflow:hidden;保证基线为里面字符的基线，但是需要让里面潜在的字符不可见**。

#### 2. `vertical-align:top/bottom`

- 内联元素：元素底部和当前行框盒子的顶部对齐。
- `table-cell`元素：元素底`padding`边缘和表格行的顶部对齐。

#### 3. `vertical-align:middle`与近似垂直居中

- 内联元素：元素的垂直中心点和行框盒子相对于外面的表格行居中对齐。
- `table-cell`元素：单元格填充盒子相对于外面的表格行居中对齐。

### 深入理解`vertical-align`文本类属性值

- `vertical-align:text-top`：盒子的顶部和父级内容区域的顶部对齐。
- `vertical-align:text-bottom`：盒子的底部和父级内容区域的底部对齐。

1. 文本类属性值的垂直对齐与左右文字大小和高度都没有关系，而所有线性类属性值的定位都会受到兄弟内联元素的影响。
2. 文本类属性值的垂直对齐可以像素级精确控制。如果是图文对齐，可以通过改变父元素的`font-size`大小精确控制对齐位置；如果是文字之间对齐，可以通过改变文字的`line-height`，也就是改变元素的高度（上下边缘位置）精确控制对齐位置。

### 简单了解深入理解`vertical-align`线性类属性值上标下标类属性值

`vertical-align`线性类属性值上标下标类属性值指的是`sub`和`super`两个值。

- `vertical-align:super`：提高盒子的基线到父级合适的上标基线位置。
- `vertical-align:sub`：降低盒子的基线到父级合适的下标基线位置。

#### 无处不在的`vertical-align`

#### 基于`vertical-align`属性的水平垂直居中弹框

> **使用纯CSS实现大小不固定的弹框永远居中的效果，如果伪元素换成普通元素，兼容IE7。**

**`vertical-align:middle`**定义是元素的中线和字符`x`中心点对齐。

1. `font-size`设置为`0`，`x`中心点位置是`.container`的上边缘，高度`100%`宽度`0`的伪元素和这个中心点对齐。CSS中默认是左上方排列对齐，所以这个伪元素和原本在容器上边缘的`x`中心点一起往下移动了半个容器高度，就是此时`x`中心点在 容器的垂直中心线上。
2. 弹框元素`.dialog`设置`vertical-align:middle;`。根据定义，弹框的垂直中心位置和`x`中心点位置对齐，此时`x`中心点在容器的垂直中心位置，`.dialog`元素和容器垂直中心位置对齐，从而实现垂直居中效果。

## 流的破坏与保护

### 魔鬼属性`float`

#### `float`的本质与特性

##### **float浮动属性让父元素高度坍塌的原因就是为了实现文字环绕效果**。

`float`自身特性：

- 包裹性；
- 块状化并格式化上下文；
- 破坏文档流；
- 没有任何`margin`合并。

包裹性，由**包裹**和**自适应性**两部分组成。

1. **包裹**。浮动元素父元素宽度`200px`，子元素是一个宽度`128px`宽度的图片，则此时浮动元素宽度表现为**包裹**，就是里面图片的宽度`128px`。

[![img](https://camo.githubusercontent.com/fa61b1e2fc2c11b76079e67444c106a3707b53ba/68747470733a2f2f692e696d6775722e636f6d2f51434e424478732e6a7067)](https://camo.githubusercontent.com/fa61b1e2fc2c11b76079e67444c106a3707b53ba/68747470733a2f2f692e696d6775722e636f6d2f51434e424478732e6a7067)

1. **自适应性**。

**块状化**，元素一旦`float`的属性值不为`none`，则其`display`计算值为`block`或`table`。**text-align对浮动元素无效。**

| 设定值               | 计算值  |
| -------------------- | ------- |
| `inline`             | `block` |
| `inline-block`       | `block` |
| `inline-table`       | `table` |
| `table-row`          | `block` |
| `table-row-group`    | `block` |
| `table-column`       | `block` |
| `table-columngroup`  | `block` |
| `table-cell`         | `block` |
| `table-caption`      | `block` |
| `table-header-group` | `block` |
| `table-footer-group` | `block` |

#### `float`的作用机制

**文字环绕效果**是由两个特性（**父级高度坍塌**和**行框盒子区域限制**）共同作用的结果，定高只能解决**父级元素高度坍塌**带来的影响，但是对**行框盒子区域限制**没有任何效果，结果导致的问题是浮动元素垂直区域一旦超出高度范围，或下面元素`margin-top`负值上偏移，就很容易使后面的元素发生“环绕效果”。

#### `float`更深入的作用机制

**浮动元素和内联元素在一行显示。**

- **浮动锚点**是`float`元素所在的**流**中的一个点，这个点本身并不浮动。其作用是产生**行框盒子**，因为**浮动锚点**表现如同一个空的内联元素，有内联元自然就有**行框盒子**。
- **浮动参考**指的是浮动元素对齐参考的实体。

`float`元素的**浮动参考**是**行框盒子**，也就是`float`元素在当前**行框盒子**内定位。

#### `float`与流体布局

### `float`的天然克星`clear`

#### 什么是`clear`属性

`clear`专门用来处理`float`属性带来的高度坍塌等问题。

```
clear: none | left | right | both
```

- `none`：默认值，左右浮动
- `left`：左侧抗浮动
- `right`：右侧抗浮动
- `both`：两侧抗浮动

实际应用中只使用`clear:both;`即可。

#### 成事不足败事有余的`clear`

`clear`属性只有块级元素才有效，而`:after`等伪元素默认都是内联水平，这就是伪元素清除浮动影响时需要设置`display`属性值的原因。

`clear:both`的作用本质是让自身不与`float`元素在一行显示，并不是真正意义上的清除浮动。

1. 如果`clear:both;`元素前面的元素就是`float`元素，则`margin-top`负值即使设成`-9999px`，也没有效果。
2. `clear:both;`后面的元素依旧可能发生文字环绕的现象。

### CSS世界的结界——**BFC**

#### **BFC**的定义

**BFC**称为**块级格式化上下文**。**BFC**元素不可能发生`margin`重叠，`margin`重叠会影响外面的元素；**BFC**元素也可以用来清除浮动的影响，如果不清楚，子元素浮动则会父元素高度坍塌，必然会影响后面元素布局和定位。

何时会触发**BFC**，常见情况如下：

- `html`根元素；
- `overflow`的值为`auto`、`scroll`或`hidden`；
- `display`的值为`table-cell`、`table-caption`和`inline-block`中的任何一个；
- `float`的值不为`none`；
- `position`的值不为`relative`和`static`。

只要元素符合上面任意一个条件，就无须使用`clear:both;`属性去清除浮动的影响。

#### **BFC**与流体布局

**BFC**的表现原则：具有**BFC**特性的元素的子元素不会受到外部元素的影响，也不会影响外部元素。普通流体元素在设置了`overflow:hidden;`后，会自动填满容器中除了浮动元素以外的剩余空间，形成自适应布局效果。

```
img {
    float: left;
    margin-right: 10px;
}

.content {
    overflow: hidden;
}
```

基于**BFC**特性的自适应布局有如下优点：

1. 自适应内容由于封闭更加健壮，容错性更强。内部设置`clear:both;`不会与`float`元素相互干扰而导致错位。
2. 自适应内容自动填充浮动以外区域，无需关心浮动元素宽度，可以整站大规模应用。

```
.left {
    float: left;
}

.right {
    float: right;
}

.bfc {
    overflow: hidden;
}
```

1. `float:left;`。浮动元素本身**BFC**化，然而浮动元素具有破坏性和包裹性，失去了元素本身的流体自适应性，因此无法用来实现自动填满容器的自适应布局。
2. `position:absolute;`。脱离文档流，不容易操作。
3. **overflow:hidden;块状元素的流体特性保存得很好，加上**BFC**的独立区域特性，而且从IE7开始就支持，兼容性很好。唯一的问题是容器盒子外的元素可能会被隐藏掉。**
4. `display:inline-block;`
5. `display:table-cell`
6. `display:table-row`
7. `display:table-caption`

总结上面的自适应布局设置，最佳实践如下：

1. `overflow: auto/hidden;`，适用于IE7及以上版本浏览器；
2. `display: inline-block;`，适应于IE6和IE7;
3. `display: table-cell;`，适用于IE8及以上版本浏览器。

IE7及以上版本浏览器适配的自适应解决方案：

1. 借助`overflow`属性，如下:

```
.lbf-content {
    overflow: hidden;
}
```

1. 融合`display: table-cell;`和`display: inline-block;`，如下：

```
.lbf-content {
    display: table-cell;
    width: 9999px;
}
```

`display: table-cell;`元素内连续英文字符无法换行的问题：

```
.word-break {
    display: table;
    width: 100%;
    table-layout: fixed;
    word-break: break-all;
}
```

### 最佳结界`overflow`

> 要彻底清除浮动的影响，最适合的属性是`overflow`。`overflow:hidden;`声明不会影响元素原先的流体特性或宽度表现。

### `overflow`裁剪界线`border box`

当子元素内容超出容器宽度高度限制的时候，剪裁的边界是`border box`的内边缘，而非`padding box`的内边缘。

在实际项目开发时，要尽量避免滚动条容器设置`padding-bottom`值。

### 了解`overflow-x`和`overflow-y`

IE8以上浏览器，`overflow`增加了两个属性，`overflow-x`和`overflow-y`，分别表示单独控制水平或垂直方向上的剪裁规则。

支持的属性值和`overflow`属性一模一样：

- `visible`：默认值
- `hidden`：剪裁
- `scroll`：滚动条
- `auto`

**不会出现一个方向溢出剪裁或滚动，另一个方向内容溢出显示的效果。**

### `overflow`与滚动条

浏览器的滚动条：

1. 默认滚动条来自`html`，而不是`body`标签。去除页面默认滚动条：

```
html {
    overflow: hidden;
}
```

在PC端，滚动条高度可以使用`document.documentElement.scrollTop`获取，但是在移动端，需要使用`document.body.scrollTop`获取。 2. 滚动条会占用容器的可用高度或宽度。

**让页面滚动条不发生晃动的技巧**

```
html {
    overflow-y: scroll;
}

:root {
    overflow-y: auto;
    overflow-x: hidden;
}

:root body {
    position: absolute;
}

body {
    width: 100%;
    overflow: hidden;
}
```

滚动条自定义效果：

- 整体部分：`::-webkit-scrollbar`
- 两端按钮：`::-webkit-scrollbar-button`
- 外层轨道：`::-webkit-scrollbar-track`
- 内层轨道：`::-webkit-scrollbar-track-piece`
- 滚动滑块：`::-webkit-scrollbar-thumb`
- 边角：`::-webkit-scrollbar-corner`

```
::-webkit-scrollbar { /*血槽宽度*/
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb { /*拖动条*/
    background-color: rgba(0, 0, 0, .3);
    border-radius: 6px;
}

::-webkit-scrollbar-track { /*背景槽*/
    background-color: #ddd;
    border-radius: 6px;
}
```

### 依赖`overflow`的样式表现

单行文字溢出`...`效果，需要使用到`overflow:hidden;`、`text-overflow:hidden;`，效果实现必需的3个声明如下：

```
.ell {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
```

最多显示2行内容，再多就打点的核心CSS代码：

```
.ell-rows-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
```

### `overflow`与锚点定位

基于URL地址的锚链`location.hash`实现锚点跳转的方法有两种：

1. `a`标签以及`name`属性
2. 使用标签的`id`属性

```
<a href="#1">发展历程</a>
<a name="1"></a>
```

**1. 锚点定位行为的触发条件**

1. URL地址中的锚链与锚点元素对应并有交互行为；
2. 可`focus`的锚点元素处于`focus`状态。

**focus锚点定位**指的是类似链接或按钮、输入框等可以被`focus`的元素在被`focus`时发生的页面重定位现象。

**URL地址锚点定位**是让元素定位在浏览器窗体的上边缘，而``focus`锚点定位`是让元素在浏览器窗体范围内显示即可。

**2. 锚点定位作用的本质**

锚点定位行为的发生，本质上是通过改变容器滚动高度或宽度来实现。改变了`scrollTop`或`scrollLeft`的值。

处理列表部分区域正在浏览器外面依然会跳动的问题：

```
$('label.click').removeAttribute('for').on('click', function () {
    $('.box').scrollTop(xxx);//滚动数值
});
```

基于父容器自身的`scrollTop`值改变来实现自定义滚动条效果。

1. 实现简单，无须做边界判断。`container.scrollTop=99999;`，列表滚动就是`scrollTop`值，实时获取。
2. 可与原生的`scroll`事件天然继承，无缝对接。
3. 无须改变子元素的结构。

### `float`的兄弟`position:absolute`

绝对定位`absolute`具有块状化，块状格式化上下文、包裹性和自适应性。自适应性的最大宽度由“包含块”决定。

### `absolute`的包含块

普通元素的百分比宽度是相对于父元素的`content box`宽度计算，而绝对定位元素的宽度是相对于第一个`position`不为`static`的祖先元素计算的。

1. 根元素`html`被称为“初始包含块”，其尺寸等同于浏览器可视窗口的大小。

2. 对于其他元素，如果该元素的`position`是`relative`或`static`，则“包含块”由其最近的块容器祖先盒子的`content box`边界组成。

3. 如果元素`position:fixed;`，则“包含块”是“初始包含块”。

4. 如果元素

   ```
   position:absolute;
   ```

   ，则“包含块”由最近的

   ```
   position
   ```

   不为

   ```
   static
   ```

   的祖先元素建立，具体方式如下：

    

   如果该祖先元素是纯`inline`元素，则规则略复杂：

   - 给内联元素的前后各生成一个宽度为`0`的内联盒子，则这两个内联盒子的`padding box`外面的包围盒子就是内联元素的“包含块”。
   - 如果该内联元素被跨行分割，则**包含块**是未定义的。 **否则，“包含块”由该祖先的padding box边界组成。**

和常规元素相比，绝对定位元素的**包含块**有3个明显的差异：

1. 内联元素也可以作为**包含块**所在的元素；
2. **包含块**所在的元素不是父级块元素，而是最近的`position`不为`static`的祖先元素或根元素；
3. 边界是`padding box`而不是`content box`。

**内联元素的“包含块”是由“生成的”前后内联盒子决定，与里面的内联盒子细节没有任何关系。**

> `height:100%;`是第一个具有定位属性值得祖先元素的高度，而`height:inherit;`则是单纯的父元素的高度继承。

### 具有相对特性的无依赖`absolute`绝对定位

**1. 各类图标定位**

**2. 超越常规布局的排版**

**3. 下拉列表的定位**

**4. 占位符效果模拟**

**5. 进一步深入“无依赖绝对定位”**

### `absolute`与`text-align`

`absolute`元素的`display`计算值是块状的，`text-align`不会起作用。

### `absolute`与`overflow`

如果`overflow`不是定位元素，同时绝对定位元素和`overflow`容器之间也没有定位元素，则`overflow`无法对`absolute`元素进行裁剪。**overflow元素父级是定位元素也不会裁剪。**

1. `overflow`属性所在的元素同时也是定位元素，里面的绝对定位元素会被裁剪；
2. `overflow`元素和绝对定位元素之间有定位元素，也会被裁剪。
3. `overflow`属性值不是`hidden`，而是`auto`或`scroll`，即使绝对定位元素高度比`overflow`元素高度大，也不会出现滚动条。

### `absolute`与`clip`

`clip`属性要起作用，元素必须是绝对定位`absolute`或固定定位`fixed`。

`clip`属性语法：`clip: rect(top right bottom left)`

### 重新认识的`clip`属性

**1. fixed固定定位的剪裁**

```
.fixed-clip {
    position: fixed;
    clip: rect(30px 200px 200px 20px);
}
```

**2. 最佳可访问性隐藏**

最佳可访问性隐藏指的是视觉上看不见，但是辅助设备能够进行识别和访问。

```
.logo h1 {
    position: absolute;
    clip: rect(0 0 0 0);
}
<a href="/" class="logo">
    <h1>我是标题</h1>
</a>
```

### 深入了解`clip`的渲染

clip隐藏仅仅是决定了哪部分是可见的，非可见部分无法响应点击事件，虽然视觉上隐藏，但是元素的尺寸依旧是原来的尺寸。

### `absolute`的流体特性

#### 当`absolute`遇到`left/top/right/bottom`属性

当`absolute`遇到`left/top/right/bottom`属性时，`absolute`元素才真正变成绝对定位元素。

#### `absolute`的流体特性

当一个绝对定位元素，其对立定位方向属性同时具有定位数值时，就会发生流体特性。

**普通元素流体特性只有水平方向（默认），但是绝对定位元素可以让垂直方向和水平方向同时保持流动性。**

#### `absolute`的`margin:auto`居中

```
.box {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```

### `position:relative`才是大哥

#### `relative`对`absolute`的限制

#### `relative`与定位

`relative`与定位特性：一是相对自身，二是无侵入（当`relative`进行定位偏移时，不会影响周围元素的布局）。

`relative`定位：相对定位元素的`left/top/right/bottom`百分比值是相对于 包含块计算，而非自身。

`top/bottom`垂直方向的百分比值计算和`height`百分比值一样，都是相对于高度计算。

当相对定位元素同时应用对立方向定位值，`top/bottom`和`left/right`同时使用时，其表现和绝对定位差异很大，只有一个方向的定位属性起作用。

#### `relative`的最小化影响原则

1. 尽量不适用`relative`，定位某元素，可以使用**无依赖的绝对定位**；
2. 如果需要使用`relative`，则该`relative`需要最小化。

```
<div>
    <div style="position:relative;">
        <img src="1.jpg" alt="" style="position: absolute;top: 0;right: 0;">
    </div>
    <p>内容1</p>
    <p>内容2</p>
</div>
```

### 强悍的`position:fixed`固定定位

#### `position:fixed`不一样的“包含块”

`position:fixed`固定定位元素的**包含块**是根元素。唯一可以限制固定定位元素的是`<html>`根元素。`relative`对`fixed`定位没有任何限制作用。

#### `position:fixed`的`absolute`模拟

```
<div class="page">固定定位元素</div>
<div class="fixed"></div>
html, body {
    height: 100%;
    overflow: hidden;
}
.page {
    height: 100%;
    overflow: auto;
}
.fixed {
    position: absolute;
}
```

#### `position:fixed`与背景锁定

## 层叠规则

### `z-index`

`z-index`属性只有和定位元素在一起时才会起作用，可以是正数或负数。

### 层叠上下文和层叠水平

### 理解元素的层叠顺序（从上至下）

1. （**装饰**）正`z-index`，位置在最下面，特指层叠上下文元素的边框和背景色
2. `z-index:auto`或看成`z-index:0`，层叠水平一样
3. （**内容**）`inline`水平盒子，指的是包括`inline/inline-block/inline-table`元素的层叠顺序，都是同等级别
4. （**布局**）`float`浮动盒子
5. （**布局**）`block`块状水平盒子
6. 负`z-index`
7. 层叠上下文`background/border`

### 牢记层叠准则

层叠领域的黄金准则。当元素发生层叠时，其覆盖关系遵循下面两条准则：

1. **谁大谁上**：层叠水平值大的在上面；
2. **后来居上**：当元素的层叠水平一致、层叠顺序相同时，处于后面的元素会覆盖前面的元素。

### 深入了解层叠上下文

#### 特性

层叠上下文元素有如下特性：

- 层叠水平要比普通元素高
- 可以阻断元素的混合模式
- 可以嵌套，内部层叠上下文及其子元素均受制于外部的“层叠上下文”
- 每个层叠上下文和兄弟元素独立，当进行层叠变化或渲染时，只需要考虑后代元素
- 当发生层叠时，整个元素被认为是在父层叠上下文的层叠顺序中

#### 创建

**1. 根层叠上下文**

根层叠上下文指的是页面根元素`html`。

**2. 定位元素和传统层叠上下文**

对于`position`值为`relative/absolute`以及Firefox/IE浏览器下含有`position:fixed`声明的定位元素，当其`z-index`值不是`auto`时，会创建层叠上下文。

> 当`z-index:auto`时，遵循黄金准则的第一条**谁大谁上**；当`z-index`为具体数值时，按照父级的大小进行层叠排列；当`z-index`为具体数值，且父级层叠水平/顺序一致，遵循**后来居上**。

**3. CSS3层叠上下文**

1. 元素为`flex`布局元素（父元素`display:flex|inline-flex`），同时`z-index`值不是`auto`。
2. 元素的`opacity`值不是`1`。
3. 元素的`transform`值不是`none`。
4. 元素的`filter`值不是`none`。

### 层叠上下文与层叠顺序

1. 如果层叠上下文不依赖`z-index`数值，则其层叠顺序是`z-index:auto`，可以看成`z-index:0`级别；
2. 如果层叠上下文元素依赖`z-index`数值，则其层叠顺序由`z-index`值决定。

元素成为定位元素，其`z-index`就会自动生效，此时其`z-index`默认是`auto`，也就是`0`级别，根据层叠顺序表，就会覆盖`inline/block/float`元素。不支持`z-index`的层叠上下文元素天然是`z-index:auto`级别，层叠上下文元素和定位元素是一个层叠顺序，当发生层叠时遵循**后来居上**准则。

### `z-index`负值深入理解

`z-index`负值具体作用：

1. **可访问性隐藏**。`z-index`负值可以隐藏元素，只需要层叠上下文内的某一个父元素加背景色即可。**优势如下**：

   - 它与`clip`隐藏相比，元素无须绝对定位，设置`position:relative`也可以隐藏；
   - 它对原来的布局以及元素的行为没有任何影响，而`clip`隐藏会导致控件`focus`的焦点发生细微的变化。

2. **IE8下的多背景模拟**。

   ```
   .box {
   background-image: url("1.jpg");
   position: relative;
   z-index: 0;
   }
   
   .box:before,
   .box:after {
   content: '';
   position: absolute;
   z-index: -1;
   }
   
   .box:before {
   background-image: url("2.jpg");
   }
   
   .box:after {
   background-image: url("3.jpg");
   }
   ```

3. **定位在元素的后面**。

### `z-index`准则

> 对于非浮层元素，避免设置`z-index`值，`z-index`值不需要超过`2`。

```
.box {
background-image: url("1.jpg");
position: relative;
z-index: 0;
}

.box:before,
.box:after {
content: '';
position: absolute;
z-index: -1;
}

.box:before {
background-image: url("2.jpg");
}

.box:after {
background-image: url("3.jpg");
}
```


## 文本处理能力

### `line-height`的另一个朋友`font-size`

`vertical-align`百分比值属性是相对于`line-height`计算，`line-height`的数值属性和百分比值都是相对于`font-size`计算。

### `font-size`和`vertical-align`的隐秘故事

**原理：内联元素默认基线对齐，图片的基线是图片的下边缘，文字内容的基线是字符x下边缘。图片下边缘和文字字形边缘往上位置对齐。通过vertical-align:25%声明让图片的下边缘和中文汉字的中心线对齐。**

### 理解`font-size`与`ex`、`em`和`rem`的关系

总结：`1em`的计算值等同当前元素所在的`font-size`计算值。

### 理解`font-size`的关键字属性值

1. 相对尺寸关键字。`larger`、`smaller`
2. 绝对尺寸关键字。`xx-large`、`x-large`、`large`、`medium`、`small`、`x-small`、`xx-small`

- 容器设置`font-size:medium`，此时这个局部展示区域的字号跟随浏览器的设置，默认计算值是`16px`。
- 容器内的文字字号全部使用相对单位，如百分比值或`em`，然后基于`16px`进行转换。

### `font-size:0`与文本的隐藏

隐藏`logo`对应元素内的文字，除了`text-indent`缩进隐藏外，还可以使用以下方法：

```
.logo {
    font-size: 0;
}
```

### 字体属性家族`font-family`

`font-family`支持两类属性值，一类是**字体名**，一类是**字体族**。

**字体族**：

- `serif`：衬线字体
- `sans-serif`：无衬线字体
- `monospace`：等宽字体
- `cursive`：手写字体
- `fantasy`：奇幻字体
- `system-ui1`：系统UI字体

### 了解衬线字体和无衬线字体

字体分衬线字体和无衬线字体。

- 中文衬线字体**宋体**，英文衬线字体**Times New Roman**、**Georgian**等；
- 无衬线字体，中文**雅黑**字体，英文**Arial**、**Verdana**、**Tahoma**、**Helivetica**、**Calibra**等。

### 等宽字体的实践价值

**1. 等宽字体与代码呈现**

**2. 等宽字体与图形呈现**

**3. ch单位与等宽字体布局**

`1ch`表示一个`0`字符的宽度。

### 中文字体和英文名称

**Windows常见内置中文字体和对应英文名称。**

| 字体中文名 | 字体英文名         |
| ---------- | ------------------ |
| 宋体       | SimSun             |
| 黑体       | SimHei             |
| 微软雅黑   | Microsoft Yahei    |
| 微软正黑体 | Microsoft JhengHei |
| 楷体       | KaiTi              |
| 新宋体     | NSimSun            |
| 仿宋       | FangSong           |

### 一些补充说明

微软正黑体是一款全面支持ClearType技术的TrueType**无衬线字体**，用于繁体中文系统。

### 字体家族其他成员

#### `font-weight`

#### `font-style`

- `font-style:normal`
- `font-style:italic`，使用当前字体的斜体
- `font-style:oblique`，单纯让文字倾斜

#### `font-variant`

#### `font`属性

#### 缩写的`font`属性

完整语法：`[font-style||font-variant||font-weight]?font-size[/line-height]?font-family`，（`font-size`和`font-family`是必需项）。

`font`缩写会破坏部分属性的继承性，必须要带上`font-family`。利用`@font face`规则将字体列表重定义为一个字体。

#### 使用关键字值得`font`属性

`font`属性支持关键字属性值，语法：`font:caption|icon|menu|message-box|small-caption|status-bar`

- `caption`：活动窗口标题栏使用的字体
- `icon`：包含图标内容所使用的字体，如所有文件夹名称、文件名称、磁盘名称，浏览器窗口标题所使用的字体
- `menu`：菜单使用的字体，如文件夹字体
- `message-box`：消息盒里面使用的字体
- `small-caption`：调色板标题所使用的字体
- `status-bar`：窗体状态栏使用的字体

使用关键字作为属性值必须是独立的，不能添加`font-family`或`font-size`等。

#### `font`关键字属性值的应用价值

```
//推荐使用
html {font: menu;}
body {font-size: 16px;}

html {font: small-caption;}
body {font-size: 16px;}

html {font: status-bar;}
body {font-size: 16px;}
```

### `@font face`规则

#### `@font face`的本质是变量

`@font face`的本质上就是一个定义字体或字体集的变量，包括字体重命名、默认字体样式设置等。

`@font face`规则支持的CSS属性有`font-family`、`src`、`font-style`、`font-weight`、`unicode-range`、`font-variant`、`font-stretch`和`font-feature-settings`。

```
@font-face {
    font-family: 'example';
    src: url("example.ttf");
    font-style: normal;
    font-weight: normal;
    unicode-range: U+0025-00FF;
    font-variant: small-caps;//忽略
    font-stretch: expanded;//忽略
    font-feature-settings: "ligal" on;//忽略
}
```

**1. font-family**

```
@font-face {
    font-family: '$';
    src: url("example.ttf");
}
```

**2. src**

如果是使用系统字体，则使用`local()`功能符；如果使用外链字体，则使用`url()`功能符。

```
@font-face {
    font-family: ICON;
    src: url("icon.eot") format('eot');
    src: url("icon.eot?#iefix") format("embedded-opentype"),
    url("icon.woff2") format("woff2"),
    url("icon.woff") format("woff"),
    url("icon.ttf") format("truetype"),
    url("icon.svg#icon") format("svg");
    font-style: normal;
    font-weight: normal;
}
```

- `eot`格式是IE私有的。（**舍弃**）
- `woff`是专门为Web开发而设计的字体格式。（**次优先使用**）
- `woff2`是比`woff`尺寸更小的字体，是Web开发首选字体。（**优先使用**）
- `ttf`格式作为系统安装字体比较多。（**舍弃**）

**推荐使用方法**：

```
@font-face {
    font-family: ICON;
    src: url("icon.eot") format('eot');
    src: local('☺'),
    url("icon.woff2") format("woff2"),
    url("icon.woff") format("woff"),
    url("icon.ttf") format("truetype");
}
```

**3. font-style**

**4. font-weight**

**5. unicode-range**

`unicode-range`的作用是可以让特定的字符或特定范围的字符使用指定的字体。

#### `@font face`与字体图标技术

```
.icon {
    font-family: ICON;
}

.icon-microphone:before {
    content: '\1f3a4';
}
```

### 文本的控制

#### `text-indent`与内联元素缩进

`text-indent`负值隐藏文本内容。

1. `text-indent`仅对第一行内联盒子内容有效；
2. 非替换元素以外的`display`计算值为`inline`的内联元素设置`text-indent`值无效，如果计算值是`inline-block/inline-table`则会生效。因此，如果父级块状元素设置了`text-indent`属性值，子`inline-block/inline-table`需要设置`text-indent:0`重置。
3. `input`标签按钮`text-indent`值无效。
4. `button`标签按钮`text-indent`值有效，但存在兼容性问题。
5. `input`和`textarea`输入框的`text-indent`在低版本IE下有兼容性问题。

#### `letter-spacing`与字符间距

`letter-spacing`特性：

1. 继承性；
2. 默认值是`normal`不是`0`。
3. 支持负值，且值足够大时会让字符形成重叠，甚至反向排列。
4. 第一行都会保留至少一个字符。
5. 支持小数值。
6. 暂时不支持百分比值。

#### `word-spacing`与单词间距

`word-spacing`和`letter-spacing`共同特性：

1. 具有继承性；
2. 默认值都是`normal`。
3. 都支持负值，都可以让字符重叠，不适合使用`word-spacing`来清除空白间隙。
4. 都支持小数值。
5. 间隔算法都会受到`text-align:jusitify`两端对齐的影响。

两者差异：

`letter-spacing`作用域所有字符，`word-spacing`仅作用于空格字符（增加空格的间隙宽度）。

#### 了解`word-break`和`word-wrap`的区别

`word-break`属性语法：

- `word-break:normal`：
- `word-break:break-all`：允许任意非CJK（Chinese/Japanese/Korean）文本间的单词断行
- `word-break:keep-all`：不允许CJK文本中的单词换行，只能在半角空格或连字符处换行。实际上和`normal`一致。移动端不适合使用这个属性值。

`word-wrap`语法：

- `word-wrap:normal`：正常的换行规则
- `word-wrap:break-word`：一行单词中没有换行点时换行，CSS3中名称`overflow-wrap`

`word-break:break-all`的作用是所有的都换行，而`word-wrap:break-word`则是如果这一行文字有了可换行的点（如空格或CJK等），就在这些换行点换行。



### `white-space`与换行和空格的控制

**1. white-space的处理模型**

`white-space`属性声明了如何处理元素内的空白字符，包括**空格键**`Space`、**回车键**`Enter`、**制表符**`Tab`产生的空白。`white-space`可以决定图文内容是否在一行显示（回车键是否生效），是否显示大段连续空白（空格是否生效）等。

其属性值包括：

- `normal`：合并空白字符和换行符。
- `pre`：空白字符不合并，并且内容只在有换行符的地方换行。
- `nowrap`：和`normal`一样会合并空白字符，但不允许文本环绕。
- `pre-wrap`：和`pre`一样，但允许文本环绕。
- `pre-line`：合并空白字符，但只在有换行符的地方换行允许文本环绕。

`white-space`的功能有3个维度，分别是：**是否合并空白字符**、**是否合并换行符**、**文本是否自动换行**。

#### **`white-space`不同属性值功能示意**

| 属性 | 换行 | 空格和制表 | 文本环绕 | | ---- | | `normal` | 合并 | 合并 |环绕| | `nowrap` | 合并 | 合并 |不环绕| | `pre` | 保留 | 保留 |不环绕| | `pre-wrap` | 保留 | 保留 |环绕| | `pre-line` | 保留 | 合并 |环绕|

**2. white-space与最大可用宽度**

当`white-space`设置为`nowrap`时，元素的宽度表现为**最大可用宽度**，换行符和一些空格全部合并，文本一行显示。

1. **包含块尺寸大小处理**。绝对定位和`inline-block`元素都具有包裹性，当文本内容宽度超过包含块宽度时，就会发生文本环绕现象。
2. **单行文字溢出...效果**。`text-overflow:ellipsis;`文字内容超出打点效果离不开`white-space:nowrap;`声明。
3. **水平列表切换效果**。如果列表的数目是不固定的，使用`white-space:nowrap;`使列表一行显示。

### `text-align`与元素对齐

`text-align:justify`想要实现两端对齐布局效果，需要满足两点：一是**有分隔点**，如空格；二是**要超过一行**，此时不是最后一行内容会两端对齐。

`text-align-last`属性，可以规定最后一行内联内容的排列方式。

```
.justify {
    text-align-last: justify;
}
```

这个方法存在兼容性问题。

### 如何解决`text-decoration`下划线和文本重叠的问题

对于纯内联元素，垂直方向的`padding`属性和`border`属性对原来的布局定位等没有任何影响。

> 使用`border-bottom`模拟`text-decoration`下划线解决文本重叠的问题

### `text-transform`字符大小写

`text-transform`是为英文字符设计，**全大写text-transform:uppercase**，**全小写text-transform:lowercase**

**1. 场景一：身份证输入**

**2. 场景二：验证码输入**

### 了解`:first-letter/:first-line`伪元素

### 深入`:first-letter`伪元素及其实例

#### **1. ::first-letter伪元素生效的前提**

- 元素的`display`计算值必须是`block`、`inline-block`、`list-item`、`table-cell/table-caption`，其他值没有用。
- 可以直接作为伪元素的字符是数字、英文字母、中文、`$`、一些运算符，以及一些“空格”。
- 字符前面不能有图片或`inline-block/inline-table`之类的元素存在。

##### **2. ::first-letter伪元素可以生效的CSS属性**

字符被选做`::first-letter`伪元素，只有一部分有效：

- 所有字体相关属性：`font`、`font-style`、`font-variant`、`font-weight`、`font-size`、`line-height`和`font-family`。
- 所有背景相关属性：`background-color`、`background-image`、`background-position`、`background-repeat`、`background-size`和`background-attachment`。
- 所有`margin`相关属性：`margin`、`margin-top/right/bottom/left`。
- 所有`padding`相关属性：`padding`、`padding-top/right/bottom/left`。
- 所有`border`相关属性：`border`、`border-style`、`border-color`、`border-width`。
- `color`属性。
- `text-decoration`、`text-transform`、`letter-spacing`、`word-spacing`、`line-height`、`float`和`vertical-align`（只有当`float:none`时）等属性。

**3. ::first-letter伪元素特点**

1. 支持部分`display`属性值标签嵌套。`::first-letter`伪元素获取可以跨标签，不仅能选择匿名内联盒子，还能透过层层标签进行选择。

   - `display`值是`inline`、`block`、`table`、`table-row`、`table-caption`、`table-cell`、`list-item`有效。
   - `inline-block/inline-table`无效。
   - `display:flex`直接选择下一行的字符内容。

2. 颜色等权重总是多了一层。`::first-letter`伪元素作为子元素存在，对于`color`继承属性，子元素的CSS设置一定比父元素的级别要高，即使使用了`!important`，**子元素会先继承，然后再应用自身设置**。

   ```
    p:first-letter {
        color: #cd0000; /*第一个字符的颜色是red*/
    }
    
    p > span {
        color: blue !important;
    }
    <p><span>第一个</span>字符会不会变成红色？</p>
   ```

**4. ::first-letter伪元素实际应用**

```
 <p class="price">￥399</p>
 .price:first-letter {
     margin-right: 5px;
     font-size: xx-large;
     vertical-align: -2px;
 }
 `:first-line`伪元素 
 - 只能作用在块级元素上`block/inline-block/list-item/table-cell/table-caption`
 - 仅支持部分CSS属性
 - 所有字体相关属性
 - `color`属性
 - 所有背景相关属性
 - `text-decoration`、`text-transfor`、`letter-spacing`、`word-spacing`、`line-height`和`vertical-align`
 - 支持标签嵌套。不支持`table`属性
 
```

## 元素的修饰与美化

### `color`

### 颜色关键字

### 不支持的`transparent`关键字

`color:transparent`从IE9才开始支持。

### 不支持的`currentColor`变量

`currentColor`变量可以使用`color`计算值。

### 不支持的`rgba`颜色和`hsla`颜色

`color`属性支持十六进制颜色、`rgb`颜色。`rgb`除了支持数值颜色，还支持百分比`rgb`颜色，数值格式只能是整数，不能是小数。

`color`属性不支持`hsl`颜色、`rgba`颜色和`hsla`颜色。

**hsl颜色：**

- `h`表示色调`hue`，取值`0~360`；
- `s`表示饱和度，取值`0~100%`，饱和度越高颜色越亮；
- `l`表示亮度，取值`0~100%`，`100%`是白色，`50%`是正常亮度，`0%`是黑色。

### 支持却鸡肋的系统颜色

### `background`

- `background-image:none`
- `background-position:0% 0%`
- `background-repeat:repeat`
- `background-attachment:scroll`
- `background-color:transparent`

IE9+浏览器：

- `background-size:auto auto`
- `background-origin:padding-box`
- `background-clip:border-box`

### 隐藏元素的`background-image`到底加不加载

IE8浏览器支持`base64`图片，包括在`background-image`属性中使用，可以节约网络请求。`base64`图片的渲染性能不高，大尺寸图片慎用。

### 与众不同的`background-position`百分比计算方式

如果缺省关键字，则会认为是`center`，`background-position:top center`=`background-position:top`。

`background-position:right 40px bottom 20px`表示距离右边缘`40px`，距离下边缘`20px`。

`position`百分比值计算公式：

```
positionX`=（容器宽度 - 图片宽度）*precentX positionY=（容器高度 - 图片高度）*`precentY
```

- （容器宽度 - 图片宽度）×（`-50%`）的结果是一个**正值**。
- （容器高度 - 图片高度）×（`-50%`）的结果是一个**正值**。

最终表现图片定位在容器内。

### `background-repeat`与渲染性能

### 外强中干的`background-attachment:fixed`

`background-attachment:fixed`只能局限在窗体背景图使用上。

### `background-color`背景色永远是最低的

### 利用多背景的属性**hack**小技巧

```
.bg {
    background: url("icon.png");
    background: url("icon.svg"), none;
}
```

### 渐变背景和`rgba`背景色的兼容处理

**背景渐变，使用IE私有的渐变滤镜实现兼容**

```
filter: progid:DXImageTransform.Microsoft.
gradient(startcolorstr=red, endcolorstr=blue, gradientType=1);
```

- `gradientType=1`代表横向渐变
- `gradientType=0`代表纵向渐变
- `startcolorstr`代表渐变起始颜色

除了使用颜色关键色，还可以使用十六进制颜色值。

> 将`0~1`的CSS3标准透明度值转换成十六进制。

```
Math.round(256 * opacity).toString(16);
```

> 实现一个`100%`红色到`50%`透明度蓝色垂直渐变。

```
.gradient {
    filter: progid:DXImageTransform.Microsoft.
    gradient(startcolorstr=#FFFF0000, endcolorstr=#7F0000FF, gradientType=0);
    background: linear-gradient(to bottom, red, rgba(0, 0, 255, .5));
}
.bgcolor {
    background: rgba(0, 0, 0, .5);
    filter: progid:DXImageTransform.Microsoft.
    gradient(startcolorstr=#7F000000, endcolorstr=#7F000000);
}

:root .bgcolor {
    filter: none;
}
```

## 元素的显示与隐藏

使用CSS让元素不可见的方法，**剪裁**、**定位到屏幕外**、**明度变化**等。

- 元素不可见，同时不占据空间，辅助设备无法访问，同时不渲染，可以使用`script`标签隐藏。

  ```
  <script type="text/html">
      <img src="1.jpg">
      <textarea style="display: none;">
          <img src="2.jpg">
      </textarea>
  </script>
  ```

`script`标签隐藏内容获取使用`script.innerHTML`，`textarea`使用`textarea.value`。

- 元素不可见，同时不占据空间，辅助设备无法访问，但资源有加载，DOM可访问，则可以直接使用`display:none`隐藏。

- 元素不可见，同时不占据空间，辅助设备无法访问，但显示隐藏时可以有`transition`淡入淡出效果。

  ```
  .hidden {
      position: absolute;
      visibility: hidden;
  }
  ```

- 元素不可见，不能点击，辅助设备无法访问，但占据空间保留，可以使用`visibility:hidden`隐藏。

- 元素不可见，不能点击，不占据空间，但键盘可访问，可以使用`clip`剪裁隐藏。

  ```
  .clip {
      position: absolute;
      clip: rect(0 0 0 0);
  }
  
  .out {
      position: relative;
      left: -999em;
  }
  ```

- 元素不可见，不能点击，但占据空间，且键盘可访问，可以使用`relative`隐藏。如果和层叠上下文之间存在设置了背景色的父元素，也可以使用更友好的`z-index`负值隐藏。

  ```
  .lower {
      position: relative;
      z-index: -1;
  }
  ```

- 元素不可见，但可以点击，而且不占据空间，可以使用透明度。

  ```
  .opacity {
      position: absolute;
      opacity: 0;
      filter: Alpha(opacity=0);
  }
  ```

- 元素不可见，但位置保留，可以点击，则直接让透明度为`0`。

  ```
  .opacity {
     opacity: 0;
     filter: Alpha(opacity=0);
  }
  ```

### `display`与元素的显示/隐藏

### `visibility`与元素的显示/隐藏

#### 不仅仅是保留空间

**1. visibility的继承性**

父元素设置`visibility:hidden`，子元素也会不可见，继承了父元素属性值，但是，如果子元素设置了`visibility:visible`，则子元素又会显示出来。

**2. visibility与CSS计数器**

`visibility:hidden`不会影响计数器的计数，但`display:none`就会。

**3. visibility与transition**

`transition`可以延时执行，和`visibility`配合可以使用CSS实现`hover`延时显示效果。

1. 普通元素的`title`属性不会被朗读，除非辅以按钮等空间元素，设置了`role="button"`才可以朗读。
2. `visibility:hidden`元素不会被朗读。

#### 了解`visibility:collapse`

## 用户界面样式

### 和`border`形似的`outline`属性

`outline`表示元素的轮廓，语法和`border`属性类似，分**宽度**、**类型**、**颜色**，支持的关键字和属性值和`border`属性一模一样。

```
.outline {
    outline: 1px solid #ccc;
}
```

### 绝不可以在全局设置`outline:0 none`

### 真正不占据空间的`outline`及其应用

**1. 案例一：头像剪裁的矩形镂空效果**

**2. 案例二：自动填满屏幕剩余空间的应用技巧**

### 光标属性`cursor`

#### 琳琅满目的`cursor`属性值

**1. 常规**

- `cursor:auto`：`cursor`默认值。

- ```
  cursor:default
  ```

  ：系统默认光标形状。

  - 模拟按钮的禁用效果，需要把`cursor:pointer`还原成`cursor:default`

- `cursor:none`：光标隐藏

**2. 链接和状态**

- `cursor:pointer`：
- `cursor:help`：帮助，光标头上带个问好
- `cursor:progress`：进行中
- `cursor:wait`：不推荐使用
- `cursor:context-menu`：上下文菜单

**3. 选择**

- `cursor:text`：文字可被选中
- `cursor:vertical-text`：文字可以垂直居中
- `cursor:crosshair`：十字光标
- `cursor:cell`：单元格选框

**4. 拖曳**

- `cursor:move`：元素可移动
- `cursor:copy`：元素可复制
- `cursor:alias`：元素可以创建别名或快捷方式
- `cursor:no-drop`：当前元素放开到当前位置是不允许的
- `cursor:not-allowed`：当前行为禁止

**5. 滚动**

- `cursor:all-scroll`：上下左右都可以滚动

**6. 拉伸**

- `cursor:col-resize`：移动垂直线条
- `cursor:row-resize`：移动水平线条

**1. 单向拉伸**

- `cursor:n-resize`：朝上的单箭头
- `cursor:e-resize`：朝右的单箭头
- `cursor:s-resize`：朝下的单箭头
- `cursor:w-resize`：朝左的单箭头
- `cursor:ne-resize`：朝右上角的单箭头
- `cursor:nw-resize`：朝左上角的单箭头
- `cursor:se-resize`：朝右下角的单箭头
- `cursor:sw-resize`：朝左下角的单箭头

**2.双向拉伸**

- `cursor:ew-resize`：
- `cursor:ns-resize`：
- `cursor:nesw-resize`：
- `cursor:nwse-resize`：

**7. 缩放**

- `cursor:zoom-in`：放大镜
- `cursor:zoom-out`：缩小镜

**8. 抓取**

- `cursor:grab`：五指张开
- `cursor:grabing`：五指收起

#### 自定义光标

解决兼容性问题。

## 流向的改变

### 改变水平流向的direction

### direction简介

- `direction:ltr;` 默认值
- `direction:rtl;`

`direction`属性可以改变替换元素或者`inline-block/inline-table`元素的水平呈现顺序。

- `direction`属性可以让单行文字溢出用`...`显示。
- `direction`属性可以改变表格中列的呈现顺序。
- `direction:rtl;`可以让`text-justify`两端对齐元素，最后一行落单的元素右对齐显示。

### `direction`的黄金搭档`unicode-bidi`

`unicode-bidi`兼容性比较好的属性：

- `unicode-bidi:normal;` 默认值
- `unicode-bidi:embed;`
- `unicode-bidi:bidi-override;`

1. `unicode-bidi:embed;`只能作用在内联元素上。`embed`属性值的字符排序是独立内嵌，不受外部影响。
2. `embed`属性值的作用原理是在元素的开始和结束为止插入特殊字符实现，在元素开始位置添加了一个`U+202A`字符（`direction:ltr`）或`U+202B`字符（`direction:rtl`），并在该元素结束位置添加一个`U+202C`字符。
3. `bidi-override`：重写双向排序规则。

### `writing-mode`

#### `writing-mode`原来的作用

`writing-mode`用来实现文字竖向呈现。

**1. writing-mode的语法**

CSS3语法：

**关键字**

- `writing-mode: horizontal-lab` 默认值
- `writing-mode: vertical-lr`
- `writing-mode: vertical-rl`

**全局值**

- `writing-mode: inherit`
- `writing-mode: initial`
- `writing-mode: unset`

IE关键字：

- `lr-tb`：内容从左往右、从上往下水平流动，并且下一行水平元素在上一行元素的下面，所有符号都是直立定位。
- `rl-tb`：内容从右往左、从上往下水平流动，并且下一行水平元素在上一行元素的下面，所有符号都是直立定位。
- `tb-rl`：内容从上往下、从右往左垂直流动，下一行垂直定位于前一个垂直行的左边，全角符号直立定位，非全角符号顺时针方向`90°`。
- `bt-rl`：内容从下往上、从右往左垂直流动，下一行垂直定位于前一个垂直行的左边，全角符号直立定位，非全角符号顺时针方向`90°`。
- `bt-lr`：内容从上往下、从左往右垂直流动，下一行垂直行在前一个的左边`。
- `tb-lr`：内容从下往上、从左往右垂直流动。
- `lr-bt`：内容从下往上、从左往右水平流动，下一行水平行在前一个的上面`。
- `rl-bt`：内容从下往上、从右往左水平流动

**补充说明**：相同的`writing-mode`属性值不会叠加。

**2. 需要关注的writing-mode属性值**

- `writing-mode: lr-tb | tb-rl | tb-lr (IE8+)`
- `writing-mode: horizontal-tb | vertical-rl | vertical-lr`

#### `writing-mode`改变了哪些规则

`writing-mode`将页面默认的水平流改为垂直流。

**1. 水平方向也能margin合并**

**2. 普通块元素可以使用margin:auto实现垂直居中**

1. 图片元素
2. 普通块状元素

**3. 可以使用text-align:center实现图片垂直居中**

**4. 可以使用text-indent实现文字下沉效果**

**5. 可以实现全兼容的icon fonts图标的旋转效果**

**6. 充分利用高度的高度自适应布局**

#### `writing-mode`和`direction`的关系

> `writing-mode`、`direction`和`unicode-bidi`是CSS中三大可以改变文本布局流向的属性，其中`direction`和`unicode-bidi`经常一起使用，也是仅有的两个不受CSS3的`all`属性影响的CSS属性，基本上就是和内联元素一起使用。