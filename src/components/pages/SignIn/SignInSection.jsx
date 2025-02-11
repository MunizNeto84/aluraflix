import { useNavigate } from "react-router-dom";
import { BackgroundDiv, Container } from "../../../styles/Div/Div";
import { Title, Text, Strong, Label } from "../../../styles/Tittle/Tittle";
import Form from "../../../styles/Form/Form";
import Footer from "../../default/Footer/Footer";
import { InputForm } from "../../../styles/Input/Input";
import { ButtonForm } from "../../../styles/Button/Button";

const SignInSection = () => {
  const navigate = useNavigate();
  return (
    <BackgroundDiv>
      <Container>
        <Title>Entrar</Title>
        <Form>
          <Label>E-mail</Label>
          <InputForm type="email" placeholder="munizneto@aluraflix.com.br" />
          <Label>Senha</Label>
          <InputForm type="password" placeholder="********" />
          <ButtonForm> Entrar</ButtonForm>
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
