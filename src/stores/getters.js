export default {

	//将所有数据传递出去
	allData(state){

		return state.allData;

	},


	//将左侧列表数据传递出去
	leftData(state){

			return state.leftData;

	},

	
	//将当前层显示的数据传递出去
	mainContentData(state){

		return state.mainContentData

	},


	//将面包屑的数据传递出去
	crumbsData(state){

		return state.crumbsData;

	},


	//将新建文件夹的数据传递出去
	createDataArr(state){

		return state.createDataArr;

	},


	//将重命名数据传递出去
	reName(state){

		return state.reName;

	},


	//将显示形式传递出去
	mainContentDataStyle(state){

		return state.mainContentDataStyle;

		
	},



	//将全选数据传递出去

	checkAll(state){

		
		return state.checkAll;


	},



	//将环境菜单状态传递出去
	contextmenu(state){

		return state.contextmenu;

	}



}