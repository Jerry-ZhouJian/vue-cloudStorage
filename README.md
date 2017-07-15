# vue-cloudStorage-jz
模拟云盘系统

# 项目分析

## 功能需求
#### 新建文件
#### 复制文件（包括批量复制）
#### 重命名文件
#### 删除文件（包括批量删除）
#### 面包屑导航
#### 内容展现形式（列表形式和大图展示形式）(待开发)
#### 左侧列表和内容展示区的联动变化
#### 上传头像


## 功能说明
#### 新建文件
* 在当前父级数据内新建文件,文件名称不能重复，不能为空，确定--创建文件，取消--不创建文件

#### 复制文件
* 复制当前选中的文件，也可以批量复制，包括复制它们的子数据,复制完成之后，取消掉被复制文件的选中状态

#### 重命名文件
* 修改当前选中的文件的名称,一次只能修改一个文件的名字,名称不能为空，名称不能重复，确定使用新名字，取消使用原来的名字

#### 删除文件（包括批量删除）
* 删除当前选中的文件，也可以批量删除，包括删除它们的子数据

#### 面包屑导航
* 展示当前显示数据在总数据中的位置，点击任意位置，显示对应位置的数据，当然可以跳着点（→_→）


#### 内容展现形式（列表形式和大图展示形式）
* 点击切换展示形式

#### 左侧列表和内容展示区的联动变化
###### 左侧树状列表
* 点击某个树节点
	1. 面包屑导航要随着点击变化
		- 多次点击相同位置，不会重复添加

	2. 内容展示区内容要随着点击变化

###### 内容变化
* 当新建、复制、删除等操作时，左侧数据结构随着变化


#### 上传头像
* 点击上传图片，图片大小不能超过20K


# 数据说明

| 属性名        | 默认值           | 作用说明             |
| ------------- |:----------------:| ---------------------|
| id            | 根据数据动态计算 | 指向子级数据pid      |
| pid           | 父级数据id       | 指向父级数据id       |
| name          | 新建文件夹       | 文件名称             |
| checked       | 根据数据动态计算 | 指向子级数据pid      |
| open          | false            | 表示是否显示子级数据 |
| rename        | true             | 表示文件已经有名称   |
| childTreeNode | true             | 存放子级数据/控制是否渲染父级图标|




# 问题说明

### 数据结构问题
- 问题：
	- 原本使用单层的数据，将所有的数据都放在一层，用id和pid联系子父级关系，发现无法使用组件递归产生树状结构，并且给复制数据带来了困难
- 解决办法：
	- 将单层数据结构改变为嵌套的结构形式，及将子级数据放在父级数据的childTreeNode属性中，这也给复制数据带来了便利（也给后续的其他功能带来便利，稍后展示）

### 复制问题
- 问题：
	- 单层的数据形式，只能复制一层数据，不能将它的子级数据也复制，想要复制子级就要拿每一个数据去和其他的数据比较、判断，数据结构形式不能直观体现子父级数据关系
- 解决办法：
	- 改变数据结构形式，复制时，只需要将自己复制一份，我的childTreeNode属性中自然存着我的子级数据

### 删除问题
- 问题：
	- 当我删除文件时，一开始使用的是filter，但是删除完之后，内容区渲染的数据就和左侧树状列表失去了联系，因为filter的返回值是一个新的数组，而不是原来的数组
- 解决办法：
	- 不在使用filter过滤，使用splice删除。在没有想到使用splice时，先是封装了一个递归的函数在总数据的数组中找到对应的父级，然后操作总数据，这时左侧树状列表就会跟着变化，但是使用splice后发现，关系不会断开之后，无需再去寻找父级，这个递归函数也就退休了，splice大大便利了一些操作，splice会返回被删除的元素，但是不会破坏数据联系。

### 批量删除问题：
- 问题：
	- 原本使用forEach去遍历数组，发现不能批量删除，因为IF语句会终止forEach的循环（详情可以自己上网了解，if和return都可以终止forEach循环>_<）
- 解决办法：
	- 在这里我使用的是for循环去删除。


### 面包屑导航问题：
- 问题：
	- 不能准确显示数据当前位置
	- 每次点击的时候需要将同层数据隐藏起来，包括它下面所有被打开的子级数据
- 解决办法：
	- 原本写了一个递归函数在总数据里面寻找当前点击数组的父级，后来发现只要在面包屑数组里面判断item.id==data.pid就可以找到父级
	- 封装了一个专门将数据的open属性值变为false的递归函数，只要将数据传进去，就可以把open属性值变为false，包括它下面的所有子级数据的open属性的值

> 备注：写面包屑不用去找父级，然后又去找父级的父级，我们只需要将我当前点击的数据存进去，我怎么点击就怎么存，使用push，先点击显示在前面，点击的顺序就是面包屑显示的数据的顺序，将数据存进去，然后点击面包屑的时候，只需将当前点击数据的childTreeNode属性中存的值渲染出来就可以了，具体联系代码理解（层级结构就是这么方便0_0）



### 重命名问题
- 问题：
	- 重命名时，input.value要默认显示当前名称，如果值改变了，需要取消重命名时无法回到原来值，因为v-model双向绑定了
- 解决办法：
	- 在vuex里面存需要重命名的数据，是存名字为字符串，不能将这个数据存进去，因为对象会赋址，input.value改变时，还是会变，所以存名字的字符串

### 左侧树状列表有子级和没有子级图标显示问题

- 问题：
	- 如果有子级数据则增加对应的图标，没有则不增加，这样的话排版的层级关系就会乱掉
- 解决办法：
	- 如果没有子级数据，用空白的背景图片去站位
	- 根据数据的open属性值，更改图标为关闭和打开状态



# 剩余问题
* 代码还没有整理，我把过程中遇到问题的一开始解决办法也留在了代码中，没有删除，提供参考。所以有的地方代码看起来有点乱，有兴趣的朋友可以自己整理。（>_>）