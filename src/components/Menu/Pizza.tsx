import type { PizzaProp } from "../../types"

const Pizza = (props: PizzaProp) => {
    return (
        <div className="flex flex-col gap-8  w-[300px] h-[380px] p-2  shadow-md rounded-lg">
            <img className="rounded-xl w-full h-[120px] object-cover" src={props.pic} alt={props.name} />
            <p className="text-xs text-gray-700">{props.desc}</p>
            <p className="text-green-600 font-bold">{props.price}</p>
        </div>
    );
};

export default Pizza;
