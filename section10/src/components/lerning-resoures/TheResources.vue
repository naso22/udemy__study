<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">StoredResources</base-button>
    <base-button @click="setSelectedTab('add-resources')">AddResource</base-button>
  </base-card>
</template>
<component :is='selectedTab'></component>
<script >
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components:{
    StoredResources,
    AddResource
  },
  data(){
    return{
      selectedTab:'stored-resources'
    }
  },
  methods:{
    setSelectedTab(tab){
      this.selectedTab = tab ;
    },
  },
}
</script>