const initDashboard = {
  movies:[],
  genres:[],

}

export const dashboardReducer = (state = initDashboard, action) => {
  if(action.type === 'SET_MOVIES'){
    return{
      ...state,
      movies: action.value
    }
  }
  if(action.type === 'SET_GENRES_MOVIES'){
    return{
      ...state,
      genres: action.value
    }
  }
  return state;
}