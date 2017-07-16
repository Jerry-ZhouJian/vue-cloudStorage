<template>
  <!-- <div id="box"> -->
		

    <!-- 父级触发事件  @mousedown.prevent="hiddenMenu" -->
		<div id="content" @contextmenu.prevent="" @mousedown="hiddenMenu">
			<!--header开始-->
			<div id="header">
				<div id="logo">
					<!-- <img   src="@/assets/logo.png"> -->
					<h4>云盘管理系统</h4>
				</div>
				<div id="lcon">
					<label for="male"></label>
  					<input type="file" name="sex" id="male" @change="choosepic"/>
					<img  :src="uploadData.fileUrl" >

					<a href="javascript:;">∨</a>丨<a href="javascript:;">☆</a>
				</div>			
			</div>
			<!--header结束-->
		
			<!-- 导航开始 -->
				<navi-gation></navi-gation>
			<!-- 导航结束 -->

			<!-- 左侧列表开始 -->
			<div id='sider-list'>
  			<h2 class="sider-header">项目列表</h2>
  			<ul>
  			<left-list v-for='model in allData' :model='model'></left-list>
  			</ul>
			</div>
			<!-- 左侧列表结束 -->
			
			<!-- 左侧内容开始 -->
			<main-content></main-content>
			<!-- 左侧内容结束 -->
					
		</div><!-- content盒子 -->
	<!-- </div>box盒子 -->
</template>

<script>


import NaviGation from "@/components/Navigation"
import MainContent from "@/components/MainContent"
import LeftList from "@/components/LeftList"



export default {
  name: 'Index',
  data(){

  	return {

  		uploadData:{

  			file:'',
  			fileUrl:'../../static/icon.png'



  		}



  	}



  },
  components:{NaviGation,MainContent,LeftList},
  computed:{


  	allData(){
	
  		return this.$store.getters.allData

  	}


  },

  methods:{
  	choosepic(e){

  		// //将当前文件内容赋值给this.uploadData.file
            this.uploadData.file = e.target.files[0];


            if(e.target.files[0].size > 20000){

            	alert('图片不能大于20k')
            	return


            }

    //         //JS自带的用于解析DataURL的方法
            const fr = new FileReader();

            
    //         //将文件解析成DataURL
            fr.readAsDataURL(this.uploadData.file);

            fr.onload = () => {
            //监听文件解析的结果
            //将结果赋值给this.uploadData.fileUrl
                this.uploadData.fileUrl = fr.result;

                
            
            }

           

    		


  	},


    //隐藏环境菜单
    hiddenMenu(){
     
     //隐藏文件菜单
      this.$store.commit('hiddenMenu')

      //隐藏环境菜单
      this.$store.commit('hiddenContextMenu')

      //隐藏重命名
      this.$store.commit('hiddenReName')

      //确定新建文件
      this.$store.commit("changeChecked")
  
    }






  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body,div,p,img,h4,ul,li,a,h5{padding:0;margin:0;}

body {font-size: 18px;color: #389cd1;}

#box {width:1222px;height: 709px;background: #6e7db2;padding:60px 109px;margin:20px auto 0;}

#content {width:1200px;height: 711px;background: #ffffff;border-radius:20px;overflow: hidden;}



/*header内容*/
#header {width:1200px;height: 52px;position: relative;padding:18px 0 0 0;}

/*logo*/
#header #logo {width:144px; height:31px; padding:0 0 0 28px;float: left;}
#header h4 {   font-weight: normal;letter-spacing: 1px; line-height: 36px;float: right;font-family: "Adobe 黑体"}

/*头像*/
#header #lcon {    width: 120px; height: 31px;float: right;padding-right:40px;}
#header #lcon img {    width: 32px; height: 32px;float: left;margin-right:20px;}
#header #lcon a {   display: inline-block; line-height: 31px;vertical-align: middle;text-decoration: none;margin: 5px}
#header #lcon #male{position: absolute;left:-300px;}
#header #lcon label{position: absolute;right:130px;top:20px;width:32px;height: 32px;cursor: hand}

/*左侧列表*/
#sider-list {height:581px;width:258px;border-right:1px solid #e1e8ed;float:left;text-align: left;overflow: auto}
.sider-header {width:258px;height: 48px;background: #ffffff;color: #000;font-size: 16px;line-height:48px;padding-left: 10px;font-weight: bold;border-bottom: 2px solid #e1e8ed}



</style>
