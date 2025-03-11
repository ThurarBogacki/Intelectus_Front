"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Obtém a rota atual

  return (
    <div className="min-h-screen bg-[#1F1F1F] w-[72px] md:w-[17%] transition-all duration-300 flex flex-col items-center">
      {/* Logo */}
      <div className="w-full h-[80px] flex items-center justify-center">
        <Image 
          alt="logo" 
          width={200} 
          height={200} 
          src="/images/intelectusWhite.png"
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <div className="w-full mt-[40px] md:ml-[60px] ml-0 flex flex-col text-[#B2B2B2]">
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
                className={`flex items-center gap-3 p-3 w-full cursor-pointer transition-all duration-300 
                  ${isActive ? " text-[#00FFF3]" : "text-[#B2B2B2]"}`}
              >
                <Image 
                  alt="icon" 
                  width={30} 
                  height={30} 
                  src={item.src}
                  className="w-7 h-7 md:w-8 md:h-8 object-contain"
                />
                <p className={`text-[14px] md:text-[16px] md:block hidden`}>
                  {item.label}
                </p>
              </div>
            </Link>
          );
        })}

        {/* Separador "Outros" */}
        <p className="text-[12px] text-[#686868] mt-8 md:mt-10 px-3 md:block hidden">
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
                className={`flex items-center gap-3 p-3 w-full cursor-pointer transition-all duration-300 
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
