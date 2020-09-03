import { createSelector } from "reselect";
const selectPatients = (state) => state.patientsRootReducer;

export const selectPatientsList = createSelector(
  [selectPatients],
  (patientsRootReducer) => patientsRootReducer.patients
);
export const selectOnePatient = createSelector(
  [selectPatients],
  (patientsRootReducer) => patientsRootReducer.onePatient
);
export default selectPatientsList;
