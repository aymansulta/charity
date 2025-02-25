
import PropTypes from "prop-types";
import navigateNextAccent from '../assets/navigateNextAccent.png'
import navigateNextWhite from '../assets/navigateNextWhite.png'

const NextButton = ( { isActive, isClicked, onClick, label}) => {
    return (
        <button className={`w-74 h-24 border-2 rounded-lg text-3xl font-bold relative flex justify-end items-center pe-8 pb-1 transition duration-100
                                ${isClicked ? "bg-accent text-white" : isActive ? "bg-white text-accent" : "bg-gray-200 text-white border-white"}`}
            disabled={!isActive}
            onClick={onClick}>
            <img src={isClicked ? navigateNextWhite : isActive ? navigateNextAccent : navigateNextWhite} alt="nextIcon" className="absolute right-4 top-1/2 transform -translate-y-1/2" />
            {label}
        </button>
    )
}

NextButton.propTypes = {
    isActive: PropTypes.string.isRequired,
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default NextButton