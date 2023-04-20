<template>
    <the-header title="RememberMe"></the-header>

</template>

<script>

import TheHeader from './components/layouts/TheHeader.vue'


export default {

    components:{
        TheHeader,
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

