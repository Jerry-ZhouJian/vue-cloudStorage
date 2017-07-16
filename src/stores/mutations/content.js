export default {


	//初始化页面数据
	getInitializeData(state){


		if(!!state.crumbsData[0]){

			state.mainContentData = state.crumbsData[state.crumbsData.length-1].childTreeNode 

		}else{

			state.mainContentData = state.allData

		}


	},

	//点击文件夹显示子级数据
	showChild(state,data){

		//顶层判断
		if(!data.childTreeNode){

			state.mainContentData = data

			return;
		}

		//要现实的子级存起来
		state.mainContentData = data.childTreeNode


	},

	//取消新建文件
	cancelCreate(state){

		state.createDataArr = []

		
	},

	//隐藏重命名输入框
	hiddenReName(state){

		state.mainContentData.forEach(item=>{

	        //修改成功，影藏输入框，取消选中状
	        item.rename = true

	     })

	},

	//修改对应数据checked值
	changeChecked(state){
		let n=0;
		state.mainContentData.forEach((item)=>{

			if(item.checked){
			//统计checked为true的数量		
				n++;
			}
		})


		if(n==state.mainContentData.length && n != 0){

			state.checkAll = true

		}else{

			state.checkAll = false


		}

	},


	//确定新建文件
	upFile(state,data){

		

		let namearr = []
		namearr = state.mainContentData.filter(item=>{
					
			return item.name == data.name

		})
			

		if(namearr[0] && namearr[0].name === data.name){


			alert("文件名称不能重复")


			return;

		}


		if(!data.name){

			alert("文件名称不能为空")

			return;
		}

		state.createDataArr = []
	
		state.mainContentData.push(data)


		

	},


	



	//显示环境菜单状态
	changeMenu(state){

		state.filemenu = true

	},




	//取消重命名
	cancelReName(state,data){

				data.name = state.reName
                data.rename = true;
                data.checked = false


	},




changeContextMenu(state){

	state.contextmenu = true


}


}