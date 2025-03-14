"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Obtém a rota atual

  return (
    <div className="min-h-screen max-h-screen fixed bg-[#1F1F1F] w-[72px] md:w-[22%] transition-all duration-300 flex flex-col items-center">
      {/* Logo */}
      <div className="w-full h-[80px] items-center justify-center md:flex hidden p-5">
        <Image 
          alt="logo" 
          width={200} 
          height={200} 
          src="/images/intelectusWhite.png"
          className="object-contain"
        />
      </div>
      <button className="text-white mt-[20px] mb-[20px] md:hidden "><Image className="w-6 h-6 md:w-8 md:h-8 object-contain" src="/images/MenuIcons/menu.png" alt="MenuIcon" width={30} height={30}></Image></button>

      {/* Menu */}
      <div className="w-full mt-[40px] md:ml-[15%] ml-0 flex flex-col text-[#B2B2B2]">
        {[
          { src: "/images/MenuIcons/dashboard.png", label: "Dashboard", href: "/dashboard" },
          { src: "/images/MenuIcons/planos.png", label: "Planos", href: "/planos" },
          { src: "/images/MenuIcons/marketplace.png", label: "Marketplace", href: "/marketplace" },
          { src: "/images/MenuIcons/network.png", label: "Marketing", href: "/network" },
          { src: "/images/MenuIcons/shoppingBag.png", label: "Compras", href: "/compras" },
          { src: "/images/MenuIcons/financas.png", label: "Finanças", href: "/financas" },
        ].map((item, index) => {
          const isActive = pathname === item.href; 

          return (
            <Link key={index} href={item.href} className="w-full">
              <div
                className={`flex md:items-start md:justify-normal items-center text-center justify-center gap-3 p-2 md:p-3 w-full cursor-pointer transition-all duration-300 
                  ${isActive ? " text-[#00FFF3]" : "text-[#B2B2B2]"}`}
              >
                <Image 
                  alt="icon" 
                  width={30} 
                  height={30} 
                  src={item.src}
                  className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
                <p className={`text-[14px] md:text-[16px] md:block hidden`}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}

        {/* Separador "Outros" */}
        <p className="md:text-[12px] text-[8px] flex md:items-start md:justify-normal  items-center justify-center text-[#686868] mt-[60px] md:mt-10 px-3 md:block">
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
                className={`flex items-center justify-center md:items-start md:justify-normal gap-3 p-3 w-full cursor-pointer transition-all duration-300 
                  ${isActive ? "bg-[#2A2A2A] border-l-4 border-[#00FFF3] text-[#00FFF3]" : "text-[#B2B2B2]"}`}
              >
                <Image 
                  alt="icon" 
                  width={28} 
                  height={28} 
                  src={item.src}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain"
                />
                <p className={`text-[14px] md:block hidden`}>
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
