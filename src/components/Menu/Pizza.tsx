import type { PizzaProp } from "../../types"
import PlusBtn from "../custom/Buttons/PlusBtn";

const Pizza = ({ pic, name, desc, price, soldOut }: PizzaProp) => {
    return (
        <div
            className={`flex flex-row gap-8 w-[700px] h-[280px] p-4 shadow-md rounded-lg bg-white/5 backdrop-filter backdrop-blur-md border border-white/10 text-white
            ${soldOut ? "opacity-50 grayscale cursor-not-allowed pointer-events-none" : ""}`}
        >
            <img
                className="rounded-lg cursor-pointer text-gray-300 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                src={pic}
                width={400}
                alt={name}
                height={400}
            />
            <div className="flex flex-col gap-4 mt-auto">
                <span className="text-xl text-[#D2B57A] font-semibold cursor-pointer">{name}</span>
                <span className="text-xs text-gray-300">{desc}</span>
                {!soldOut && <PlusBtn />}
                <span className={`font-bold ${soldOut ? "text-gray-400" : "text-green-400 cursor-zoom-in"}`}>
                    {soldOut ? "SOLD OUT" : price}
                </span>
            </div>
        </div>
    );
};

export default Pizza;
