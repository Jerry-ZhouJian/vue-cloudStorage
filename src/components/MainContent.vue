<template>
	<div class="right-content">
		<!-- 面包屑导航开始 -->	
		<crumbs></crumbs>	
		<!-- 面包屑导航结束 -->
		
		<!-- 主内容开始 -->
		<div class="right-content-body">
			<content-data v-show="mainContentDataStyle"></content-data>
			<content-list v-show="!mainContentDataStyle"></content-list>
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
	components:{Crumbs,ContentData,ContentList},
	computed:{
		mainContentDataStyle(){


			return this.$store.getters.mainContentDataStyle


		}




	}

}
	



</script>



<style type="text/css">
	
body,div,p,img,h2,h4,ul,li,a,h5{padding:0;margin:0;}
	
/*右侧显示内容*/
.right-content {width:940px;height:581px;border-left:1px solid #e1e8ed;float: right;background:#fff;}
/*.right-content-body{height:581px;}*/



</style>