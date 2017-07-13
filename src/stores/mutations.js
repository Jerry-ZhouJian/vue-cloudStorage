

	//功能区
	import navigation from "./mutations/navigation"
	//面包屑
	import crumb from "./mutations/crumb"
	//主内容
	import content from "./mutations/content"
	//左侧树状列表
	import leftlisttree from "./mutations/leftlisttree"


export default {

	//功能区
	...navigation,

	//面包屑功能区
	...crumb,


	//主内容功能区
	...content,

	//左侧树状列表
	...leftlisttree



}