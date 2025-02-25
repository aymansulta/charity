
import PropTypes from "prop-types";
import { useState } from 'react';
import backspaceIcon from '../assets/backspaceIcon.png'
import backspaceIconAccent from '../assets/backspaceIconAccent.png'
import deleteIcon from '../assets/deleteIcon.png'
import deleteIconInActive from '../assets/deleteIconInActive.png'

const Keypad = ({ title, instructions, number, setNumber, onKeypadClick, suffix }) => {

    const [showKeyPad, setShowKeyPad] = useState(null);

    const handleKeypadClick = (value) => {
        // Handle keypad button click
        setShowKeyPad(value);
        setTimeout(() => setShowKeyPad(null), 100); // Reset
        onKeypadClick(value);
    };

    return (
        <div className="flex items-center h-full w-full pb-30 gap-2">
            <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold text-accent mb-4">{title}</h1>

                {/* Input Field */}
                <div className="relative w-140">
                    <input
                        dir="ltr"
                        type="text"
                        value={number}
                        readOnly
                        className={`border-2 border-accent rounded-lg h-20 w-full text-5xl text-accent font-bold bg-white tracking-wider ${suffix ? "ps-50" : "ps-4"}`}
                    />
                    <img src={number ? deleteIcon : deleteIconInActive} alt="deleteIcon" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={() => number && setNumber('')} />
                    {suffix && <span className="absolute left-15 top-1/2 transform -translate-y-1/2 text-4xl text-accent font-bold">{suffix}</span>}
                </div>


                {/* keypad */}
                <div className="grid grid-cols-3 gap-1">
                    {[3, 2, 1, 6, 5, 4, 9, 8, 7, "bks", 0].map((key, index) => {
                        return (
                            <button key={index}
                                className={`border-2 rounded-lg h-32 w-46 text-6xl font-bold flex justify-end items-center pe-2 pb-5 text-accent shadow-md transition duration-100  ${key === "bks" ?
                                    (showKeyPad === "bks" ? "bg-accent text-white" : number ? "bg-white border-accent" : "bg-gray-300 border-white")
                                    : showKeyPad === key ? "bg-accent text-white" : "bg-white text-accent"
                                    }`}
                                onClick={() => { if (key !== "bks" || number.length > 0) handleKeypadClick(key) }}
                            >
                                {key === "bks" ? (
                                    <img src={number.length > 0 ? backspaceIconAccent : backspaceIcon} alt="backspaceIcon" />
                                ) : key}
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* enter phone text */}
            <div className="flex-1 px-10">
                <h1 className="text-3xl text-gray-500 leading-relaxed">{instructions}</h1>
            </div>
        </div>
    )
}

// Define prop types
Keypad.propTypes = {
    title: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    setNumber: PropTypes.func.isRequired,
    onKeypadClick: PropTypes.func.isRequired,
    suffix: PropTypes.string.isRequired
}

export default Keypad