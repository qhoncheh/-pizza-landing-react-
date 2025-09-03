import Pizza from "../../Pizza"
import SectionTitle from "../custom/section-title"

const Menu = () => {
    return (
        <div>
            <SectionTitle className="text-slate-400"  text="Our Menu"/>
            <Pizza /> 
            <Pizza />
      </div>
  )
}

export default Menu