import { TextField } from "@mui/material";
import styled from "styled-components";
export const Container = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700;800&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,500&display=swap");
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  background-color: #e3dede;
  font-family: "Inter", sans-serif;
  h1 {
    cursor: pointer;
  }

  button:hover {
    opacity: 0.7;
    text-decoration: underline;
  }
  nav {
    gap: 5px;
    min-width: min-content;
    width: 100%;
    align-items: center;
    max-width: 400px;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  }
  button {
    max-width: max-content;
    
    cursor: not-allowed;
    font-family: "inter";
    font-weight: 500;
    border: 0;
    display: flex;
    align-items: center;
    border-radius: 10px;
    height: 30px;
    background-color: #e3dede;
  }
  .pesquisar {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: max-content;
    text-decoration: none;
    background-color: black;
    border-radius: 5px;
    margin-left: 5px;
    height: 40px;
    color: #fff;
    max-width: 98px;
  }
  div {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
  }
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    h1 {
      margin-left: 5%;
    }
    nav {
      flex-direction: row;
      width: 50%;
      margin-right: 5%;
    }
  }
`;
export const StyledTextField = styled(TextField)`
  * {
    border-color: black !important;
    
    color: black !important;
  }
  
`;
