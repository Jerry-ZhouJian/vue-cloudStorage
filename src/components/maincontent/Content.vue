<template>
	
<ul id="list" class="clear">

    <li v-for="(item,index) in mainContentData" :class="{checked:item.checked} " :key="item.id" @click="showChild(item)">
      <div class="folder" ></div>
      <p v-show="item.rename">{{item.name}}</p>
      <p v-show="!item.rename" @click.stop=""><input type="text" v-model="item.name" v-focus><button @click.stop="sureReName(item)">确定</button><button @click="cancelReName(item)">取消</button></p>
      <input type="checkbox" :class="{show:item.checked}" v-model="item.checked" @click.stop="changeChecked(item)">
    </li>

    <li v-for="(item,index) in createDataArr" :class="{checked:item.checked} " :key="item.id">
      <div class="folder" @click="showChild(item.id)"></div>
      <p><input type="text" v-model="item.name" v-focus><button @click.stop="upFile(item)">确定</button><button @click="cancelCreate">取消</button></p>
      <input type="checkbox" :class="{show:item.checked}" @click="changeChecked(item)">
    </li>
    
</ul>


</template>

<script type="text/javascript">
	export default {
		data(){

            return {
                suername:true
               
            }

        },

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
			},

            //改变checked装态
			changeChecked(item){

				this.$store.commit("changeChecked",item)

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
            sureReName(item){

                if(!item.name){

                    alert("文件名不能为空")
                    return;

                }

                let namearr = []
                namearr = this.$store.getters.mainContentData.filter(item=>{
                            
                    return item.name == item.name

                })
                    
                if(namearr[0] && namearr[0].name === item.name){


                    alert("文件名称不能重复")


                    return;

                }
                
                item.rename = true;
                item.checked = false


            },


            //取消重命名
            cancelReName(item){

                item.name = this.$store.getters.reName
                item.rename = true;
                item.checked = false

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