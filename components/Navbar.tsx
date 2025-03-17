"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Estado do menu no mobile

  return (
<div className={`hidden md3:flex fixed left-0 top-0 h-screen bg-[#1F1F1F] transition-all duration-300  flex-col items-center z-50
  ${isOpen ? "w-[250px]" : "w-[72px] md2:w-[20%] md2:max-w-[350px]"}`}>

      {/* Logo */}
      <div className="w-full h-[80px] items-center justify-center md2:flex hidden p-5 mt-[20px]">
        <Image 
          alt="logo" 
          width={200} 
          height={200} 
          src="/images/intelectusWhite.png"
          className="object-contain"
        />
      </div>

  <button 
    onClick={() => setIsOpen(!isOpen)} 
    className={`text-white mt-[20px] mb-[20px] md2:hidden transition-all ${isOpen ? "self-end mr-[20px]" : ""}`}
  >
    <Image 
      className="w-6 h-6 md2:w-8 md2:h-8 object-contain" 
      src="/images/MenuIcons/menu.png" 
      alt="MenuIcon" 
      width={30} 
      height={30} 
    />
  </button>

      {/* Menu */}
      <div className={`w-full  md2:ml-[15%] ml-0 flex flex-col text-[#B2B2B2] ${isOpen ? "mt-[20px]" : "mt-[25px] md:mt-[70px] mt2:mt-[0px]"}`}>
        {[
          { src: "/images/MenuIcons/dashboard.png", label: "Dashboard", href: "/dashboard" },
          { src: "/images/MenuIcons/planos.png", label: "Planos Afiliados", href: "/planos" },
          { src: "/images/MenuIcons/marketplace.png", label: "Marketplace", href: "/marketplace" },
          { src: "/images/MenuIcons/network.png", label: "Marketing de Rede", href: "/network" },
          { src: "/images/MenuIcons/shoppingBag.png", label: "Compras", href: "/compras" },
          { src: "/images/MenuIcons/financas.png", label: "Finanças", href: "/financas" },
        ].map((item, index) => {
          const isActive = pathname === item.href; 

          return (
            <Link key={index} href={item.href} className="w-full">
              <div
                className={`flex  gap-3 p-2 md2:p-3 w-full cursor-pointer transition-all duration-300 
                  ${isActive ? "text-[#00FFF3]" : "text-[#B2B2B2]"} ${isOpen ? "items-start justify-normal ml-[20px] p-3" : "md2:items-start md2:justify-normal items-center text-center justify-center"}`}
              >
                <Image 
                  alt="icon" 
                  width={30} 
                  height={30} 
                  src={item.src}
                  className="w-6 h-6 md2:w-8 md2:h-8 object-contain"
                />
                <p className={`text-[18px] md2:block ${isOpen ? "block" : "hidden"}`}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}

        {/* Separador "Outros" */}
        <p className={`md2:text-[12px] text-[8px] flex  text-[#686868] mt-[20px] md2:mt-10 px-3 md2:block ${isOpen ? "ml-[20px] block items-start justify-normal" : " md2:items-start md2:justify-normal items-center justify-center"}`}>
          Outros
        </p>

        {[
          { src: "/images/MenuIcons/support.png", label: "Suporte", href: "/support" },
          { src: "/images/MenuIcons/settings.png", label: "Configurações", href: "/settings" },
        ].map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link key={index} href={item.href} className="w-full">
              <div
                className={`flex  gap-3 p-3 w-full cursor-pointer transition-all duration-300 
                  ${isActive ? "bg-[#2A2A2A] border-l-4 border-[#00FFF3] text-[#00FFF3]" : "text-[#B2B2B2]"} ${isOpen ? "items-start justify-normal ml-[20px]" : "md2:items-start md2:justify-normal items-center text-center justify-center"}`}
              >
                <Image 
                  alt="icon" 
                  width={28} 
                  height={28} 
                  src={item.src}
                  className="w-6 h-6 md2:w-7 md2:h-7 object-contain"
                />
                <p className={`text-[14px] md2:block ${isOpen ? "block" : "hidden"}`}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
