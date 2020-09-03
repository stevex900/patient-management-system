import React, { useState, useEffect } from "react";
import firebase from "../../firebase/firebase";
import { Button } from "../../components/button/Button.styles";
import { addPatientAction } from "../../redux/patients/actions";
import { connect } from "react-redux";
import { Form, Label, Input, Textarea } from "./addPatient.styles";
// let number = 8;

function useIdPatientsFirebase() {
  const [idPatientsFirebase, setIdPatientsFirebase] = useState([]);
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("id")
      .onSnapshot((snapshot) => {
        const newIdPatientsFirebase = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIdPatientsFirebase(newIdPatientsFirebase);
      });
    return () => unsubscribe();
  }, []);
  return idPatientsFirebase;
}

const AddPatient = ({ addPatientAction }) => {
  // ...............................................
  const [inputForname, setInputForname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputPesel, setInputPesel] = useState("");
  const [inputIssue, setInputIssue] = useState("");
  const idPatientsFirebase = useIdPatientsFirebase();
  let id = idPatientsFirebase[0];
  const handleChangeText = (bindValue, e) => {
    if (bindValue === "forName") {
      setInputForname(e.target.value);
    } else if (bindValue === "lastName") {
      setInputLastname(e.target.value);
    } else if (bindValue === "pesel") {
      setInputPesel(e.target.value);
    } else if (bindValue === "issue") {
      setInputIssue(e.target.value);
    }
  };

  const handleAddPatient = (e) => {
    e.preventDefault();
    let patientId = id;
    const newPatient = {
      id: patientId.id,
      forName: inputForname,
      lastName: inputLastname,
      issue: inputIssue,
      pesel: inputPesel,
    };
    patientId.id++;

    if (inputForname && inputLastname) {
      // addPatientAction(newPatient);
      firebase.firestore().collection("patients").doc().set(newPatient);
      alert(
        `Dotałeś Nowego Pacjenta ${inputForname} ${inputLastname}. Udanego leczenia!`
      );
      firebase
        .firestore()
        .collection("id")
        .doc("YECOigHHUqT5LqyXp1Hb")
        .set(patientId);
    } else {
      alert("Pacjent nie został dodany. Podaj imię i nazwisko!");
    }
  };
  return (
    <Form onSubmit={handleAddPatient}>
      <Label>
        <Input
          onChange={handleChangeText.bind(this, "forName")}
          className="forName"
          type="text"
          placeholder="Imię"
        />
        <Input
          onChange={handleChangeText.bind(this, "lastName")}
          className="lastName"
          type="text"
          placeholder="Nazwisko"
        />
        <Input
          onChange={handleChangeText.bind(this, "pesel")}
          className="pesel"
          type="number"
          placeholder="PESEL"
        />
        <Textarea
          onChange={handleChangeText.bind(this, "issue")}
          className="issue"
          type="text"
          placeholder="Opis"
        />
        <Button addPatient>Dodaj</Button>
      </Label>
    </Form>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addPatientAction: (item) => dispatch(addPatientAction(item)),
});
export default connect(null, mapDispatchToProps)(AddPatient);
