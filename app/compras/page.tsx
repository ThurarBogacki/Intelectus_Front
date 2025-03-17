'use client'

import Navbar from "../../components/Navbar";
import { useTheme } from "../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import CourseCarousel from "../../components/CourseCarousel";
import ContentCarousel from "../../components/ContentCarousel";
import { ContentBox } from "../../components/Content-box";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const courses = [
    { title: "PRESTAÇÃO DE SERVIÇOS", curr_module: "MÓDULO 12", image: "/images/ComprasIcons/example-1.png", link: "#" },
    { title: "DROPSHIPPING", curr_module: "MÓDULO 04", image: "/images/ComprasIcons/example-1.png", link: "#" },
    { title: "GOOGLE ADS", curr_module: "MÓDULO 10", image: "/images/ComprasIcons/example-1.png", link: "#" },
    { title: "CHAT BOT", curr_module: "MÓDULO 01", image: "/images/ComprasIcons/example-1.png", link: "#" },
    { title: "SUPORTE & COMUNIDADE", curr_module: "MÓDULO 09", image: "/images/ComprasIcons/example-1.png", link: "#" },
    { title: "COMPRAS", curr_module: "MÓDULO 07", image: "/images/ComprasIcons/example-1.png", link: "#" },
    { title: "PRESTAÇÃO DE SERVIÇOS", curr_module: "MÓDULO 12", image: "/images/ComprasIcons/example-1.png", link: "#" },
  ];

  const content = [
    { title: "PRESTAÇÃO DE SERVIÇOS", curr_module: "AULA 01", image: "/images/ComprasIcons/example-2.png", link: "#" },
    { title: "ATENDIMENTO AO CLIENTE", curr_module: "AULA 02", image: "/images/ComprasIcons/example-2.png", link: "#" },
    { title: "GERANDO ORÇAMENTO", curr_module: "AULA 03", image: "/images/ComprasIcons/example-2.png", link: "#" },
    { title: "CAPTANDO NOVOS CLIENTES", curr_module: "AULA 04", image: "/images/ComprasIcons/example-2.png", link: "#" },
    { title: "ALGUMA COISA AI", curr_module: "AULA 05", image: "/images/ComprasIcons/example-2.png", link: "#" },
  ]

  return (
    <>
      <div className={`relative w-full min-h-screen flex overflow-hidden ${theme === "dark" ? "bg-[#171717] text-[#D9D9D9] bg-overlay" : "bg-white text-[#6C6C6C]"}`}>
        <Navbar />

        <div className="ml-[72px] md:ml-[22%] w-full">
          <div className="sm:mx-4 md:mx-8 lg:mx-16">
            <CourseCarousel courses={courses} />
          </div>

          <div className="sm:mx-4 md:mx-8 lg:mx-16">
            <ContentCarousel courses={content} />
          </div>

          <div className="flex flex-col flex-1 px-6 md:px-8 xl:px-16">
            <div className="relative grid grid-cols-1 xl:grid-cols-4 gap-4 w-full mt-12 mb-16">
              <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
              <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
              <div className="xl:col-span-2">
                  <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
              </div>
            </div>
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