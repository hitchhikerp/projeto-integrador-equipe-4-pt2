import { Container, H1Styled } from "./style";

interface TitulosPrincipalProps {
  titulo?: string;
  descricao?: string;
}

export default function Titulos({
  titulo = "Painel administrativo",
  descricao = "Área exclusiva para funcionários",
}: TitulosPrincipalProps) {
  return (
    <>
      <Container>
        <H1Styled>{titulo}</H1Styled>
        <p>{descricao}</p>
      </Container>
    </>
  );
}
