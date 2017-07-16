export default {
	//返回上一层
	backUpper(store){

		
			store.state.crumbsData.pop()

			if(store.state.crumbsData[0]){

				//显示子级数据
		        store.commit("showChild",store.state.crumbsData[store.state.crumbsData.length-1]) 
				//展开对应树节点
		        store.commit("unFoldTreeNode",store.state.crumbsData[store.state.crumbsData.length-1])


			}else{

				//显示子级数据
		        store.commit("showChild",store.state.allData) 
				//展开对应树节点
		        store.commit("unFoldTreeNode",store.state.allData)

			}

	}
}