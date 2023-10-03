import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { Form, Container } from "./style";
import { FormEventHandler } from "react";
import { WrapperStyled } from "../Wrapper/style";

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

const logar: FormEventHandler<HTMLFormElement> = (evento) => {
  // Evita recarregamento da página no envio do formulário
  evento.preventDefault();
};

export default function FormDetalhes() {
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/orders/${id}`)
      .then((response) => {
        const data = response.data as Order; // Supondo que os detalhes do pedido estejam em um único objeto
        setOrder(data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os detalhes do pedido:", error);
      });
  }, [id]);

  return (
    <Container>
      <Form onSubmit={logar}>
        {order ? (
          <>
            <label>Nome</label>
            <input type="text" disabled value={order.nome} />

            <label>Serviço solicitado</label>
            <input type="text" disabled value={order.planos} />

            <label>Data da contratação</label>
            <input
              type="text"
              disabled
              value={new Date(order.createdAt).toLocaleDateString()}
            />

            <label>Horario sugerido</label>
            <input
              type="text"
              disabled
              value={order.horarioPreferencial}
            />

            <label>Status</label>
            <input type="text" disabled value={order.statusPedido} />
          </>
        ) : (
          <p>Carregando detalhes do pedido...</p>
        )}

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
  );
}