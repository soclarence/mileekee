import Logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <footer className=" w-full mt-32 h-96 xl:h-72 sm:flex sm:flex-col sm:items-center sm:justify-center 2xl:bg-mPurple">
        <div className="bg-mPurple flex w-full h-full flex-wrap-reverse p-10 items-center xl:justify-center 2xl:max-w-[1536px]">
            <div className="w-[60%] sm:w-[50%] mt-10 xl:mt-0">
                <img src={Logo} alt="" />
            </div>
            <div className="text-white flex flex-wrap xl:space-y-0 xl:space-x-9 space-y-8 xl:w-[35%] xl:justify-between">
                <div className="w-[100%] sm:w-[60%] xl:w-[40%]">
                    <h1>Get in touch</h1>
                    <p>hello@mileekee.com</p>
                    <p>+222 22 222 222</p>
                </div>
                <div className="w-[100%] sm:w-[60%] xl:w-[40%] ">
                    <h1>Legal</h1>
                    <p>Terms of service</p>
                    <p>Privacy policy</p>
                </div>
            </div>
        </div>
        <div className="bg-mBlue h-20 flex items-center justify-center w-full">
            <p className="text-white">© Mileekee Limited 2022</p>
        </div>
    </footer>
  )
}
