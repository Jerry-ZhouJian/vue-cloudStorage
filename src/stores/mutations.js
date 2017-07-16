

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

	//主内容
	import maincontent from "./mutations/maincontent"



export default {

	//公用的方法在写这里



	//显示子级数据
	 changePeerDataStatus(state,data){
	 	if(data.pid == 0){
		//将面包屑数组清空
		state.crumbsData = [];

		//将已经选中的数据open状态变为false
		findAllData(state.allData)

	}
	//在面包屑导航中找到当前点击的元素的父级
	state.crumbsData.forEach((item,index)=>{

		if(item.id == data.pid){
			
			findAllData(item.childTreeNode)
			state.crumbsData.splice(index+1,state.crumbsData.length)

		}


	})

	//将当前点击的数据放入面包屑数组
	state.crumbsData.push(data)
	data.open = !data.open

	//封装findAllData函数，利用递归，将所有数据的open属性改为false
    function findAllData(allData){
		allData.forEach((item)=>{
			item.checked = false
			item.open = false
			item.rename = true
			findAllData(item.childTreeNode)

		})

	}



	 },

	//隐藏文件菜单
	hiddenMenu(state){

		state.filemenu = false

	},

	//隐藏环境菜单
	hiddenContextMenu(state){

		state.contextmenu = false

	},


	//隐藏重命名输入框
	hiddenReName(state){

		state.mainContentData.forEach(item=>{

	        //修改成功，影藏输入框，取消选中状态
	        item.rename = true;
	        item.checked = false

	     })

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
	...contentmenu,

	//主内容
	...maincontent





}