import { combineReducers } from "redux";
import petientsReducer from "../redux/patients/reducers";

export default combineReducers({
  patientsRootReducer: petientsReducer,
});
