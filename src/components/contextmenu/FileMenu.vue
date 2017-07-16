<template>
	

<ul class="contentmenu" style="" @mousedown.stop="">
    <li @mousedown="openFile">打开</li>
    <li @mousedown="cloneFile">复制</li>
    <li @mousedown="reName">重命名</li>
    <li @mousedown="delectFile">删除</li>
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

			//打开文件
			openFile(){
				this.$store.commit('hiddenMenu')
				this.$store.commit('showChild',this.data)
			},

			//复制文件
			cloneFile(){

				this.$store.commit('hiddenMenu')

				this.$store.commit("cloneFile")
			
			},

			//删除文件
			delectFile(){
				this.$store.commit('hiddenMenu')

				this.$store.commit("delectFlie")

			},

			//重命名
			reName(){

				this.$store.commit('hiddenMenu')

				this.$store.commit("reName")

			},

			createFile(){
	
			//如果当前新建文件夹没有确定名称，则不能再新建
			if(this.$store.getters.createDataArr.length == 1){

					return
			}else{

				this.$store.commit("createFile")
			}
			
		}


		



		}


	}



</script>


<style type="text/css" scoped>
.contentmenu{

	position: absolute;
	left:0;
	top:0;


}

.contentmenu li{
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