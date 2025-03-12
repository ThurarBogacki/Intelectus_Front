import React from "react";
import { useTheme } from "../context/ThemeContext";

interface ContentBoxProps {
    title: string;
    children: React.ReactNode;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ title, children }) => {
    const { theme } = useTheme();

    return (
        <div className={`flex flex-col w-full min-h-[100px] min-w-[242px] border border-[#D9D9D9] rounded-lg p-4 ${theme === 'dark' ? 'text-[#FFF]' : 'text-[#6C6C6C]'}`}>
            <h3 className="font-bold text-base mb-5">{ title }</h3>
            <p className="font-bold text-sm">{ children }</p>
        </div>
    );
};
