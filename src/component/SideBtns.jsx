import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { useState } from "react";
import CalculationPopup from "./CalculationPopup.jsx";
import Documents from "./Documents.jsx";



const SideBtns = ({ onSideButtonClick }) => {

    const [showPopupCalc, setShowPopupCalc] = useState(false);
    const [showPopupDoc, setShowPopupDoc] = useState(false);

    return (
        <div className="fixed top-1/3 left-0 flex flex-col z-20 gap-4 font-kufi text-center">
            <Link to="/donate" onClick={onSideButtonClick} className="text-white bg-primary rounded-r-full py-5 ps-4 pe-4 text-3xl"> تبرع الآن </Link>
            <button onClick={() => setShowPopupCalc(true)} className="text-white bg-secondary rounded-r-full py-6 ps-4 pe-4"> احسب زكاة مالك </button>
            <button onClick={() => setShowPopupDoc(true)} className="text-white bg-accent rounded-r-full py-3 ps-4 pe-4"> المستندات المطلوبة <br /> للمساعدة </button>

            {showPopupCalc && <CalculationPopup onClose={() => setShowPopupCalc(false)} />}
            {showPopupDoc && <Documents onClose={() => setShowPopupDoc(false)} />}
        </div>
    )
}




// Define prop types
SideBtns.propTypes = {
    onSideButtonClick: PropTypes.func.isRequired,
};




export default SideBtns