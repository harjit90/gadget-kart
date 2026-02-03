import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'

const ProductCard = ({ product }) => {
    const { addToCart } = useCartContext();
    return (
        <>
            <div className='relative shadow-2xl rounded-xl bg-white'>

                <div className='relative h-60 flex justify-center items-center bg-[#fffff1]'>
                    <Link to={`/product/${product.id}`}><img src={product.productImg} alt={product.title} className='rounded-t-xl overflow-hidden object-contain aspect-square size-50 ' /></Link>
                </div>

                <div className='p-4'>
                    <Link to={`/product/${product.id}`} className='text-lg font-semibold capitalize line-clamp-1'>{product.title}</Link>
                    <p className='my-2 line-clamp-2'>{product.desc}</p>
                    <h3 className='font-bold'>₹ {product.price}</h3>
                    <span className='py-1 inline-block absolute  bg-[#F17422] p-2 text-center text-white right-0 bottom-51 text-sm'>{product.category}</span>
                    <button onClick={() => addToCart(product)} className='bg-[#053761] py-2 mt-3 text-center w-full rounded-lg text-[#FFFFFF] cursor-pointer uppercase font-semibold hover:bg-[#F17422] hover:text-[#FFFFFF] hover:font-bold transition-all ease-in delay-50 hover:border h-11'>{product.btnText}</button>
                </div>

            </div>
        </>
    )
}

export default ProductCard
