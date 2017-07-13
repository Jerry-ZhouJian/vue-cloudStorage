<template>
    
<ul id="list" class="clear">

    <li v-for="(item,index) in mainContentData" :class="{checked:item.checked} " :key="item.id" @click="showChild(item)">
    <input type="checkbox" :class="{show:item.checked}" v-model="item.checked" @click.stop="changeChecked(item)">
      <div class="folder" ></div>
      <p v-show="item.rename">{{item.name}}</p>
      <p v-show="!item.rename" @click.stop=""><input type="text" v-model="item.name" v-focus><button @click.stop="sureReName(item)">确定</button><button @click="cancelReName(item)">取消</button></p>
      
    </li>

    <li v-for="(item,index) in createDataArr" :class="{checked:item.checked} " :key="item.id">
    <input type="checkbox" :class="{show:item.checked}" @click="changeChecked(item)">
      <div class="folder" @click="showChild(item.id)"></div>
      <p><input type="text" v-model="item.name" v-focus><button @click.stop="upFile(item)">确定</button><button @click="cancelCreate">取消</button></p>
      
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
    width: 920px;
    height: 46px;
    position: relative;
    list-style-type: none;
    
    float: left;
    text-align: left;
    border: 1px solid #ccc;
    cursor: pointer;
    margin: 5px;
}

#list li:hover{
   
      
      /*background: rgba(173, 216, 230, .3);*/
      background: #ccc;

}



#list li div.folder {
    margin: 0 auto;
    width: 110px;
    height: 60px;
    margin: 5px 80px;
    background: url('../../assets/file.png') no-repeat 15px -5px;
    /*background-size:100px 200px;*/
    zoom:70%;
    float: left
}

#list li p {
    margin: 0;
    line-height: 47px;
}


#list li input[type="checkbox"] {
  /*  position: absolute;
    left: 0px;
    top: 0px;*/
    /*visibility: hidden;*/
    border:none;
    background-color: none;
    zoom:150%;
    float: left;
    line-height: 146px;
    margin: 10px 0 0 10px;
    
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