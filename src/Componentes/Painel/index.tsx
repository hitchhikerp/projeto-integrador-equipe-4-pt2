import Button from "../Button";
import { PainelStyled, Info } from "./style";

function createData(
    cod: number,
    name: string,
    service: string,
    date: string,
    status: string,
) {
    return { cod, name, service, date, status };
}

const rows = [
    createData(12312321, 'Renato', 'Plano Familia', '04/08/2023', 'Em Andamento'),
    createData(12312321, 'Renato', 'Plano Familia', '04/08/2023', 'Em Andamento'),
    createData(12312321, 'Renato', 'Plano Familia', '04/08/2023', 'Em Andamento'),
    createData(12312321, 'Renato', 'Plano Familia', '04/08/2023', 'Em Andamento'),
    createData(12312321, 'Renato', 'Plano Familia', '04/08/2023', 'Em Andamento'),
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
                                <th align="right">Nome do Cliente</th>
                                <th align="right">Serviço solicitado</th>
                                <th align="right">Data da contratação</th>
                                <th align="right">Status</th>
                            </tr>
                        </thead>

                        {rows.map((row) => (
                            <tbody key={row.cod} >
                                <tr>
                                    <td align="right">{row.cod}</td>
                                    <td align="right">{row.name}</td>
                                    <td align="right">{row.service}</td>
                                    <td align="right">{row.date}</td>
                                    <td align="right">{row.status}</td>
                                    <td> <Button text="ver detalhes"/> </td>
                                    <td> <Button text="atender solicitação"/></td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </Info>
            </PainelStyled>
        </>
    );
}