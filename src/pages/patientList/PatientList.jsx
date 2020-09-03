import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import { withRouter } from "react-router";
import { selectPatientsList } from "../../redux/patients/selectors";
import { connect } from "react-redux";
import { H2, H3 } from "../../components/fonts/fonts.styles";
import {
  MainContainer,
  PrimaryContainer,
  SecondaryContainer,
  // TertiaryContainer,
} from "./patientList.styles";
import { Button, ButtonContainer } from "../../components/button/Button.styles";
import {
  onePatientViewAction,
  deletePatientAction,
} from "../../redux/patients/actions";

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

const PatientList = ({
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
  // const handleDelete = (id) => {

  //   let deletedPatient = [...patientsFirebase];
  //   deletedPatient = deletedPatient.filter((item) => item.id !== id);
  //   deletePatientAction(deletedPatient);
  // };
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
    // .doc()
    // .delete()
    // .then((snapshot) => {
    //   console.log("Document successfully deleted!");
    //   // console.log(snapshot.id);
    // })
    // .catch(function (error) {
    //   console.error("Error removing document: ", error);
    // });
  };

  const patientsList = [...patientsFirebase];

  const list = patientsList.map((item) => (
    <MainContainer key={item.id}>
      <PrimaryContainer>
        <H2>Imię: {item.forName}</H2>
        <H2>Nazwisko: {item.lastName}</H2>
        <H3>PESEL: {item.pesel}</H3>
        <H3>Problem: {item.issue}</H3>
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
        </ButtonContainer>{" "}
      </SecondaryContainer>
    </MainContainer>
  ));
  return <div>{list}</div>;
};
const mapStateToProps = (state) => ({
  patients: selectPatientsList(state),
});
const mapDispatchToProps = (dispatch) => ({
  onePatientViewAction: (item) => dispatch(onePatientViewAction(item)),
  deletePatientAction: (item) => dispatch(deletePatientAction(item)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PatientList)
);
