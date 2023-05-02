<template>
  <base-container title="Vuex">
     <the-counter></the-counter>
      <favorite-value></favorite-value>
      <change-counter></change-counter>
      <button @click="addOne">Add10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from "@/components/TheCounter.vue";
import ChangeCounter from "@/components/ChangeCounter.vue";
import FavoriteValue from "@/components/FavoriteValue.vue";

export default {
  components: {
    BaseContainer,
      TheCounter,
      ChangeCounter,
      FavoriteValue

  },
    methods:{
      addOne(){
          this.$store.dispatch({
              type:'increase',
              value:10
          })
      }
    }
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
</style>