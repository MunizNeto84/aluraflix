import Carrossel from "./Sections/Carrossel";
import Categoria from "./Sections/Categoria";
import TopTen from "./Sections/TopTen";

const SectionHome = () => {
  return (
    <>
      <Carrossel />
      <TopTen />
      <Categoria />
    </>
  );
};

export default SectionHome;
