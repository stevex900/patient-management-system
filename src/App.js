import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavigationBack from "./components/navigation/NavigationBack";
import HeaderBack from "./pages/header/HeaderBack";
import Navigation from "./components/navigation/Navigation";
import AddPatient from "./pages/addPatient/AddPatient";
import Calendar from "./pages/calendar/Calendar";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import PatientList from "./pages/patientList/PatientList";
import SearchPatient from "./pages/searchPatient/SearchPatient";
import Start from "./pages/start/Start";
import Person from "./components/person/Person";
import {
  MainContainer,
  SecondMainContainer,
  PrimaryContainer,
  SecondaryContainer,
} from "./app.styles";
import firebase from "../src/firebase/firebase";
const App = () => {
  return (
    <>
      {/* <BackMainContainer /> */}
      <MainContainer>
        {/* <SecondMainContainer></SecondMainContainer> */}
        <PrimaryContainer>
          {/* <h1 style={{ color: "black", fontSize: "100px" }}>{testDb}</h1> */}
          <Header />
          <HeaderBack />
          <SecondaryContainer>
            <Navigation />
            <NavigationBack />
            <Route path="/" exact component={Start} />
            <Route path="/addPatient" component={AddPatient} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/patientList" component={PatientList} />
            <Route path="/searchPatient" component={SearchPatient} />
            <Route path="/person" component={Person} />
          </SecondaryContainer>
          <Footer />
        </PrimaryContainer>
      </MainContainer>
    </>
  );
};

export default App;
