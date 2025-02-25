import { NavLink } from "react-router-dom";
import homeIcon from '../assets/homeIcon.png';
import PropTypes from "prop-types";

const Nav = ({ showHomeOnly, onHomepageClick }) => {
    return (
        <nav className="font-kufi bg-primary fixed z-20 flex justify-between items-center w-full h-12 top-52 px-16 text-white font-normal" dir="rtl">
            {showHomeOnly ? (
                <div className="flex gap-2 items-center justify-end w-full" onClick={onHomepageClick}>
                    <button className="text-white text-xl"> الصفحة الرئيسية </button>
                    <img src={homeIcon} alt="homeIcon" className="" />
                </div>
            ) : (
                <>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-secondary" : ""}> عن البيت </NavLink>
                    <NavLink to="/rules" className={({ isActive }) => isActive ? "text-secondary" : ""}> قواعد الزكاة </NavLink>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "text-secondary" : ""}> برامج البيت </NavLink>
                    <NavLink to="/zakat" className={({ isActive }) => isActive ? "text-secondary" : ""}> فتاوي الزكاة و الصدقات </NavLink>
                </>

            )}

        </nav>
    )
}


// Define prop types
Nav.propTypes = {
    showHomeOnly: PropTypes.bool.isRequired,
    onHomepageClick: PropTypes.func.isRequired
};

export default Nav