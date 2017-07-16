export default {



//左侧树状图列表


//展开树节点
unFoldTreeNode(state,data){

	//判断顶层
	if(!data.childTreeNode){

		findAllData(data);
		return;

	}


	//如果当前点击的数据为顶层数据则将状态全部改为false
	if(data.pid == 0){
		//将已经选中的数据open状态变为false
		findAllData(state.allData)
	}

	//在面包屑导航中找到当前点击的元素的父级
	state.crumbsData.forEach((item,index)=>{
		if(item.id == data.pid){
			findAllData(item.childTreeNode)
		}
	})

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