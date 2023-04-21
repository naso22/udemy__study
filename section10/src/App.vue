<template>
  <the-Header title='RememberMe'></the-Header>
  <stored-resources :resources='storedResources'></stored-resources>
</template>

<script>
import TheHeader from'./components/layouts/TheHeader.vue'
export default {
  components:{
    TheHeader
  },
  data (){
    return{
      storedResources:[
        {
          id:'official-guide',
          title:'official guide',
          description:'the official vue.js documentation.',
          link:'https://vuejs.org'
        },
        {
          id:'Google',
          title:'Google',
          description:'...',
          link:'https://vuejs.org'
        },
      ],
    };
  },
};



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
