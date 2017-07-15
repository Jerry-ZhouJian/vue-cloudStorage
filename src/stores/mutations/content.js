export default {


	//初始化页面数据
	getInitializeData(state){

		state.mainContentData = state.allData

	},

	//点击文件夹显示子级数据
	showChild(state,data){
		
		//要现实的子级存起来
		state.mainContentData = data.childTreeNode

		//将层ID对应改掉
		state.tierID = data.id
		
		//如果面包屑导航里面有此数据，再点击不在渲染面包屑
		if(state.crumbsData.includes(data)){

				return;

		}

		//将当前点击的放入面包屑数组
		state.crumbsData.push(data)

		state.checkAll = false

		state.mainContentData.forEach(item=>{

			item.checked = state.checkAll



		})


	},


	//修改对应数据checked值
	changeChecked(state,data){
		let n=0;
		state.mainContentData.forEach((item)=>{

			if(item.checked){		
				n++;
			}
		})


		if(n==state.mainContentData.length){

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


	//取消新建文件
	cancelCreate(state){

		state.createDataArr = []

		
	},



	//显示环境菜单状态
	changeMenu(state){

		state.contextmenu = true

	}




}