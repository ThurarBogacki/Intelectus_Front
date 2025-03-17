import CourseButton from "./Course-button";

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
          className="relative w-[160px] h-[180px] lg:w-[210px] lg:h-[210px] rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          <div className="relative z-10 text-center text-[#FFF] flex flex-col justify-between h-full w-full p-4">
            <h2 className="text-base font-bold">{ title }</h2>
            <div className="mb-10">
              <CourseButton height={23} width={90} onClick={() => console.log({ link })}>{ curr_module }</CourseButton>
            </div>
          </div>
        </div>
      )}

      {content === 'course' && (
        <div
          className="relative w-[180px] h-[360px] lg:w-[240px] lg:h-[420px] rounded-lg overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div> 
          
          <div className="relative z-10 text-center text-[#FFF]">
            <h2 className="text-base font-bold mb-8">{title}</h2>
            <CourseButton height={23} width={90} onClick={() => console.log({ link })}>
              {curr_module}
            </CourseButton>
          </div>
        </div>
      )}

    </>
  )
}

