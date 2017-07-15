<template>
	<div class="right-content" >
		<!-- 面包屑导航开始 -->	
		<crumbs></crumbs>	
		<!-- 面包屑导航结束 -->
		
		<!-- 主内容开始 -->
		<div class="right-content-body" v-region="dataIndex">
			<content-data v-if="mainContentDataStyle"></content-data>
			<content-list v-if="!mainContentDataStyle"></content-list>

			<div class="box"></div>
		</div>
		<!-- 主内容结束 -->

	</div>
	<!-- 主题内容 -->

</template>


<script type="text/javascript">

import Crumbs from "@/components/maincontent/Crumbs"
import ContentData from "@/components/maincontent/Content"
import ContentList from "@/components/maincontent/ContentList"



export default {
	data(){

		return {

			dataindex:{}

		}



	},
	components:{Crumbs,ContentData,ContentList},

	computed:{
		mainContentDataStyle(){


			return this.$store.getters.mainContentDataStyle


		}


		




	},

	methods:{
		dataIndex() {

			// this.$store.commit('regionData',this.dataindex);
			return this.$store.getters.mainContentData;
        }

		
	},

	//自定义指令
	directives:{
		region:{

			bind(el,binding){
			
				//绑定onmousedown事件
				el.onmousedown = function(e){

					

					//记录第一次按下的鼠标位置
					let originalX = e.clientX;
					let originalY = e.clientY;

					//将框选的盒子设置到鼠标点击位置

					var box = el.querySelector('.box')

					//选框初始化
					box.style.display = 'block';

					box.style.width = 0;
					box.style.height = 0;


					//获取所有LI
					var lis = Array.from(el.querySelectorAll('.content'))

					
					//封装碰撞检测函数
					function crashTest(element1, element2) {
				        var L1 = element1.offsetLeft;
				        var R1 = L1 + element1.offsetWidth;
				        var T1 = element1.offsetTop;
				        var B1 = T1 + element1.offsetHeight;

				        var L2 = element2.offsetLeft;
				        var R2 = L2 + element2.offsetWidth;
				        var T2 = element2.offsetTop;
				        var B2 = T2 + element2.offsetHeight;

				        return R1 > L2 && L1 < R2 && B1 > T2 && T1 < B2
				    }

					


					//绑定onmousemove事件
					document.onmousemove = function(e){

						//判断临界值

						var EclientX = e.clientX;

						var EclientY = e.clientY

						//超出左边界
						if(EclientX < el.offsetLeft){
							EclientX = el.offsetLeft

						}

						//超出右边界
						if(EclientX > el.offsetLeft + el.offsetWidth){
							EclientX = el.offsetLeft + el.offsetWidth

						}

						//超出上边界
						if(EclientY < el.offsetTop){
							EclientY = el.offsetTop

						}

						// 超出下边界
						if(EclientY > el.offsetTop + el.offsetHeight){
							EclientY = el.offsetTop + el.offsetHeight

						}


						//给选框添加定位
						box.style.left = Math.min(originalX,EclientX) + 'px';
						box.style.top = Math.min(originalY,EclientY) + 'px';

						


						//记录鼠标的变化量,取绝对值
						var disX = Math.abs(EclientX - originalX);
						var disY = Math.abs(EclientY - originalY);

						//设置盒子的宽高
						box.style.width = disX + 'px';
						box.style.height = disY + 'px'
						
						lis.forEach((item,index)=>{
							binding.value()[index].checked = crashTest(item,box)

						})
						
						return false;
					}
					//绑定onmousemove事件结束



					//绑定onmouseup事件
					document.onmouseup = function(e){


						//取消onmousemove事件
						document.onmousemove = null;

						//隐藏框选盒子
						box.style.display = 'none';

							
						return false;

					}


					return false;

				}
				//绑定onmousedown事件结束

			}


		}



	}

}
	



</script>



<style type="text/css">
	
body,div,p,img,h2,h4,ul,li,a,h5{padding:0;margin:0;}
	
/*右侧显示内容*/
.right-content {width:940px;height:581px;border-left:1px solid #e1e8ed;float: right;background:#fff;}
.right-content-body{height:483px;overflow: auto}


.right-content-body .box {width:10px;height: 10px;background: rgba(80, 128, 220, 0.4);;position: absolute;display: none}

</style>