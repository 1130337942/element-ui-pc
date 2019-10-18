<template>
    <div>
        <!--@select 被激活的-->
        <el-menu @select="handleSelect"  class="el-menu-vertical-demo" :default-active="thisPath" unique-opened>
            <el-menu-item :index="sliderData[0].path"><i class="el-icon-message"></i>{{sliderData[0].name}}</el-menu-item>
            <el-submenu :index="item.id"  v-for="(item,i) in comSliderData" :key='i'>
                <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                <el-menu-item :index="childItem.path" v-for="(childItem,childI) in item.child" :key="childI">{{childItem.name}}</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
import testSliderData from '@/assets/js/testSliderData.js';
export default {
    data(){
        return{
            sliderData:testSliderData,
            thisPath:''
        }
    },
    computed:{
        comSliderData(){
            return this.sliderData.filter((item,i)=>{
                return i>0
            })
        },
    },
    watch:{
        $route(){
            this.getRouteFn()
        }
    },
    created(){
        this.getRouteFn()
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key)
            // console.log( keyPath);
            this.$router.push(key);
        },
        getRouteFn(){
            this.thisPath = this.$route.path
        }
    }
}
</script>