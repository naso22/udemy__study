<template>
    <button @click="addOne">Add2</button>
</template>

<script>
export default {
    methods:{
        addOne(){
            this.$store.commit('increment')
        }
    }
}
</script>