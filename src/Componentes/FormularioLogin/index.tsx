import Button, { ButtonProps } from "../Button";
import { Form, Container } from "./style";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom"; // Use 'useNavigate' em vez de 'useHistory'
import axios from "axios";

export default function Formulario() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // para ir para a proxima parte 'painel'
  const [token, setToken] = useState<string | null>(null); // dando um tupo pro token

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      const data = response.data;
      if (data.token) {
        const newToken: string = data.token;
        setToken(newToken);
        localStorage.setItem("token", newToken);
        navigate("/painel"); 
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
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
          <Button id="id" /> {}
        </Form>
      </Container>
    </>
  );
}