

import PropTypes from "prop-types";
import calcZakatQr from '../assets/calcZakatQr.png';
import closePopup from '../assets/closePopup.png';

const CalculationPopup = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/50 backdrop-blur-xs z-30 pb-40"
            onClick={onClose}>
            <div className="bg-gray-100/80 py-22 px-40 rounded-3xl shadow-lg relative"
                onClick={(e) => e.stopPropagation()}>
                <img src={calcZakatQr} alt="calcZakatQr" className="relative" />
                <button className="absolute top-4 right-4" onClick={onClose}>
                    <img src={closePopup} alt="closePopup" />
                </button>
            </div>
        </div>
    );
};

CalculationPopup.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default CalculationPopup