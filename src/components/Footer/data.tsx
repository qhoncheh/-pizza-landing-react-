import type { DataProps } from "../../types"
import OrderBtn from "../custom/Buttons/order-btn"

const Data = ({ closeHour , openHour }: DataProps) => {
  return (
      <>
          <p className="text-center"> We're Open from {openHour}:00 to {closeHour}:00. Come Visit us or Order Online !</p>
          <div className="flex p-4 justify-center">
              <OrderBtn />
          </div>
    </>
  )
}

export default Data;