import { useState, useEffect } from "react";
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

      if (response.ok) {
        const data = await response.json();
        setVideosBuscados(data.videos.conteudo);
      } else {
        setVideosBuscados([]);
      }
    } catch (error) {
      console.error("Erro ao buscar vídeos", error);
      setVideosBuscados([]);
    }
  };

  return (
    <HeaderContainer>
      <Logo />

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
            onClick={() => setShowSearch(!showSearch)}
          ></SearchButton>
        </SearchHomeContainer>
        <ButtonProfile />
        <ButtonExit src="/exit.svg" alt="Sair" onClick={logout} />
      </Nav>
    </HeaderContainer>
  );
};

export default HomeHeader;
