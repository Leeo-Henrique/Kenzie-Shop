import styled from "styled-components";

export const Vitrine = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700;800&family=Nunito:ital,wght@0,300;0,400;0,600;0,700;0,800;1,500&display=swap");
  width: 90%;
  display: flex;
  max-width: 1300px;
  flex-wrap: wrap;
  gap: 25px;
  min-height: 75vh;
  align-items: flex-start;
  justify-content: center;
  font-family: "Inter", sans-serif;
  background-color: #e3dede;
  border-radius: 15px;
  padding: 15px;
  transition: 1s;
  -webkit-box-shadow: 0px 19px 62px 20px rgba(199, 195, 199, 1);
  -moz-box-shadow: 0px 19px 62px 20px rgba(199, 195, 199, 1);
  box-shadow: 0px 19px 62px 20px rgba(199, 195, 199, 1);
  button {
    cursor: pointer;
    border-radius: 10px;
    border: 0;
    width: 50%;
    height: 37px;
    background-color: rgb(204, 31, 31, 0.9);
    color: #fff;
    margin-left: 1em;
    transition: 0.3s ease-in-out;
  }
  button:hover {
    opacity: 0.7;
  }
  li {
    background-color: #fff;
    position: relative;
    display: flex;
    
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    max-height: 350px;
    width: 300px;
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
  li article{
   margin-left: 5%;
  }
  li div figure {
    margin: 0;
    width: 100%;
    background-color: #fff;
    height: 200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  li div figure img {
    max-width: 200px;
    max-height: 200px;
  }
  li div h1 {
    font-weight: bolder;
    font-size: 14px;
  }
  li div p {
    font-weight: bolder;
    font-size: 14px;
    color: rgb(204, 31, 31, 0.8);
  }
  li div {
    position: absolute;
    width: 98%;
    height: 98%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    backface-visibility: hidden;
  }
  .back img {
    max-width: 98%;
    max-height: 98%;
  }
  .front {
    transition: 0.5s;
    transform: rotateY(0deg);
  }
  .back {
    transition: 0.5s;
    transform: rotateY(180deg);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .back img{
    max-height: 310px;
  }
  .back button{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -120px;
    width: 40px;
    min-height: 40px;
    border-radius: 50%;
  }
  li:hover .front {
    transform: rotateY(180deg);
  }
  li:hover .back {
    transform: rotateY(360deg);
  }
`;
