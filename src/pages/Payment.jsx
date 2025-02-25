
import { useMutation } from "@tanstack/react-query"
import { useLocation } from "react-router-dom"
import bgPayment from '../assets/bgPayment.png'
import nfc from '../assets/nfc.png'
import pos1 from '../assets/pos1.png'
import pos2 from '../assets/pos2.png'
import vLine from '../assets/vLine.png'
import creditCards from '../assets/creditCards.png'
import { useEffect } from "react"
import { useNavigation } from "../hook/useNavigation";


const saveTransaction = async (transactionData) => {
    const response = await fetch("http://localhost:5000/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionData),
    });

    if (!response.ok) {
        throw new Error("Failed to save transaction.");
    }

    return response.json();
};

const Payment = () => {

    const location = useLocation();
    const { phoneNumber, selectedService, amount } = location.state;
    const { handleHomepageClick } = useNavigation(); //  Get function from context
    // const navigate = useNavigate();


    useEffect(() => {
        console.log('selectedService:', selectedService, `(${typeof selectedService})`);
        console.log('phoneNumber:', phoneNumber, `(${typeof phoneNumber})`);
        console.log('amount:', amount, `(${typeof amount})`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const mutation = useMutation({
        mutationFn: saveTransaction,
        onSuccess: () => {
            console.log("Transaction saved successfully!");
            alert("تم حفظ المعاملة بنجاح!");
            handleHomepageClick(); //  Navigate home after saving
        },
        onError: (error) => {
            console.error("Error:", error);
            alert("فشل في حفظ المعاملة. حاول مرة أخرى!");
        },
    });

    return (
        <div className="h-full w-full font-kufi" dir="rtl">
            <img src={bgPayment} alt="bgPayment" className="absolute top-0 left-0 w-screen h-screen bg-center bg-no-repeat bg-cover z-[-10]" />

            <div className='flex flex-col justify-between items-center h-full w-full p-12'>

                {/* instructions */}
                <div className='w-full text-center space-y-4'>
                    <h1 className='text-3xl font-bold text-primary leading-relaxed'> برجاء إدخال البطاقة الائتمانية فى ماكينة الدفع </h1>
                    <h1 className='text-3xl font-bold text-primary flex gap-2 justify-center leading-relaxed items-center'> أو ضع البطاقة على علامة <span className=''><img src={nfc} alt="nfc" className='pe-4' /></span> للدفع بدون تلامس </h1>
                </div>

                {/* pos */}
                <div className='flex gap-8 justify-center items-center pb-40'>
                    <img src={pos1} alt='pos1' className='pe-25 pt-20' />
                    <img src={vLine} alt='pos1' />
                    <img src={pos2} alt='pos2' />
                </div>

                {/* Loading & Error messages */}
                {mutation.isPending && <p className="text-center text-gray-500 absolute bottom-100">جارٍ حفظ المعاملة...</p>}
                {mutation.isError && <p className="text-center text-red-500 absolute bottom-100">حدث خطأ أثناء حفظ المعاملة.</p>}

                {/* credit cards */}
                <div className='border-2 border-accent rounded-lg p-6 space-y-4'
                    onClick={() => mutation.mutate(
                        {
                            id: Date.now(), // Generate a unique ID
                            selectedService,
                            phoneNumber,
                            amount
                        })}
                    disabled={mutation.isPending} // Disable button while loading
                >
                    <h1 className='text-2xl text-secondary text-center font-bold'> البطاقات المقبولة من ماكينة الدفع </h1>
                    <img src={creditCards} alt='creditcCards' />
                </div>
            </div>
        </div>

    )
}

export default Payment