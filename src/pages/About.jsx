import { overview } from "../data/data"
import { boardOfTrustees } from "../data/data";
import { duties } from "../data/data";
import about1 from '../assets/content/about1.png';
import about2 from '../assets/content/about2.png';
import about3 from '../assets/content/about3.png';
import about4 from '../assets/content/about4.png';
import crescent from '../assets/content/crescent.png';
import aboutQr from '../assets/content/aboutQr.png';

const imageMap = {
  about1,
  about2,
  about3,
  about4,
};

const iconMap = {
  crescent,
};

const About = () => {
  return (
    <div dir="rtl"
      className="h-full w-4/5 ml-auto font-kufi ps-12 pt-4 pb-80
    overflow-x-hidden overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
    >
      {/* Overview */}
      <h1 className="text-3xl font-bold text-primary ps-12 pb-4"> نبذه تعريفية </h1>
      {overview.map(({ id, image, paragraph, icon, title, subtitle }) => (
        <div key={id} className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto">
          <img src={imageMap[image]} alt="image" className="rounded-t-2xl object-cover w-full " />
          <div className="flex  justify-center gap-0">
            <div>
              {icon && <img src={iconMap[icon]} alt="icon" className="pt-3 ps-8" />}
            </div>
            <div className={`flex-1 py-4 ${icon ? 'ps-2 pe-8' : 'px-8'}`}>
              {paragraph.map((para, index) => (
                <p key={index} className="leading-relaxed text-gray-700 text-right text-lg">{para}</p>
              ))}
              {title && subtitle && (
                <div className=" py-4 pe-8">
                  <h1 className="text-lg font-bold text-gray-700">{title}</h1>
                  <h1 className="text-lg font-bold text-gray-700">{subtitle}</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Board of Trustees */}
      <h1 className="text-3xl font-bold text-primary ps-12 py-4"> مجلس الأمناء </h1>
      <div className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto pb-4">
        <h1 className="text-lg  text-accent ps-4 py-4">أعضاء مجلس الأمناء وفقاً للترتيب الأبجدي</h1>
        {boardOfTrustees.map((board, index) => (
          <h1 key={index} className="text-gray-700 ps-8 py-1 flex items-center gap-2"><span className="inline-block w-2 h-2 bg-secondary"></span>{board}</h1>
        ))}
      </div>

      {/* Duties */}
      <div className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto pb-4">
        <h1 className="text-lg  text-accent ps-4 py-4"> اختصاصات مجلس الأمناء </h1>
        {duties.map(({ paragraph, items }, index) => (
          <div key={index}>
            <p className="text-gray-700 px-8 py-1 flex items-start gap-2"><img src={crescent} alt="crescent" />{paragraph}</p>
            <ol className="list-decimal text-gray-700 px-24 py-1 ">
              {items.map((item, i) => (
                <li key={i} className="ps-1">{item}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {/* QR Code */}
      <div className="px-12 py-8 w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-primary "> قرار انشاء البيت </h1>
        <img src={aboutQr} alt="aboutQr" />
      </div>
    </div>
  )
}

export default About