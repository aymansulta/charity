
import footer from "../assets/footer.png";
import geideaLogo from "../assets/geideaLogo.png";
import hotline from "../assets/hotline.png";
import footerLogo from "../assets/footerLogo.png";

const Footer = () => {
    return (
        <footer className="w-full text-white fixed bottom-0 left-0 z-10">
            <img src={footer} alt="footer" className="relative" />
            <div className="absolute flex justify-between items-center w-full bottom-2 px-8">
                <div className="space-y-2">
                    <h1 className="font-montserrat text-xs">powered by</h1>
                    <img src={geideaLogo} alt="geidea" className="" />
                </div>
                <div className="flex items-center gap-4">
                    <img src={hotline} alt="hotline" className="pt-4" />
                    <img src={footerLogo} alt="footerLogo" className="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer