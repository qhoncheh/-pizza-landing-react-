import type { PizzaProp } from "../../types"
import PlusBtn from "../custom/Buttons/PlusBtn";

const Pizza = ({ pic, name, desc, price, soldOut }: PizzaProp) => {
    if (soldOut) return null;

    return (
        <div className="flex flex-row gap-8 w-[700px] h-[280px] p-4 shadow-md rounded-lg 
            bg-white/5 backdrop-filter backdrop-blur-md border border-white/10 text-white">
            <img
                className="rounded-lg cursor-pointer text-gray-300 object-cover hover:grayscale transition duration-300 ease-in-out"
                src={pic}
                width={400}
                alt={name}
                height={400}
            />
            <div className="flex flex-col gap-4 mt-auto">
                <span className="text-lg text-[#D2B57A] font-semibold cursor-pointer">{name}</span>
                <span className="text-xs text-gray-300">{desc}</span>
                <PlusBtn />
                <span className="text-green-400 font-bold">{soldOut ? "SOLD OUT" : price}</span>
            </div>
        </div>
    );
};

export default Pizza;
