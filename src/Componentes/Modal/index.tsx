import { ButtonStyled } from "../Button/style";
import { Container, StyledModal } from "./style";

interface IModal {
  isOpen?: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  description: string;
}

export default function Modal({
  isOpen,
  setOpen,
  title = "Atendimento atribuído com sucesso!",
  description = "A solicitação selecionada foi atríbuida ao seu usuário",
}: IModal) {
  if (isOpen) {
    return (
      <Container>
        <StyledModal>
          <h2>{title}</h2>
          <p>{description}</p>
          <ButtonStyled basicSize onClick={() => setOpen(!isOpen)}>
            Fechar
          </ButtonStyled>
        </StyledModal>
      </Container>
    );
  } else {
    return <></>;
  }
}
