import PhoneHandM from "../assets/phonehandM.png"
import PhoneHand from "../assets/phonehand.png"
import DownloadButton from "./buttons/DownloadButton"
import Arrow from "../assets/arrow.svg"

export default function DownloadCTA() {
  return (
    <div id="Download" className="w-screen flex items-center justify-center max-w-[1536px]">
        <section className="bg-mPurple w-[95%] lg:w-[80%] flex flex-col sm:flex-row items-center justify-center overflow-hidden rounded-3xl px-4 sm:pt-4 pt-20">
            <div className="flex flex-col md:w-[100%] items-center justify-center sm:items-start sm:pl-5 md:pl-10 space-y-10">
                <h1 className="text-3xl sm:text-2xl sm:text-left lg:text-4xl text-white text-center font-bold">In-person transactions should be easier</h1>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-5 lg:space-y-0 space-y-5">
                    <DownloadButton />
                    <button className="text-white cursor-pointer bg-mBlue flex items-center justify-center w-56 h-14 space-x-3 rounded-md font-medium">
                        <p>Create Account</p>
                        <img src={Arrow} alt="" />
                    </button>
                </div>
            </div>
            <div className="mt-20 xl:mt-0 lg:w-[90%]">
                <img className="xl:hidden" src={PhoneHandM} alt="" />
                <img className="xl:block hidden w-full " src={PhoneHand} alt="" />
            </div>
        </section>
    </div>
  )
}
