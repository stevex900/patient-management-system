import { actionTypes } from "./types";

const INITIAL_STATE = {
  onePatient: [
    {
      id: null,
      forName: "",
      lastName: "",
      issue: "",
      pesel: "",
    },
  ],
  patients: [
    {
      id: 0,
      forName: "Mariusz",
      lastName: "Nowakowski",
      issue:
        "Lorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sitLorem ipsum dolor sit",
      pesel: "9002276645",
    },
    {
      id: 1,
      forName: "Jan",
      lastName: "Nowak",
      issue: "Lorem ipsum dolor sit",
      pesel: "93012608565",
    },
    {
      id: 2,
      forName: "Hubert",
      lastName: "Urabański",
      issue: "Cum suscipit, cupiditate nobis ",
      pesel: "76543928787",
    },
    {
      id: 3,
      forName: "Marta",
      lastName: "Nowaczyk",
      issue: "dolore dolor explicabo nem",
      pesel: "90273615523",
    },
  ],
};

const petientsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_PATIENT:
      return { ...state, patients: [...state.patients, action.payload] };
    case actionTypes.DELETE_PATIENT:
      return { ...state, patients: action.payload };
    case actionTypes.ONE_PATIENT_VIEW:
      return { ...state, onePatient: action.payload };
    default:
      return state;
  }
};
export default petientsReducer;
