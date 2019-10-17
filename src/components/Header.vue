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