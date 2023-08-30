import styled, { css } from "styled-components";

interface Props {
  props?: string;
  basicSize?: boolean;
  basicGreen?: boolean;
  basicBlue?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  background-color: #556ff5;
  color: #fff;
  padding: 12px 146px;
  margin: 12px 5px;
  border: none;
  border-radius: 8px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;

  &:hover {
    transition: 300ms;
    background-color: #36469a;
    cursor: pointer;
  }

  ${(props) => {
    return props.basicSize && css`
     padding: 8px 22px;
    `;
  }}

  ${(props) => {
    return (
      props.basicGreen &&
      css`
        width: auto;
        background-color: white;
        color: #388E3C;
        padding: 8px 18px;
        border: 2px solid #388E3C;
        border-radius: 10px;

        &:hover {
          transition: 300ms;
          background-color: #ADB8AD;
          color: #1C471E;
          cursor: pointer;
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.basicBlue &&
      css`
        background-color: #ffffff;
        color: #556ff5;
        padding: 8px 18px;
        border: 2px solid #556ff5;
        border-radius: 10px;
        font-family: "Raleway", sans-serif;
        font-weight: 700;

        &:hover {
          transition: 300ms;
          color: #202a5c;
          border-color: #4054b8;
          background-color: #bdbdbb;
        }
      `
    );
  }}
`;
