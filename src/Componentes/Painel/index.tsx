import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PainelStyled, Info, } from "./style"; // Importe o Modal e o ModalContent
import Button from "../Button";
import axios from "axios";

interface OrderManager {
  codigo_pedido: number;
  plan: string,
  id: number,
  cliente_id: string;
  nome_completo: string,
  servico: string;
  data_efetuar_servico: string;
  status: string;
  createdAt: Date;
}

export default function Painel() {
  const [order, setOrder] = useState<OrderManager[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((response) => {
        const data = response.data as OrderManager[]; // Converter para Order[]
        setOrder(data); // Atribuir o valor convertido
      })
      .catch((error) => {
        console.error("Erro ao buscar os pedidos:", error);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrder = order.filter((order) => {
    return order.nome_completo.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
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

          {filteredOrder.map((order) => (
            <tbody key={order.id}>
              <tr>
                <td>{order.id}</td>
                <td>{order.nome_completo}</td>
                <td>{order.plan}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <td>{order.status}</td>
                <td>
                  <Link to={`/detalhes/${order.id}`}>
                    <Button basicBlue text="ver detalhes" />
                  </Link>
                </td>
                <td>
                  <Button
                    basicGreen
                    working={true}
                    text="atender solicitação"
                    id={order.id} // Passe o ID do pedido para o botão
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Info>
    </PainelStyled>
  );
}