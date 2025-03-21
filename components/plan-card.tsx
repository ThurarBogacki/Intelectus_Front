import React from "react";
import { useTheme } from "../context/ThemeContext";

interface PlanCardProps {
  children: React.ReactNode;
}

const PlanCard: React.FC<PlanCardProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={
      `relative max-w-[500px] flex flex-col justify-between h-[800px] border border-[#888] rounded-3xl p-4 col-span-1 m-4 xl:m-6 2xl:m-8
      ${theme === 'dark' ? 'text-[#FFF] bg-[#ffffff1f]' : 'text-[#6C6C6C] bg-[#4444440f]'}`
    }>
      {children}
    </div>
  )
}

export default PlanCard;