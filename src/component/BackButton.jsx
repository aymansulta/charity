
import PropTypes from "prop-types";
import navigateBackAccent from '../assets/navigateBackAccent.png'
import navigateBackWhite from '../assets/navigateBackWhite.png'

const BackButton = ( { isClicked, onClick, label } ) => {
    return (
        <button className={`w-74 h-24 border-2 border-accent rounded-lg text-3xl font-bold relative flex items-center ps-8 pb-4 transition duration-100
                            ${isClicked ? "bg-accent text-white" : "bg-white text-accent"}`}
            onClick={onClick}>
            {label}
            <img src={isClicked ? navigateBackWhite : navigateBackAccent} alt="nextIcon" className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        </button>
    )
}

BackButton.propTypes = {
    isClicked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default BackButton