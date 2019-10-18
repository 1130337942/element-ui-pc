<template>
    <div>
        <el-tag 
            :closable="index>0" 
            v-for="(item,index) in getTab" 
            :key="index"
            :type="thisPath == item.path?'success':'info'"
            @click="changeTab(item.path)"
            @close="handleClose(index)"
        >{{item.name}}</el-tag>
    </div>
</template> 
<script>
export default {
    data(){
        return{
            routTabArr:[{
                path:'/',
                name:'首页'
            }],
            getTab:[],
            isObj:{},
            thisPath:'',
        }
    },
    watch: {
        $route(){
            this.getRouteFn()
        }
    },
    created(){
        // console.log(this.tabArr)
        this.getRouteFn()
    },
    
    methods: {
        getRouteFn(){
            // console.log(this.$route)
            let thisRoute = this.$route;
            let tabObj = {
                path:thisRoute.path,
                name:thisRoute.meta.name
            }
            this.thisPath = thisRoute.path
            this.routTabArr.push(tabObj);
            //数组去重
            for(let i = 0;i<this.routTabArr.length;i++){
                let thisPathArr =  this.routTabArr[i].path.split('/');
                let getThisPath = thisPathArr[1] == ''?'home':thisPathArr[1]
                // console.log(getThisPath)
                if(!this.isObj[getThisPath]){
                    this.getTab.push(this.routTabArr[i])
                    this.isObj[getThisPath] = 1
                }
            }
            
        },
        changeTab(path){
            this.$router.push(path)
        },
        handleClose(tag){
            this.getTab.splice(this.getTab.indexOf(tag), 1);
            this.$router.push(this.getTab[this.getTab.length-1].path)
        }
    }
}
</script>