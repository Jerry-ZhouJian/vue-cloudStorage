<template>



<li>
        <div @click='toggle(model)' >
        <!-- 如果model.childTreeNode有子级数据，显示文件图标1号 -->
        <!--  如果当前显示子级数据，显示文件图标2号-->
            <i :class="[{filetrue: model.childTreeNode[0]},{filefalse: !model.childTreeNode[0]},{opentrue: model.open && model.childTreeNode[0] }]"></i>
            
            <!--判断是否存在子级改变图标-->
            <i  class="fa fa-file-text">{{model.name}}</i> 
        </div>
        <ul v-show="model.open" >
            <left-list v-for='cel in model.childTreeNode' :model='cel'></left-list>
        </ul>
</li>
	



</template>

<script type="text/javascript">
	
export default {

	 	name:'leftList',
        props:['model'],
        components: {},
        data() {
            return {
               
                isFolder: true
            }
        },
        
        methods: {
            toggle: function(model) {
            	this.$store.commit("showChildTreeNode",model)    
                 model.open = !model.open
               
         },
        }
    }

</script>



<style type="text/css" scoped>
	

	li {padding:10px;list-style: none}
    .filetrue{
        display: block;
        width:22px;
        height: 22px;
        background: url('../../static/文件夹1.png') no-repeat;
        background-size: cover;
        float: left;
        margin: 0 10px;
    }
    .filefalse{
        display: block;
        width:22px;
        height: 22px;
        /*background: url('../../static/文件夹1.png') no-repeat;*/
        /*background-size: cover;*/
        float: left;
        margin: 0 10px;


    }
    .opentrue{
        display: block;
        width:22px;
        height: 22px;
        background: url('../../static/文件夹2.png') no-repeat;
        background-size: cover;
        float: left;
        margin: 0 10px;


    }



</style>