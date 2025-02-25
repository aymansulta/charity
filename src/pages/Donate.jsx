
import bgPayment from '../assets/bgPayment.png'
import serviceButton from '../assets/serviceButton.png'
import serviceButtonActive from '../assets/serviceButtonActive.png'
import { services } from '../data/data.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Donate = () => {

  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const handleServiceClick = (index) => {
    setActiveIndex(index);

    setTimeout(() => {
      navigate('/EnterPhone', { state: { selectedService: services[index] } });
      setActiveIndex(null);
    }, 200);
  }
  return (
    <>
      <div className="h-full w-full font-kufi" dir="rtl">
        <img src={bgPayment} alt="bgPayment" className="absolute top-0 left-0 w-screen h-screen bg-center bg-no-repeat bg-cover z-[-10]" />
        <div className='flex flex-col justify-center items-center h-full w-full pb-40 gap-2'>
          <h1 className="text-2xl font-bold text-primary"> اختار نوع التبرع </h1>

          {/* services */}
          <div className='grid grid-cols-3 gap-4'>
            {services.map ((service, index) => (
              <button key={index}
              className='relative flex justify-center'
              onClick={() => handleServiceClick(index)}
              >
                <img src={activeIndex === index ? serviceButtonActive : serviceButton} alt="serviceButton" />
                <h1 className={`absolute pt-12 text-2xl px-12 leading-relaxed ${activeIndex === index ? 'text-white' : 'text-black'} transition duration-100`}>{service}</h1>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}

export default Donate