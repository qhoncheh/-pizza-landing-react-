import Data from "./data";

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour < closeHour;

    return (
        <footer className="flex flex-col gap-8 p-4">
            {isOpen ? (
                <Data closeHour={closeHour} />
            ) : <p className="text-center"> We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>}
        </footer>
    )
};

export default Footer;
