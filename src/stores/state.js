export default {

    //左侧列表数据
    allData:[
        {
            id: 1,
            pid: 0,
            name: 'HTML',
            checked: false,
            open:false,
            rename:true,
            childTreeNode: [{
                    id: 4,
                    pid: 1,
                    name: 'HTML1.0',
                    checked: false ,
                    rename:true,
                    open:false,
                    childTreeNode: [

                           {
                                id: 7,
                                pid: 4,
                                name: 'HTML1.0.1',
                                checked: false,
                                open:false,
                                rename:true,
                                childTreeNode:[]
                            }


                         ] 
                },
                {
                    id: 5,
                    pid: 1,
                    name: 'HTML4.0',
                    checked: false,
                    open:false,
                    rename:true,
                    childTreeNode:[]
                },
                {
                    id: 6,
                    pid: 1,
                    name: 'HTML5.0',
                    checked: false,
                    open:false,
                    rename:true,
                    childTreeNode:[]
                }]
        },
        {
            id: 2,
            pid: 0,
            name: 'CSS',
            checked: false,
            open:false,
            rename:true,
            childTreeNode: [

                {
                    id: 9,
                    pid: 2,
                    name: 'CSS3',
                    checked: false,
                    open:false,
                    rename:true,
                    childTreeNode:[]
                }


             ]
        },
        {
            id: 3,
            pid: 0,
            name: 'JavaScript',
            checked: false,
            open:false,
            rename:true,
            childTreeNode: [

               {
                    id: 8,
                    pid: 3,
                    name: 'Juery',
                    checked: false,
                    open:false,
                    rename:true,
                    childTreeNode:[]
                }


             ]
        }
        
         
        
    ],

    //新建的文件
    createDataArr:[],

    //当前层的ID
    tierID:0,

    //当前层级元素
    tierData:[],

    //用于渲染面包屑导航的数据
    crumbsData:[],

    //渲染主内容数据
    mainContentData:[],


    //储存重命名数据
    reName:'',


    //切换显示形式
    mainContentDataStyle:true

   


}