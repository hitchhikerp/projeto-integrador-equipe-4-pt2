import { ButtonStyled } from "./style";

interface ButtonProps {
  text?: string;
  backgroundColor?: string;
}

export default function Button(
  { text }: ButtonProps) {
  return <ButtonStyled>{text}</ButtonStyled>;
}