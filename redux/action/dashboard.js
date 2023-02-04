import { GetDataTemperature, getDataUser } from "../../services/dashboard";


export const GetMovies = () => async (dispatch) => {
  const res = await getDataUser();

  dispatch({type: 'SET_Movies', value: res})
}
