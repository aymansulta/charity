

import closePopup from '../assets/closePopup.png';
import { documents } from "../data/data.js";
import PropTypes from "prop-types";


const Documents = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500/50 backdrop-blur-xs z-30"
            onClick={onClose}
            dir="rtl">
            <div className="bg-gray-200/90 pt-16 px-40 rounded-3xl shadow-lg relative overflow-x-hidden overflow-y-auto scrollbar-hide w-4xl max-h-400  flex flex-col items-center
            [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent"
                onClick={(e) => e.stopPropagation()}>
                <h1 className="text-3xl font-bold text-primary"> المستندات المطلوبة </h1>
                <div className="text-right mb-2">
                    {documents.map((doc, index) => (
                        <div key={index} className="p-4 px-8 rounded-xl shadow-lg bg-white my-4 w-3xl">
                            <h1 className="text-xl font-bold text-accent mb-4">{doc.title}</h1>
                            <ul>
                                {doc.items.map((items, index) => (
                                    <li key={index} className="flex gap-4 items-center ps-2 leading-relaxed">
                                        <span className="text-xl">•</span> {/* Bullet Icon */}
                                        <span>{items}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <button className="absolute top-4 right-4" onClick={onClose}>
                    <img src={closePopup} alt="closePopup" />
                </button>
            </div>
        </div>
    )
}

Documents.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default Documents