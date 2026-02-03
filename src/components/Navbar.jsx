import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5";
import { useCartContext } from "../context/CartContext";
import logo from "../assets/logo.png";


const Navbar = () => {

  const { cartCount } = useCartContext();

  return (
    <>
      <div className='bg-[#053761] py-3 px-5 sticky top-0 z-10'>
        <header className='container mx-auto flex flex-row justify-between'>

          <Link to='/' className='w-55 max-lg:w-40 max-sm:w-30'><img src={logo} alt='Logo Image' /></Link>

          <nav className='flex flex-row gap-5 items-center'>
            <Link to='/' className='hover:text-[#F17422] transition-all ease-in delay-150 text-white'>
              Home
            </Link>
            <Link to='/' className='hover:text-[#F17422] transition-all ease-in delay-150 text-white'>
              Products
            </Link>

            {/* <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}

            <Link to='/cart' className='text-2xl text-[#FFFFFF] relative'><IoCartOutline /> {cartCount > 0 && (<span className='absolute bottom-4 -right-2 font-bold text-sm text-[#FFFFFF] bg-[#F17422] text-center flex justify-center items-center w-4 h-4 rounded-full '>
              {cartCount}</span>)}
            </Link>
          </nav>
        </header>
      </div>
    </>
  )
}

export default Navbar
