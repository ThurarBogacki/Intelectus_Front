'use client'

import Navbar from "../../components/Navbar";
import { useTheme } from "../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import MarketplaceCarousel from "../../components/Marketplace-carousel";
import search from "../../public/images/MarketplaceIcons/search.svg"
import Image from "next/image";
import TagButtons from "../../components/Tag-buttons";
import CategoryButton from "../../components/Category-button";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const items = [
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"}
  ]

  const items2 = [
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"}
  ]

  const tags = ["Marketing Digital", "Empreendedorismo", "Maquiagem", "Investimentos", "Saúde e Esportes", "Culinária e Gastronomia", "Estética", "Meditar", "Fotografia", "Desenho", "Artesanato"]

  return (
    <>
      <div className={`relative w-full min-h-screen flex overflow-hidden ${theme === "dark" ? "bg-[#171717] text-[#D9D9D9] bg-overlay" : "bg-white text-[#6C6C6C]"}`}>
        <Navbar />
      
        <div className="ml-4 md3:ml-[72px] md2:ml-[18%] w-[calc(100vw-16px)] md3:w-[calc(100vw-72px)] md2:w-[calc(100vw-18%)]">

          <div className="relative justify-start min-h-[340px] mx-4 md3:mx-8 md2:mx-16 mt-16 px-4 md3:px-8 md2:px-16 border rounded-3xl border-[#11CEC5]">
            <p className="text-base mt-12">Os melhores produtos</p>
            <p className="text-lg font-bold mt-3">Aprendizado que transforma.</p>
            <p className="text-4xl font-bold mt-3">Desenvolva novas habilidades</p>
            <p className="text-4xl font-bold">para alcançar seus objetivos.</p>
            <p className="text-4xl text-[#00FFF3] font-bold">Comece agora!</p>
            <div className="inline-flex mt-4 mb-10 p-2 border rounded-xl border-[#11CEC5]">
              <input type="text" className="bg-inherit" placeholder="O que você está procurando?" />
              <button>
                <Image src={search} alt="Search" />
              </button>
            </div>
          </div>

          <div className="relative mx-4 md3:mx-8 md2:mx-16 mt-6">
            <p className="text-xl">Conteúdos mais acessados</p>
            <TagButtons tags={tags} />
          </div>

          <div>
            <MarketplaceCarousel title={"Produtos bem avaliados"} content={items} idNext="custom-next" idPrev="custom-prev" />
          </div>

          <div className="relative mx-4 md3:mx-8 md2:mx-16 mt-6">
            <p className="text-xl font-semibold">Categorias</p>
            <div className="grid grid-cols-1 md3:grid-cols-2 md2:grid-cols-3 gap-4 mt-4">
              <CategoryButton title={"Educacional"} onClick={() => {}} />
              <CategoryButton title={"Desenvolvimento Pessoal"} onClick={() => {}} />
              <CategoryButton title={"Negócios e Carreira"} onClick={() => {}} />
              <CategoryButton title={"Saúde e Esportes"} onClick={() => {}} />
              <CategoryButton title={"Culinária e Gastronomia"} onClick={() => {}} />
              <CategoryButton title={"Finanças e Investimentos"} onClick={() => {}} />
            </div>
          </div>

          <div>
            <MarketplaceCarousel title={"Mais vendidos do Intelectus Marketplace"} content={items2} idNext="custom-next-2" idPrev="custom-prev-2" />
          </div>

          

          <button
            onClick={toggleTheme}
            className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg"
          >
            {theme === "dark" ? ( <FaRegMoon className="text-white" size={24} />) : ( <BsSun className="text-[#888888]" size={24} />)}
          </button>

        </div>

      </div>
    </>
  )
}
