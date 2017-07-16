<template>
	

<ul class="contextmenu" style="" @mousedown.stop="">
    <li @mousedown="createFile">新建文件</li>
    <li @mousedown="backUpper">返回上一层</li>
    <li @mousedown="backTop">返回顶层</li>
   
    
</ul>



<!-- <ul class="contentmenu" >
    <li @click="createFile">新建文件夹</li>
    <li>复制</li>
    <li>重命名</li>
    <li>删除</li>
</ul> -->

</template>



<script type="text/javascript">
	export default {
		props:['data'],

		methods:{

			//新建文件
			createFile(){
	
				//如果当前新建文件夹没有确定名称，则不能再新建
				if(this.$store.getters.createDataArr.length == 1){

						return
				}else{

					this.$store.commit("createFile")
					this.$store.commit('hiddenContextMenu')
				}
			
			},

			//返回上一层
			backUpper(){

	            //显示上一层数据
				this.$store.dispatch("backUpper")

	             //取消新建文件
	            this.$store.commit("cancelCreate")  

	            this.$store.commit('hiddenContextMenu')   

			},


			backTop(){

            //显示子级数据
            this.$store.commit("showChild",this.$store.getters.allData) 
			//展开对应树节点
            this.$store.commit("unFoldTreeNode",this.$store.getters.allData)

            //修改面包屑内容
            this.$store.commit("changeCrumbsData",this.$store.getters.allData)

            this.$store.commit('hiddenContextMenu') 



			}







		



		}


	}



</script>


<style type="text/css" scoped>
.contextmenu{

	position: absolute;
	left:0;
	top:0;


}

.contextmenu li{
	width:80px;
	list-style: none;
	text-align: center;
	border: 1px solid #ccc;
	background: #ffffff;
	cursor:pointer;
	padding:10px;
	color:#55addc;
	border:1px solid #55addc;
	
}

.contentmenu li:hover{

	background: #55addc;
	color: #fff

}
</style>