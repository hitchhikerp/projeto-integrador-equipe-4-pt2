import styled from "styled-components"

export const PainelStyled = styled.main`
  width: 0 auto;
  height: 0 auto;
  margin: 18px;
`;

export const Info = styled.section`
  width: auto;
  background-color: #fff;
  border: 1px solid #b4b4b4;
  border-radius: 15px;
  padding: 30px;
  margin: 50px;
  box-shadow: 0px 4px 20px 0px #00000026;

tr {
  width: 100%;
}

td, th {
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #b4b4b4;
}

td{
  font-weight: lighter;
}

table{
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}

button {
  cursor: pointer;
}
`;

export const Div = styled.div`
button{
  width: auto;
  background-color: white;
  color: green;
  padding: 8px 18px;
  margin: 15px 0 0;
  border: 2px solid green;
  border-radius: 10px;
}
`