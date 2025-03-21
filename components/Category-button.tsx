import React from 'react';

interface CategoryButtonProps {
  title: string;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ title, onClick }) => {
  return (
    <div
      className="flex justify-between items-center min-h-16 p-4 rounded-lg bg-gradient-to-r from-[#171717] to-[#11CEC5] cursor-pointer"
      onClick={onClick}
    >
      <span className="ml-2 md3:ml-4 text-white text-sm md3:text-sm md2:text-lg">{title}</span>
      <span className="text-[#004340] text-[10px] md3:text-sm flex items-center">
        Ver produtos <span className="ml-1 md3:ml-2">→</span>
      </span>
    </div>
  );
};

export default CategoryButton;