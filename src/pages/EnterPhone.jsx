import { useLocation } from "react-router-dom"
import bgPayment from '../assets/bgPayment.png'
// import serviceFrame from '../assets/serviceFrame.png'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Keypad from "../component/Keypad"
import NextButton from "../component/NextButton"
import BackButton from "../component/BackButton"
import Service from "../component/Service";



export const EnterPhone = () => {

    const location = useLocation();
    const selectedService = location.state?.selectedService || " الخدمة غير محددة ";

    const [phoneNumber, setPhoneNumber] = useState('');
    const [isNextClicked, setIsNextClicked] = useState(false);
    const [isBackClicked, setIsBackClicked] = useState(false);
    const navigate = useNavigate();

    const handleNextClick = () => {
        setIsNextClicked(true);
        setTimeout(() => {
            setIsNextClicked(false);
            navigate('/EnterAmount', { state: { phoneNumber, selectedService } });
        }, 200);
    };

    const handleBackClick = () => {
        setIsBackClicked(true);
        setTimeout(() => {
            setIsBackClicked(false);
            navigate(-1);
        }, 200);
    }

    const handleKeypadClick = (value) => {
        // Handle keypad button click
        if (value === "bks") {
            setPhoneNumber((prevPhoneNumber) => prevPhoneNumber.slice(0, -1));
            return;
        }
        setPhoneNumber((prevPhoneNumber) => {
            const newNumber = prevPhoneNumber + value;
            if (newNumber.length > 11) {
                return prevPhoneNumber;
            }
            // if (!newNumber.startsWith("0")) {
            //     return prevPhoneNumber;
            // }
            // console.log('Keypad button clicked:', newNumber);
            return newNumber;
        })
    };

    useEffect(() => {
        console.log('selectedService:', selectedService);
    }, [selectedService])

    return (
        <div className="h-full w-full font-kufi" dir="rtl">
            <img src={bgPayment} alt="bgPayment" className="absolute top-0 left-0 w-screen h-screen bg-center bg-no-repeat bg-cover z-[-10]" />

            <div className='flex flex-col justify-between h-full w-full p-12'>

                {/* selected service */}
                <Service
                selectedService={selectedService} />

                {/* enter phone */}
                <Keypad
                    title="برجاء إدخال رقم تليفونك"
                    instructions="بعد إدخال رقم التليفون برجاء الضغط على ”التالي“ لاكمال العملية"
                    number={phoneNumber}
                    setNumber={setPhoneNumber}
                    onKeypadClick={handleKeypadClick}
                />

                {/* buttons */}
                <div className="flex justify-between w-full">
                    <NextButton
                        isClicked={isNextClicked}
                        isActive={phoneNumber.length === 11}
                        onClick={handleNextClick}
                        label={"التالي"}
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
