let timer;
export default {
  async login(context,payload){
    return  context.dispatch('auth',{
      ...payload,
      mode:'login'
    })
  },
  async signup(context,payload){
    return  context.dispatch('auth',{
      ...payload,
      mode:'signup'
    })
  },
  async auth(context,payload){
    const mode =payload.mode
    let url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=\n' + 'AIzaSyAYRjE8inIIYNXMQVXh-HriT9Z9Uptdx-w'

    if (mode === 'signup'){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=\n' +'AIzaSyAYRjE8inIIYNXMQVXh-HriT9Z9Uptdx-w'

    }
    const response = await fetch(
      url,
      {
      method:'POST',
      body: JSON.stringify({
        email:payload.email,
        password:payload.password,
        returnSecureToken:true
      })
    });
    const responseData = await response.json();

    if (!response.ok){
      const error =new Error(responseData.message || 'failed to authenticate.Check your login data');
      throw error;
    }


    const expiresIn = +responseData.expiresIn *1000
    const expirationData = new Date().getTime()+expiresIn;

    localStorage.setItem('tokenExpiration',expirationData)
    localStorage.setItem('token',responseData.idToken);
    localStorage.setItem('userId',responseData.localId)

    timer=setTimeout(function(){
      context.dispatch('autologout')
    },expiresIn)

    context.commit('setUser',{
      token:responseData.idToken,
      userId:responseData.localId,
      tokenExpiration: expirationData
    })
    console.log(...payload)
  },

  tryLogin(context){
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiraration = localStorage.getItem('tokenExpiration')

    const expiresIn = +tokenExpiraration - new Date().getTime()

    if (expiresIn <0){
      return;
    }

    setTimeout(function(){
      context.dispatch('autologout');
    },expiresIn)

    if(token && userId){
      context.commit('setUser',{
        token:token,
        userId:userId,
      });
      }
  },

  logout(context){
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration')

    clearTimeout(timer)

    context.commit('setUser',{
      token:null,
      userId:null,
    });
  },
  autoLogout(context){
    context.dispatch('logout');
    context.commit('setAutoLogout')
  }

}