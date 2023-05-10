import mutations from './mutations.js';
import actions from './action.js';

export default{
namespaced:true,
  state(){
  return{
    requests:[]
  };
  },
  mutations,
  actions
}