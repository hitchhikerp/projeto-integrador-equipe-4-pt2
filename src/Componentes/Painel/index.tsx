import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PainelStyled, Info } from "./style";
import Button from "../Button";
import axios from "axios";

interface Order {
  id: number;
  nome: string;
  cpf: string;
  contato: string;
  email: string;
  planos: string;
  statusPedido: string;
  horarioPreferencial: string;
  createdAt: Date;
}

export default function Painel() {
  const [order, setOrder] = useState<Order[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((response) => {
        const data = response.data as Order[]; // Converter para Order[]
        setOrder(data); // Atribuir o valor convertido
      })
      .catch((error) => {
        console.error("Erro ao buscar os pedidos:", error);
      });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredOrder = order.filter((order) => {
    return order.nome.toLowerCase().includes(searchTerm.toLowerCase());
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
                <td>{order.nome}</td>
                <td>{order.planos}</td>
                <td>
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td>{order.statusPedido}</td>
                <td>
                  <Link to={`/detalhes/${order.id}`}>
                    <Button basicBlue text="ver detalhes" />
                  </Link>
                </td>
                <td>
                  <Button basicGreen working={true} text="atender solicitação" />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </Info>
    </PainelStyled>
  );
}