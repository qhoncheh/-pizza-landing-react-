import OrderBtn from "../custom/Buttons/order-btn"
import SectionTitle from "../custom/Title/section-title"
import { pizzaData } from "./data"
import Pizza from "./Pizza"

const Menu = () => {
    return ( 
        <div className="px-6">
            <SectionTitle className="text-slate-400" text="Our Menu" />
            <div className="grid grid-cols-2 gap-4 border-4 border-dotted w-full rounded-lg border-white/10 p-6">
                {pizzaData.map((pizza, index) => (
                    <Pizza
                        key={index}
                        pic={pizza.pic}
                        name={pizza.name}
                        desc={pizza.desc}
                        price={pizza.price}
                    />
                ))}
            </div>
            <div className="p-8 w-1/6 mx-auto text-center">
                <OrderBtn />
            </div>
        </div>
  )
}

export default Menu;