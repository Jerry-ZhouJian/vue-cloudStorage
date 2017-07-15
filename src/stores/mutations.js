

	//功能区
	import navigation from "./mutations/navigation"
	//面包屑
	import crumb from "./mutations/crumb"
	//主内容
	import content from "./mutations/content"
	//左侧树状列表
	import leftlisttree from "./mutations/leftlisttree"

	//环境菜单
	import contentmenu from "./mutations/contentmenu"



export default {

	//公用的方法在写这里

	//隐藏环境菜单
	hiddenMenu(state){

		state.contextmenu = false

	},


	//功能区
	...navigation,

	//面包屑功能区
	...crumb,


	//主内容功能区
	...content,

	//左侧树状列表
	...leftlisttree,


	//环境菜单
	...contentmenu





}