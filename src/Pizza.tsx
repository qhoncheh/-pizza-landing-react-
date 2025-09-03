import SectionTitle from "./components/custom/section-title"
import type { prop } from "./types";

const Pizza = (props : prop) => {
    console.log("first", props);
    return (
        <div className="">
            <SectionTitle className="text-slate-400" text={props.name} />
            <img className="rounded-xl" src={props.pic} alt={props.name} />
            <p>{props.desc}</p>
            <p className="text-green-600 font-bold">{props.price}</p>
        </div>
    )
}

export default Pizza