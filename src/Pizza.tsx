import SectionTitle from "./components/custom/section-title"

const Pizza = () => {
    return (
        <div>
            <img src="/public/pizzas/focaccia.jpg" alt="pizza" />
            <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
            <SectionTitle className="text-slate-400" text="Pizza"/>
      </div>

  )
}

export default Pizza