import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackgroundDiv } from "../../../styles/Div/Div";
import { SectionContainer, Container } from "../../../styles/Section/Section";
import { Title, Subtitle } from "../../../styles/Tittle/Tittle";
import { InputPrincipal } from "../../../styles/Input/Input";
import { ButtonSecondary } from "../../../styles/Button/Button";
import Footer from "../../default/Footer/Footer";

const MainSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSignUp = () => {
    navigate("/cadastrar", { state: { email } });
  };

  return (
    <BackgroundDiv>
      <SectionContainer>
        <Title>VÍdeos, reacts e muito mais...</Title>
        <Subtitle>
          Inscreva-se para ter acesso às melhores playlists de conteúdo de
          YouTubers.
        </Subtitle>
      </SectionContainer>
      <Container>
        <InputPrincipal
          type="email"
          placeholder="munizneto@aluraflix.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ButtonSecondary onClick={handleSignUp}>Vamos lá</ButtonSecondary>
      </Container>
      <SectionContainer>
        <Title>VÍdeos gratuitos.</Title>
        <Subtitle>
          Teste nossa plataforma com vídeos gratuitos selecionados especialmente
          para você!
        </Subtitle>
      </SectionContainer>
      <ButtonSecondary onClick={() => navigate("/free")}>
        Clique aqui
      </ButtonSecondary>
      <Footer />
    </BackgroundDiv>
  );
};

export default MainSection;
