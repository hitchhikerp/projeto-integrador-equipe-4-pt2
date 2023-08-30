import { Link } from "react-router-dom";
import Button from "../Button";
import { Form, Container } from "./style";
import { FormEventHandler } from "react";
import { WrapperStyled } from "../Wrapper/style";

interface InputProps {
  name?: string;
  service?: string;
  date?: string;
  hour?: string;
  status?: string;
}

const logar: FormEventHandler<HTMLFormElement> = (evento) => {
  // evita recarregamento da pagina no envio do formulario
  evento.preventDefault();
}

export default function PedidoForm({
  name = "Renato Guido Do Nascimento",
  service = "Plano Família",
  date = "04/08/2023",
  hour = "12:00 AM",
  status = "Aguardando agendamento",
}: InputProps) {
  return (
    <>
      <Container>
        <Form onSubmit={logar}>
          <label>Nome</label>
          <input type="name" disabled value={name} />

          <label>Serviço solicitado</label>
          <input type="service" disabled value={service} />

          <label>Data da contratação</label>
          <input type="date" disabled value={date} />

          <label>Horario sugerido</label>
          <input type="hour" disabled value={hour} />

          <label>Status</label>
          <input type="status" disabled value={status} />

          <WrapperStyled>
          <Link to="/painel">
            <Button basicSize text="voltar" />
          </Link>
          <div>
          <Button basicGreen working={true} text="atender solicitação" />
          </div>
          </WrapperStyled>
        </Form>
      </Container>
    </>
  );
}
