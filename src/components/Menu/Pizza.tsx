import SectionTitle from "../custom/section-title"
import type { prop } from "../../types";

const Pizza = (props : prop) => {
    console.log("first", props);
    return (
        <div>
            <SectionTitle className="text-slate-400" text={props.name} />
            <div className="flex flex-col gap-2">
            <img className="rounded-xl w-1/5" src={props.pic} alt={props.name} />
            <p className="text-xs">{props.desc}</p>
            <p className="text-green-600 font-bold">{props.price}</p>   
            </div>
        </div>
    )
}

export default Pizza