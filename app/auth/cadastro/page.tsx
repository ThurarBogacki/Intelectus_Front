"use client"
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import { FaRegMoon } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [phoneRaw, setPhoneRaw] = useState(""); // Apenas números
  const [phoneFormatted, setPhoneFormatted] = useState(""); // Exibição formatada
  
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let value = event.target.value.replace(/\D/g, ""); 
      setPhoneRaw(value); 
  
      if (value.length <= 10) {
          setPhoneFormatted(value.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3"));
      } else {
          setPhoneFormatted(value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3"));
      }
  };

  return (
    <div className={`w-full ${theme == "dark" ? "bg-black" : ""} min-h-screen flex justify-center items-center overflow-auto transition-all duration-500 ease-in-out`}>
      <div className={`w-full min-h-screen ${theme == "dark" ? "bg-gradient-radial-small" : "bg-white"} bg-opacity-10 flex flex-col justify-center items-center p-4`}>   
        <div className={`h-auto p-6 min-h-[600px] w-[90%] max-w-md ${theme == "dark" ? "shadow-[0_0_0_0.5px_white] bg-[#171717]" : "shadow-[0_0_0_0.5px_black] bg-white"} rounded-2xl flex flex-col justify-center`}>
          <div className="header h-auto mt-4 flex flex-col justify-center items-center text-center">
            {theme == "dark" ? (
              <Image src={"/images/intelectusWhite.png"} alt="logobranca" width={250} height={250} />
            ) : (
              <Image src={"/images/intelectusBlack.png"} alt="logobranca" width={250} height={250} />
            )}
          </div>

          <div className="form w-full mt-12 flex-grow">
            <form className="w-full">
              <div className={`border-b ${theme == "black" ? "border-white" : "border-[#D9D9D9]"} flex flex-col justify-center items-center space-y-6 pb-12`}>
                <input 
                  className={`w-full p-4 rounded-xl ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"} focus:outline-none focus:ring-0 text-sm`}  
                  type="text" 
                  placeholder="Nome"
                />
                <input 
                  className={`w-full p-4 rounded-xl ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"} focus:outline-none focus:ring-0 text-sm`}
                  type="text" 
                  placeholder="Sobrenome"
                />
                <input 
                  className={`w-full p-4 rounded-xl ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"} focus:outline-none focus:ring-0 text-sm`}  
                  type="text" 
                  placeholder="E-mail"
                />
                <input
                  className={`w-full p-4 rounded-xl ${
                    theme === "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"
                  } focus:outline-none focus:ring-0 text-sm`}
                  type="text"
                  placeholder="Telefone"
                  value={phoneFormatted} // Mostra o número formatado
                  onChange={handlePhoneChange}
                  maxLength={15} // Evita digitação excessiva
                />
              </div>

              <div className="flex flex-col justify-center items-center space-y-6 mt-4">
                <div className="relative w-full">
                  <input 
                    className={`w-full p-4 rounded-xl pr-12 ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"} focus:outline-none focus:ring-0 text-sm`}
                    type={showPassword ? "text" : "password"} 
                    placeholder="Senha"
                  />
                  <button 
                    type="button" 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#818181]"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                  </button>
                </div>


                <div className="relative w-full">
                  <input 
                    className={`w-full p-4 rounded-xl pr-12 ${theme == "dark" ? "bg-[#272727] text-white" : "bg-[#f4f4f4] text-[#818181]"} focus:outline-none focus:ring-0 text-sm`}
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirmar Senha"
                  />
                  <button 
                    type="button" 
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#818181]"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                  </button>
                </div>

                <p className={`${theme == "dark" ? "text-white" : "text-[#8D8D8D]"} text-center text-[14px]`}>
                  Ao criar a conta, você confirma que leu e concorda com os <span className={`${theme == "black" ? "text-[#00fff3]" : "text-[#11cec5]"}`}>termos de uso</span> da Intelectus
                </p>

                <button className={`p-4 w-full rounded-xl ${theme == "dark" ? "bg-[#00fff3]" : "bg-[#11cec5]"} text-black font-bold text-sm`}>
                  Criar Conta 
                </button>
              </div>
            </form>
          </div>
        </div>   

        <p className={`mt-[10px] ${theme == "dark" ? "text-white" : "text-[#818181]"} font-[14px]`}>
          Já possui conta? <a href="/auth/login" className={`${theme == "dark" ? "text-[#00fff3]" : "text-[#11cec5]"} cursor-pointer`}>Faça o Login</a>
        </p>

        <button 
          onClick={toggleTheme} 
          className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg"
        >
          {theme == "dark" ? (
            <FaRegMoon className="text-white" size={24} />
          ) : (
            <BsSun className="text-[#888888]" size={24} />
          )} 
        </button>
      </div>
    </div>
  );
}
