import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  width: 100%;
  min-width: 340px;
  height: 100px;
  background-color: #5c0099;
  /* background-color:#000000; */
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
`;

export const NameDiv = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  p {
    text-align: center;
    font-weight: 700;
    font-size: 35px;
    color: #ffd500;
  }
`;

export const LinksDiv = styled.div`
  width: 150px;
  height: 70px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 100px;
`;

export const StyledLink = styled(Link)`
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  color: #d7e3ff;
  text-decoration: none;
  :hover {
    font-size: 20px;
    color: #ffd500;
  }
`;

export const StyledLinkHome = styled(Link)`
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  color: #d7e3ff;
  text-decoration: none;
  :hover {
    font-size: 18px;
    color: #ffd500;
  }
`;