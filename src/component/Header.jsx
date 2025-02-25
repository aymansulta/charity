import header from '../assets/header.png';
import logoText from '../assets/logoText.png';
import zakatLogo from '../assets/zakatLogo.png';
import PropTypes from "prop-types";

const Header = ({ onHomepageClick }) => {
    return (
        <header className="fixed top-0 left-0 z-10" onClick={onHomepageClick}>
            <img src={header} alt="header" className="relative" />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <img src={logoText} alt="logoText" />
            </div>
            <img src={zakatLogo} alt='zakatLogo' className='absolute right-4 bottom-0' />
        </header>
    )
}

// Define prop types
Header.propTypes = {
    onHomepageClick: PropTypes.func.isRequired
};

export default Header