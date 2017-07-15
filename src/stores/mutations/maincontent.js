export default {

regionData(state,data){

console.log(data);

	state.mainContentData.forEach((item,index)=>{


		item.checked = data[index]



	})

	console.log(state.mainContentData);


}



}