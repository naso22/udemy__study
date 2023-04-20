<template>
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue'
import TheResources from './components/lerning/TheResources.vue'

export default {

    components:{
        TheHeader,
        TheResources
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

