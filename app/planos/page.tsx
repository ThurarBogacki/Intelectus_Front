'use client'

import Navbar from "../../components/Navbar";
import { useTheme } from "../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import PlanButton from "../../components/plan-button";
import PlanCard from "../../components/plan-card"
import Image from "next/image";
import FreeIcon from "../../public/images/PlanIcons/free_icon.png";
import PartnerIcon from "../../public/images/PlanIcons/partner_icon.png";
import StandardIcon from "../../public/images/PlanIcons/standard_icon.png";
import PremiumIcon from "../../public/images/PlanIcons/premium_icon.png";
import PositiveIcon from "../../public/images/PlanIcons/positive_icon.svg";
import NegativeIcon from "../../public/images/PlanIcons/negative_icon.svg";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className={`relative w-full min-h-screen flex ${theme === "dark" ? "bg-[#171717] text-white bg-overlay" : "bg-white text-black"}`}>
        <Navbar />

        <div className="ml-[72px] md:ml-[22%] w-full">
          <div className="w-full flex flex-col items-center text-center px-6 md:px-8 xl:px-16">
            <h1 className={`text-3xl mt-16 ${theme === "dark" ? "text-[#FFF]" : "text-[#6C6C6C]"}`}>
              Eleve a sua gestão e vendas com a
              <span className={`font-bold ${theme === "dark" ? "text-[#00FFF3]" : "text-[#11CEC5]"}`}> NFT Intelectus.</span>
            </h1>

            <p className={`text-lg mt-6 mb-6 ${theme === "dark" ? "text-[#FFF]" : "text-[#6C6C6C]"}`}>
              A solução que conecta inovação, análise estratégica e rentabilidade para otimizar seus ativos.
            </p>

            <PlanButton height={40} width={240} onClick={() => console.log("teste")}>
              <p className="text-lg">NFT atual: <span className="font-bold">Free</span></p>
            </PlanButton>

          </div>

          <div className={`w-full my-6 px-10 py-12 justify-items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4`}>
            <div className="m-4">
              <PlanCard>
                <div className="w-full flex flex-col items-center text-center">
                  <Image src={FreeIcon} className="w-[60%] h-auto" alt="Moeda do plano Free" />
                  <p>NFT <span className="font-bold text-[#D0AC69]">Free</span></p>
                  <p className="py-10 px-6 text-base ">Torne-se um afiliado e ganhe comissões por cada produto vendido.</p>
                  <p className={`text-xl font-bold ${theme === "dark" ? "text-[#00FFF3]" : "text-[#11CEC5]"}`}>Ativo</p>
                </div>
              </PlanCard>
            </div>

            <div className="m-4">
              <PlanCard>
                <div className="w-full flex flex-col items-center text-center">
                  <Image src={PartnerIcon} className="w-[60%] h-auto" alt="Moeda do plano Partner" />
                  <p>NFT <span className={`font-bold ${theme === "dark" ? "text-[#CFCFCF]" : "text-[6C6C6C]"}`}>Partner</span></p>

                  <p className={`text-xl font-bold px-4 py-1 mt-2 border border-[#888] rounded-2xl ${theme === "dark" ? "text-[#CFCFCF]" : "text-[6C6C6C]"}`}>
                    $<span className="text-3xl">20</span>
                  </p>

                  <div className="w-full mt-4 space-y-2 px-4 mb-4">
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify">Recebe um ebook da Intelectus como bônus.</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify">Garante posição no sistema binário.</p>
                    </div>

                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={NegativeIcon} className="text-xs col-span-1" alt="Negative" />
                      <p className="col-span-1 text-xs text-justify">Não recebe comissão de rede.</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={NegativeIcon} className="text-xs col-span-1" alt="Negative" />
                      <p className="col-span-1 text-xs text-justify">Não é obrigado a divulgar nenhum produto diariamente.</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                    <PlanButton height={35} width="80%" onClick={() => console.log("plano partner")}>
                      <p className="text-xl font-bold">Comprar</p>
                    </PlanButton>
                  </div>
                  
                </div>
              </PlanCard>
            </div>

            <div className="m-4">
              <PlanCard>
                <div className="w-full flex flex-col items-center text-center">
                  <Image src={StandardIcon} className="w-[60%] h-auto" alt="Moeda do plano Partner" />
                  <p>NFT <span className="font-bold text-[#EBBB00]">Standard</span></p>

                  <p className={`text-xl font-bold px-4 py-1 mt-2 border border-[#888] rounded-2xl text-[#EBBB00]`}>
                    $<span className="text-3xl">120</span>
                  </p>

                  <div className="w-full mt-4 space-y-2 px-4 mb-4">
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify">Recebe comissões de rede (participa da estrutura de bonificações).</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify"><span className="font-bold">Obrigação</span> de postar 1x ao dia o link de afiliado de produtos selecionados pela Intelectus.</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify"><span className="font-bold">Garantia semanal</span> de <span className="font-bold text-[#EBBB00]">
                          $7,50
                        </span> em INTEL via recompra programada, caso a comissão de vendas não atinja esse valor mínimo.</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                    <PlanButton height={35} width="80%" onClick={() => console.log("plano standard")}>
                      <p className="text-xl font-bold">Comprar</p>
                    </PlanButton>
                  </div>

                </div>
              </PlanCard>
            </div>

            <div className="m-4">
              <PlanCard>
                <div className="w-full flex flex-col items-center text-center">
                  <Image src={PremiumIcon} className="w-[60%] h-auto" alt="Moeda do plano Partner" />
                  <p>NFT <span className={`font-bold ${theme === "dark" ? "text-[#00FFF3]" : "text-[#11CEC5]"}`}>Premium</span></p>

                  <p className={`text-xl font-bold px-4 py-1 mt-2 border border-[#888] rounded-2xl ${theme === "dark" ? "text-[#00FFF3]" : "text-[#11CEC5]"}`}>
                    $<span className="text-3xl">600</span>
                  </p>

                  <div className="w-full mt-4 space-y-2 px-4 mb-4">
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify">Recebe comissões de rede (participa da estrutura de bonificações).</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify"><span className="font-bold">Obrigação</span> de postar 1x ao dia o link de afiliado de produtos selecionados pela Intelectus.</p>
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-3">
                      <Image src={PositiveIcon} className="text-xs col-span-1" alt="Positive" />
                      <p className="col-span-1 text-xs text-justify"><span className="font-bold">Garantia semanal</span> de <span className={`font-bold ${theme === "dark" ? "text-[#00FFF3]" : "text-[#11CEC5]"}`}>
                          $37,50
                        </span> em INTEL via recompra programada, caso a comissão de vendas não atinja esse valor mínimo.</p>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full flex justify-center">
                    <PlanButton height={35} width="80%" onClick={() => console.log("plano premium")}>
                      <p className="text-xl font-bold">Comprar</p>
                    </PlanButton>
                  </div>

                </div>
              </PlanCard>
            </div>

          </div>

          <div className="w-full flex flex-col items-center text-center mb-14 px-6 md:px-8 xl:px-16">
            <p className={`text-base ${theme === "dark" ? "text-[#FFF]" : "text-[#6C6C6C]"}`}>
              <span className="font-bold">Observação: </span> A obrigatoriedade de postagem diária se aplica apenas aos assinantes Standard e Premium. Caso o afiliado
              Standard ou Premium ou não poste o link de afiliado do produto selecionado pela Intelectus no dia ficará sujeito à perda de parte ou de todos os seus benefícios.
            </p>
          </div>
          
          <div className={`w-full flex flex-col items-center text-center px-6 md:px-8 xl:px-16 ${theme === "dark" ? "bg-[#232323]" : "bg-[#E6E6E6]"}`}>
            <h1 className={`text-3xl mt-16 mb-6 ${theme === "dark" ? "text-[#FFF]" : "text-[#000]"}`}>
              BONIFICAÇÃO <span className="text-[#00CDD3]">MULTINÍVEL</span>
            </h1>
            <p className={`text-base mb-8 ${theme === "dark" ? "text-[#FFF]" : "text-[#6C6C6C]"}`}>
              Bonificação que se acumulam conforme a rede cresce e as vendas acontecem:
            </p>
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
