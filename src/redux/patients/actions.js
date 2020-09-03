import { actionTypes } from "./types";

export const addPatientAction = (item) => ({
  type: actionTypes.ADD_PATIENT,
  payload: item,
});
export const deletePatientAction = (item) => ({
  type: actionTypes.DELETE_PATIENT,
  payload: item,
});

export const onePatientViewAction = (item) => ({
  type: actionTypes.ONE_PATIENT_VIEW,
  payload: item,
});
