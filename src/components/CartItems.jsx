import { useCartContext } from "../context/CartContext";
import { IoIosCloseCircle } from "react-icons/io";

const CartItems = ({ item }) => {

    const { addToCart, removeFromCart } = useCartContext();

    const increaseQ = () => addToCart(item);
    const descreaseQ = () => removeFromCart(item.id);

    return (
        <div className="flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 mb-4 bg-[#F2F6FF] rounded-xl border border-[#d0daf0] transition duration-300"
        >
            <div className="flex items-center space-x-4 w-full sm:w-auto max-sm:pb-3">
                <img
                    src={item.productImg}
                    alt={item.title}
                    className="w-24 h-24 object-contain p-2 rounded-lg border-2 border-[#d1dbf0]"
                />
                <div className="grow">
                    <h3 className="text-xl font-bold line-clamp-1">
                        {item.title}
                    </h3>

                    <p className="text-lg text-[#053761] font-bold">
                        ₹ {item.price/*.toFixed(2)*/}
                    </p>
                </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
                <div
                    className="flex items-center border border-[#2b4a97] rounded-full 
        overflow-hidden shadow-lg"
                >
                    <button
                        onClick={descreaseQ}
                        className=" p-2 text-gray-400 bg-[#053761] hover:bg-[#052744]
           transition duration-150 w-8 h-8 flex items-center justify-center"
                    >
                        -
                    </button>
                    <span className="px-3 text-base font-bold text-white bg-[#053761]">
                        {item.quantity}
                    </span>
                    <button
                        onClick={increaseQ}
                        className=" p-2 text-gray-400 bg-[#053761] hover:bg-[#052744]
           transition duration-150 w-8 h-8 flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
                <p className="font-extrabold text-[#053761] w-24 text-right hidden md:block">
                    ₹ {(item.price * item.quantity)/*.toFixed(2)*/}
                </p>
                <button onClick={() => removeFromCart(item.id, true)}
                    className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 shadow-md"
                >
                    <IoIosCloseCircle className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
};

export default CartItems;