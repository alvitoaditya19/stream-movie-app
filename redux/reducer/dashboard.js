const initDashboard = {
  suhuCelcius: [],
  user:[],
  // popular:[],
  // recommended:[],
}

export const dashboardReducer = (state = initDashboard, action) => {
  if(action.type === 'SET_TEMPERATURE_CELCIUS'){
    return{
      ...state,
      suhuCelcius: action.value
    }
  }
  if(action.type === 'SET_USER'){
    return{
      ...state,
      user: action.value
    }
  }
  return state;
}