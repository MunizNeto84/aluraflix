import { useAuth } from "../../../../service/AuthContext";
import React, { useState, useEffect } from "react";
import CategoriaItem from "./CategoriaItem";
import { Wrapper } from "../../../../styles/Div/Div";

const Categoria = () => {
  const { token } = useAuth();
  const [categorias, setCategorias] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await fetch(
          "https://api-aluraflix-wojl.onrender.com/api/v1/categoria",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

        const responseData = await response.json();
        const categoriasArray = responseData.getAll?.conteudo || [];

        setCategorias(categoriasArray);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    };

    fetchCategorias();
  }, [token]);

  return (
    <Wrapper>
      {categorias.map((categoria) => (
        <CategoriaItem
          key={categoria.id}
          categoria={categoria}
          token={token}
          selectedVideo={selectedVideo}
          setSelectedVideo={setSelectedVideo}
        />
      ))}
    </Wrapper>
  );
};

export default Categoria;
