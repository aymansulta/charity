import BackButton from "../component/BackButton"
import Keypad from "../component/Keypad"
import NextButton from "../component/NextButton"
import bgPayment from '../assets/bgPayment.png'
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import Service from "../component/Service"


const EnterAmount = () => {

    const location = useLocation();
    const { phoneNumber, selectedService } = location.state;
    // const selectedService = location.state?.selectedService || " الخدمة غير محددة ";
    // const selectedPhoneNumber = location.state?.phoneNumber || " رقم الهاتف غير محدد ";

    const [amount, setAmount] = useState('');
    const [isNextClicked, setIsNextClicked] = useState(false);
    const [isBackClicked, setIsBackClicked] = useState(false);
    const navigate = useNavigate();

    const handleNextClick = () => {
        setIsNextClicked(true);
        setTimeout(() => {
            setIsNextClicked(false);
            navigate('/Confirm', { state: { phoneNumber, selectedService, amount: Number(amount) } });
        }, 200);
    }

    const handleBackClick = () => {
        setIsBackClicked(true);
        setTimeout(() => {
            setIsBackClicked(false);
            navigate(-1);
        }, 200);
    }

    const handleKeypadClick = (value) => {
        if (value === "bks") {
            setAmount((prevAmount) => prevAmount.slice(0, -1));
            return;
        }
        setAmount((prevAmount) => {
            if (prevAmount.length >= 6) {
                return prevAmount;
            }
            if (prevAmount === "" && value === 0) {
                return prevAmount;
            }
            return prevAmount + value;
        })
    }

    useEffect(() => {
        console.log('selectedService:', selectedService);
        console.log('phone number:', phoneNumber);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="h-full w-full font-kufi" dir="rtl">
            <img src={bgPayment} alt="bgPayment" className="absolute top-0 left-0 w-screen h-screen bg-center bg-no-repeat bg-cover z-[-10]" />

            <div className='flex flex-col justify-between h-full w-full p-12'>

                {/* selected service */}
                <Service
                    selectedService={selectedService} />

                {/* enter amount */}
                <Keypad
                    title=" برجاء إدخال المبلغ المراد التبرع به "
                    instructions="بعد إدخال المبلغ برجاء الضغط على ”التالي“ لاكمال العملية"
                    number={amount}
                    setNumber={setAmount}
                    onKeypadClick={handleKeypadClick}
                    suffix={" ج.م "}
                />

                {/* buttons */}
                <div className="flex justify-between w-full">
                    <NextButton
                        isClicked={isNextClicked}
                        isActive={amount.length >= 2}
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

export default EnterAmount