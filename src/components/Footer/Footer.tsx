const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;

    if ( hour >= openHour && closeHour) alert("we are currently open")

  return (
      <div>{new Date().toLocaleString()}We're currently open !</div>
  )
}

export default Footer;