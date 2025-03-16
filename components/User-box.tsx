import React from "react";
import { useTheme } from "../context/ThemeContext";
import User from "../public/images/PlanIcons/user.svg";
import Image from "next/image";

export const UserBox = () => {
  const { theme } = useTheme();

  const plans = [
    { name: "Free", color: "bg-[#D0AC69]" },
    { name: "Partner", color: "bg-[#B2B2B2]" },
    { name: "Standard", color: "bg-[#EBBB00]" },
    { name: "Premium", color: "bg-[#11CEC5]" }
  ];

  return (
    <div className={`flex flex-row lg:flex-col items-center justify-center space-x-6 lg:space-x-0 lg:space-y-3 border border-[#5e5e5e57] rounded-3xl p-3 mb-16 ${theme === "dark" ? "text-white" : "text-[#6C6C6C]"}`}>
      {plans.map((plan, index) => (
        <div key={index} className="flex flex-col items-center mb-3">
          <div className={`border ${plan.color} rounded-full w-10 h-10 flex justify-center items-center`}>
            <Image src={User} alt="User" />
          </div>
          <p className="mt-1 text-base">{plan.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserBox;
