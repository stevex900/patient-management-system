import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: 17px;
  height: 50px;
  width: 80px;
  text-align: center;
  background-color: #057eff;
  border: none;
  color: white;
  transition: 0.5s;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 7px;
  border-radius: 8px;
  &:hover {
    background-color: #2641eb;
    height: 60px;
    width: 90px;
  }
  ${({ addPatient }) =>
    addPatient &&
    css`
      margin-left: 80%;
    `}
`;
export const ButtonContainer = styled.div`
  /* background-color: gray; */
  max-width: 100px;
  min-width: 100px;
  max-height: 100px;
  min-height: 100px;
`;
