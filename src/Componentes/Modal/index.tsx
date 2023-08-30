import { ButtonStyled } from "../Button/style";
import { Container, StyledModal } from "./style";

interface IModal {
  isOpen?: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  description: string;
}

export default function Modal({ isOpen, setOpen, title, description }: IModal) {
  if (isOpen) {
    return (
      <Container>
        <StyledModal>
          <h2>{"Atendimento atribuído com sucesso!"}</h2>
          <p>{"A solicitação selecionada foi atríbuida ao seu usuário"}</p>
          <ButtonStyled basicSize onClick={() => setOpen(!isOpen)}>Fechar</ButtonStyled>
        </StyledModal>
      </Container>
    );
  } else {
    return <></>;
  }
}
