import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../Button";
import { Form, Container, Error } from "./style"; // Certifique-se de que você tenha um componente Error para exibir mensagens de erro

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Estado para armazenar mensagens de erro
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      const data = response.data;
      if (response.status === 200) {
        const newToken: string = data.token;
        setToken(newToken);
        localStorage.setItem("token", newToken);
        console.log("Login bem-sucedido!");
        navigate("/painel");
      } else {
        setError("Falha no login. Verifique suas credenciais.");
      }
    } catch (error) {
      setError("Erro ao fazer login, Credenciais invalidas"); 
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <label>Nome de Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <Error>{error}</Error>} {}

          <Button id="id" />

        </Form>
      </Container>
    </>
  );
}