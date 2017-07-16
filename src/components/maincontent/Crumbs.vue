<template>
<div>
	<div class="right-content-header">
			<a href="javascript:" @click="backUpper"><span>返回上一层 丨</span></a>
			<a href="javascript:" @click="backTop"><span>顶层 ></span></a>
			<ul>
			
				<a href="javascript:" v-for="item in crumbsData" @click="goToFloor(item)"><li>{{item.name}} ></li></a>
			</ul>
			
	</div>
	<div class="checkAll">
	<p>
		<input type="checkbox"  v-model="checkAll" @click.stop="checkallinput">
		<label  @click.stop="checkall">全选</label>
	</p>

	



	</div>
	
</div>
</template>



<script type="text/javascript">


	
export default {
	data(){

		return {



		}



	},

	methods:{
		//返回上一层
		backUpper(){

			//显示上一层数据
			this.$store.commit("backUpper")


			//改变面包屑导航



		},
		backTop(){

			this.$store.commit("backTop")


		},


		//跳转到指定层
		goToFloor(data){

			this.$store.commit("goToFloor",data)


		},

		//全选
		checkall(){
	
			this.checked = !this.checked
			this.$store.commit("checkAll")


		},

		//复选框全选
		checkallinput(){


		
			this.$store.commit("checkAllInput")

			

			
			

		}





	},

	whatch:{
		checkAll(val,oldVal){
			

				console.log(val);


			}

		


	},
	computed:{

		//接受面包屑数据
	    crumbsData(){

	        return this.$store.getters.crumbsData

	    },


	    //接受全选数据
	    checkAll(){

	    	return this.$store.getters.checkAll

	   

	    	

	    }



	}





}


</script>


<style type="text/css" scoped>


body,div,p,img,h2,h4,ul,li,a,h5{padding:0;margin:0;}
	
/*右侧显示内容*/
.right-content {width:940px;height:581px;border-left:1px solid #e1e8ed;float: right;background:#f5f8fa;}
.right-content .right-content-header {padding-left:10px;width:940px;height:48px;background: #ffffff;border-bottom:2px solid #e1e8ed;}
.right-content .checkAll {padding-left:10px;width:940px;height:48px;background: #ffffff;border-bottom:1px solid #e1e8ed;}

.right-content .checkAll p{float: left;font-size: 20px;line-height: 48px;}


.right-content-header input, .right-content-header span, .right-content-header ul{color: #000000;float: left;font-size: 18px;line-height: 48px;cursor: auto}

.right-content-header li {list-style: none;display: inline-block;}
</style>