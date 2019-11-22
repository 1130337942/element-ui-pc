<template>
    <div>
        <el-container>
            <el-aside class="el-aside" width="200px">
                <AsideEl></AsideEl>
            </el-aside>
            <el-container>
                <el-header><HeaderEl></HeaderEl></el-header>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer>Footer </el-footer>
            </el-container>
        </el-container>
    </div>
</template>
<script>
    // import testSliderData from '@/assets/js/testSliderData.js'
    import HeaderEl from '@/components/Header.vue'
    import AsideEl from '@/components/Aside.vue'
    export default {
        data(){
            return{
                
            }
        },
        components:{
            HeaderEl,
            AsideEl
        },
        // computed:{
            
        // },
        // created(){
            
        // },
        // methods:{
        // }
       
    }
</script>
<style lang="scss" scoped>
    // .el-aside{
    //     background: #cccccc;
    // }
</style>