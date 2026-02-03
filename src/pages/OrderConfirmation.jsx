import { Link } from "react-router-dom"
import { FaRegCircleCheck } from "react-icons/fa6";


const OrderConfirmation = ({ deliveryDetails }) => {
    return (
        <>
            <div className='container mx-auto p-10 max-md:p-5'>
                <div className='flex flex-col items-center text-center justify-center w-1/2 max-sm:w-full max-lg:w-10/12 mx-auto border border-sm border-[#bbd3e8] bg-[#eaf5ff]  p-10 rounded-2xl shadow-2xl'>
                    <FaRegCircleCheck className="text-6xl text-[#F17422]" />
                    <h2 className="text-4xl font-bold py-5 text-[#053761]">Order Confirmed!</h2>
                    <p>Your transaction is complete. A confirmation email has been sent to your account.</p>
                    <div className="p-4 mt-5 bg-[#053761]/10 border border-[#a3bbcf] rounded-xl font-mono text-left inline-block text-[#053761]  mb-4">
                        <p className="font-bold text-lg mb-1">
                            {deliveryDetails?.name}
                        </p>
                        <p>{deliveryDetails?.address}</p>
                        <p>{deliveryDetails?.city} {deliveryDetails?.pincode}</p>
                    </div>
                    <Link to='/' className='bg-[#053761] py-2 mt-3 text-center w-full rounded-full text-[#FFFFFF] cursor-pointer uppercase font-semibold hover:bg-[#F17422] hover:text-[#FFFFFF] hover:font-bold transition-all ease-in delay-50 h-11 flex justify-center gap-2 items-center'>Continue Shoping</Link>
                </div>
            </div>
        </>
    )
}

export default OrderConfirmation
