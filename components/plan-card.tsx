import React from "react";
import { useTheme } from "../context/ThemeContext";

interface PlanCardProps {
  children: React.ReactNode;
}

const PlanCard: React.FC<PlanCardProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={
      `relative flex flex-col justify-between h-full border border-[#888] rounded-3xl p-4 col-span-1 m-2 md3:m-3 md2:m-4
      ${theme === 'dark' ? 'text-[#FFF] bg-[#ffffff1f]' : 'text-[#6C6C6C] bg-[#4444440f]'}`
    }>
      {children}
    </div>
  )
}

export default PlanCard;