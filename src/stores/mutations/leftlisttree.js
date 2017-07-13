export default {



//左侧树状图列表
showChildTreeNode(state,data){


	state.mainContentData = data.childTreeNode

	state.tierID = data.id
	// state.tierID = data.id

	//当面包屑数组里有当前点击的数据时，点击不再添加到数组内
	// if(state.crumbsData.includes(data)){

	// 	return;
	// }

	

	//如果当前点击的数据为顶层数据则将状态全部改为false
	if(data.pid == 0){
		//将面包屑数组清空
		state.crumbsData = [];

		//将已经选中的数据open状态变为false
		findAllData(state.allData)

	}

	

// console.log(state.crumbsData[state.crumbsData.length-2].pid);
	//如果当前点击的数据和面包屑导航数据最后一个为同一层时，删除最后一个，将点击的数据放进去
	//if(state.crumbsData.length == 3 && state.crumbsData[state.crumbsData.length-2].pid==data.pid ){

		
	// 	state.crumbsData.splice(state.crumbsData.length-2,1)
	// 	// state.crumbsData.push(data)
	state.crumbsData.forEach((item,index)=>{

		if(item.id == data.pid){
			console.log(11);
			findAllData(item.childTreeNode)
			state.crumbsData.splice(index+1,state.crumbsData.length)

		}


	})

	// 	findAllData(state.crumbsData[state.crumbsData.length-2].childTreeNode)

	//}

	//将当前点击的数据放入面包屑数组
	state.crumbsData.push(data)
	

	

	//封装findAllData函数，利用递归，将所有数据的open属性改为false
    function findAllData(allData){

		allData.forEach((item)=>{
			item.open = false
			
			findAllData(item.childTreeNode)

		})

	}
}

}