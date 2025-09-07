import OrderBtn from "../custom/Buttons/order-btn";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="flex flex-col gap-8 p-4">
      {isOpen ? (
        <>
          <p className="text-center"> We're Open untill {closeHour}:00.  Come Visit us or Order Online !</p>
          <div className="flex mb-6 justify-center">
            <OrderBtn />
          </div>
        </>
      ) : <p className="text-center"> We're happy to welcome you between {openHour}:00 and {closeHour}:00 </p>}
    </footer>
  )
};

export default Footer;
