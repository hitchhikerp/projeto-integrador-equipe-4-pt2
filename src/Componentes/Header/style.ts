import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  background-color: #556ff5;
  height: 88px;

  img {
    width: 265px;
    height: 100px;
    margin: 5px;
  }

  div {
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 15px;
  }

  li {
    padding: 10px;

    a:any-link {
      color: #ffffff;
      text-decoration: none;

      &:hover {
        transition: 180ms;
        color: #bdbdbd;
      }
    }
  }
`;
