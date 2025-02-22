import { useState } from "react";
import Carrossel from "./Sections/Carrossel";
import Categoria from "./Sections/Categoria";
import TopTen from "./Sections/TopTen";
import HomeHeader from "../../default/Header/HomeHeader";
import Search from "./Sections/Search";

const SectionHome = () => {
  const [videosBuscados, setVideosBuscados] = useState([]);

  return (
    <>
      <HomeHeader setVideosBuscados={setVideosBuscados} />
      <Carrossel />
      {videosBuscados.length > 0 ? (
        <Search videosBuscados={videosBuscados} />
      ) : (
        <>
          <TopTen />
          <Categoria />
        </>
      )}
    </>
  );
};

export default SectionHome;
