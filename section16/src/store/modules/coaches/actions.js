export default {
  async registerCoach(context,data){
    const userId =context.rootGetters.userId;
    const coachData ={
      id:context.rootGetters.userId,
      firstName:data.first,
      lastName:data.last,
      description:data.desc,
      hourlyRate:data.rate,
      areas:data.areas
    };

    const response= await fetch(`https://appdata-957e6-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
      method:'PUT',
      body:JSON.stringify(coachData)
    });


    if (!response.ok){
      // error
    }

    context.commit('registerCoach',
      {...coachData,
        id:userId
    })
  }
};