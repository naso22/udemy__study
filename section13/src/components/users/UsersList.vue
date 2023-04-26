<template>
  <button @click='confirmInput()'>confirm</button>
  <button @click='saveChanges()'>savechange</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {changesSaved:false}
  },
  methods:{
    confirmInput(){
      this.$router.push('/teams')
    },
    saveChanges(){
      this.changesSaved =true;
    }
  },
  beforeRouteLeave(to,from,next){
    if (this.changesSaved){
      next();
    }else{
      const userWantsToLeave = confirm('are you sure');
      next(userWantsToLeave)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>