

	//功能区
	import navigation from "./mutations/navigation"
	//面包屑
	import crumb from "./mutations/crumb"
	//主内容
	import content from "./mutations/Content"
	
	
	//左侧树状列表
	import leftlisttree from "./mutations/leftlisttree"

	//环境菜单
	import contextmenu from "./mutations/contextmenu"


	import maincontent from "./mutations/maincontent"



export default {

	//公用的方法在写这里

	//将localStorage数据存在state.allData中
	storeData(state,data){

		state.allData = data

	},


	//将localStorage数据存在state.crumbsData
	storeCrumbsData(state,data){

		state.crumbsData = data

	},


	//初始化数据状态
	 initDataStatus(state){

		//将已经选中的数据open状态变为false
		findAllData(state.allData)


		//封装findAllData函数，利用递归，将所有数据的open属性改为false
	    function findAllData(allData){
			allData.forEach((item)=>{
				item.checked = false
				item.rename = true
				findAllData(item.childTreeNode)

			})

		}



	 },

	


	//功能区
	...navigation,

	//面包屑功能区
	...crumb,
	//主内容区域
	...content,

	//左侧树状列表
	...leftlisttree,

	//环境菜单
	...contextmenu






}