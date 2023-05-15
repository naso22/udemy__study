<template>
  <h2>{{userName}}</h2>
</template>

<script>
import { computed } from'vue'
export default {
  props:['firstName','lastName'],
  setup(props,context){
    const uName =computed(function(){
      return props.firstName + ' '+ props.lastName
    });
    console.log(context)
    return{userName:uName}
  }
}
</script>