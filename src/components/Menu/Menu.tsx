import SectionTitle from "../custom/section-title"
import { pizzaData } from "./data"
import Pizza from "./Pizza"

const Menu = () => {
    return ( 
        <div>
            <SectionTitle className="text-slate-400" text="Our Menu" />
            <div className="grid grid-cols-3 gap-6 border-2 border-white p-4">
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
        </div>
  )
}

export default Menu