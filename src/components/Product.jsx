import Features from "../Features"
import Photo from "../assets/mileekeeguy.png"
import Money from "../assets/money.svg"
import Transaction from "../assets/transactionP.svg"
import Wallet from "../assets/wallet.svg"
import Secure from "../assets/secureP.svg"
import DownloadButton from "./buttons/DownloadButton"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Product() {

    useEffect(()=>{
        Aos.init({
            offset: 100,
            duration: 1000,
            delay: 200
        })
    },[])

  return (
    <div id="Product" className="max-w-[1536px] flex flex-col items-center space-y-8 xl:flex-row xl:space-x-20 xl:px-32 py-48">
        <section className="w-[85%] overflow-hidden xl:px-0 xl:w-[35%] space-y-16">
            <div className="space-y-4 text-center xl:text-left">
                <h2 className="font-bold text-2xl xl:text-3xl">Built for the next generation of businesses and individuals</h2>
                <p>Mileekee improves in-person payment through contactless offline payment technology.</p>
            </div>
            <img className="xl:block hidden" data-aos="fade" src={Photo} alt="" />
        </section>
        <section className="w-[80%] xl:w-[65%] h-fit grid gap-4 xl:grid-cols-2">
            <Features
                icon={Money}
                color="bg-mPurple"
                background="bg-litePurple"
                header="Deposit and withdrawal"
                body = "Instant withdrawals and transfers of funds are possible. Mileekee users can deposit and withdraw money quickly and easily without being restricted by a network." />
            <div className="row-span-3 grid grid-row-2 gap-4">
            <Features
                icon={Transaction} 
                color="bg-mGreen"
                background="bg-liteGreen"
                header="Transaction Settlement
                in an Instant"
                body = "Instantly receive money into your wallet and provide real-time transfer options to your clients. Say no to awaiting day's-end reconciliation."/>
            <Features
                icon={Secure}
                color="bg-mBlue2"
                background="bg-liteBlue"
                header="Secure and Trustworthy
                Service"
                body = "Mileekee is a mobile payment solution with a CBN license. We provide low fares and a simple method for performing a variety of online and offline payment transactions."/>
            </div>
            <Features
                icon={Wallet} 
                color="bg-mOrange"
                background="bg-liteOrange"
                header="Offline wallet"
                body = "An offline wallet, faster and easier than using cash or cards to make and receive payments"/>
            <div className="space-y-3 hidden xl:block">
                <h5 className="font-bold text-2xl">Let’s get you<br/> started</h5>
                <DownloadButton />
            </div>
        </section>
    </div>
  )
}
