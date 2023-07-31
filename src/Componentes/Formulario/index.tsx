import Button from "../Button";
import { Form, Container } from "./style";
import { useState, FormEventHandler } from "react";

export default function Formulario() {
const [codigo, setCodigo] = useState("");
const [senha, setSenha] = useState("");

const logar: FormEventHandler<HTMLFormElement> = (evento) => {
  // evita recarregamento da pagina no envio do formulario
  evento.preventDefault();
  // pra ver o que esta 
  console.log(evento);
  //
  console.log(codigo);
  console.log(senha);
};

return (
    <>
      <Container>
        <Form onSubmit={logar}>
          <label>Código de Acesso</label>
          <input 
          type="text"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />

        <label>Senha</label>
          <input 
          type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          
          <Button text="entrar" />
        </Form>
      </Container>
    </>
  );
}