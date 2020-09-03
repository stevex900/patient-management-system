import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
export const Nav = styled.nav`
  background-color: #0099ff;
  min-width: 20vw;
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  z-index: 1;
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  display: block;
  color: white;
  font-size: 30px;
  padding: 5px;
  width: 90%;
  margin-top: 10%;
  transition: 0.5s;
  background-color: #057eff;
  cursor: default;
  border-radius: 10px;
  &:hover {
    background-color: #0d1fff;
    transform: translate(7%);
  }
  &.active {
    background-color: #0d1fff;
    transform: translate(7%);
  }
`;
