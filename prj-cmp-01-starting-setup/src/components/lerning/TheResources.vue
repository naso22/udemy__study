<template>
  <base-card>
    <base-button @click="setSlectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSlectedTab('add-resources')">Add Resource</base-button>
  </base-card>
  <component :is='setSlectedTab'></component>
</template>
<script>

import StoredResources from './StoredResources.vue';
import AddResources from './AddResources.vue';
export default {
  components:{
    StoredResources,
    AddResources
  },
  data(){
    return{
  selectedTab:'stored-resources'
    };
  },
  methods:{
    setSlectedTab(tab){
  this.selectedTab =tab;
    },
  }
}
</script>