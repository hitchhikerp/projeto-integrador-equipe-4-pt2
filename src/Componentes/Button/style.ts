import styled from "styled-components";

export const ButtonStyled = styled.button<{
  backgroundColor?: string;
  color?: string;
  border?: string;
}>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#556ff5"};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  padding: 12px 142px;
  margin: 15px 0;
  border: ${(props) => (props.border ? props.border : "2px solid #556ff5")};
  border-radius: 8px;
  font-family: "Raleway", sans-serif;
  font-weight: 700;

  &:hover {
    transition: 300ms;
    background-color: #36469A;
    cursor: pointer;
  }
`;
