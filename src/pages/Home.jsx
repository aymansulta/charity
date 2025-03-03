
import { homeMain, homeContent } from '../data/data';
import { useNavigate } from 'react-router-dom';
import homeMainImage from '../assets/content/homeMainImage.png';
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

const imageMap = {
  homeMainImage, project1, project2, project3, project4, project5, project6, project7, project8, project9, project10,
}
const Home = () => {

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`/projects?projectId=${id}`);
  };

  return (
    <div dir="rtl"
      className="h-full w-4/5 ml-auto font-kufi ps-12 pt-4 pb-80
    overflow-x-hidden overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
    >
      {/* Main */}
      <div className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto pb-4 text-right bg-secondary">
        {homeMain.map(({ image, paragraph }, index) => (
          <div key={index}>
            <img src={imageMap[image]} alt="image" className="rounded-t-2xl object-cover w-full " />
            <div className="px-4">
              {paragraph.map((para, index) => (
                <p key={index} className={`leading-relaxed text-white ${index > 0 && 'pt-2 font-semibold'}`}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* programs */}
      <h1 className="text-3xl font-bold text-primary py-4 text-center">برامجنا</h1>
      <div className='grid grid-cols-2 gap-4 my-4 mx-auto max-w-3xl h-auto pb-4 text-right'>
        {homeContent.map(({ id, image, title, paragraph, subtitle, button }) => (
          <div key={id} className="shadow-md rounded-2xl pb-4 flex flex-col">
            <img src={imageMap[image]} alt="image" className="rounded-t-2xl object-cover w-full " />
            <div className="px-4 flex flex-col flex-1 justify-between">
              <div className='flex-1'>
                <h1 className="text-lg text-accent py-4">{title}</h1>
                <p className="leading-relaxed text-gray-700 text-sm">{paragraph}</p>
              </div>
              <div className='mt-auto'>
                <h1 className="text-sm text-secondary py-4 text-center">{subtitle}</h1>
                <div className='flex justify-end w-full'>
                  <button
                    className='text-white bg-secondary px-12 py-1 rounded-full text-sm'
                    onClick={() => handleButtonClick(id)} // Pass the project ID to navigate
                  >{button}</button>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Home