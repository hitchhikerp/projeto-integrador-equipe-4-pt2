import { ButtonStyled } from "../Button/style";
import { Container, StyledModal } from "./style";
import axios from "axios";
import { useState } from "react";

interface IModal {
  isOpen?: boolean;
  setOpen: (isOpen: boolean) => void;
  title: string;
  description: string;
  orderId: number; // Adicione a prop 'orderId' aqui
}

export default function Modal({
  isOpen,
  setOpen,
  title = "Atendimento atribuído com sucesso!",
  description = "A solicitação selecionada foi atribuída ao seu usuário",
  orderId, // Certifique-se de que 'orderId' seja recebido como uma prop
}: IModal) {
  const [selectedStatus, setSelectedStatus] = useState<string>("Em Andamento");
  const [id, setId] = useState<number | undefined>(undefined);

  const handleUpdateStatus = () => {
    if (orderId && selectedStatus) {
      const apiUrl = `http://localhost:3000/order/${orderId}`;
      const requestData = {
        status: selectedStatus,
      };

      axios
        .put(apiUrl, requestData)
        .then((response) => {
          console.log("Status atualizado com sucesso:", response.data);
          setOpen(false);

          window.location.reload();
        })
        .catch((error) => {
          console.error("Erro ao atualizar status:", error);
        });
    }
  };

  if (isOpen) {
    return (
      <Container>
        <StyledModal>
          <h2>{title}</h2>
          <label htmlFor="status">Selecione um novo status:</label>
          <select
            id="status"
            name="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="Em Andamento">Em Andamento</option>
            <option value="Concluido">Concluido</option>
          </select>
          <ButtonStyled basicSize onClick={handleUpdateStatus}>
            Atualizar Status
          </ButtonStyled>
          <ButtonStyled basicSize onClick={() => setOpen(false)}>
            Fechar
          </ButtonStyled>
        </StyledModal>
      </Container>
    );
  }

  return null;
}