import styled from "styled-components";
import img1 from "./assets/blueSceleton.jpg";
export const BackMainContainer = styled.div`
  background-color: rgba(255, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
`;
// export const SecondMainContainer = styled.div`
//   background-color: white;
//   opacity: 0.4;
//   min-height: 100%;
//   min-width: 100wv;
//   z-index: 4;
// `;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightslategray;
  background-image: url(${img1});
  background-attachment: fixed;
  /* background-position: 100% 300%; */
  background-blend-mode: lighten;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-repeat: repeat;
`;
export const PrimaryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SecondaryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
