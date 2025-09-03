import type { PizzaProp } from "../../types"

const Pizza = ({ pic, name, desc, price }: PizzaProp) => {
    return (
        <div className="flex flex-col gap-8 w-[300px] h-[380px] p-4 shadow-md rounded-lg 
            backdrop-filter backdrop-blur-sm border border-white/10 text-white">
            <img className="rounded-lg w-full h-[200px] text-gray-300 object-cover" src={pic} alt={name} />
            <p className="text-xs text-gray-300">{name}</p>
            <p className="text-xs text-gray-300">{desc}</p>
            <p className="text-green-400 font-bold">{price}</p>
        </div>

    );
};

export default Pizza;
