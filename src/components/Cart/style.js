import styled from "styled-components";

export const Container = styled.main`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700;800&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,500&display=swap");
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    background-color: #e3dede;
    padding: 0;
    width: 95%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  }
  ul::-webkit-scrollbar {
    width: 5px;
  }
  ul::-webkit-scrollbar-thumb {
    background-color: rgb(204, 31, 31, 0.9);
    border-radius: 10px;
  }
  ul li {
    margin-top: 7px;
    margin-bottom: 8px;
    width: 95%;
    border-radius: 10px;
    border: 2px solid rgb(204, 31, 31, 0.9);
    min-height: 120px;
    max-height: 120px;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.75);
  }
  ul li figure {
    width: 40%;
    margin: 0 5px;
    min-height: 50px;
    min-width: 50px;
    max-width: 118px;
    max-height: px;
  }
  ul li article {
    text-align: center;
  }
  ul h1 {
    font-size: 15px;
  }
  ul li p {
    color: #0e0e0e;
    font-weight: "inter";
    font-size: 12px;
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 90%;
    height: 90%;
  }
  button {
    border: 0;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    background-color: rgb(204, 31, 31, 0.9);
    color: #fff;
  }
  div {
    width: 25%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
  }
  .Finalizar {
    background-color: green;
    color: #fff;
    margin-bottom: 10px;
  }
  h2 {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }
  div {
    width: 100%;
  }
  div h2,
  h1 {
    margin: 0;
  }
  div button {
    border-radius: 10px;
  }
  @media (min-width: 823px) {
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    ul {
      min-height: 80vh;
      width: 68%;
      margin-left: 2%;
    }
    ul li {
      min-height: 105px;
    }
    div {
      display: flex;
      justify-content: flex-start;
      background-color: #e3dede;
      margin-top: 16px;
      width: 28%;
      min-height: 250px;
      max-width: 455px;
    }
    div h1 {
      margin-top: 20px;
    }
    div h2 {
      font-size: 20px;
    }

  }

  @media (min-width: 1024px) {
    ul {
      display: flex;
      flex-direction: ${(props) =>
        props.myProducts.length === 0 ? "column" : "row"};
      flex-wrap: wrap;
      gap: 25px;
      min-height: 80vh;
      max-height: 87vh;
      align-items: ${(props) =>
        props.myProducts.length === 0 ? "center" : "flex-start"};
      justify-content: center;
    }
    ul li {
      margin-top: 30px;
      margin-bottom: 0;
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-width: 205px;
      max-height: 250px;
      min-width: 205px;
      min-height: 250px;
      padding: 4px;
      border: 2px solid rgb(204, 31, 31, 0.9);
      border-radius: 10px;
      transition: 1s ease-in-out;
      -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
      -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
    }
    ul li figure {
      width: 100%;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
  @media (min-width: 1700px) {
    align-items: flex-start;
    justify-content: space-evenly;
    ul {
      max-width: 1450px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 25px;
      min-height: 90vh;
      align-items: flex-start;
      justify-content: center;
    }
    ul li {
      margin-top: 30px;
      margin-bottom: 0;
      background-color: #fff;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      max-width: 300px;
      max-height: 300px;
      min-width: 275px;
      min-height: 350px;
      padding: 4px;
      border: 2px solid rgb(204, 31, 31, 0.9);
      border-radius: 10px;
      transition: 1s ease-in-out;
      -webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
      -moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 1);
    }
    ul li figure {
      margin: 0;
      width: 100%;
      min-width: 98%;

      background-color: #fff;
      height: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
    ul li figure img {
      max-width: 200px;
      max-height: 200px;
    }
    ul li h1 {
      font-weight: bolder;
      font-size: 20px;
    }
    div {
    }
  }
  .Vazio {
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 5rem 14px;
  }
  .Link-Voltar {
    color: #0069bd;
    margin-top: 10%;
    margin-bottom: 10%;
    font-size: 5rem 14px;
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Header = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700;800&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,500&display=swap");
  width: 90%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #e3dede;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 20px;
  }
  div {
    font-family: "Inter", sans-serif;
    background-color: #e3dede;
    color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 70px;
    max-width: max-content;
    height: 30px;
    cursor: pointer;
    border-radius: 10px;
    transition: 0.5s ease-in-out;
  }
  div:hover {
    opacity: 0.7;
  }
  @media (min-width: 1440px) {
    margin-bottom: 25px;
  }
`;
