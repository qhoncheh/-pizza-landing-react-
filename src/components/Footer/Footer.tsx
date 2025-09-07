import OrderBtn from "../custom/Buttons/order-btn";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    isOpen && (
    <div className="flex flex-col gap-8 p-4">
      <p className="text-center"> We are Open untill {closeHour}:00.  Come Visit us or Order Online !</p>
      <div className="flex mb-6 justify-center">
        <OrderBtn />
      </div>
    </div>
  ))
};

export default Footer;
