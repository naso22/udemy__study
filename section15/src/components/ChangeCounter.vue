<template>
    <button @click="inc">Add2</button>
    <button @click="increase({value:11})">Add11</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        /*ddOne(){
            this.$store.dispatch('increment')
        }*/
        /*...mapActions(['increment','increase'])*/
        ...mapActions({
            inc:'increment',
            increase:'increase'
        })
    }
}
</script>