

import { projects } from "../data/data";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import project1 from "../assets/content/project1.png";
import project2 from "../assets/content/project2.png";
import project3 from "../assets/content/project3.png";
import project4 from "../assets/content/project4.png";
import project5 from "../assets/content/project5.png";
import project6 from "../assets/content/project6.png";
import project7 from "../assets/content/project7.png";
import project8 from "../assets/content/project8.png";
import project9 from "../assets/content/project9.png";
import project10 from "../assets/content/project10.png";
import projectQr1 from "../assets/content/projectQr1.png";
import projectQr2 from "../assets/content/projectQr2.png";
import projectQr3 from "../assets/content/projectQr3.png";
import projectQr4 from "../assets/content/projectQr4.png";
import projectQr5 from "../assets/content/projectQr5.png";
import projectQr71 from "../assets/content/projectQr71.png";
import projectQr72 from "../assets/content/projectQr72.png";
import projectQr8 from "../assets/content/projectQr8.png";
import projectQr9 from "../assets/content/projectQr9.png";
import projectQr10 from "../assets/content/projectQr10.png";
import smallTexture from "../assets/content/smallTexture.png";
import longTexture from "../assets/content/longTexture.png";


const images = { project1, project2, project3, project4, project5, project6, project7, project8, project9, project10, projectQr1, projectQr2, projectQr3, projectQr4, projectQr5, projectQr71, projectQr72, projectQr8, projectQr9, projectQr10 };

const Projects = () => {

  const location = useLocation();

  // Create refs for each project
  const projectRefs = useRef({});

  // After component mounts, check for projectId in URL and scroll
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const projectId = params.get("projectId");

    if (projectId && projectRefs.current[projectId]) {
      projectRefs.current[projectId].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, [location]);


  return (
    <div dir="rtl"
      className="h-full w-4/5 ml-auto font-kufi ps-12 pt-4 pb-80
    overflow-x-hidden overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
    >
      {projects.map(({ id, headLine, image, paragraph, contents }, projectIndex) => (
        <div
          key={id}
          // id={image}
          ref={(el) => projectRefs.current[id] = el} // Assign ref dynamically
        >
          <h1 className="text-3xl font-bold text-primary px-12 pb-2 pt-4">{headLine}</h1>
          <div className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto text-right">
            <div className="grid grid-cols-2 gap-0">
              {/* Alternate layout: even index => image first, odd index => text first */}
              {projectIndex % 2 === 0 ? (
                <>
                  <div className="relative">
                    <img src={smallTexture} alt="image" className="absolute top-12 right-[-50px]" />
                    <img src={images[image]} alt="image" className="" />
                  </div>
                  <div>
                    {paragraph.map((para, index) => (
                      <p key={index} className={`text-gray-700 leading-relaxed text-sm ${index === 1 && index === paragraph.length - 1 ? 'pt-8' : ''} pt-4 px-4`}>{para}</p>
                    ))}
                  </div>
                </>

              ) : (
                <>
                  <div>
                    {paragraph.map((para, index) => (
                      <p key={index} className={`text-gray-700 leading-relaxed text-sm ${index === 1 && index === paragraph.length - 1 ? '' : 'pb-8'} pt-4 px-4`}>{para}</p>
                    ))}
                  </div>
                  <div className="relative">
                    <img src={longTexture} alt="image" className="absolute top-12 left-0 -translate-x-[190px]" />
                    <img src={images[image]} alt="image" className="" />
                  </div>
                </>
              )}
              {
                contents.map(({ title, details, qrSection }, index) => (
                  <div key={index} className={`${index === 2 ? 'bg-secondary text-white' : 'text-gray-700'} rounded-br-2xl pb-3 px-4`}>
                    <h1 className={`text-lg font-bold py-4 ${index === 2 ? 'text-white' : 'text-secondary'}`}>{title}</h1>
                    {details && details.map((detail, index) => (
                      <p key={index} className="leading-relaxed text-sm">{detail}</p>
                    ))}
                    {qrSection && qrSection.map(({ paragraph, qrImage }, index) => (
                      <div key={index} className="">
                        {paragraph.map((para, i) => (
                          <p key={i} className="leading-relaxed text-sm">{para}</p>
                        ))}
                        <div className="flex flex-col items-center">
                          {qrImage && <img src={images[qrImage]} alt="image" />}
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      ))}
    </div>
  )
}

export default Projects