import { useState } from "react";
import { useAuth } from "../../../service/AuthContext";

import HeaderContainer from "../../../styles/Header/Header";
import Logo from "../Logo/Logo";
import Nav from "../../../styles/Nav/Nav";
import { SearchHomeContainer } from "../../../styles/Div/Div";
import { SearchInput } from "../../../styles/Input/Input";
import {
  ButtonExit,
  ButtonProfile,
  SearchButton,
} from "../../../styles/Button/Button";

const HomeHeader = ({ setVideosBuscados }) => {
  const { token, logout } = useAuth();
  const [termo, setTermo] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showItem, setShowItem] = useState(true);

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      setVideosBuscados([]);
      return;
    }

    try {
      const response = await fetch(
        `https://api-aluraflix-wojl.onrender.com/api/v1/video?search=${searchTerm}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Erro na primeira requisição:", response.status);
        setVideosBuscados([]);
        return;
      }

      const data = await response.json();
      console.log("Dados recebidos:", data);

      const totalRegistros = data.videos.totalRegistros || 7;

      const searchResponse = await fetch(
        `https://api-aluraflix-wojl.onrender.com/api/v1/video?search=${searchTerm}&page=1&limit=${totalRegistros}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (searchResponse.ok) {
        const searchData = await searchResponse.json();
        setVideosBuscados(searchData.videos.conteudo);
      } else {
        console.error("Erro na segunda requisição:", searchResponse.status);
        setVideosBuscados([]);
      }
    } catch (error) {
      console.error("Erro ao buscar vídeos", error);
      setVideosBuscados([]);
    }
  };

  return (
    <HeaderContainer>
      <Logo visible={showItem} />
      <div></div>

      <Nav>
        <SearchHomeContainer>
          <SearchInput
            type="text"
            placeholder="Buscar vídeos..."
            value={termo}
            onChange={(e) => {
              const searchTerm = e.target.value;
              setTermo(searchTerm);
              handleSearch(searchTerm);
            }}
            visible={showSearch}
          />
          <SearchButton
            src="/search.svg"
            onClick={() => {
              setShowSearch(!showSearch);
              setShowItem(!showItem);
            }}
          ></SearchButton>
        </SearchHomeContainer>
        <ButtonProfile />
        <ButtonExit src="/exit.svg" alt="Sair" onClick={logout} />
      </Nav>
    </HeaderContainer>
  );
};

export default HomeHeader;
