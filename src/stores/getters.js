export default {

	//将所有数据传递出去
	allData(state){


		//localStorage储存总数据
        localStorage.setItem('allData',JSON.stringify(state.allData));
		return state.allData;

	},

	
	//将当前层显示的数据传递出去
	mainContentData(state){

		
		return state.mainContentData

	},


	//将面包屑的数据传递出去
	crumbsData(state){

		//localStorage储存面包屑
    	// localStorage.setItem('crumbsData',JSON.stringify(state.crumbsData));

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



	//将文件菜单状态传递出去
	filemenu(state){

		return state.filemenu;

	},



	//将环境菜单状态传递出去
	contextmenu(state){

		return state.contextmenu;

	}



}