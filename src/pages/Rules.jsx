
import { definitionOfZakat } from "../data/data"
import { conditionOfZakat } from "../data/data";
import { kindsOfZakat } from "../data/data";
import rule1 from '../assets/content/rule1.png';
import rule2 from '../assets/content/rule2.png';
import rule3 from '../assets/content/rule3.png';
import rule4 from '../assets/content/rule4.png';
import rule5 from '../assets/content/rule5.png';
import rule6 from '../assets/content/rule6.jpg';
import rule7 from '../assets/content/rule7.jpg';
import ruleQr from '../assets/content/ruleQr.png';
import zakatBook from '../assets/content/zakatBook.png';

const imageMap = {
  rule1,
  rule2,
  rule3,
  rule4,
  rule5,
  rule6,
  rule7,
};
const Rules = () => {
  return (
    <div dir="rtl"
      className="h-full w-4/5 ml-auto font-kufi ps-12 pt-4 pb-80
    overflow-x-hidden overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
    >
      {/* Definition of Zakat */}
      <h1 className="text-3xl font-bold text-primary ps-12 pb-4"> تعريف الزكاة ومنزلتها ومشروعيتها </h1>
      {definitionOfZakat.map(({ id, image, title, paragraph, subtitle }) => (
        <div key={id} className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto pb-4 text-right">
          <img src={imageMap[image]} alt="image" className="rounded-t-2xl object-cover w-full " />
          <div className="px-8">
            <h1 className="text-lg font-bold text-secondary py-4">{title}</h1>
            {paragraph.map((para, index) => (
              <p key={index} className="leading-relaxed text-gray-700 text-right text-lg">{para}</p>
            ))}
            {subtitle && (
              <ol className="list-decimal grid grid-cols-2 gap-8 pt-4">
                {
                  subtitle.map(({ id, head, items }, index) => (
                    <div key={id} className={`${index === 0 ? 'col-start-1 row-span-2' : 'col-start-2'}`}>
                      <div className="">
                        <li className="text-primary font-bold text-lg">
                          {head}
                        </li>
                        <ul>
                          {
                            items.map((item, index) => (
                              <div key={index} className="flex gap-4 items-start">
                                <span className="text-xl pt-1">•</span> {/* Bullet Icon */}
                                <li className="leading-relaxed text-gray-700 text-right text-lg">{item}</li>
                              </div>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  ))}
              </ol>
            )}
          </div>
        </div>
      ))
      }

      {/* Condition of Zakat */}
      <h1 className="text-3xl font-bold text-primary ps-12 py-4"> شروط الزكاة </h1>
      <div className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto pb-4">
        {conditionOfZakat.map(({ id, title, paragraph, subtitle, items, paragraph2 }) => (
          <div key={id} className="px-8">
            <h1 className="text-secondary py-1 flex items-center pt-8 font-bold text-lg">{title}</h1>
            <p className="text-gray-700   flex items-start">{paragraph}</p>
            {subtitle && (
              <div className=" ">
                <h1 className="text-primary py-1 font-bold">{subtitle}</h1>
                <div className="flex items-center">
                  <ol className="list-decimal px-8">
                    {items && items.map((item, index) => (
                      <div key={index}>
                        <li className="text-gray-700 py-1 ">{item}</li>
                      </div>
                    ))}
                  </ol>
                </div>
              </div>
            )}
            {paragraph2 && (
              <p className="text-gray-700 py-1 flex items-start gap-2">{paragraph2}</p>
            )}
          </div>
        ))}
      </div>

      {/* Kinds of Zakat */}
      <h1 className="text-3xl font-bold text-primary ps-12 pb-4"> أصناف الزكاة </h1>
      {kindsOfZakat.map(({ id, image, title, items, paragraph, paragraph2, subtitle }) => (
        <div key={id} className="shadow-md rounded-2xl my-4 mx-auto max-w-3xl h-auto pb-4 text-right">
          {image && <img src={imageMap[image]} alt="image" className="rounded-t-2xl object-cover w-full " />}
          <div className="px-8">
            <h1 className="text-lg font-bold text-secondary py-4">{title}</h1>
            {paragraph && paragraph.map((parag, index) => (
              <p key={index} className="leading-relaxed text-gray-700">{parag}</p>
            ))}
            <ol className="list-decimal ps-8">
              {items && items.map((item, index) => (
                <li key={index} className="leading-relaxed text-gray-700">{item}</li>
              ))}
            </ol>
            {paragraph2 && paragraph2.map((parag2, index) => (
              <p key={index} className="leading-relaxed text-gray-700">{parag2}</p>
            ))}
            {subtitle && subtitle.map(({ head, par, highlight, par2 }, index) => (
              <div key={index} className="leading-relaxed text-gray-700">
                <h1 className="text-lg font-bold text-primary pt-4">{head}</h1>
                {par && par.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
                {highlight && highlight.map((h, index) => {
                  const words = h.split(' ');
                  const firstTwoWords = words.slice(0, 2).join(' '); // First 2 words
                  const restOfText = words.slice(2).join(' '); // Remaining words

                  return (
                    <p key={index}>
                      <strong>{firstTwoWords}</strong> {restOfText}
                    </p>
                  );
                })}
                {par2 && par2.map((p2, index) => (
                  <p key={index}>{p2}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* QR Code */}
      <div className="px-12 py-8 w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-primary "> تحميل كتيب الزكاة </h1>
        <img src={zakatBook} alt="zakatBook" />
        <img src={ruleQr} alt="ruleQr" />
      </div>
    </div >
  )
}

export default Rules