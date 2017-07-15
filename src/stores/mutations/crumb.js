export default {

	//面包屑功能区
	//返回上一层
	backUpper(state){

		state.checkAll = false
		//当面包屑数组为空时，不能返回上一层
		if(!state.crumbsData.length){
			return;
		}

		state.crumbsData.pop();
		
		if(state.crumbsData.length-1 == -1){
			state.mainContentData = state.allData
			state.mainContentData.forEach(item=>{

			item.checked = state.checkAll



		})


			return;

		}

		state.mainContentData = state.crumbsData[state.crumbsData.length-1].childTreeNode
		state.mainContentData.forEach(item=>{

			item.checked = state.checkAll



		})

	},


	//返回顶层
	backTop(state){
		state.checkAll = false
		state.mainContentData = state.allData
		state.mainContentData.forEach(item=>{

			item.checked = state.checkAll



		})
		
		state.crumbsData=[]

	},


	//跳转到指定层
	goToFloor(state,data){

		state.mainContentData = data.childTreeNode
		 
		let n = 0;

		state.crumbsData.forEach((item,index)=>{

				if(item.id == data.id){

					n=index+1
					state.crumbsData.splice(n,state.crumbsData.length)

				}


		})
		
	},



	//全选
	checkAll(state){

		state.checkAll = !state.checkAll
		state.mainContentData.forEach(item=>{

			item.checked = state.checkAll



		})

		

	},


	checkAllInput(state){

		//先将数据改变
		state.checkAll = !state.checkAll
		state.mainContentData.forEach(item=>{

			//同步数据
			item.checked = state.checkAll
			


		})

		

	}


}