<template>
	<div>
	<nav>
		<ul id="nav-left">
			<li @click="createFile"><a href="javascript:;">新建文件夹</a></li>
			<li @mousedown="cloneFile"><a href="javascript:;">复制</a></li>
			<!-- <li><a href="javascript:;">分享</a></li>
			<li><a href="javascript:;">移动到</a></li> -->
			<li @mousedown.stop="reName"><a href="javascript:;">重命名</a></li>
			<li @mousedown="delectFlie"><a href="javascript:;">删除</a></li>
			
		</ul>

				<ul id="nav-right">
					

					<li @click="changeStyleLarge" :class="{selected:selectedStuta}"><span></span><span></span></li>
					<li @click="changeStyleList" id="sort" :class="{selected:!selectedStuta}"><span></span><span></span><span></span></li>

				</ul>

				<!-- <div id="sort-list">
					
					<ul >
						<li>按时间排序</li>
						<li>按字母排序</li>
						<li>显示缩略图</li>
					</ul>

				</div> -->




	</nav>
	</div>



</template>


<script type="text/javascript">
	
export default {
	data(){

		return {


			selectedStuta:true



		}




	},

	methods:{

		//新建文件夹
		createFile(){

	

			//如果当前新建文件夹没有确定名称，则不能再新建
			if(this.$store.getters.createDataArr.length == 1){

					return


			}else{


				this.$store.commit("createFile")
			}
			
		},


		//复制文件夹
		cloneFile(){

			this.$store.commit("cloneFile")
			

		},

		//删除文件
		delectFlie(){

			this.$store.commit("delectFlie")

		},

		//重命名
		reName(){
			this.$store.commit('hiddenMenu')

			this.$store.commit("reName")

		},



		//大图显示
		changeStyleLarge(){

			this.selectedStuta = true

			this.$store.commit('changeStyleLarge')
			


		},



		//列表显示
		changeStyleList(){

			this.selectedStuta = false
			this.$store.commit('changeStyleList')


		}




	}




}


</script>


<style type="text/css" scoped>

body,div,p,img,h4,ul,li,a,h5{padding:0;margin:0;}
	
/*功能按键区*/
/*功能按键区左侧*/

nav {width:1160px;height:38px;border-top:1px solid #d0d9de;border-bottom:1px solid #d0d9de;background: #ecf0f6;padding:10px 20px;position: relative;}
#nav-left li {list-style: none;float: left;height:38px;}
#nav-left a {display: inline-block; height:16px;padding:10px 20px 10px 20px;border:1px solid #55addc;font-size:12px;background:#ffffff;text-decoration: none;color: #55addc;border-radius:4px;margin-right:10px;}

/*功能按键区右侧*/
#nav-right { float: right; }
#nav-right li { display: inline-block;list-style: none;float: left;width:36px;height:36px;margin-right:10px;border-radius:2px;position: relative; border:1px solid #55addc;}

#nav-right li.selected{background:#55addc ;}


#nav-right li:nth-child(1) span:nth-child(1) {width:26px;height: 18px;background:#ffffff; display: block;margin: 3px 3.5px;border-radius: 3px;border:1px solid #55addc; }
#nav-right li:nth-child(1) span:nth-child(2) {width:26px;height: 5px;background:#ffffff; display: block;margin: 2px 3.5px;border-radius: 10px;border:1px solid #55addc; }
#nav-right li:nth-child(2) span:nth-child(1) {margin-top:4px;}
#nav-right li:nth-child(2) span {width:26px;height: 5px;background:#ffffff; display: block;margin: 3px 3.5px;border-radius: 10px;border:1px solid #55addc;}



#nav-right-1 { position: absolute;top:10px;left:10px;}
#nav-right-2 { position: absolute;top:10px;right:10px;background: #ffffff; }


#sort-list { width:130px; position: absolute;right:30px;top:58px;border:1px solid #55addc; }
#sort-list li{ list-style: none;font-size:14px;background: #ffffff;padding:11px 20px 11px 40px; }

</style>