import SectionTitle from "../custom/section-title"
import Pizza from "./Pizza"

const Menu = () => {
    return ( 
        <div>
            <SectionTitle className="text-slate-400" text="Our Menu" />
            <div className="grid grid-cols-3 gap-6 p-4">
                <Pizza pic="/pizzas/focaccia.jpg" name="Pizza 1" desc="Description 1" price="$10" />
                <Pizza pic="/pizzas/funghi.jpg" name="Pizza 2" desc="Description 2" price="$12" />
                <Pizza pic="/pizzas/margherita.jpg" name="Pizza 3" desc="Description 3" price="$11" />
                <Pizza pic="/pizzas/prosciutto.jpg" name="Pizza 4" desc="Description 4" price="$13" />
                <Pizza pic="/pizzas/salamino.jpg" name="Pizza 5" desc="Description 5" price="$9" />
                <Pizza pic="/pizzas/spinaci.jpg" name="Pizza 6" desc="Description 6" price="$14" />
            </div>
        </div>
         
  )
}

export default Menu