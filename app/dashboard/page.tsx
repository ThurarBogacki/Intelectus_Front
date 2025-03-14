"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { BriefBoxComponent } from "../../components/Brief-box";
import { ContentBox } from "../../components/Content-box";
import { Carousel } from "../../components/Carousel";
import RevenueChart from "../../components/Revenue-chart";
import { useTheme } from "../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

import Image from "next/image";
import EyeOpen from "../../public/images/DashboardIcons/eye-open.svg";
import EyeClosed from "../../public/images/DashboardIcons/eye-closed.svg";

export default function Home() {
    const { theme, toggleTheme } = useTheme(); // 🔹 Obtendo o tema do contexto

    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch("/api/user"); 
                if (!response.ok) {
                    throw new Error("Erro ao buscar usuário");
                }
                const data = await response.json();
                setUser(data.name); 
            } catch (err) {
                setError("Falha ao carregar usuário");
            } finally {
                setLoading(false);
            }
        }
        fetchUser();
    }, []);

    return (
        <>
            <div className={`relative w-full min-h-screen flex ${theme === "dark" ? "bg-[#171717] text-white bg-overlay" : "bg-white text-black"}`}>
                <Navbar />
                <div className="ml-[72px] md:ml-[22%] p-5">
                <div className="flex flex-col flex-1 px-6 md:px-8 xl:px-16">
                    <h1 className="text-3xl font-bold mb-4 mt-16">
                        {loading ? "Carregando..." : error ? error : `Boas vindas, ${user}`}
                    </h1>

                    <div className="relative container">
                        <div className="text-base mb-8 inline-flex items-center gap-2">
                            <span>RESUMO</span>
                            <button onClick={() => setIsHidden(!isHidden)}> <Image src={isHidden ? EyeOpen: EyeClosed} alt="Eye Icon" className="w-5 h-5 bg-inherit" /> </button>
                        </div>
                    </div>

                    {/* Seção de Resumo */}
                    <div className="relative grid grid-cols-1 xl:grid-cols-4 gap-4 w-full">
                        <BriefBoxComponent value={1000} secondaryValue={80} title="sales" isHidden={isHidden} />
                        <BriefBoxComponent value={5000} title="balance" isHidden={isHidden} />
                        <BriefBoxComponent value={200} title="pending" isHidden={isHidden} />
                        <BriefBoxComponent value={1} secondaryValue={4} title="mission" isHidden={isHidden} />
                    </div>

                    {/* Seção de gráficos e banners*/}
                    <div className="relative grid grid-cols-1 xl:grid-cols-3 gap-4 w-full mt-11">
                        <div className="xl:col-span-2">
                            <RevenueChart />
                        </div>
                        <div>
                            <Carousel>
                                <div className="font-3xl font-bold">BANNERS ROTATIVOS AQUI</div>
                                <div className="font-3xl font-bold">BANNERS ROTATIVOS AQUI</div>
                                <div className="font-3xl font-bold">BANNERS ROTATIVOS AQUI</div>
                            </Carousel>
                        </div>
                    </div>

                    {/* Seção de conteúdo */}
                    <div className="relative grid grid-cols-1 xl:grid-cols-4 gap-4 w-full mt-12 mb-16">
                        <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
                        <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
                        <div className="xl:col-span-2">
                            <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
                        </div>
                    </div>

                    {/* Botão para alternar o tema */}
                    <button 
                        onClick={toggleTheme} 
                        className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg"
                    >
                        {theme == "dark" ? ( <FaRegMoon className="text-white" size={24} />) : (<BsSun className="text-[#888888]" size={24} />)} 
                    </button>

                </div>
                </div>
            </div>
        </>
    );
}
