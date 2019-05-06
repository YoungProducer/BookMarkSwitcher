import posed from "react-pose";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 130px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 130px;
`;

export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: #333 url(${props => props.src}) center center;
  align-self: center;
`;

export const Name = styled.h2`
  font-family: "Gotham", sans-serif;
  font-weight: 400;
  color: #000;
  margin: 0 0 10px 0;
`;

export const Information = styled.p`
  font-family: "Gotham", sans-serif;
  font-weight: 400;
  margin: 0 0 10px 0;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${props => props.align};

  &:first-child {
    padding: 10px 0px 10px 20px;
  }

  &:last-child {
    padding: 10px 20px 10px 0px;
  }
`;

export const SignOut = styled.button`
  background-color: #fff;
  border: solid 2px #ff0066;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  font-family: "Gotham", sans-serif;
  font-size: 0.9em;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-bottom: 3px;
  margin-right: 3px;

  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }

  &:hover {
    background-color: #ff0066;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`;
