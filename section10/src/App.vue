<template>
  <ul>
    <li>
    <learning-resource v-for='res in storedResources'
                       :key='res.id'
                       :title='res.title'
                       :description='res.description'
                       :link='res.link'
    ></learning-resource>
    </li>
  </ul>
</template>

<script>
import LearningResource from './components/lerning-resoures/LearningResource.vue'
export default {
  components:{
    LearningResource,
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