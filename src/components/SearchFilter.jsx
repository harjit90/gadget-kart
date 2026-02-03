import { Link } from "react-router-dom"

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
    return (
        <>
            <input
                type='text'
                placeholder='Search product by name or feature...'
                className='border border-white/25 py-1.5 px-4 rounded-sm w-100  text-white/50 max-lg:bg-[#dbe1f0] max-lg:w-full max-lg:border max-lg:border-[#91a0ad] max-lg:text-black focus:outline-none'
                aria-label="Search Products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </>
    )
}

export default SearchFilter
