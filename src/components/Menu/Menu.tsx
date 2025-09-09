import SectionTitle from "../custom/Title/section-title"
import { pizzaData } from "./data"
import Pizza from "./Pizza"

const Menu = () => {
    const numPizzas = pizzaData.length;
    return ( 
        <main className="px-6">
            <SectionTitle className="text-slate-400" text="Our Menu" />
            {numPizzas > 0 ? (
            <ul className="grid grid-cols-2 gap-4 border-4 border-dotted w-full rounded-lg border-white/10 p-6"> 
                {pizzaData.map((pizza, index) => (
                    <Pizza
                        key={index}
                        pic={pizza.pic}
                        name={pizza.name}
                        desc={pizza.desc}
                        price={pizza.price}
                        soldOut={pizza.soldOut}
                    />
                ))}
            </ul>
                ) : (
                 <p> We 're still working on our menu.Please come back later : </p>
                )} 
            </main>
  )}

export default Menu 