import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
    const navigate = useNavigate();
    const [showSideButtons, setShowSideButtons] = useState(true);
    const [showHomeOnly, setShowHomeOnly] = useState(false);

    const handleHomepageClick = () => {
        setShowSideButtons(true);
        setShowHomeOnly(false);
        navigate("/", { state: { selectedService: "", phoneNumber: "", amount: "" } });
      }

    return (
        <NavigationContext.Provider value={{ handleHomepageClick, showSideButtons, setShowSideButtons, showHomeOnly, setShowHomeOnly }}>
            {children}
        </NavigationContext.Provider>
    );
};

NavigationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// export const useNavigation = () => useContext(NavigationContext);



