"use client"
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { BriefBoxComponent } from "../../components/Brief-box";
import { ContentBox } from "../../components/Content-box";
import { Carousel } from "../../components/Carousel";
import { useTheme } from "../../context/ThemeContext";

export default function Home() {
    const { theme, toggleTheme } = useTheme();
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
            <div className="w-full h-screen flex">
                <Navbar/>

                <div className="flex flex-col flex-1 px-[64px]">

                    <h1 className="text-3xl font-bold text-[#D9D9D9] mb-4 mt-[130px]">
                        {loading ? "Carregando..." : error ? error : `Boas vindas, ${user}`}
                    </h1>
                    <h2 className="text-base text-[#D9D9D9] mb-8">RESUMO</h2>

                    {/* Seção de Resumo */}
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <BriefBoxComponent value={1000} secondaryValue={80} title="sales" />
                        <BriefBoxComponent value={5000} title="balance" />
                        <BriefBoxComponent value={200} title="pending" />
                        <BriefBoxComponent value={1} secondaryValue={4} title="mission" />
                    </div>

                    <div className="grid grid-cols-3 gap-4 w-full mt-11">
                        <div className="col-span-2">
                            {/* Gráfico */}
                        </div>
                        <div>
                            <Carousel>
                                <div className="text-[#FFF] font-3xl font-bold">BANNERS ROTATIVOS AQUI</div>
                                <div className="text-[#FFF] font-3xl font-bold">BANNERS ROTATIVOS AQUI</div>
                            </Carousel>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-4 w-full mt-11">
                        <div>
                            <ContentBox title="Conteúdo">
                                Lorem ipsum dolor sit amet
                            </ContentBox>
                        </div>
                        <div>
                            <ContentBox title="Conteúdo">
                                Lorem ipsum dolor sit amet
                            </ContentBox>
                        </div>
                        <div className="col-span-2">
                            <ContentBox title="Conteúdo">
                                Lorem ipsum dolor sit amet
                            </ContentBox>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
