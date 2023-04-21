<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')"
    :mode="storedResButtonMode">StoredResources</base-button>
    <base-button @click="setSelectedTab('add-resource')"
    :mode='AddResButtonMode'>AddResource</base-button>
  </base-card>
  <component :is='selectedTab'></component>

</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components:{
    StoredResources,
    AddResource
  },
  data(){
    return{
      selectedTab:'stored-resources',
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
    }
  },
  provide() {
    return {
      resources: this.storedResources
    };
  },

  computed: {
   storedResButtonMode(){
     return this.selectedTab === 'stored-resources' ? null :'flat'
   },
    AddResButtonMode(){
      return this.selectedTab === 'add-resource' ? null :'flat'
    },


  },

  methods:{
    setSelectedTab(tab){
      this.selectedTab = tab ;
    },
  },
}
</script>