import { useState } from "react";
import { fatawazakat } from "../data/data"
import fatawaZakatQr from '../assets/content/fatawaZakatQr.png'

const FatawaZakat = () => {

  const [activeTd, setActiveTd] = useState(1);

  const toggleFatawa = (id) => {
    setActiveTd((prevID) => (prevID === id ? null : id));
  }
  return (
    <div dir="rtl"
      className="h-full w-4/5 ml-auto font-kufi ps-12 pt-4 pb-80
    overflow-x-hidden overflow-y-auto scrollbar-hide [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
    >
      <h1 className="text-3xl font-bold text-primary ps-12 pb-4"> فتاوي الزكاة والصدقات </h1>
      {fatawazakat.map(({ id, question, answer }) => (
        <div key={id} className="shadow-md rounded-lg px-12 my-2 py-2 mx-auto max-w-3xl">
          <button
            onClick={() => toggleFatawa(id)}
            className="text-lg text-accent py-2 w-full text-right"
          >
            {question}
          </button>
          {activeTd === id && (
            <div className="leading-relaxed py-4 text-gray-700">
              <span className="font-bold text-gray-800">
                {answer.split(" ")[0]} {/* First word */}
              </span>
              {" "}{answer.split(" ").slice(1).join(" ")} {/* Remaining text */}
            </div>
          )}
        </div>
      ))}

      {/* QR Code */}
      <div className="px-12 py-8 w-full flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-primary "> للمزيد من الفتاوي حول الزكاة من خلال الرابط التالي </h1>
        <img src={fatawaZakatQr} alt="fatawaZakatQr" />
      </div>
    </div>
  )
}

export default FatawaZakat