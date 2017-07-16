export default {
	//返回上一层
	backUpper(store){
		
		store.state.checkAll = false
		//当面包屑数组为空时，不能返回上一层
		if(!store.state.crumbsData.length){
			// store.commit('showChildTreeNode',store.state.allData)
			return;
		}


		store.state.crumbsData.pop();
		
		if(store.state.crumbsData.length-1 == -1){
			store.state.mainContentData = store.state.allData
			store.state.mainContentData.forEach(item=>{

			item.checked = store.state.checkAll



		})


			return;

		}

		store.state.mainContentData = store.state.crumbsData[store.state.crumbsData.length-1].childTreeNode
		store.state.mainContentData.forEach(item=>{

			item.checked = store.state.checkAll



		})




		store.commit('showChildTreeNode',store.state.crumbsData[store.state.crumbsData.length-1])

		store.state.crumbsData[store.state.crumbsData.length-1].open = !store.state.crumbsData[store.state.crumbsData.length-1].open
	}

}