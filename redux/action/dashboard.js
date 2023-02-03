import { GetDataTemperature, getDataUser } from "../../services/dashboard";

export const GetTemperatureCelcius = () => async (dispatch) => {
  const res = await GetDataTemperature();

  dispatch({type: 'SET_TEMPERATURE_CELCIUS', value: res.data})
}

export const GetUser = () => async (dispatch) => {
  const res = await getDataUser();

  dispatch({type: 'SET_USER', value: res})
}

export const SetUser = (value) => {
   return {type: 'SET_USER', value: value}
}