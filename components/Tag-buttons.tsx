import React from "react";

interface TagButtonsProps {
  tags: string[];
}

const TagButtons: React.FC<TagButtonsProps> = ({ tags }) => {

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="h-8 px-10 text-sm text-[#FFF] rounded-full bg-[#00A0A6] cursor-pointer flex items-center justify-center"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagButtons;