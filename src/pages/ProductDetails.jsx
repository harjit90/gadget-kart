import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaAngleLeft, FaRegSmile, FaTags, FaCheckCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from '../context/CartContext';

const ProductDetails = () => {
    // console.log(useParams())

    const { id } = useParams();

    const [product, setProduct] = useState();

    const { addToCart, productItems } = useCartContext();

    useEffect(() => {
        setProduct(productItems.find((data) => data.id == id));
    }, [id]);

    // console.log(product)

    return (
        <>
            <div className='max-md:mx-5'>
                <div className='container mx-auto p-10 max-sm:p-7 my-10  shadow-2xl rounded-3xl bg-[#F2F6FF] border border-black/7'>
                    <div className='flex flex-row gap-1 font-medium items-center text-[#053761] cursor-pointer pb-5 hover:text-[#F17422] transition-all ease-in delay-40'>
                        <FaAngleLeft />
                        <Link to={'/'}><button className='cursor-pointer'>Back to All Products</button></Link >
                    </div>

                    <div className='grid grid-cols-2 gap-8 max-sm:grid-cols-1' >
                        <div className='w-full p-10 max-lg:p-5 max-sm:h-auto max-md:h-60 max-lg:h-75 h-100 text-center rounded-xl flex items-center justify-center bg-white border border-[#d1dbf0]'><img src={product?.productImg} alt={product?.title} className='object-contain aspect-video' /></div>

                        <div>
                            <h2 className='text-3xl font-black capitalize'>{product?.title}</h2>
                            <h3 className='font-extrabold text-2xl py-2 text-[#053761]'>₹ {product?.price}</h3>
                            <h4 className='font-bold border-b pb-1 border-black/20 flex flex-row items-center max-md:pt-5 gap-2'>
                                <FaTags className='text-[#053761]' />
                                <span>Product Overview</span>
                            </h4>
                            {/* <p className='mt-2'>The Ultimate smart phone experience with a 108MP camera and all-day battery life.</p> */}
                            <p className='my-2'>{product?.desc}</p>
                            <ul className='p-3 border border-black/15 bg-white rounded-xl mt-3 mb-4'>
                                <li className='flex flex-row items-center gap-2'><FaCheckCircle className='text-[#053761]' /> High Quality, Professional Grade Materials</li>
                                <li className='flex flex-row items-center gap-2'><FaCheckCircle className='text-[#053761]' /> Comprehensive 1-Year Manufacturer Warranty</li>
                                <li className='flex flex-row items-center gap-2'><FaCheckCircle className='text-[#053761]' /> Immediate Shiping for In-Stock itmes</li>
                            </ul>
                            <Link to='/cart'>
                                <button onClick={() => addToCart(product)} className='bg-[#053761] py-2 mt-3 text-center w-full rounded-lg text-[#FFFFFF] cursor-pointer uppercase font-semibold hover:bg-[#F17422] hover:font-bold transition-all ease-in delay-30 h-11 flex justify-center items-center gap-2'><IoCartOutline className='text-xl' /> {product?.btnText}</button>
                            </Link>
                            <Link to={'/'}>
                                <button className='border-2 border-[#F17422] py-2 mt-3 text-center w-full rounded-lg text-[#F17422] cursor-pointer uppercase font-semibold hover:bg-[#F17422] hover:text-white hover:font-bold transition-all ease-in delay-30 h-11 flex justify-center items-center gap-2'><FaRegSmile className='text-xl' /> Keep Shoping</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
