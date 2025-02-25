import { Outlet, useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./Footer"
import Header from "./Header"
import SideBtns from "./SideBtns"
// import { useState } from "react"
import { useNavigation } from "../hook/useNavigation"

const Layout = () => {

  const { showSideButtons, setShowSideButtons, showHomeOnly, setShowHomeOnly } = useNavigation();

  // const [showSideButtons, setShowSideButtons] = useState(true);
  // const [showHomeOnly, setShowHomeOnly] = useState(false);
  const navigate = useNavigate();

  const handleSideButtonClick = () => {
    setShowSideButtons(false);
    setShowHomeOnly(true);
  }

  const handleHomepageClick = () => {
    setShowSideButtons(true);
    setShowHomeOnly(false);
    navigate("/", { state: { selectedService: "", phoneNumber: "", amount: "" } });
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center overflow-hidden">

      {/* header */}
      <header className="fixed top-0 left-0 z-20">
        <div>
          <Header onHomepageClick={handleHomepageClick} />
        </div>
        <div className="w-full">
          <Nav showHomeOnly={showHomeOnly} onHomepageClick={handleHomepageClick} />
        </div>
      </header>

      {/* side buttons */}
      {showSideButtons && <SideBtns onSideButtonClick={handleSideButtonClick} />}

      {/* main */}
      <main className="flex-1 w-full overflow-y-auto mt-50 mb-8 pt-16 pb-16">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Layout