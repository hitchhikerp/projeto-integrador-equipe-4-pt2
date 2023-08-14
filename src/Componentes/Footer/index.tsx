import Foguete from "../../assets/Velocity-logo.png";

import {
  Container,
  DivPrincipal,
  FooterStyled,
  ImgStyled,
  PStyled,
  LiStyled,
} from "../Footer/style";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <Container>
          <DivPrincipal>
              <ImgStyled src={Foguete} alt=""></ImgStyled>
            <ul>
              <LiStyled>Canais de comunicação:</LiStyled>
              <LiStyled>Whatsapp:</LiStyled>
              <LiStyled>E-mail:</LiStyled>
              <LiStyled>Telefone:</LiStyled>
            </ul>
          </DivPrincipal>
          <hr></hr>
          <PStyled>
            Projeto desenvolvido na academia Aprendiz Tech - Gama academy
          </PStyled>
        </Container>
      </FooterStyled>
    </>
  );
}
