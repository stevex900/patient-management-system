import React from "react";
import { selectOnePatient } from "../../redux/patients/selectors";
import { H1, H2, H3 } from "../fonts/fonts.styles";
// import { deletePatientAction } from "../../redux/patients/actions";
// import { Button } from "../button/Button.styles";
// import {
//   SecondaryContainer,
//   NavLinkContainer as NavLink,
// } from "./person.styles";
import { connect } from "react-redux";
const Person = ({ onePatient, deletePatientAction }) => {
  // const handleDelete = (id) => {
  //   let deletedPatient = [...patients];
  //   deletedPatient = deletedPatient.filter((item) => item.id !== id);
  //   deletePatientAction(deletedPatient);
  // };
  const patients = [...onePatient];
  const onePatientView = patients.map((item) => (
    <div key={item.id}>
      <H2>{item.forName}</H2>
      <H2>{item.lastName}</H2>
      <H3>{item.pesel}</H3>
      <H3>{item.issue}</H3>
      {/* <SecondaryContainer>
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
        <NavLink to={"/calendar"}>
          <Button>Zaplanuj wizytę</Button>
        </NavLink>
      </SecondaryContainer> */}
    </div>
  ));
  return <div>{onePatientView}</div>;
};
const mapStateToProps = (state) => ({
  onePatient: selectOnePatient(state),
});
// const mapDispatchToProps = (dispatch) => ({
//   deletePatientAction: (item) => dispatch(deletePatientAction(item)),
// });
export default connect(mapStateToProps)(Person);
