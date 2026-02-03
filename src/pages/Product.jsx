import ProductCard from '../components/ProductCard'
import ProductCategories from '../components/ProductCategories'
import { useCartContext } from '../context/CartContext'
import { useState } from "react";
import SearchFilter from '../components/SearchFilter';

const Product = () => {

  const { productItems } = useCartContext();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filterProducts = productItems.filter((product) => {
    const matchesSearch = product.title?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
      product.desc?.toLowerCase().includes(searchTerm?.toLowerCase())

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  })

  return (
    <>
      <div className='px-5 fixed right-60 z-10 top-6 max-lg:right-auto max-lg:sticky max-lg:top-17 max-sm:top-14 max-lg:drop-shadow-sm max-lg:bg-white max-lg:py-2' >
        <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <ProductCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

      <div className='bg-[#f2f6ff] py-9 max-md:px-5'>
        <h2 className='container mx-auto text-2xl font-semibold pb-4'>Featured Products ({selectedCategory === "All" ? productItems.length : filterProducts.length} items)</h2>
        <div className='container mx-auto grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 gap-6'>
          {
            filterProducts.map((product, index) => {
              return (
                <ProductCard key={product.id} product={product} className='relative shadow-2xl rounded-xl bg-white' />
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Product
