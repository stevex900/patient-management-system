import React, { useState, useEffect } from "react";

import firebase from "../../firebase/firebase";
import { Button, ButtonContainer } from "../../components/button/Button.styles";
import { H2, H3 } from "../../components/fonts/fonts.styles";
import { withRouter } from "react-router";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
} from "./searchPatient.styles";
import { selectPatientsList } from "../../redux/patients/selectors";
import {
  onePatientViewAction,
  deletePatientAction,
} from "../../redux/patients/actions";
import { connect } from "react-redux";

function usePatientsFirebase() {
  const [patientsFirebase, setPatientsFirebase] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("patients")
      .onSnapshot((snapshot) => {
        const newPatientsFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPatientsFirebase(newPatientsFirebase);
      });
    return () => unsubscribe();
  }, []);
  return patientsFirebase;
}
const SearchPatient = ({
  patients,
  onePatientViewAction,
  deletePatientAction,
  history,
}) => {
  const patientsFirebase = usePatientsFirebase();
  const handlePatientView = (id) => {
    let filteredOnePatient = [...patientsFirebase];
    filteredOnePatient = filteredOnePatient.filter((item) => item.id === id);
    onePatientViewAction(filteredOnePatient);
  };
  const handleDelete = (id) => {
    const deleted = firebase
      .firestore()
      .collection("patients")
      .where("id", "==", id);
    deleted.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        doc.ref.delete();
      });
    });

    // let deletedPatient = [...patientsFirebase];
    // deletedPatient = deletedPatient.filter((item) => item.id !== id);
    // deletePatientAction(deletedPatient);
  };
  const [patientSearch, setPatientSearch] = useState("");

  const handlePatientSearch = (e) => {
    setPatientSearch(e.target.value);
  };

  let filteredPatients = patientsFirebase.filter(
    (item) => item.lastName.toLowerCase().indexOf(patientSearch) !== -1
  );
  filteredPatients = filteredPatients.map((item) => (
    <MainContainer key={item.id}>
      <PrimaryContainer>
        <H2>{item.forName}</H2>
        <H2>{item.lastName}</H2>
        <H3>{item.pesel}</H3>
        <H3>{item.issue}</H3>{" "}
      </PrimaryContainer>
      <SecondaryContainer>
        <ButtonContainer>
          <Button
            onClick={() => {
              handlePatientView(item.id);
              history.push("/person");
            }}
          >
            Wyświetl
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          {" "}
          <Button
            onClick={() => {
              if (
                window.confirm(
                  `Czy na pewno chcesz usunąć pacjenta ${item.forName} ${item.lastName}?`
                )
              )
                handleDelete(item.id);
            }}
          >
            Usuń
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          {" "}
          <Button onClick={() => history.push("/calendar")}>Zaplanuj</Button>
        </ButtonContainer>
      </SecondaryContainer>
    </MainContainer>
  ));

  return (
    <div>
      <h2>Wyszukaj</h2>
      <form>
        <input
          value={patientSearch}
          onChange={handlePatientSearch}
          type="text"
          placeholder="Wyszukaj Pacjenta"
        />
      </form>
      <div>
        <h3>Wyszukani pacjenci:</h3>
        <div>{patientSearch && filteredPatients}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  patients: selectPatientsList(state),
});
const mapDispatchToProps = (dispatch) => ({
  onePatientViewAction: (item) => dispatch(onePatientViewAction(item)),
  deletePatientAction: (item) => dispatch(deletePatientAction(item)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchPatient)
);
