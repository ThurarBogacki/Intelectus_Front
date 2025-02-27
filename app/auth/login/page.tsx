"use client"
import Image from "next/image";
import { useTheme } from "../../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";

export default function Login() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`w-full ${theme == "dark" ?  "bg-black" : ""} min-h-screen flex justify-center items-center overflow-auto transition-all duration-500 ease-in-out`}>
      <div className={`w-full min-h-screen ${theme == "dark" ?  "bg-gradient-radial-small" : "bg-white"} bg-opacity-10 flex flex-col justify-center items-center p-4`}>   
        <div className={`h-auto p-6 min-h-[600px] w-[90%] max-w-md  ${theme == "dark" ? "shadow-[0_0_0_0.5px_white] bg-[#171717]" : "shadow-[0_0_0_0.5px_black] bg-white"}  rounded-2xl flex flex-col justify-center`}>
          <div className="header h-auto mt-4 flex flex-col justify-center items-center text-center">
            {theme == "dark"?(
              <Image src={"/images/logobranca.png"} alt="logobranca" width={250} height={250}></Image>
            ):(
              <Image src={"/images/logopreta.png"} alt="logobranca" width={250} height={250}></Image>
            )}
            
          </div>

          <div className="form w-full mt-12 flex-grow">
              <form className="w-full">
                <div className="border-b border-white flex flex-col justify-center items-center space-y-4 pb-4">
                  <input 
                    className={`w-full p-4 rounded-xl ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"}   focus:outline-none focus:ring-0 text-sm`}  
                    type="text" 
                    placeholder="E-mail"
                  />
                  <input 
                    className={`w-full p-4 rounded-xl ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"}  focus:outline-none focus:ring-0 text-sm`}
                    type="password" 
                    placeholder="Senha"
                  />
                  <p className={` ${theme == "dark" ? "text-white" : "text-[#818181]"} text-[16px]`}>
                    Esqueceu a <span className={`${theme == "dark" ? "text-[#00fff3]" : "text-[#11cec5]"}  cursor-pointer`}>senha?</span>
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center space-y-3 mt-4">
                  <button className={`p-4 w-full rounded-xl ${theme == "dark" ? "bg-white text-black" : "bg-[#2E5967] text-white"}  font-bold text-sm`}>
                    Acessar Conta
                  </button>
                  <p className={`${theme == "dark" ? "text-white" : " text-[#818181]"}  text-xs`}>ou</p>
                  <button className={`p-4 w-full rounded-xl ${theme == "dark" ? "bg-[#00fff3]" : "bg-[#11cec5]"}  text-black font-bold text-sm`}>
                    Conectar Carteira
                  </button>
                </div>
              </form>
          </div>
        </div>   
        <p className={`mt-[10px] ${theme == "dark" ? "text-white" : " text-[#818181]"} font-[14px]`}>Não tem uma conta? <span className={`${theme == "dark" ? "text-[#00fff3]" : "text-[#11cec5]"}`}>Cadastre-se!</span></p>
        <button 
        onClick={toggleTheme} 
        className="absolute bottom-5 right-5 p-3  rounded-full shadow-lg"
        >
          {theme == "dark" ? (
            <FaRegMoon className="text-white" size={24} />
          ):(
            <BsSun className="text-[#888888]" size={24} />
          )} 
        </button>

      </div>
    </div>
  );
}
