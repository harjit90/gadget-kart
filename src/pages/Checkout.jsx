import { useState } from 'react'
import { FaListAlt } from "react-icons/fa";
import { useCartContext } from "../context/CartContext"
import OrderConfirmation from './OrderConfirmation'


const Checkout = () => {

    const { cartTotal, clearCart, cart } = useCartContext();

    const [deliveryDetails, setDeliveryDetails] = useState({
        name: "",
        address: "",
        city: "",
        pincode: ""
    })

    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDeliveryDetails(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        clearCart();
        setIsConfirmed(true)
    }

    if (isConfirmed) return <OrderConfirmation deliveryDetails={deliveryDetails} />

    return (
        <>
            <div className='container mx-auto p-10 max-md:p-5'>
                <h2 className='text-2xl font-bold pb-4'>Finalize Order</h2>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='border border-sm border-[#bbd3e8] bg-[#eaf5ff]  col-span-2 max-lg:col-span-3 gap-6 p-10 max-lg:p-5 rounded-2xl shadow-2xl'>
                        <h2 className='text-2xl pb-3 font-semibold text-[#F17422]'>Shipping Details</h2>
                        <form onSubmit={handleSubmit}>
                            {
                                Object.keys(deliveryDetails).map((key) => (
                                    <div key={key} className='capitalize pb-4'>
                                        <label htmlFor={key}>{key}</label>
                                        <input type={key === 'pincode' ? "number" : "text"} id={key} name={key} value={deliveryDetails[key]} onChange={handleChange} required className='mt-1 block w-full px-5 py-3 border border-[#bcd0e2] rounded-xl shadow-inner bg-[#dbebf9]' />

                                    </div>
                                ))
                            }
                            <div>
                                <button type='submit' className='bg-[#053761] py-2 mt-3 text-center w-full rounded-full text-[#FFFFFF] cursor-pointer uppercase font-semibold hover:bg-[#F17422] hover:text-[#FFFFFF] hover:font-bold transition-all ease-in delay-50 h-11 flex justify-center gap-2 items-center'>Pay and Confirm Order ({cartTotal.toFixed(2)})</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-span-1 max-lg:col-span-3">
                        <div className='p-5 rounded-2xl shadow-2xl border border-[#d0daf0] bg-[#eaf5ff]  sticky top-30 z-9'>
                            <h2 className='text-2xl font-bold pb-2 mb-4 border-b border-black/7 flex items-center gap-2'><FaListAlt className='text-[#053761]' /> Summary</h2>
                            <div className=''>
                                {
                                    cart.map((item) => (
                                        <div key={item.id} className='flex justify-between border-b border-[#bbd3e8] p-2 text-sm'>
                                            <span>{item.title}</span>
                                            <span>{(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))
                                }
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
                                <div className='py-2 font-black flex justify-between pt-4 text-2xl bold'><span>Total Due:</span><span className='text-[#053761]'>{cartTotal.toFixed(2)}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
