import Pizza from "./Pizza"

const Menu = () => {
    return (
        <div>
            {/* <SectionTitle className="text-slate-400" text="Our Menu"/> */}
            <Pizza
                name="Pizza Margaritta"
                desc="Tomato, mozarella, ham, aragula, and burrata cheese"
                price="200 $"
                pic="/public/pizzas/focaccia.jpg"
            /> 
      </div>
  )
}

export default Menu