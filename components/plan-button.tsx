import React from "react";


interface PlanButtonProps {
  height: number;
  width: number | string;
  children: React.ReactNode;
  onClick: () => void;
}

const PlanButton: React.FC<PlanButtonProps> = ({ height, width, children, onClick }) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  }

  return (
    <button
      className={`text-black rounded-lg transition-colors duration-300 max-w-[90%]`}
      style={{
        height: `${height}px`,
        width: typeof width === "number" ? `${width}px` : width,
        backgroundColor: isClicked ? "#11CEC5" : "#00FFF3", 
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default PlanButton;
