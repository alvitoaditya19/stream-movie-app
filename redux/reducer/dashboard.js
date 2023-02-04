const initDashboard = {
  movies:[],
}

export const dashboardReducer = (state = initDashboard, action) => {
  if(action.type === 'SET_MOVIES'){
    return{
      ...state,
      movies: action.value
    }
  }
  return state;
}