'use client'

import Navbar from "../../components/Navbar";
import { useTheme } from "../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import MarketplaceCarousel from "../../components/Marketplace-carousel";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  const items = [
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"},
    { type: "Curso online", title: "Workshop de Planejamento Estratégico - Ao vivo e Online", accessLink: "#", detailLink: "#", image:"/images/MarketplaceIcons/holder.png"}
  ]

  return (
    <>
      <div className={`relative w-full min-h-screen flex overflow-hidden ${theme === "dark" ? "bg-[#171717] text-[#D9D9D9] bg-overlay" : "bg-white text-[#6C6C6C]"}`}>
        <Navbar />
      
        <div className="ml-4 md3:ml-[72px] md2:ml-[18%] w-[calc(100vw-16px)] md3:w-[calc(100vw-72px)] md2:w-[calc(100vw-18%)]">

          <div>
            <MarketplaceCarousel content={items} />
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
