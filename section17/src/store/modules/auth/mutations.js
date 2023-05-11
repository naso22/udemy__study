export default {
  setUser(state,payload){
    state.token =payload.token;
    state.useId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
  }
}