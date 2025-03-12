import React from "react";

interface ContentBoxProps {
    title: string;
    children: React.ReactNode;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ title, children }) => {
    return (
        <div className="flex flex-col w-full min-h-[100px] min-w-[242px] border border-[#D9D9D9] rounded-lg p-4">
            <h3 className="font-bold text-base text-[#FFF] mb-5">{ title }</h3>
            <p className="font-bold text-sm text-[#FFF]">{ children }</p>
        </div>
    );
};
