import { useState, useEffect } from "react";
import { useAuth } from "../../../service/AuthContext";
import { CarrosselContainer } from "../../../styles/Div/Div";
import { Img, ImgLogo } from "../../../styles/Img/Img";
import { ButtonPlay } from "../../../styles/Button/Button";

const Carrossel = () => {
  const { token } = useAuth();
  const [carrossel, setCarrossel] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCanal = async () => {
      try {
        const response = await fetch(
          "https://api-aluraflix-wojl.onrender.com/api/v1/canal/",
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
          setCarrossel(data.getAll.conteudo);
        }
      } catch (error) {
        console.error("Erro ao buscar canal", error);
      }
    };
    fetchCanal();
  }, []);

  useEffect(() => {
    if (carrossel.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * carrossel.length);
          } while (newIndex === prevIndex);
          return newIndex;
        });
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [carrossel]);

  return (
    <CarrosselContainer>
      {carrossel[index] && (
        <>
          <Img src={carrossel[index].urlCarrossel} alt="Capa do canal" />
          <ImgLogo src={carrossel[index].urlLogo} alt="Capa do canal" />
          <ButtonPlay>Assistir</ButtonPlay>
        </>
      )}
    </CarrosselContainer>
  );
};

export default Carrossel;
