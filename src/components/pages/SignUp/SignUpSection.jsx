import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Cadastrar } from "../../../utils/signs";
import { ButtonForm } from "../../../styles/Button/Button";
import { BackgroundDiv, Container } from "../../../styles/Div/Div";
import Form from "../../../styles/Form/Form";
import { InputForm } from "../../../styles/Input/Input";
import { Label, Title, Text, Strong } from "../../../styles/Tittle/Tittle";
import Footer from "../../default/Footer/Footer";

const SignUpSection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submit = async (e) => {
    await Cadastrar(e, nomeCompleto, email, senha, navigate);
  };

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location]);

  return (
    <BackgroundDiv>
      <Container>
        <Title>Cadastrar</Title>
        <Form onSubmit={submit}>
          <Label>Nome Completo</Label>
          <InputForm
            type="text"
            placeholder="Muniz Neto"
            value={nomeCompleto}
            onChange={(e) => setNomeCompleto(e.target.value)}
          />
          <Label>E-mail</Label>
          <InputForm
            type="email"
            placeholder="munizneto@aluraflix.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label>Senha</Label>
          <InputForm
            type="password"
            placeholder="********"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <ButtonForm type="submit">Cadastrar</ButtonForm>
        </Form>
        <Text>
          Já possui conta?
          <Strong onClick={() => navigate("/login")}> Entre agora</Strong>.
        </Text>
      </Container>
      <Footer />
    </BackgroundDiv>
  );
};

export default SignUpSection;
