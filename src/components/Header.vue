<template>
    <div>
        headeraaa
    </div>
</template> 
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
           
        }
    },
    watch: {
        $route(){
            console.log(this.$router)
        }
    },
    computed:{
        ...mapState(['tabArr'])
    },
    created(){
        console.log(this.tabArr)
    },
    methods: {
    }
}
</script>