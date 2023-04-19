<template>
    <ul>
        <learning-resource v-for="res in storedResources " 
        :key='res.id' 
        :title="res.title" 
        :description="res.description"></learning-resource>
    </ul>
</template>

<script>
import LearningResource from "./components/LearningResource.vue";

export default {

    components:{
        LearningResource
    },

    data(){
        return{
            storedResources:[
                {
                    id: 'official-guide',
                    title:'official guide',
                    description:'The official Vue.js documentation',
                    link: 'https://vuejs.org'
                },

                {
                    id: 'official-guide',
                    title:'Google',
                    description:'learn to google',
                    link: 'https://vuejs.org'
                },

            ]
        }

    }
}
</script>
