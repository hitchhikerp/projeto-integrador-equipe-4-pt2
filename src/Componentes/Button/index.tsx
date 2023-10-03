import { ButtonStyled } from "./style";
import { useState } from "react";
import Modal from "../Modal";

interface ButtonProps {
  text?: string;
  basicSize?: boolean;
  basicBlue?: boolean;
  basicGreen?: boolean;
  working?: boolean;
}

export default function Button({
  text = "entrar",
  basicSize,
  basicBlue,
  basicGreen,
  working = false,
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
          title={"Titulo do Modal"}
          description={"Descrição"}
        />
      )}
    </>
  );
}