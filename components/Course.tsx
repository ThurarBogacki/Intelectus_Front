import CourseButton from "./Course-button";
import Play from "../public/images/ComprasIcons/play.svg"
import Image from "next/image";

interface CourseProps {
  title: string;
  curr_module: string;
  image: string;
  content: "course-module" | "course";
  link: string;
}

export default function Course({ title, curr_module, image, content, link}: CourseProps) {
  return (
    <>
      {content === 'course-module' && (
        <div 
          className="relative w-[160px] h-[180px] md3:w-[210px] md3:h-[210px] rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
          
        >
          <div 
            className="absolute inset-0 grayscale bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="relative z-10 text-center text-[#FFF] flex flex-col justify-between h-full w-full p-4">
            <h2 className="text-base font-bold">{ title }</h2>
            <div className="mb-10">
              <CourseButton height={23} width={90} onClick={() => window.open(link)}>{ curr_module }</CourseButton>
            </div>
          </div>
        </div>
      )}

      {content === 'course' && (
        <div
          className="relative w-[180px] h-[360px] md3:w-[240px] md3:h-[420px] rounded-lg overflow-hidden bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="relative z-10 text-center text-[#FFF] flex flex-col items-center justify-between h-full w-full p-5">
            <button 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={() => window.open(link)}
            >
              <Image src={Play} alt="play" />
            </button>
            <h2 className="text-base font-bold mt-20 mb-5">{title}</h2>
            <div className="flex justify-center items-center text-black rounded-lg transition-colors duration-300 w-[60%] min-h-[30px] bg-[#00FFF3] text-xs font-bold">
              {curr_module}
            </div>
          </div>
        </div>
      )}

    </>
  )
}

