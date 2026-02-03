import { useCartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { FaAngleLeft, FaLock, FaListAlt } from "react-icons/fa";
import CartItems from "../components/CartItems";

const Cart = () => {

    const { cart, cartTotal, cartCount } = useCartContext();

    return (
        <>
            <div className='container mx-auto p-10 max-xl:p-5'>
                <div className='flex flex-row gap-1 font-medium items-center text-[#053761] cursor-pointer pb-5'>
                    <FaAngleLeft />
                    <Link to={'/'}><button className='cursor-pointer'>Back to Store</button></Link >
                </div>

                <h2 className='text-2xl font-bold pb-4'>Shopping Cart ({cartCount})</h2>

                <div className='grid grid-cols-4 gap-6 max-xl:gap-4'>
                    <div className='col-span-3 max-lg:col-span-4  w-full'>
                        {
                            cart.map((item) => {
                                return (
                                    <CartItems key={item.id} item={item} />
                                )
                            })
                        }
                    </div>
                    <div className='p-5 bg-[#F2F6FF] rounded-xl border border-[#d0daf0] max-lg:col-span-4 max-h-80 max-md:h-auto sticky top-30 z-9'>
                        <h2 className='text-2xl font-bold pb-2 border-b border-black/7 flex items-center gap-2'><FaListAlt className='text-[#053761]' /> Order Details</h2>
                        <div className='border-b border-[#d0daf0] w-full flex flex-col py-3'>
                            <span className='py-1 flex justify-between'>
                                <p>Subtotal:</p>
                                <p><strong>{cartTotal.toFixed(2)}</strong></p>
                            </span>
                            <span className='py-1 flex justify-between'>
                                <p>Shipping (Express):</p>
                                <p><strong className='text-green-700'>Free</strong></p>
                            </span>
                        </div>
                        <div className='py-2 font-black flex justify-between'><span>Estimated Total:</span><span className='text-[#053761]'>{cartTotal.toFixed(2)}</span></div>

                        <Link to={'/Checkout'} className='bg-[#053761] py-2 mt-3 text-center w-full rounded-full text-[#FFFFFF] cursor-pointer uppercase font-semibold hover:bg-[#F17422] hover:text-[#FFFFFF] hover:font-bold transition-all ease-in delay-50 h-11 flex justify-center gap-2 items-center'><FaLock /> Proceed Securely</Link>

                        <p className='text-sm text-black/50 text-center py-2'>All transactions are encrypted and secure.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
