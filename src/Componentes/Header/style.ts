import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex; 
    background-color: #556ff5;
`;

export const Div = styled.div`
    display: flex; 
    margin: 8px;
`;


export const ImgStyled = styled.img`
    width: 65px;
    height: 65px;
`;

export const H3Styled = styled.h3`
    font-size: 32px;
    margin: 18px 0;
    font-family: sans-serif;
    color: #ffffff;
`;

export const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Menu = styled.nav`
ul{
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
} 

li {
    padding: 10px;
    a:any-link {
        color: #ffffff;
        text-decoration: none;
    }
}
`;
