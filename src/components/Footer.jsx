import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaTwitter, FaLinkedinIn, FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress, SiPaytm } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className='pt-10 bg-[#053761] px-5'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2'>
            <div className='max-md:pb-10'>
              <span className='text-xl font-bold uppercase inline-block w-full pb-2 text-white'>Let Us Help You</span>
              <ul className='text-[#a3c4e0]'>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Order Tracking</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Bulk Orders</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Store Locator</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Gift Card</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Warranty Policy</Link></li>
              </ul>
            </div>
            <div className='max-md:pb-10'>
              <span className='text-xl font-bold uppercase inline-block w-full pb-2 text-white'>Support</span>
              <ul className='text-[#a3c4e0]'>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Customer Service</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>How To Order</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Billing & Payments</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Shipping & Delivery</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Return & Exchanges</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>FAQs</Link></li>
              </ul>
            </div>
            <div className='max-md:pb-10'>
              <span className='text-xl font-bold uppercase inline-block w-full pb-2 text-white'>Company</span>
              <ul className='text-[#a3c4e0]'>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Contact Us</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>In The News</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Investor Relations</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Careers</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Terms Of Use</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className='max-md:pb-10'>
              <span className='text-xl font-bold uppercase inline-block w-full pb-2 text-white'>About Us</span>
              <ul className='text-[#a3c4e0]'>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>25 years of My Store</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Philosophy</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Organic Certification</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>About Us</Link></li>
                <li className='hover:text-[#F17422] transition-all ease-in delay-150'><Link>Blog</Link></li>
              </ul>
            </div>
          </div>
          <div className='grid grid-cols-2 max-md:grid-cols-1 py-10 max-md:pt-0'>
            <div className='max-md:pb-10'>
              <span className='text-[#a3c4e0] pb-3 inline-block'>Keep In Touch</span>
              <ul className='flex flex-row gap-6'>
                <li className='text-white text-xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaFacebookF /></Link></li>
                <li className='text-white text-xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaInstagram /></Link></li>
                <li className='text-white text-xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaYoutube /></Link></li>
                <li className='text-white text-xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaPinterestP /></Link></li>
                <li className='text-white text-xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaTwitter /></Link></li>
                <li className='text-white text-xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaLinkedinIn /></Link></li>
              </ul>
            </div>
            <div className=''>
              <span className='text-[#a3c4e0] pb-3 inline-block'>100% Secure and Trusted Payment</span>
              <ul className='flex flex-row gap-6'>
                <li className='text-white text-2xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaCcVisa /></Link></li>
                <li className='text-white text-2xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><FaCcMastercard /></Link></li>
                <li className='text-white text-2xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><SiPaytm /></Link></li>
                <li className='text-white text-2xl hover:text-[#F17422] transition-all ease-in delay-100'><Link><SiAmericanexpress /></Link></li>
              </ul>
            </div>
          </div>
          <p className='text-[#a3c4e0] py-6 border-t border-white/15'>© Copyright 2026 <Link className='hover:text-[#F17422] transition-all ease-in delay-100'>GadgetKart</Link>. All rights reserved.</p>
        </div>
      </div >
    </>
  )
}

export default Footer
