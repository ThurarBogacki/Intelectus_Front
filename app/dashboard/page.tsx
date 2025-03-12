"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { BriefBoxComponent } from "../../components/Brief-box";
import { ContentBox } from "../../components/Content-box";
import { Carousel } from "../../components/Carousel";
import RevenueChart from "../../components/Revenue-chart";
import { useTheme } from "../../context/ThemeContext";

import Image from "next/image";
import EyeIcon from "../../public/images/DashboardIcons/eye.svg";

export default function Home() {
    const { theme, toggleTheme } = useTheme(); // 🔹 Obtendo o tema do contexto

    const [user, setUser] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
            {/* 🔹 Aplica o tema dinamicamente */}
            <div className={`w-full h-screen flex ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
                <Navbar />

                <div className="flex flex-col flex-1 px-[64px]">
                    <h1 className="text-3xl font-bold mb-4 mt-[100px]">
                        {loading ? "Carregando..." : error ? error : `Boas vindas, ${user}`}
                    </h1>

                    <div className="container">
                        <div className="text-base mb-8 inline-flex items-center gap-2">
                            <span>RESUMO</span>
                            <a href="#"> <Image src={EyeIcon} alt="Eye Icon" className="w-5 h-5 bg-inherit" /> </a>
                        </div>
                    </div>

                    {/* Seção de Resumo */}
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <BriefBoxComponent value={1000} secondaryValue={80} title="sales" />
                        <BriefBoxComponent value={5000} title="balance" />
                        <BriefBoxComponent value={200} title="pending" />
                        <BriefBoxComponent value={1} secondaryValue={4} title="mission" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 w-full mt-11">
                        <div className="col-span-2">
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

                    <div className="grid grid-cols-4 gap-4 w-full mt-11">
                        <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
                        <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
                        <div className="col-span-2">
                            <ContentBox title="Conteúdo">Lorem ipsum dolor sit amet</ContentBox>
                        </div>
                    </div>

                    {/* 🔹 Botão para alternar o tema */}
                    <button 
                        onClick={toggleTheme} 
                        className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg"
                    >
                        {theme === "dark" ? "🌙" : "☀️"}
                    </button>

                </div>
            </div>
        </>
    );
}
