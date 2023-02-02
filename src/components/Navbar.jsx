import Logo from "../assets/MileekeeText.svg"
import Arrow from "../assets/arrow.svg"
import MobilePopup from "./MobilePopup"
import { useState } from "react"
// import { Link } from "react-router-dom"
import { Link } from "react-scroll"


export default function Navbar() {
    const [trigger, handleTrigger] = useState("h-0")
    
    function handleClick() {
        handleTrigger("h-screen")
    }

    function closeTrigger() {
        handleTrigger("h-0")
    }


  return (
    <nav className="block overflow-hidden h-fit w-screen mb-[-10%]">
        <div className="fixed top-0 right-0 px-32 left-0 z-50 bg-mBlue bg-opacity-95 py-4 h-fit w-[100%] flex items-center flex-col justify-center">
            <div className="flex flex-row  items-center justify-between font-medium w-screen px-16 2xl:max-w-[1536px]">
            <div className="hidden xl:flex flex-row w-[45%] justify-between">
                <img
                className="w-28" 
                src={Logo} alt="" />

                <ul className="hidden xl:flex flex-row space-x-12 text-white">
                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>
                            Home
                        </Link>
                    </li>

                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <Link to="Product" spy={true} smooth={true} offset={50} duration={500}>
                            Product
                        </Link>
                    </li>

                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <Link to="Download" spy={true} smooth={true} offset={-100} duration={500}>
                            Download
                        </Link>
                    </li>
                    
                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <a href="mailto:contact@mileekee.com">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="hidden xl:flex flex-row space-x-5">
                <button className="text-white border w-fit  border-white h-11 px-6 rounded-md">
                Sign In
                </button>
                <button className="text-white cursor-pointer bg-mPurple flex items-center justify-center w-56 h-11 space-x-3 rounded-md font-medium">
                    <p>Create Account</p>
                    <img src={Arrow} alt="" />
                </button>
            </div>
            
            {/* mobile menu */}
            <div className="xl:hidden flex flex-row w-full items-center space-x-32 justify-center sm:justify-between" onClick={handleClick}>
                <img
                    className="w-28" 
                    src={Logo} alt="" />
                <div className="flex flex-col space-y-2 cursor-pointer">
                    <div className="w-8 h-[0.1rem] bg-white"></div>
                    <div className="w-8 h-[0.1rem] bg-white"></div>
                </div>
                
            </div>
            </div>
        </div>
        {/* popup */}
        <MobilePopup 
            trigger={trigger}
            onClick={closeTrigger}
            click={closeTrigger}
            />
    </nav>
  )
}
