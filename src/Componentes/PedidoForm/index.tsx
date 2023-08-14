import { Link } from "react-router-dom";
import Button from "../Button";
import Button2 from "../Button2";
import { Form, Container, Div } from "./style";

interface InputProps {
  name: string;
  service: string;
  date: string;
  hour: string;
  status: string;
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
        <Form>
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

          <Link to="/painel">
            <Button text="voltar" />
          </Link>
          <Div>
            <Button2 text="atender solicitação" />
          </Div>
        </Form>
      </Container>
    </>
  );
}
