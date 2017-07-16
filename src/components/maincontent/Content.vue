<template>

<div>
<ul id="list" class="clear">

    <li v-for="(item,index) in mainContentData" :class="{checked:item.checked}" class="content" :key="item.id" @click.stop="showChild(item)"  @contextmenu.prevent.stop="showFileMenu($event,item)" >
      <div class="folder" ></div>
      <p v-show="item.rename">{{item.name}}</p>
      <p v-show="!item.rename" @click.stop="" @mousedown.stop=""><input type="text" v-model="item.name" v-focus ><button @click.stop="sureReName(item)">确定</button><button @click.stop="cancelReName(item)">取消</button></p>
      <input type="checkbox" :class="{show:item.checked}" v-model="item.checked" @click.stop="changeChecked()" @mousedown.stop="">
    </li>


    

    <li v-for="(item,index) in createDataArr" :class="{checked:item.checked} " :key="item.id" @click.stop="">
      <div class="folder" @click="showChild(item.id)"></div>
      <p @click.stop="" @mousedown.stop=""><input type="text" v-model="item.name" v-focus><button @click.stop="upFile(item)">确定</button><button @click="cancelCreate">取消</button></p>
    </li>
    
</ul>

<file-menu ref="ul" :data="menudata" v-show="filemenu"></file-menu>

</div>
</template>

<script type="text/javascript">

import FileMenu from "@/components/contextmenu/FileMenu"

	export default {
		data(){

            return {
                suername:true,

                menudata:[]
                
               
            }

        },
        components:{FileMenu},

        //初始化获取数据
        created(){

            this.$store.commit('getInitializeData')
        },
        
		computed:{
			mainContentData(){

				return this.$store.getters.mainContentData
            
			},

            createDataArr(){

                return this.$store.getters.createDataArr

            },

            filemenu(){

                return this.$store.getters.filemenu


            }

		},

		methods:{

            //显示子文件
			showChild(item){

                //新建文件夹，如果名字没有确定，是点不进去的
                if(!item.name){

                    return

                }
                //通知mutations更改数据
				this.$store.commit("showChild",item)

                // this.$store.commit("showChildTreeNode",item)

                // item.open = !item.open
			},

            //改变checked装态
			changeChecked(){

                //影藏环境菜单
                this.$store.commit('hiddenMenu')

                
				this.$store.commit("changeChecked")

			},
            //提交新建的文件夹
            upFile(item){

                item.rename = true;

                this.$store.commit("upFile",item)


            },
            //取消新建文件夹
            cancelCreate(){

                this.$store.commit("cancelCreate")

            },

            //确定重命名
            sureReName(data){


                //判断名字不能为空
                if(!data.name){

                    alert("文件名不能为空")
                    return;

                }

                //声明一个变量来表示，修改之后的状态
                let namestatus = false
                this.$store.getters.mainContentData.forEach(item=>{
                  //判断状态为false的数据和当前数据的名称是否一样          
                    if(!item.checked && item.name == data.name){

                        namestatus = true
                       
                        //如果有一个一样的就停止循环，后面不在判断
                        return;


                    }

                })

                if(namestatus){

                     alert("文件名称不能重复");
                     //如果名字重复，则停止后续操作
                     return;
                }
                    

                //修改成功，影藏输入框，取消选中状态
                data.rename = true;
                data.checked = false


            },


            //取消重命名
            cancelReName(item){

                this.$store.commit('cancelReName',item)


            },

            //文件菜单
            showFileMenu(e,data){
                //e事件对象

                //设置环境菜单的位置
                this.$refs.ul.$el.style.left = e.clientX + 'px'
                this.$refs.ul.$el.style.top = e.clientY + 'px'
                
                //将所有数据checked变为false
                this.$store.commit('hiddenReName')

                //当前点击的变为true
                data.checked =true

                //将当前数据传递给子组件
                this.menudata = data

                //发请求改变环境菜单的状态
                this.$store.commit('changeMenu')

                //判断全选
                this.$store.commit("changeChecked")

            }


		},

        directives: {
            //自定义指令--获得焦点
            focus: {
                inserted: function (el) {
                el.focus();
               
                }

            }

            
        },
	}

</script>


<style  scoped  type="text/css" >

div{overflow: hidden;}

#list li {
    width: 130px;
    position: relative;
    list-style-type: none;
    padding: 10px;
    float: left;
    text-align: center;
    border: 1px solid #fff;
    cursor: pointer;
    margin: 10px;
   
}



#list li:hover{
   
      border: 1px solid #00b3ee;
      background: rgba(173, 216, 230, .3);

}
#list li:hover input[type="checkbox"] {
      display: block
}


#list li div.folder {
    margin: 0 auto;
    width: 64px;
    height: 54px;
    background: url('../../assets/file.png') no-repeat 0 -5px;
}

#list li p {
    margin: 0;
    line-height: 30px;
}


#list li input[type="checkbox"] {
    position: absolute;
    left: 0px;
    top: 0px;
    display: none;
}


#list li input[type="text"] {
    width: 100px;
    text-align: center;
}

#list li.checked {
    border: 1px solid #00b3ee;
    background: rgba(173, 216, 230, .3);
}

#list li input.show{
	display:block
}




</style>