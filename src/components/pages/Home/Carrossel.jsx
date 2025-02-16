import { useEffect, useState } from "react";
import { useAuth } from "../../../service/AuthContext";
import { CarrosselContainer } from "../../../styles/Div/Div";
import { Img, ImgLogo } from "../../../styles/Img/Img";
import { ButtonPlay } from "../../../styles/Button/Button";

const Carrossel = () => {
  const { token } = useAuth();
  const [canal, setCanal] = useState(null);

  useEffect(() => {
    const fetchCanal = async () => {
      try {
        const response = await fetch(
          "https://api-aluraflix-wojl.onrender.com/api/v1/canal/1",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setCanal(data);
        } else {
          console.error("Erro ao buscar canal, status:", response.status);
        }
      } catch (error) {
        console.error("Erro ao buscar canal", error);
      }
    };

    fetchCanal();
  });

  return (
    <CarrosselContainer>
      {canal ? (
        <>
          <Img src={canal.urlCapa} alt="Capa do canal" />
          <ImgLogo src={canal.urlLogo} alt="Logo do canal" />
        </>
      ) : (
        <p>Carregando...</p>
      )}
      <ButtonPlay>Assistir</ButtonPlay>
    </CarrosselContainer>
  );
};

export default Carrossel;
