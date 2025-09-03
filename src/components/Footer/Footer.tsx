const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <>
      <div className="text-center mb-4 font-bold">
        {new Date().toLocaleString()} {isOpen ? "We're currently open!" : "We're currently closed!"}
      </div>
    </>
  );
};

export default Footer;
