import Foguete from "../../assets/foguete.png";
import {
  Container,
  DivSecundaria,
  DivPrincipal,
  FooterStyled,
  H3Styled,
  ImgStyled,
  PStyled,
  LiStyled,
  UlStyled,
} from "../Footer/style";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <Container>
          <DivPrincipal>
            <DivSecundaria>
              <ImgStyled src={Foguete} alt=""></ImgStyled>
              <H3Styled>Velocity</H3Styled>
            </DivSecundaria>
            <UlStyled>
              <LiStyled>Canais de comunicação:</LiStyled>
              <LiStyled>Whataspp</LiStyled>
              <LiStyled>E-mail</LiStyled>
              <LiStyled>Telefone</LiStyled>
            </UlStyled>
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
