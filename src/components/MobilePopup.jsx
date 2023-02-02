import { IoMdClose } from "react-icons/io";
import Arrow from "../assets/arrow.svg"
import { Link } from "react-scroll"

export default function MobilePopup(props) {
  return (
        <div className={`${props.trigger} transition-all ease-in-out overflow-hidden duration-500 delay-75 fixed right-0 left-0 h-screen w-screen z-[1000] bg-mBlue xl:hidden block`}>
            <div className="w-screen flex flex-col justify-between h-full p-10">
                <div onClick={props.onClick} className="text-white w-full flex items-end justify-end">
                    <IoMdClose size={25} />
                </div>
                <div className="flex space-x-5">
                    <button onClick={props.click} className="text-white text-xs border border-white py-3 px-4 rounded-md font-medium cursor-pointer">
                        Sign In
                    </button>
                    <button onClick={props.click} className="text-white text-xs bg-mPurple py-3 px-4 rounded-md cursor-pointer flex items-center justify-center space-x-3 font-medium">
                        <p>Create Account</p>
                        <img src={Arrow} alt="" />
                    </button>
                </div>
                <ul className="text-white text-xl font-semibold space-y-3 h-[50%]">
                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <Link onClick={props.click} to="Hero" spy={true} smooth={true} offset={50} duration={1000}>
                            Home
                        </Link>
                    </li>

                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <Link onClick={props.click} to="Product" spy={true} smooth={true} offset={50} duration={1000}>
                            Product
                        </Link>
                    </li>

                    <li className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <Link onClick={props.click} to="Download" spy={true} smooth={true} offset={-100} duration={1000}>
                            Download
                        </Link>
                    </li>
                    <li onClick={props.click} className="hover:text-mPurple transition-colors ease-in cursor-pointer">
                        <a href="mailto:contact@mileekee.com">Contact Us</a>
                    </li>
                </ul>
                <ul className="text-white text-sm space-y-2">
                    <li onClick={props.click} className="hover:text-mPurple transition-colors ease-in cursor-pointer">Privacy Policy</li>
                    <li onClick={props.click} className="hover:text-mPurple transition-colors ease-in cursor-pointer">Terms and Conditions</li>
                </ul>
            </div>
        </div>
        );
}
