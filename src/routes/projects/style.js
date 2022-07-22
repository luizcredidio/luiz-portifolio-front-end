import styled from "styled-components";
import Coding from '../../imgs/Coding.jpg'
export const CardProject = styled.div`
border: #ffd500 solid 5px;
  background-color: #d7e3ff;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  padding: 10px;
  width: 80%;
  max-width: 500px;
  height: 250px;
  text-align: center;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  max-width:350px;
  min-width: 300px;
  min-height: 350px;
  
  img{
    height: 50%;
  }
`;

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-image: url(${Coding});
  padding: 20px;
`;

