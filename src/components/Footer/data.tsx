import type { DataProps } from "../../types"
import OrderBtn from "../custom/Buttons/order-btn"

const Data = ({ closeHour }: DataProps) => {
  return (
      <div>
          <p className="text-center"> We're Open untill {closeHour}:00.  Come Visit us or Order Online !</p>
          <div className="flex p-4 justify-center">
              <OrderBtn />
          </div>
    </div>
  )
}

export default Data