import React from "react";
import { Nav, NavLinkStyled as NavLink, Ul } from "./navigation.styles";

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Dodaj Pacjenta", path: "/addPatient" },
  { name: "Lista Pacjentów", path: "/patientList" },
  { name: "Wyszukaj Pacjenta", path: "/searchPatient" },
  { name: "Kalendarz", path: "/calendar" },
];
const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <Nav className="main">
      <Ul>{menu}</Ul>
    </Nav>
  );
};

export default Navigation;
