import { useNavigate } from "react-router-dom";
import { ButtonForm } from "../../../styles/Button/Button";
import { BackgroundDiv, Container } from "../../../styles/Div/Div";
import Form from "../../../styles/Form/Form";
import { InputForm } from "../../../styles/Input/Input";
import { Label, Title, Text, Strong } from "../../../styles/Tittle/Tittle";
import Footer from "../../default/Footer/Footer";

const SignUpSection = () => {
  const navigate = useNavigate();
  return (
    <BackgroundDiv>
      <Container>
        <Title>Cadastrar</Title>
        <Form>
          <Label>Nome Completo</Label>
          <InputForm type="text" placeholder="Muniz Neto" />
          <Label>E-mail</Label>
          <InputForm type="email" placeholder="munizneto@aluraflix.com.br" />
          <Label>Senha</Label>
          <InputForm type="password" placeholder="********" />
          <ButtonForm>Cadastrar</ButtonForm>
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
