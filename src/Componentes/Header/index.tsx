import Foguete from "../../assets/foguete.png";
import { Container, H3Styled, Div, HeaderStyled, ImgStyled, Menu } from "./style";

export default function Header() {
  return (
    <>
      <HeaderStyled>
        <Container>
          <Div>
            <ImgStyled src={Foguete} alt=""></ImgStyled>
            <H3Styled>Velocity</H3Styled>
          </Div>
          <Menu>
            <ul>
              <li>
                <a href="#">Ínicio</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Relátorios</a>
              </li>
            </ul>
          </Menu>
        </Container>
      </HeaderStyled>
    </>
  );
}
