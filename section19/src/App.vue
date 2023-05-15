<template>
  <section class="container">
   <user-data  :first-name='firstName' :last-name='lastName'></user-data>
    <button @clivk='setAge'>Change Age</button>
    <div>
      <input type='text' placeholder='First Name' v-model='firstName'>
      <input type='text' placeholder='Last Name' ref='lastNameInput'>
      <button @click='setLastName'>Set Last Name</button>

    </div>
  </section>
</template>

<script>
import {ref} from'vue'
import UserData from './components/UserData.vue'
export default {
  components:{
    UserData
  },
  setup(){
    const firstName =ref('')
    const lastName = ref('')
    const lastNameInput= ref(null)

    function setLastName(){
      lastName.value = lastNameInput.value
    }


    return{ firstName , lastName,lastNameInput,setLastName,}
  }
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>