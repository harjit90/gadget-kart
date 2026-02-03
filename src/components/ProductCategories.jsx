import { products } from '../data';

const availableCategories = ["All", ...new Set(products.map((p) => p.category))];

const ProductCategories = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <>
            <div className='grid grid-cols-9 gap-3 p-5 place-items-center max-lg:grid-cols-none max-lg:flex max-lg:flex-row max-lg:flex-wrap max-lg:justify-center max-lg:w-auto max-lg:gap-1.5'>
                {
                    availableCategories.map((category, index) => {
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`transition-all ease-in size-30 border   rounded-full flex justify-center items-center cursor-pointer max-lg:size-auto max-lg:px-3 ${selectedCategory === category
                                    ? 'border border-[#F17422] text-[#F17422] font-medium'
                                    : 'border border-black/20 text-black'} `}>
                                {category}
                            </button>
                        )
                    })
                }


            </div >
        </>
    )
}

export default ProductCategories
