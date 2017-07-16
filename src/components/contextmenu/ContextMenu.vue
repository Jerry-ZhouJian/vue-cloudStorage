<template>
	

<ul class="contextmenu" style="" @mousedown.stop="">
    <li @mousedown="createFile">新建文件</li>
   
    
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

			//刷新

			reFresh(){




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