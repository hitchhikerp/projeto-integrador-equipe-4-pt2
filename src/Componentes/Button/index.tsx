import { ButtonStyled } from "./style";
import { useState } from "react";
import Modal from "../Modal";

interface ButtonProps {
  text?: string;
  basicSize?: boolean;
  basicBlue?: boolean;
  basicGreen?: boolean;
  working?: boolean;
  id: number; // Adicione a prop 'id' aqui
}

export default function Button({
  text = "entrar",
  basicSize,
  basicBlue,
  basicGreen,
  working = false,
  id, // Certifique-se de que 'id' seja recebido como uma prop
}: ButtonProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonStyled
        onClick={() => setOpen(!open)}
        basicBlue={basicBlue}
        basicGreen={basicGreen}
        basicSize={basicSize}
      >
        {text}
      </ButtonStyled>
      {working && (
        <Modal
          isOpen={open}
          setOpen={setOpen}
          title={"Atualizar status do pedido"}
          description={"Descrição"}
          orderId={id} // Passe o id do pedido para o Modal
        />
      )}
    </>
  );
}