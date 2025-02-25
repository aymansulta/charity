import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import bgPayment from '../assets/bgPayment.png'
import Service from "../component/Service";
import NextButton from "../component/NextButton";
import BackButton from "../component/BackButton";
import hLine from '../assets/hLine.png';
import { instructions } from "../data/data";


const Confirm = () => {

    const location = useLocation();
    const { phoneNumber, selectedService, amount } = location.state;

    const navigate = useNavigate();
    const [isNextClicked, setIsNextClicked] = useState(false);
    const [isBackClicked, setIsBackClicked] = useState(false);

    const handleNextClick = () => {
        setIsNextClicked(true);
        setTimeout(() => {
            setIsNextClicked(false);
            navigate('/Payment', { state: { phoneNumber, selectedService, amount } });
        }, 200);
    }

    const handleBackClick = () => {
        setIsBackClicked(true);
        setTimeout(() => {
            setIsBackClicked(false);
            navigate(-1);
        }, 200);
    }

    useEffect(() => {
        console.log('selectedService:', selectedService, `(${typeof selectedService})`);
        console.log('phoneNumber:', phoneNumber, `(${typeof phoneNumber})`);
        console.log('amount:', amount, `(${typeof amount})`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-full w-full font-kufi" dir="rtl">
            <img src={bgPayment} alt="bgPayment" className="absolute top-0 left-0 w-screen h-screen bg-center bg-no-repeat bg-cover z-[-10]" />

            <div className='flex flex-col justify-between items-center h-full w-full p-12'>

                {/* selected service */}
                <Service
                    selectedService={selectedService} />

                {/* horizontal line */}
                <img src={hLine} alt="hLine" />

                {/* information block */}
                <div className="flex flex-col items-center gap-4 border-2 border-accent rounded-lg px-10 py-2">
                    <h1 className="text-2xl leading-relaxed flex gap-4"> رقم تليفون المتبرع <span className="font-bold text-secondary pt-1">{phoneNumber}</span></h1>
                    <h1 className="text-2xl leading-relaxed flex gap-4"> تبرع بقيمة <span className="font-bold text-secondary pt-1">{amount}</span> ج.م </h1>
                </div>

                {/* horizontal line */}
                <img src={hLine} alt="hLine" />

                {/* instructions block */}
                <div className="flex flex-col items-center gap-4 border-2 border-accent rounded-lg px-10 py-2 mb-60">
                    <h1 className="text-3xl leading-relaxed font-bold text-secondary"> تعليمات عملية الدفع </h1>
                    <ul>
                        {instructions.map((instruction, index) => (
                            <li key={index} className="text-xl text-right flex gap-4 items-center">
                                <span className="text-accent text-4xl">•</span> {/* Bullet Icon */}
                                <span>{instruction}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* buttons */}
                <div className="flex justify-between w-full">
                    <NextButton
                        isClicked={isNextClicked}
                        isActive={phoneNumber && selectedService && amount}
                        onClick={handleNextClick}
                        label={"اوافق"}
                    />

                    <BackButton
                        isClicked={isBackClicked}
                        onClick={handleBackClick}
                        label={"رجوع"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Confirm