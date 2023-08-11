import Foguete from "../../assets/foguete.png";
import { Link } from "react-router-dom"
import { Container, H3Styled, Div, HeaderStyled, ImgStyled, Menu } from "./style";

interface MenuProps {
  visible?: boolean
}

export default function Header({
  visible = true
}: MenuProps) {
  return (
    <>
      <HeaderStyled>
        <Container> 
          <Div>
            <ImgStyled src={Foguete} alt=""></ImgStyled>
            <H3Styled>Velocity</H3Styled>
          </Div>
          { visible && <Menu>
            <ul>
              <li>
                <Link to="/painel">Início</Link>
              </li>
              <li>
                <Link to="/servicos">Serviços</Link>
              </li>
              <li>
                <Link to="/relatorios">Relátorios</Link>
              </li>
            </ul>
          </Menu>}
        </Container>
      </HeaderStyled>
    </>
  );
}
