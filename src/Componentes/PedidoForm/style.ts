import styled from "styled-components";

export const Form = styled.form`
  width: 500px;
  height: 600px;
  background-color: #fff;
  padding: 30px 35px;
  margin: 50px 0;
  border: 1px solid #b4b4b4;
  border-radius: 15px;
  box-shadow: 0px 4px 20px 0px #00000026;

  label{
    margin-top: 20px;
  }

  input {
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: #F2F2F2;
    width: 100%;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  button{
    margin: 0px 10px;
    width: auto;
    padding: 8px 18px;
    margin: 15px 0 0;
    border-radius: 10px;
  }
`;

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
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