export default {
  setUser(state,payload){
    state.token =payload.token;
    state.useId = payload.userId;
    state.didAutoLogout = false
  },
  setAutoLogout(state){
    state.didAutoLogout =true
  }
}