// import React from 'react'
import phone from "../assets/mileekeephone.png"
import Transaction from "../assets/transaction.svg"
import Secure from "../assets/secure.svg"
import IconButton from "./buttons/IconButton"
import DownloadButton from "./buttons/DownloadButton"

export default function Hero() {
  return (
    <div id="Hero" className="bg-mBlue h-fit w-screen overflow-hidden flex flex-col items-center">
        <div className="max-w-[1536px] mt-60 xl:mt-80 2xl:mt-[15%] flex flex-col items-center justify-center">
            <section>
                <h1 className="text-white hidden md:block text-center text-[4rem] font-bold leading-[60pt] mb-10">Contactless offline <br/> payment solution</h1>

                <h1 className="text-white md:hidden text-center text-[2.5rem] font-bold leading-[40pt] mb-5">Contactless<br/> offline payment<br/> solution</h1>
            </section>
            <section className="hidden xl:flex text-white space-x-20 justify-center items-center font-medium">
                <div className="flex justify-center items-center space-x-5">
                    <div className="bg-liteBlue flex items-center justify-center h-14 w-14 rounded-lg">
                        <img className="h-[40%]" src={Transaction} alt="" />
                    </div>
                    <p>Transaction Settlement   <br /> in an Instant</p>
                </div>
                <div className="flex justify-center items-center space-x-5">
                    <div className="bg-liteBlue flex items-center justify-center h-14 w-14 rounded-lg">
                        <img className="h-[40%]" src={Secure} alt="" />
                    </div>
                    <p>Secure and Trustworthy   <br /> Service</p>
                </div>
                <div className="w-72 flex items-center space-x-4">
                    <div className="bg-liteBlue h-10 w-2 rounded-full"></div>
                    <p>Secure and convenient digital offline solution for in-person transactions and payments.</p>
                </div>
            </section>
            {/* Description for mobile */}
            <div className="xl:hidden w-72 flex items-center text-white text-center font-medium">
                    <p>Secure and convenient digital offline solution for in-person transactions and payments.</p>
            </div>
            <section className="flex flex-col md:flex-row md:justify-center md:items-center md:space-y-0 space-y-5 md:space-x-5 mt-12 lg:mt-20 mb-16">
                <DownloadButton />
                <IconButton />
            </section>
            <section className="w-full flex justify-center items-center">
                <img 
            className="lg:w-[60%] w-full"
            src={phone} alt="" />
            </section>
        </div>
    </div>
  )
}
