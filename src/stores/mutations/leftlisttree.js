export default {



//左侧树状图列表
showChildTreeNode(state,data){

	state.mainContentData = data.childTreeNode

	state.tierID = data.id
	
	//如果当前点击的数据为顶层数据则将状态全部改为false
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
}

}