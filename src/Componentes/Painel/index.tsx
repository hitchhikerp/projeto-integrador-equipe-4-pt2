import Button2 from "../Button2";
import { Link } from "react-router-dom";
import { PainelStyled, Info, Div } from "./style";
import ButtonModal from "../ButtonModal";

function createData(
  cod: number,
  name: string,
  service: string,
  date: string,
  status: string
) {
  return { cod, name, service, date, status };
}

const rows = [
  createData(
    124,
    "Renato",
    "Plano Família - Instalação",
    "04/08/2023",
    "Aguardando agendamento"
  ),
  createData(
    124,
    "Renato",
    "Plano Família - Instalação",
    "04/08/2023",
    "Aguardando agendamento"
  ),
  createData(
    124,
    "Renato",
    "Plano Família - Instalação",
    "04/08/2023",
    "Aguardando agendamento"
  ),
  createData(
    124,
    "Renato",
    "Plano Família - Instalação",
    "04/08/2023",
    "Aguardando agendamento"
  ),
  createData(
    124,
    "Renato",
    "Plano Família - Instalação",
    "04/08/2023",
    "Aguardando agendamento"
  ),
];

export default function Painel() {
  return (
    <>
      <PainelStyled>
        <Info>
          <table>
            <thead>
              <tr>
                <th>Codigo Pedido</th>
                <th>Nome do Cliente</th>
                <th>Serviço solicitado</th>
                <th>Data da contratação</th>
                <th>Status</th>
                <th>Detalhes</th>
                <th>Atribuir</th>
              </tr>
            </thead>

            {rows.map((row) => (
              <tbody key={row.cod}>
                <tr>
                  <td>{row.cod}</td>
                  <td>{row.name}</td>
                  <td>{row.service}</td>
                  <td>{row.date}</td>
                  <td>{row.status}</td>
                  <td>
                    <Link to="/detalhes">
                      <Button2 text="ver detalhes" />
                    </Link>
                  </td>
                  <Div>
                    <td>
                      <ButtonModal text="atender solicitação" />
                    </td>
                  </Div>
                </tr>
              </tbody>
            ))}
          </table>
        </Info>
      </PainelStyled>
    </>
  );
}
