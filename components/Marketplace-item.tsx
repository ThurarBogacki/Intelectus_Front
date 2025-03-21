import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

interface MarketplaceItemProps {
  type: string;
  title: string;
  detailLink: string;
  accessLink: string;
  image: string;
}

export default function MarketplaceItem({ type, title, detailLink, accessLink, image }: MarketplaceItemProps) {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`relative h-[310px] w-[280px] flex flex-col border rounded-lg border-[#5e5e5e57]  ${theme === "dark" ? "text-[#FFF]" : "text-[#6C6C6C]"}`}
      >
        <div 
          className="w-full h-[60%] bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className={`relative rounded-b-lg h-[40%] p-2 ${theme === "dark" ? "bg-[#171717]" : "bg-white"}`}>
          <p className="mt-2 text-[10px]">{ type }</p>
          <p className="text-xs font-bold">{ title }</p>
          <div className="mt-4 flex gap-2">

            <button 
              className={`w-[120px] h-[20px] flex justify-center items-center text-xs border rounded-sm ${theme === "dark" ? "text-[#00FFF3] border-[#00FFF3]" : "text-[#11CEC5] border-[#11CEC5]"}`}
              onClick={() => window.open(detailLink)}
            >
              Mostrar detalhes
            </button>

            <button 
              className={`w-[120px] h-[20px] flex justify-center items-center text-sm rounded-sm text-[#000] ${theme === "dark" ? "bg-[#00FFF3]" : "bg-[#11CEC5]"}`}
              onClick={() => window.open(accessLink)}
            >
              Acessar
            </button>
            
          </div>
        </div>
      </div>
    </>
  )

}
