export default {

	//面包屑功能区

	//得到初始化数据
	getInitCrumbsData(state){

		//找到数据里面所有open为true的数据存到面包屑导航
		findDataOpen(state.allData)
		function findDataOpen(allData){

			allData.forEach(item=>{

			if(item.open){

				state.crumbsData.push(item)

				//递归寻找
				findDataOpen(item.childTreeNode)
			}


		})


		}
		

	},




	changeCrumbsData(state,data){



		//顶层判断
		if(!data.childTreeNode){

			state.crumbsData = [];

			return;
		}

		//如果当前点击的数据为顶层数据则将状态全部改为false
		if(data.pid == 0){
			//将面包屑数组清空
			state.crumbsData = [];
		}

		
		state.crumbsData.forEach((item,index)=>{
			//在面包屑导航中找到当前点击的元素的父级
			if(item.id == data.pid){
				//将面包屑中当前数据的父级数据后面的全部删掉
				state.crumbsData.splice(index+1,state.crumbsData.length)
			}

		})

		//将当前点击的数据放入面包屑数组
		state.crumbsData.push(data)
		
		
		
	},

	//全选
	checkAll(state){

		state.checkAll = true


		state.mainContentData.forEach(item=>{

			item.checked = state.checkAll



		})

		

	},


	checkAllInput(state){

		// //先将数据改变
		state.checkAll = true


		state.mainContentData.forEach(item=>{

			//同步数据
			item.checked = state.checkAll
			


		})

		

	}


}