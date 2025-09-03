import type { PizzaProp } from "../../types"

const Pizza = ({ pic, name, desc, price }: PizzaProp) => {
    return (
        <div className="flex flex-row gap-8 w-[700px] h-[280px] p-4 shadow-md rounded-lg 
    bg-white/5 backdrop-filter backdrop-blur-md border border-white/10 text-white">
            <img
                className="rounded-lg cursor-pointer text-gray-300 object-cover hover:grayscale transition duration-300 ease-in-out"
                src={pic}
                alt={name}
                width={400}
                height={400}
            />
            <div className="flex flex-col gap-6 mt-auto">
                <p className="text-xs text-[#D2B57A] font-semibold cursor-pointer">{name}</p>
                <p className="text-xs text-gray-300">{desc}</p>
                <p className="text-green-400 font-bold">{price}</p>
            </div>
        </div>


    );
};

export default Pizza;
