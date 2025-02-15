import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../service/AuthContext";
import { BackgroundDiv, Container } from "../../../styles/Div/Div";
import { Title, Text, Strong, Label } from "../../../styles/Tittle/Tittle";
import Form from "../../../styles/Form/Form";
import Footer from "../../default/Footer/Footer";
import { InputForm } from "../../../styles/Input/Input";
import { ButtonForm } from "../../../styles/Button/Button";

const SignInSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api-aluraflix-wojl.onrender.com/login",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email,
            senha,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        login(data.token);
        navigate("/home");
      } else {
        alert("Credentiais inválidas");
      }
    } catch (error) {
      console.error("Error ao fazer login: ", error);
      alert("Erro ao conectar-se ao servidor.");
    }
  };

  return (
    <BackgroundDiv>
      <Container>
        <Title>Entrar</Title>
        <Form onSubmit={handleLogin}>
          <Label>E-mail</Label>
          <InputForm
            type="email"
            placeholder="munizneto@aluraflix.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label>Senha</Label>
          <InputForm
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <ButtonForm type="submit"> Entrar</ButtonForm>
        </Form>
        <Text>
          Novo por aqui?
          <Strong onClick={() => navigate("/cadastrar")}>
            {" "}
            Cadastre agora
          </Strong>
          .
        </Text>
      </Container>
      <Footer />
    </BackgroundDiv>
  );
};

export default SignInSection;
